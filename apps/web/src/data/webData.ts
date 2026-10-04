/**
 * B+ Wellness Café — Web Demo Data & Content Source
 * [DEMO DATA — NON-PRODUCTION — TBD EMPLOYER DATA]
 * Phase 3 Hardening — Canonical Category Contract & Safe Claims
 */

export interface WebCategory {
  id: string;
  slug: string;
  name: string;
}

export interface SensoryProfile {
  sweetness: number; // 1-5
  sweetnessLabel: string;
  intensity: number; // 1-5
  intensityLabel: string;
  acidity: number; // 1-5
  acidityLabel: string;
}

export interface WebProduct {
  id: string;
  categoryId: string;
  categorySlug: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  priceFormatted: string;
  demoPriceNumber: number;
  tags: string[];
  sensory: SensoryProfile;
  ingredients: string[];
  allergens: string[];
  nutritionSample: {
    calories: string;
    protein: string;
    sugar: string;
    fat: string;
  };
}

export interface WorkdayMoment {
  time: string;
  title: string;
  headline: string;
  description: string;
  recipeCue: string;
  categorySlug: string;
  productId: string;
}

export interface AiScenario {
  intentId: string;
  intentLabel: string;
  recommendedProductId: string;
  productName: string;
  matchScore: number;
  editorialNote: string;
}

/**
 * Canonical Website Categories (Frozen Source of Truth)
 * Total: 8 categories (Tümü + 7 primary website categories)
 */
export const WEB_CATEGORIES: WebCategory[] = [
  { id: 'cat_all', slug: 'all', name: 'Tümü' },
  { id: 'cat_coffee', slug: 'coffee', name: 'Kahve' },
  { id: 'cat_matcha', slug: 'matcha', name: 'Matcha' },
  { id: 'cat_tea', slug: 'tea', name: 'Bitkisel Çay' },
  { id: 'cat_smoothies', slug: 'smoothies', name: 'Smoothie' },
  { id: 'cat_juices', slug: 'juices', name: 'Taze Sıkım / Detox*' },
  { id: 'cat_snacks', slug: 'snacks', name: 'Sağlıklı Atıştırmalıklar' },
  { id: 'cat_homemade', slug: 'homemade', name: 'Ev Yapımı' },
];

/**
 * 12 Demo Products mapped to exactly one primary canonical category
 */
