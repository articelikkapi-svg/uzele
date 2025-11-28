Netlify (drag-and-drop) için hızlı rehber

Hazırlık
- Bu proje `apps/web` içinde bir Vite uygulamasıdır.
- Netlify'a sürükle-bırak ile yayınlamak için `dist` klasöründeki statik dosyalara ihtiyacınız var.

Adımlar (Windows PowerShell)
1) `apps/web` dizinine gidin ve bağımlılıkları kurun:

```powershell
cd c:\web-sitem\apps\web
npm install
```

2) Üretim build'i oluşturun:

```powershell
npm run build
```

3) Oluşan `dist` klasörünü Netlify'e sürükleyip bırakın.
- Alternatif olarak, `dist` içeriğini zip'leyip Netlify'e yükleyebilirsiniz:

```powershell
Compress-Archive -Path .\dist\* -DestinationPath ..\site-netlify.zip
```

Notlar
- Proje geliştirici (create-platform) `__create` helper'larını geliştirme sırasında kullanıyordu; üretim build'inde bu referanslar kaldırıldı/koşullu hâle getirildi.
- Eğer özel bir domain kullanacaksanız, Netlify panelinden domain ekleyin. Google Ads güvenlik uyarısı genellikle barındırılan domain ile ilgilidir — siteyi Netlify'e taşıdıktan sonra Google Ads tekrar kontrol etmelisiniz.
- Eğer build sırasında hata alırsanız bana hatanın konsol çıktısını gönderin, yardımcı olurum.
