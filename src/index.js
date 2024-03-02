const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

// Görev 1: Nav anchorların içeriğini ve sınıfnı objeden al ve yerleştir 

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index+1}`]
  item.className = "italic";
});

// Görev 2: cta-text class'ının altındaki h1 ve button'ın içi

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

//Görev 3: Ana içerik 

const mainContentElements = document.querySelectorAll(".text-content > *");

let i = 0;
for (let key in siteContent["ana-içerik"]) {
  mainContentElements[i].textContent = siteContent["ana-içerik"][key];
  i++;
}

//Görev 4: iletisim (section contact)

const contactElements = document.querySelectorAll(".contact > *");

let j = 0;
for (let key in siteContent.iletisim){
  contactElements[j].textContent = siteContent.iletisim[key];
  j++;
}

//Görev 5: footer anchor içerik ve class'ı

document.querySelector("footer a").className ="bold";
document.querySelector("footer a").textContent = siteContent.footer.copyright;

//Görev 6: images linkleri

let imgs = document.querySelectorAll("img");

let k = 0;
for (let key in siteContent.images){
  imgs[k].setAttribute("src", siteContent.images[key]);
  k++;
}