export const WEB_PRODUCTS: WebProduct[] = [
  {
    id: 'prod_1',
    categoryId: 'cat_coffee',
    categorySlug: 'coffee',
    name: "Lion's Mane Cold Brew",
    slug: 'lions-mane-cold-brew',
    shortDescription: '16 saat soğuk demlenmiş tek kökenli çekirdek, yulaf sütü ve botanik dokunuş.',
    description: 'Etiyopya Yirgacheffe çekirdeklerinin soğuk suyla 16 saatlik yavaş demlemesiyle elde edilen ipeksi gövde; organik yulaf sütü ve 500mg Lion\'s Mane özü ile buluşarak gün başlangıcına dengeli bir mola sunar.',
    imageUrl: '/images/demo/hero-coldbrew.webp',
    priceFormatted: '₺145.00 [DEMO]',
    demoPriceNumber: 145,
    tags: ['Bitkisel Süt', 'Rafine Şekersiz', 'Soğuk'],
    sensory: {
      sweetness: 1,
      sweetnessLabel: 'Doğal / Şurupsuz',
      intensity: 4,
      intensityLabel: 'Kremamsı Yulaf Gövdesi',
      acidity: 2,
      acidityLabel: 'Yumuşak Asidite Profili',
    },
    ingredients: [
      '16 Saat Soğuk Demlenmiş Tek Kökenli Etiyopya Kahvesi',
      'Organik Glütensiz Yulaf Sütü',
      '500mg Organik Lion\'s Mane Ekstresi',
      'Seylan Tarçını Kabuk Özütü',
    ],
    allergens: ['Eser miktarda badem ve fındık içerebilir (Çapraz bulaşma riski).'],
    nutritionSample: {
      calories: '42 kcal',
      protein: '1.2 g',
      sugar: '0.8 g (Doğal yulaf şekeri)',
      fat: '1.4 g',
    },
  },
  {
    id: 'prod_2',
    categoryId: 'cat_matcha',
    categorySlug: 'matcha',
    name: 'Matcha Glow Latte',
    slug: 'matcha-glow-latte',
    shortDescription: 'Seremoniyel Uji matcha, ipeksi yulaf sütü ve hafif vanilya esintisi.',
    description: 'Japonya Uji bölgesinden 1. hasat seremoniyel dereceli matcha yeşil çayı, buharda köpürtülmüş organik yulaf sütü ve Madagaskar vanilyası. Kafein çarpıntısı yapmayan sakin ve dengeli bir öğleden sonra molası.',
    imageUrl: '/images/demo/matcha-latte.webp',
    priceFormatted: '₺165.00 [DEMO]',
    demoPriceNumber: 165,
    tags: ['Organik', 'Seremoniyel', 'Sıcak/Soğuk'],
    sensory: {
      sweetness: 2,
      sweetnessLabel: 'Hafif Doğal Tatlılık',
      intensity: 3,
      intensityLabel: 'Kadifemsi Kremamsı Gövde',
      acidity: 1,
      acidityLabel: 'Düşük Asidite / Yuvarlak Bitiş',
    },
    ingredients: [
      'Uji Seremoniyel Organik Matcha Tozu (Grade A)',
      'Organik Yulaf Sütü',
      'Saf Madagaskar Vanilya Özütü',
    ],
    allergens: ['Laktozsuz, Glütensiz reçete. Badem sütü tercihinde sert kabuklu yemiş içerir.'],
    nutritionSample: {
      calories: '78 kcal',
      protein: '2.4 g',
      sugar: '2.1 g',
      fat: '2.8 g',
    },
  },
  {
    id: 'prod_3',
    categoryId: 'cat_coffee',
    categorySlug: 'coffee',
    name: 'Single-Origin V60 Pour Over',
    slug: 'single-origin-v60',
    shortDescription: 'Çiçeksiz berrak notalarla elle demlenmiş artisanal filtre kahve.',
    description: 'Mineiro Coffee kavurma ustalığıyla orta-açık profilde kavrulmuş yıkanmış Kolombiya Huila çekirdekleri. V60 dripper ile elle demlenir; temiz gövde ve dengeli asidite profili sunar.',
    imageUrl: '/images/demo/v60-pourover.webp',
    priceFormatted: '₺135.00 [DEMO]',
    demoPriceNumber: 135,
    tags: ['Tek Köken', 'Artisanal', 'Dengeli Asidite'],
    sensory: {
      sweetness: 2,
      sweetnessLabel: 'Doğal Karamel Nüansı',
      intensity: 3,
      intensityLabel: 'Temiz İpeksi Gövde',
      acidity: 3,
      acidityLabel: 'Dengeli Asidite',
    },
    ingredients: ['%100 Tek Köken Kolombiya Huila Yıkanmış Arabica Kahve Çekirdeği', 'Arıtılmış Mineralize Su'],
    allergens: ['Alerjen içermez.'],
    nutritionSample: {
      calories: '2 kcal',
      protein: '0.2 g',
      sugar: '0 g',
      fat: '0 g',
    },
  },
  {
    id: 'prod_4',
    categoryId: 'cat_homemade',
    categorySlug: 'homemade',
    name: 'Cordyceps Clean Energy Latte',
    slug: 'cordyceps-clean-energy-latte',
    shortDescription: 'Ev yapımı badem sütü, tek kökenli espresso, ham kakao ve kordiseps mantar özü.',
    description: 'B+ mutfağında günlük hazırlanan taze badem sütü, hafif kavrulmuş espresso şotu, saf Peru ham kakaosu ve 400mg Cordyceps militaris özütü. Gün ortasında dengeli bir mola arayanlar için tasarlandı.',
    imageUrl: '/images/demo/cordyceps-latte.webp',
    priceFormatted: '₺170.00 [DEMO]',
    demoPriceNumber: 170,
    tags: ['Ev Yapımı Badem Sütü', 'Ham Kakao', 'Şekersiz'],
    sensory: {
      sweetness: 1,
      sweetnessLabel: 'Bitter Çikolata Doğallığı',
      intensity: 4,
      intensityLabel: 'Zengin Dolgun Doku',
      acidity: 2,
      acidityLabel: 'Yumuşak Asidite Profili',
    },
    ingredients: [
      'Single-Origin Espresso Şotu',
      'Ev Yapımı Taze Badem Sütü',
      'Ham Peru Kakao Tozu',
      '400mg Cordyceps Ekstresi',
    ],
    allergens: ['Badem içerir.'],
    nutritionSample: {
      calories: '65 kcal',
      protein: '2.1 g',
      sugar: '0.5 g',
      fat: '3.9 g',
    },
  },
  {
    id: 'prod_5',
    categoryId: 'cat_snacks',
    categorySlug: 'snacks',
    name: 'Spirulina Wellness Bowl',
    slug: 'spirulina-wellness-bowl',
    shortDescription: 'Taze avokado, organik kinoa, fırınlanmış nohut ve zencefilli tahin sosu.',
    description: 'Hafif buharda pişmiş kinoa yatağında olgun avokado dilimleri, çıtır fırınlanmış baharatlı nohut, taze bebek ıspanak, spirulina tohum karışımı ve soğuk sıkım limonlu susam sosu. Ağırlaşma yapmayan temiz bir öğle öğünü.',
    imageUrl: '/images/demo/spirulina-bowl.webp',
    priceFormatted: '₺210.00 [DEMO]',
    demoPriceNumber: 210,
    tags: ['Vegan', 'Glutensiz', 'Yüksek Lif'],
    sensory: {
      sweetness: 1,
      sweetnessLabel: 'Tuzlu / Aromatik',
      intensity: 3,
      intensityLabel: 'Doyurucu Lifli Doku',
      acidity: 2,
      acidityLabel: 'Ferahlatıcı Narenciye Dokunuşu',
    },
    ingredients: [
      'Organik Beyaz Kinoa',
      'Olgun Hass Avokado',
      'Kıtır Baharatlı Nohut',
      'Mavi-Yeşil Spirulina Özü',
      'Soğuk Sıkım Tahin & Limon Sosu',
    ],
    allergens: ['Susam içerir. Glütensiz reçetedir.'],
    nutritionSample: {
      calories: '380 kcal',
      protein: '14 g',
      sugar: '3 g',
      fat: '16 g (Sağlıklı tekli doymamış)',
    },
  },
  {
    id: 'prod_6',
    categoryId: 'cat_juices',
    categorySlug: 'juices',
    name: 'Zencefil & Narenciye Taze Sıkım',
    slug: 'zencefil-narenciye-taze-sikim',
    shortDescription: 'Soğuk sıkım taze zencefil, yeşil elma, kereviz sapı ve misket limonu.',
    description: 'Gövdesi ısıtılmadan hidrolik soğuk pres yöntemiyle sıkılmış yeşil elma, taze zencefil kökü, kereviz sapı ve ferahlatıcı lime. Öğle molasında ferahlatıcı lezzet sunan içecek çeşidi.',
    imageUrl: '/images/demo/juice-citrus.webp',
    priceFormatted: '₺125.00 [DEMO]',
    demoPriceNumber: 125,
    tags: ['Soğuk Sıkım', 'Doğal Meyve', 'Katkısız'],
    sensory: {
      sweetness: 3,
      sweetnessLabel: 'Doğal Meyve Şekeri',
      intensity: 3,
      intensityLabel: 'Keskin Ferahlatıcı Doku',
      acidity: 4,
      acidityLabel: 'Canlandırıcı Narenciye Asiditesi',
    },
    ingredients: ['Yeşil Elma', 'Taze Zencefil Kökü', 'Kereviz Sapı', 'Misket Limonu Suyu', 'Taze Nane'],
    allergens: ['Kereviz içerir.'],
    nutritionSample: {
      calories: '92 kcal',
      protein: '1.1 g',
      sugar: '18 g (Meyve özünden gelen)',
      fat: '0.2 g',
    },
  },
  {
    id: 'prod_7',
    categoryId: 'cat_smoothies',
    categorySlug: 'smoothies',
    name: 'Avocado Greens Clean Smoothie',
    slug: 'avocado-greens-smoothie',
    shortDescription: 'Yarım avokado, ıspanak, chia tohumu, hindistan cevizi suyu ve muz.',
    description: 'Dengeli meyve ve sağlıklı yağ profiliyle harmanlanmış, ilave şekersiz yeşil smoothie. Öğleden sonra tatlı isteğine kremamsı ve doğal bir alternatif.',
    imageUrl: '/images/demo/smoothie-avocado.webp',
    priceFormatted: '₺160.00 [DEMO]',
    demoPriceNumber: 160,
    tags: ['Vegan', 'Şekersiz', 'Kremamsı'],
    sensory: {
      sweetness: 2,
      sweetnessLabel: 'Muzdan Gelen Hafif Tat',
      intensity: 4,
      intensityLabel: 'Kadife Yoğun Doku',
      acidity: 1,
      acidityLabel: 'Düşük Nötr Asidite',
    },
    ingredients: ['Taze Avokado', 'Bebek Ispanak', 'Hindistan Cevizi Suyu', 'Chia Tohumu', 'Yarım Muz'],
    allergens: ['Alerjen içermez.'],
    nutritionSample: {
      calories: '210 kcal',
      protein: '4.2 g',
      sugar: '9 g',
      fat: '11 g',
    },
  },
  {
    id: 'prod_8',
    categoryId: 'cat_tea',
    categorySlug: 'tea',
    name: 'Adaçayı & Lavanta Zen Demleme',
    slug: 'adacayi-lavanta-zen',
    shortDescription: 'Ege dağ adaçayı, organik Fransız lavantası ve kurutulmuş papatya çiçekleri.',
    description: 'Kafeinsiz, günün koşturmacasında kısa ve dingin bir mola için toplanmış bütün yaprak bitki harmanı. Porselen demlikte 5 dakika demlenir.',
    imageUrl: '/images/demo/tea-herbal.webp',
    priceFormatted: '₺110.00 [DEMO]',
    demoPriceNumber: 110,
    tags: ['Kafeinsiz', 'Bütün Yaprak', 'Sıcak'],
    sensory: {
      sweetness: 1,
      sweetnessLabel: 'Çiçeksi Doğal Aromatik',
      intensity: 2,
      intensityLabel: 'Hafif Dinlendirici Gövde',
      acidity: 1,
      acidityLabel: 'Asiditesiz Yumuşak',
    },
    ingredients: ['Ege Dağ Adaçayı Yaprakları', 'Organik Lavanta Çiçekleri', 'Kurutulmuş Papatya', 'Limon Kabuğu'],
    allergens: ['Alerjen içermez.'],
    nutritionSample: {
      calories: '1 kcal',
      protein: '0 g',
      sugar: '0 g',
      fat: '0 g',
    },
  },
  {
    id: 'prod_9',
    categoryId: 'cat_snacks',
    categorySlug: 'snacks',
    name: 'Ham Kakaolu Raw Bar',
    slug: 'ham-kakaolu-raw-bar',
    shortDescription: 'Medjool hurması, çiğ badem, ham kakao parçacıkları ve chia tohumu.',
    description: 'Pişirilmeden (raw) soğuk presle hazırlanmış, ilave şeker ve gluten içermeyen atıştırmalık. Kahvenin yanında yoğun bitter lezzet sunar.',
    imageUrl: '/images/demo/raw-bar.webp',
    priceFormatted: '₺85.00 [DEMO]',
    demoPriceNumber: 85,
    tags: ['Glutensiz', 'Rafine Şekersiz', 'Çiğ'],
    sensory: {
      sweetness: 3,
      sweetnessLabel: 'Hurmadan Gelen Doğal Karamel',
      intensity: 4,
      intensityLabel: 'Çiğnenebilir Yoğun Doku',
      acidity: 1,
      acidityLabel: 'Asiditesiz',
    },
    ingredients: ['Medjool Hurması', 'Çiğ Badem', 'Peru Ham Kakaosu (%100)', 'Chia Tohumu', 'Himalaya Tuzu'],
    allergens: ['Badem içerir. Eser miktarda ceviz ve kaju içerebilir.'],
    nutritionSample: {
      calories: '185 kcal',
      protein: '5.2 g',
      sugar: '16 g (Hurma şekeri)',
      fat: '7.8 g',
    },
  },
  {
    id: 'prod_10',
    categoryId: 'cat_coffee',
    categorySlug: 'coffee',
    name: 'Golden Turmeric Flat White',
    slug: 'golden-turmeric-flat-white',
    shortDescription: 'Çift şot ristretto, yulaf sütü, taze zerdeçal ve karabiber özü.',
    description: 'Altın renkli zerdeçal baharat harmanı ile kadifemsi mikro köpüklü yulaf sütünün harmanlandığı sıcak ve aromatik specialty flat white.',
    imageUrl: '/images/demo/golden-turmeric.webp',
    priceFormatted: '₺155.00 [DEMO]',
    demoPriceNumber: 155,
    tags: ['Zerdeçal', 'Yulaf Sütü', 'Sıcak'],
    sensory: {
      sweetness: 2,
      sweetnessLabel: 'Doğal Baharat Tatlılığı',
      intensity: 4,
      intensityLabel: 'Zengin İpeksi Mikro Köpük',
      acidity: 2,
      acidityLabel: 'Yumuşak Asidite Profili',
    },
    ingredients: ['Çift Şot Ristretto Espresso', 'Organik Yulaf Sütü', 'Organik Zerdeçal Tozu', 'Taze Çekilmiş Karabiber'],
    allergens: ['Laktozsuz.'],
    nutritionSample: {
      calories: '110 kcal',
      protein: '2.8 g',
      sugar: '3.4 g',
      fat: '3.8 g',
    },
  },
  {
    id: 'prod_11',
    categoryId: 'cat_matcha',
    categorySlug: 'matcha',
    name: 'Iced Matcha Collagen Zen',
    slug: 'iced-matcha-collagen-zen',
    shortDescription: 'Buzlu seremoniyel matcha, organik yulaf sütü ve balık kolajeni peptidleri.',
    description: 'Öğleden sonra masa başı yorgunluğuna karşı serinletici ve pürüzsüz içim. 1. kalite yeşil matcha ve hidrolize kolajen peptidiyle dingin bir mola.',
    imageUrl: '/images/demo/matcha-collagen.webp',
    priceFormatted: '₺180.00 [DEMO]',
    demoPriceNumber: 180,
    tags: ['Buzlu', 'Kolajen', 'Seremoniyel'],
    sensory: {
      sweetness: 1,
      sweetnessLabel: 'Şurupsuz Doğal Çay Aroması',
      intensity: 3,
      intensityLabel: 'Hafif Kremamsı',
      acidity: 1,
      acidityLabel: 'Düşük Asidite',
    },
    ingredients: ['Organik Uji Seremoniyel Matcha', 'Buzlu Yulaf Sütü', 'Hidrolize Kolajen Peptidi (Tip 1 & 3)', 'Vanilya Özütü'],
    allergens: ['Balık kolajeni içerir (Deniz ürünleri alerjisi olanlar için uygun değildir).'],
    nutritionSample: {
      calories: '85 kcal',
      protein: '6.5 g',
      sugar: '1.8 g',
      fat: '2.2 g',
    },
  },
  {
    id: 'prod_12',
    categoryId: 'cat_homemade',
    categorySlug: 'homemade',
    name: 'Ashwagandha Dream Cacao',
    slug: 'ashwagandha-dream-cacao',
    shortDescription: 'Ev yapımı badem sütü, ham kakao, ashwagandha kök özü ve Seylan tarçını.',
    description: 'B+ baristasının taze hazırladığı badem sütü, saf ham kakao ve bitki kökü özütüyle sıcak, kadifemsi ve rafine şekersiz akşamüstü içeceği.',
    imageUrl: '/images/demo/ashwagandha-cacao.webp',
    priceFormatted: '₺150.00 [DEMO]',
    demoPriceNumber: 150,
    tags: ['Ev Yapımı Badem Sütü', 'Sıcak', 'Adaptojen'],
    sensory: {
      sweetness: 2,
      sweetnessLabel: 'Doğal Kakao / Tarçın Tatlılığı',
      intensity: 4,
      intensityLabel: 'Yoğun Sıcak Çikolata Kıvamı',
      acidity: 1,
      acidityLabel: 'Asiditesiz',
    },
    ingredients: ['Ham Peru Kakao Tozu', 'Ev Yapımı Taze Badem Sütü', '300mg Ashwagandha Kök Ekstresi', 'Seylan Tarçını'],
    allergens: ['Badem içerir.'],
    nutritionSample: {
      calories: '95 kcal',
      protein: '3.1 g',
      sugar: '1.2 g',
      fat: '4.5 g',
    },
  },
];

