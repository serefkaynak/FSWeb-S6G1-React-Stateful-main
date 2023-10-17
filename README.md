# Modül Projesi: React Bileşenleri(Components) ve Bileşen Statleri

Bu proje, bu sprint'te öğrenilen kavram ve teknikleri uygulamanıza ve bunları somut bir projede uygulamanıza olanak tanır. Bu sprintte, React bileşenlerini ve bileşen stateleri incelendi. Sprint sırasında, React'in ne olduğunu, React bileşenlerinin ne olduğunu ve bunların nasıl oluşturulacağını, state'in ne olduğunu ve bir bileşenin state bilgisinin nasıl değiştirilebileceğini ve tıklama işleyicileri(click handlers) ile bileşen state'inin nasıl güncelleneceğini incelediniz. 
Bu projede, state bilgisi olan çeşitli bileşenleri detaylandırarak bu konu ve ilkelerin yeterliliğini geliştireceksiniz.

## Talimatlar

**Bu talimatları dikkatlice okuyun. Bu projeye başlamadan _önce_ tam olarak ne beklendiğini anlayın.**

### Commits

Kodunuz düzenli ve anlamlı bir şekilde commitleyin. Bu, herhangi bir nedenle eski koda dönmeniz gerektiğinde size yardımcı olur.

### Açıklama

Bu proje `src/components` klasörü içinde bir kaç React bileşeni(component) içeriyor. Mevcut formlarında bu bileşenlerin state bilgisi yoktur ve yalnızca sabit kodlanmış bilgileri görüntüler. Tüm bileşenlere gidip, state ekleyip, event handlerlar ve yardımcı fonksiyonlar kullanarak kullanıcıların sayfa üzerinden stateleri değiştirebilmesini sağlayacaksın, yani bileşenleri interaktif hale getireceksin.

## Talimatlar

### Görev 1: Proje Kurulumu

- [ ] Projeyi forklayarak bir kopyasını oluşturun.
- [ ] Terminali kullanarak kendi forkunuzu klonlayın. 
- [ ] Projenin ana klasörüne gidin.
- [ ] `npm install` komutunu kullanarak projenin dependencylerini indirin.  
NOT: Tavsiye edilen `node version 18` ile kurulum yapabilirsiniz.
- [ ] `npm start` komutuyla projeyi başlatın.
- [ ] `npm test` komutuyla projeyi test edebilirsiniz. (uygulamanın `http://localhost:1234` 'da çalışıyor halde olması lazım)
- [ ] Commitinizi pushlayın: `git push origin main`.

### Görev 2a: Minimum Uygulanabilir Ürün

1. Her bileşen gerekli statelere sahip olmalıdır.
2. Her bileşenin event handlerları, uygulama kullanıcısının stateleri güncellemesine izin vermesi gerekir.
3. Güncellenmiş state, her bileşen için DOM'a doğru şekilde yansıtılmalıdır.

#### Adımlar

- [ ] `src/components` içindeki tüm bileşenlere işlevsellik katacaksınız.
- [ ] Bileşenler üzerinde **Chrome'da görüntülendikleri sırayla** çalışın (kolaydan zora doğru).
- [ ] Her dosya bir video bağlantısı ve şu şekilde özetlenebilecek bir dizi talimat içerir:
  - Bitmiş bileşenin demosunun videosunu izleyin ve ne kadar state'e ihtiyaç duyulduğunu düşünün.
  - State hook'u kullanarak gerekli bileşen statelerini oluşturun.
  - JSX'i sabit kodlanmış veriler yerine durumdan türetilen bilgileri gösterecek şekilde düzeltin.
  - Event handlers'ları, kullanıcının sayfayla etkileşim kurarak durumu güncellemesine izin verecek şekilde düzeltin.

### Görev 3: Ek Problemler

Gerekli öğelerinizi bitirdikten sonra çalışmanızı daha da ileri götürebilirsiniz. Bu hedefler, bu modülde öğrendiğiniz şeyler olabilir veya olmayabilir, ancak az önce çalıştığınız materyal üzerine inşa edilmelidir. Zaman tanıyın, sınırlarınızı zorlayın ve aşağıdaki isteğe bağlı hedeflere ulaşıp ulaşamayacağınıza bakın:

#### Ek Hedef 1 (To-Do Listesi)

`src/components` klasöründe `Todos.js` dosyası oluşturun. React'te bileşen stateleri (Redux yok!) kullanılarak bir yapılacaklar listesi (to-do list) oluşturma hakkında çevrimiçi bir öğretici bulun ve uygulayın. Yapılacaklar listesini oluşturabilmeli ve tamamlandı olarak işaretlemek için tek tek yapılacakları çizebilmeliyiz (veya kaldırabilmeliyiz).

#### Ek Hedef 2 (Tic-Tac-Toe) (bildiğimiz XOX oyunu)

Bu projeye bileşen olarak bir Tic Tac Toe oyunu ekleyin. 'X' ve 'O' ların pozisyonları birer state'te tutulmalıdır, JSX 3x3 tabloda sonuçları göstermelidir. İnsan oyuncu tarafından yalnızca boş kareler seçilebilir ve bu tıklamalarla ilgilenen event handlerın biraz mantık içermesi gerekir.:

  1. İnsan oyuncunun son hamlesi **oyunun bittiği** anlamına mı geliyor?? (O zaman oyunu bitir!)
  2. Oyun belirli bir hamle yaparak **bilgisayar tarafından anında kazanılabilir mi**? (Bunu da ekleyin!)
  3. Bilgisayar belirli bir hamle yaparak **insanın bir sonraki hamlesinde kazanmasını engelleyebilir mi**? (Yenilgiyi önle!)
  
Önceki kontroller olumsuz çıkarsa, bilgisayarın hareketi muhtemelen rastgele olacaktır, ancak "oyun motorunun" ne kadar akıllı hissedeceğine şaşıracaksınız.

İPUCU: React'ın sitesinde dökümanlarda React ile kapsamlı bir Tic Tac Toe oyunu nasıl yapılır adım adım anlatılmıştır, o örneği inceleyebilirsiniz.
