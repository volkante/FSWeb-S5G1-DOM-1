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

// Görev 1: Nav anchorların içeriğini ve sınıfnı objeden al ve yerleştir (iki çözüm alternatifli yaptım)

let navLinks = document.querySelectorAll("nav a");

const navItemsArr = Object.values(siteContent.nav);

// for (let i=0; i<navLinks.length; i++){
//   navLinks[i].textContent = navItemsArr[i];
//   navLinks[i].className = "italic"
// }

navLinks.forEach((item, index) => {
  item.textContent = navItemsArr[index];
  item.className = "italic";
});

// Görev 2: cta-text class'ının içi

const ctaElements = document.querySelectorAll(".cta-text h1, .cta-text button");
const ctaArr = Object.values(siteContent.cta)

ctaElements.forEach((item,index)=>{
  item.textContent = ctaArr[index]
})

// alternatif çözüm

// let ctatexth1 = document.querySelector(".cta-text h1");
// ctatexth1.textContent = siteContent["cta"]["h1"]
// let ctatextbutton = document.querySelector(".cta-text button");
// ctatextbutton.textContent = siteContent["cta"]["button"];


//Görev 3: Ana içerik 

const mainContentElements = document.querySelectorAll(".text-content > *");
const mainContentTextArr = Object.values(siteContent["ana-içerik"]);
mainContentElements.forEach((element,index)=>{
  element.textContent = mainContentTextArr[index]
})

//Görev 4: iletisim (section contact)

const contactElements = document.querySelectorAll(".contact > *");
const contactTextArr = Object.values(siteContent.iletisim);
contactElements.forEach((element,index)=>{
  element.textContent = contactTextArr[index];
})

//Görev 5: footer anchor içerik ve class'ı

document.querySelector("footer a").className ="bold";
document.querySelector("footer a").textContent = siteContent.footer.copyright;

//Görev 6: images linkleri

document.getElementById("logo-img").setAttribute("src", siteContent.images["logo-img"]); 

document.getElementById("cta-img").setAttribute("src", siteContent.images["cta-img"]);

document.getElementById("middle-img").setAttribute("src", siteContent.images["accent-img"]);

