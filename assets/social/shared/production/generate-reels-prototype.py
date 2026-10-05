import os
import cv2
import numpy as np

PROD_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(PROD_DIR, '..', '..', '..', '..'))
FRAMES_DIR = os.path.join(PROD_DIR, 'reels-frames')
REELS_OUT_DIR = os.path.abspath(os.path.join(ROOT_DIR, 'assets', 'social', 'reels'))
OUTPUT_MP4 = os.path.join(REELS_OUT_DIR, 'bplus-workday-reels-prototype.mp4')

os.makedirs(REELS_OUT_DIR, exist_ok=True)

WIDTH, HEIGHT = 1080, 1920
FPS = 24
TOTAL_DURATION = 28 # seconds
TOTAL_FRAMES = TOTAL_DURATION * FPS # 672 frames

# Scene timings in seconds:
# S1: 0-5s (5s = 120 frames)
# S2: 5-11s (6s = 144 frames)
# S3: 11-17s (6s = 144 frames)
# S4: 17-22s (5s = 120 frames)
# S5: 22-25.5s (3.5s = 84 frames)
# S6: 25.5-28s (2.5s = 60 frames)
# Total = 120 + 144 + 144 + 120 + 84 + 60 = 672 frames

SCENE_DURATIONS = [120, 144, 144, 120, 84, 60]
TRANSITION_FRAMES = 18

print(f"Loading scene images from {FRAMES_DIR}...")
scenes = []
for i in range(1, 7):
    p = os.path.join(FRAMES_DIR, f'scene-{i}.png')
    img = cv2.imread(p)
    if img is None:
        raise FileNotFoundError(f"Cannot load image {p}")
    if img.shape[0] != HEIGHT or img.shape[1] != WIDTH:
        img = cv2.resize(img, (WIDTH, HEIGHT), interpolation=cv2.INTER_LANCZOS4)
    scenes.append(img)

fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter(OUTPUT_MP4, fourcc, FPS, (WIDTH, HEIGHT))

if not out.isOpened():
    raise RuntimeError(f"Could not open VideoWriter for {OUTPUT_MP4}")

print("Rendering video frames with slow zoom and cross-dissolve transitions...")

def apply_slow_zoom(img, progress, max_zoom=1.025):
    # progress in [0, 1]
    zoom = 1.0 + (max_zoom - 1.0) * progress
    new_w = int(WIDTH * zoom)
    new_h = int(HEIGHT * zoom)
    resized = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_LINEAR)
    x1 = (new_w - WIDTH) // 2
    y1 = (new_h - HEIGHT) // 2
    return resized[y1:y1 + HEIGHT, x1:x1 + WIDTH]

for s_idx, s_len in enumerate(SCENE_DURATIONS):
    curr_scene = scenes[s_idx]
    next_scene = scenes[s_idx + 1] if s_idx + 1 < len(scenes) else None

    for f in range(s_len):
        progress = f / float(s_len)
        frame_curr = apply_slow_zoom(curr_scene, progress)

        # Cross dissolve into next scene near the end
        if next_scene is not None and f >= (s_len - TRANSITION_FRAMES):
            t_progress = (f - (s_len - TRANSITION_FRAMES)) / float(TRANSITION_FRAMES)
            frame_next = apply_slow_zoom(next_scene, 0.0) # start of next scene
            blended = cv2.addWeighted(frame_curr, 1.0 - t_progress, frame_next, t_progress, 0)
            out.write(blended)
        else:
            out.write(frame_curr)

out.release()

file_size = os.path.getsize(OUTPUT_MP4)
print(f"SUCCESS: Created {OUTPUT_MP4}")
print(f"Stats: {WIDTH}x{HEIGHT}, {FPS} FPS, {TOTAL_DURATION}s duration, {file_size} bytes ({file_size / (1024*1024):.2f} MB)")
