//всі wrap-position вкладаємо в array
const orders = document.querySelectorAll('.wrap-position');

//шукаємо в елемент НТМЛ із класом .sum, зберігаємо змінній bill
const bill = document.querySelector('.sum');
// надаємо початкове значення суми, тут буде зберігатися сума всіх наших позицій
let sum = 0;
//
orders.forEach(el => {
  //витягуєм .price з елемнту масиву orders diw шоб можна було оперувати цим дівом
  const priceTag = el.querySelector('.price');
  // витягуєм .price з елемнту масиву orders перетворюємо вміст тегу в число
  const price = Number(priceTag.innerHTML);
  //витягує .counter і передає у змінну
  const counter = el.querySelector('.counter');
  //значення price додаємо в суму
  sum += price;
  //записусо в .sum текст
  updateBillText(bill, sum);
  //атрибути counter витягуємо і перетворюєм в число min та maxзначення
  const min = Number(counter.getAttribute('data-min'));
  const max = Number(counter.getAttribute('data-max'));
  // шукаємо в ounter .minus та .plus .count та записуємо у змінну
  const minusButtom = counter.querySelector('.minus');
  const plusButtom = counter.querySelector('.plus');
  const count = counter.querySelector('.count');
  // вішаємо лісенер на minus та plus
  plusButtom.addEventListener('click', () => {
    const value = Number(count.innerHTML) + 1;
    if (value <= max) {
      count.innerHTML = value;
      const currnetPrice = Number(priceTag.innerHTML);
      sum += price;
      updatePrice(priceTag, price, currnetPrice, (basePrice, currenPrice) => basePrice + currenPrice);
      updateBillText(bill, sum);
    };
  })
  //аналогічно тільки -1
  minusButtom.addEventListener('click', () => {
    const value = Number(count.innerHTML) - 1;
    if (value >= min) {
      count.innerHTML = value;
      const currnetPrice = Number(priceTag.innerHTML);
      sum -= price;
      updatePrice(priceTag, currnetPrice, price, (currenPrice, basePrice) => currenPrice - basePrice);
      updateBillText(bill, sum);
    }
  });
});

function updateBillText(bill, sum) {
  bill.innerHTML = ` УСЬОГО: ${sum} <br>*з урахуванням ПДВ`;
}

function updatePrice(priceTag, priceOne, priceTwo, cb) {
  priceTag.innerHTML = cb(priceOne, priceTwo);
}