export const WORKDAY_MOMENTS: WorkdayMoment[] = [
  {
    time: '08:00',
    title: 'İşe Gidiş',
    headline: 'Temiz uyanış, dengeli asidite ve güne dingin başlangıç.',
    description: 'Masa başı gününün ilk saatlerinde zihni yormayan, pürüzsüz ve berrak bir lezzet.',
    recipeCue: "Single-Origin Cold Brew & Lion's Mane",
    categorySlug: 'coffee',
    productId: 'prod_1',
  },
  {
    time: '12:30',
    title: 'Öğle Arası',
    headline: 'Öğleden sonra rehavetine yer bırakmayan hafiflik, lif ve dengeli protein.',
    description: 'Ağır yemek rehaveti yaşamadan dengeni koruyan temiz içerikler.',
    recipeCue: 'Spirulina Yeşil Kase & Zencefil',
    categorySlug: 'snacks',
    productId: 'prod_5',
  },
  {
    time: '15:00',
    title: 'B+ Mola',
    headline: 'Dengeli ikinci rüzgar, tatlı isteğine rafine şekersiz ferahlık molası.',
    description: 'Kafein çarpıntısız berrak mola; seremoniyel matcha ve çiğ kakaonun dinlendirici uyumu.',
    recipeCue: 'Matcha Glow Latte & Ham Kakaolu Raw Bar',
    categorySlug: 'matcha',
    productId: 'prod_2',
  },
];

