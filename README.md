Kitap Listesi API (Book List API)Bu proje, Express.js kullanılarak oluşturulmuş, kitap verilerini bir JSON dosyasında saklayan basit bir CRUD (Oluştur, Oku, Güncelle, Sil) API uygulamasıdır.
Özellikler (Features)Express.js ile hızlı ve hafif bir sunucu yapısı.fs modülü ile books.json dosyası üzerinde kalıcı veri depolama.Tam CRUD desteği (GET, POST, PUT, DELETE).Kurulum ve Çalıştırma (Installation & Setup)
Projeyi bilgisayarınıza indirin veya klonlayın.
Terminalinizde proje klasörüne gidin.Gerekli bağımlılıkları kurmak için şu komutu çalıştırın:Bash npm install
Sunucuyu başlatmak için:Bash node server.js
API, http://localhost:3000 adresinde çalışacaktır.
Metot,URL,Açıklama
GET,/books,Tüm kitapları listeler
GET,/books/:id,ID'ye göre tek bir kitabı getirir
POST,/books,Yeni bir kitap ekler
PUT,/books/:id,Mevcut bir kitabı günceller
DELETE,/books/:id,Bir kitabı listeden siler