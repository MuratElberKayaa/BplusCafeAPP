# ADR-001: Modular Monolith First Architecture

**Konu:** Mikroservisler Yerine Modular Monolith Tercihi  
**Tarih:** 2026-09-29  
**Statü:** ACCEPTED  
**Karar Vericiler:** Solution Architect, Senior Backend Engineer, Product Architect  

---

## 1. Bağlam ve Problem Tanımı (Context)

B+ Wellness Café platformu, ilk etapta 1 pilot fiziksel şube ile faaliyete geçecek ve ilerleyen süreçte şube sayısını artırmayı hedefleyen yeni nesil bir dijital café projesidir. Sistem; müşteri mobil uygulaması, mağaza operasyon ekranı (KDS), yönetim paneli, sadakat motoru, ödeme altyapısı ve AI Barista bileşenlerini barındırır.

İlk aşamada mimari tasarım yapılırken iki ana yaklaşım masaya yatırılmıştır:
1. **Mikroservis Mimarisi (Microservices):** Her domain'in (Auth, Order, Menu, Payment, AI) ayrı bir servis, ayrı veritabanı ve API Gateway arkasında ayrı container olarak konumlandırılması.
2. **Modüler Monolit Mimarisi (Modular Monolith):** Tüm domain'lerin tek bir NestJS codebase ve tek bir birincil veritabanı (PostgreSQL) içinde, ancak kod seviyesinde katı domain sınırları ile ayrıştırılarak barındırılması.

---

## 2. Karar (Decision)

Projenin ilk sürümü ve canlı pilot dönemi için **MODULAR MONOLITH** mimarisi kesin olarak kabul edilmiştir.

Backend içerisinde her iş alanı bağımsız bir NestJS modülü olarak yapılandırılacaktır:
- `AuthModule`
- `UserModule`
- `StoreModule`
- `MenuModule`
- `OrderModule`
- `PaymentModule`
- `RewardsModule`
- `WalletModule`
- `NotificationModule`
- `AiModule`

Modüller kendi domain modellerine sahip olacak, diğer modüllerin verilerine doğrudan SQL sorgularıyla değil, modül servislerinin sunduğu public methodlar veya in-memory domain event'leri ile erişecektir.

---

## 3. Kararın Gerekçeleri (Rationale)

1. **Düşük Operasyonel Maliyet ve Basit Altyapı:**
   - Mikroservis mimarisi; servis keşfi (Service Discovery), dağıtık izleme (Distributed Tracing), API Gateway yönlendirmeleri, mesaj kuyrukları (Kafka/RabbitMQ) ve birden fazla veritabanı kümesi gerektirir.
   - 1 pilot şube ile başlayan bir işletme için bu altyapının bulut barındırma ve bakım maliyeti gereksiz bir finansal yüktür. Modüler monolit, tek bir Docker container veya düşük maliyetli PaaS üzerinde yüksek verimle çalışır.
2. **Geliştirme Hızı ve Time-to-Market:**
   - Startup ve prototip aşamasında domain sınırları ve iş kuralları (özellikle Rewards, Menü özelleştirmeleri ve AI parametreleri) hızla evrilecektir. Mikroservisler arasındaki API sözleşmelerini sürekli senkronize tutmak geliştirmeyi %40-%60 oranında yavaşlatır.
   - Monolit içinde refactoring yapmak saniyeler sürerken, mikroservisler arası breaking change yönetimi haftalar alabilir.
3. **Kolay Hata Ayıklama (Debugging) ve Yerel Geliştirici Deneyimi:**
   - Geliştiriciler yerel makinelerinde tek bir `docker compose up` ile PostgreSQL ve Redis ayağa kaldırıp backend'i `npm run start:dev` ile çalıştırabilir.
   - İstek akışları tek bir process içinde izlenir; karmaşık distributed tracing araçlarına ihtiyaç duymadan breakpoint konulabilir.
4. **Veri Bütünlüğü ve İşlemsel Güvenlik (ACID Transactions):**
   - Sipariş tamamlama akışında: Sepet doğrulama, stok düşürme, ödeme kaydı oluşturma ve sadakat puanı güncelleme işlemleri tek bir veritabanı transaction'ı (`BEGIN ... COMMIT`) içinde atomik olarak çözülebilir.
   - Mikroservislerde bu işlem 2PC (Two-Phase Commit) veya karmaşık Saga desenleri (kompanzasyon işlemleri) gerektirir.
5. **Ölçeklenebilirlik Uyumu:**
   - NestJS ve PostgreSQL kombinasyonu, tek bir modüler sunucu üzerinde dahi saniyede binlerce sipariş isteğini rahatlıkla kaldırabilir. 1 pilot şubenin maksimum işlem hacmi bu kapasitenin %1'i bile değildir.

---

## 4. Geleceğe Yönelik Geçiş Stratejisi (Decomposition Path)

Bu karar bir "Spaghetti Monolith" yaratmak anlamına gelmez. Kod tabanında aşağıdaki kurallar uygulanacaktır:
- **Zero Circular Dependencies:** Modüller arasında döngüsel bağımlılık kesinlikle yasaktır (`nest-cli` ve ESLint kuralları ile denetlenir).
- **Domain Event Bus:** Modüller arası gevşek bağlılık için `@nestjs/event-emitter` kullanılacaktır (Örn: Sipariş tamamlandığında `OrderCreatedEvent` tetiklenir; `NotificationModule` ve `RewardsModule` bu eventi dinler).
- **İleride Ayrılma:** İşletme 50+ şubeye ulaştığında veya `AiModule` yüksek GPU/CPU tüketimi sebebiyle bağımsız ölçeklenmek istediğinde, bu modül kod tabanından kesilip bağımsız bir mikroservise dönüştürülebilecek mimari temizlikte tutulacaktır.

---

## 5. Sonuçlar ve Değerlendirme (Consequences)

### Pozitif Sonuçlar
- Çok hızlı MVP teslimi ve kolay test edilebilirlik.
- Sıfır network gecikmesi ile modüller arası anlık çağrılar.
- Düşük sunucu ve DevOps maliyeti.

### Negatif Sonuçlar & Önlemler
- *Risk:* Geliştiricilerin disiplinsiz davranıp modül sınırlarını ihlal etmesi ve doğrudan başka modüllerin veritabanı tablolarına sorgu atması.
- *Önlem:* ESLint sınır kuralları (Module Boundary Rules) ve Code Review süreçlerinde katı domain izolasyonu denetlenecektir.