export const AI_SCENARIOS: AiScenario[] = [
  {
    intentId: 'intent_focus',
    intentLabel: 'Odak Molası',
    recommendedProductId: 'prod_1',
    productName: "Lion's Mane Cold Brew",
    matchScore: 98,
    editorialNote: '16 saat soğuk demleme tek kökenli çekirdek ve botanik özü ile günün yoğun akışında berrak bir mola.',
  },
  {
    intentId: 'intent_calm',
    intentLabel: 'Sakin Bir An',
    recommendedProductId: 'prod_2',
    productName: 'Matcha Glow Latte',
    matchScore: 96,
    editorialNote: 'Uji seremoniyel matcha ve ipeksi yulaf sütü ile gün ortasında dengeli ve sakin bir tempo.',
  },
  {
    intentId: 'intent_refresh',
    intentLabel: 'Tazelenme Molası',
    recommendedProductId: 'prod_6',
    productName: 'Zencefil & Narenciye Taze Sıkım',
    matchScore: 95,
    editorialNote: 'Soğuk pres zencefil ve misket limonu ferahlığıyla öğleden sonra rehavetine tazeleyici bir dokunuş.',
  },
  {
    intentId: 'intent_morning',
    intentLabel: 'Yoğun Bir Sabah',
    recommendedProductId: 'prod_3',
    productName: 'Single-Origin V60 Pour Over',
    matchScore: 99,
    editorialNote: 'Kolombiya Huila çekirdeklerinin el demlemesiyle açığa çıkan çiçeksi notalar ve temiz gövde.',
  },
];

