function getSearchCard(
  img,
  price,
  pricetwo,
  paymen,
  paymenttwo,
  desc
//   rating,
//   raitings,
//   raiting
) {
//   let search_append = document.querySelector(".search-rating");

//   for (let i = 0; i < rating; i++) {
//     const star = document.createElement("img");
//     star.src = "images/star-full.svg";
//     search_append.append(star);
//   }

//   for (let i = 0; i < raitings; i++) {
//     const star_full = document.createElement("img");
//     star_full.src = "images/star.svg";
//     search_append.append(star_full);
//   }

//   for (let i = 0; i < raiting; i++) {
//     const star_half = document.createElement("img");
//     star_half.src = "images/star-half.svg";
//     search_append.append(star_half);
//   }

  return `          
  <div class="search-card">
    <img src="${img}" alt="" />
    <div class="search-content">
      <div class="search-prices">
        <div class="search-price d-flex align-items-center">
          <h5>${price}</h5>
          <h6>${pricetwo}</h6>
        </div>
        <div class="search-payment d-flex align-items-center">
          <p>${paymen}</p>
          <p>${paymenttwo}</p>
        </div>
      </div>
      <div class="search-description">
        <p>${desc}</p>
      </div>
      <div class="search-rating">
      </div>
      <div class="search-button">
      <button class="search-btn">В Корзину</button>
    </div>
   </div>
  </div>`;
}

const search_card_products = [
  {
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 2,
    raiting: 3,
    raitingss: 0,
  },
  {
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    raiting: 2,
    raitingss: 0,
  },
  {
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    raiting: 0,
    raitingss: 0,
  },
  {
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    raiting: 0,
    raitingss: 1,
  },
  {
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 2,
    raiting: 3,
    raitingss: 0,
  },
  {
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    raiting: 2,
    raitingss: 0,
  },
  {
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    raiting: 0,
    raitingss: 0,
  },
  {
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    raiting: 0,
    raitingss: 1,
  },
  {
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 2,
    raiting: 3,
    raitingss: 0,
  },
  {
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    raiting: 2,
    raitingss: 0,
  },
  {
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    raiting: 0,
    raitingss: 0,
  },
  {
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    raiting: 0,
    raitingss: 1,
  },
  {
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 2,
    raiting: 3,
    raitingss: 0,
  },
  {
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    raiting: 2,
    raitingss: 0,
  },
  {
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    raiting: 0,
    raitingss: 0,
  },
  {
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    raiting: 0,
    raitingss: 1,
  },
];

let productsContainer = document.querySelector(".search-cards");
const search = document.querySelector(".search");
const results = document.querySelector(".results");

function getProducts(products) {
  productsContainer.innerHTML = "";
  for (el of products) {
    productsContainer.innerHTML += getSearchCard(
      el.img,
      el.name,
      el.name_price,
      el.payment,
      el.payment_default,
      el.desc,
      el.rating,
      el.raiting,
      el.raitingss
    );
  }
  results.innerHTML = products.length
    ? `${products.length} ta mahsulot topildi !`
    : "Mahsulot topilmadi";
}

getProducts(search_card_products);

search.addEventListener("input", function () {
  let res = [];
  for (el of search_card_products) {
    let title = el.desc.toLowerCase();
    let search = this.value.toLowerCase().trim();
    if (title.includes(search)) {
      res.push(el);
    }
  }
  getProducts(res);
});
