const body = [
    {
        text: 'МІНІ-СПІДНИЦЯ<br>Розкльошена спідниця з високою посадкою. Виточка спереду.Застібається на приховану блискавку збоку.<br>ЕКРЮ/ЗЕЛЕНИЙ | 0387/156<br>',
        price: 1299.00,
        imeg: 'wrap-img_1',
        sizes: ['XS', 'S', 'M', 'L']
    },
    {
    
        text: 'ШКІРЯНА ПРОРІЗНА СУМКА-ШОПЕР<br> Шкіряна сумка-шопер через плече з перфорацією, ручкою та знімним регульованим ремінцем.<br>Полотняна внутрішня сумка. Застібка-магніт. Висота x ширина x глибина 19 x 24,5 x 9,5cm.<br>КОРИЧНЕВИЙ | 6210/010<br>',
        price: 3299.00,
        imeg: 'wrap-img_2',
        sizes: [ 'M']
    },
    {
    
        text: 'БОСОНІЖКИ НА НИЗЬКИХ ШИРОКИХ ПІДБОРАХ<br>Босоніжки із широкими підборами середньої висоти, квадратним носком і ремінцями занімалістичним тисненням.<br>ЧОРНИЙ | 2329/910<br>',
        price: 2099.00,
        imeg: 'wrap-img_3',
        sizes: [ '35','36','37','38','39','40','41']
    },
];

const mainContent = document.querySelector('.main-content');
const min = 1;
const max = 3;
const bill = document.querySelector('.sum');
const currency = ' UAH<br>';

let sum = 0;

body.forEach(el => {
    const shopPosition = document.createElement('div');
    const wrapImg = document.createElement('div');
    const wrapPosition = document.createElement('div');
    const price = document.createElement('div');
    const counter = document.createElement('div');
    const minusButton = document.createElement('button');
    const plussButton = document.createElement('button');
    const spanCount = document.createElement('span');
    const sizeText = document.createElement('span');
    const favSize = document.createElement('select');

    shopPosition.className = 'shop-position';

    wrapImg.className = el.imeg;
    shopPosition.appendChild(wrapImg);

    wrapPosition.className = 'wrap-position';
    wrapPosition.innerHTML = el.text;
    shopPosition.appendChild(wrapPosition);

    price.className = 'price';
    price.innerHTML = el.price + currency;
    wrapPosition.appendChild(price);

    //create counter
    counter.className = 'counter';
    counter.setAttribute('data-min', min.toString());
    counter.setAttribute('data-max', max.toString());
    wrapPosition.appendChild(counter);

    minusButton.className = 'minus';
    minusButton.innerHTML = ' - ';

    plussButton.className = 'plus';
    plussButton.innerHTML = '+';

    spanCount.className = 'count';
    spanCount.innerHTML = '1';

    counter.appendChild(minusButton);
    counter.appendChild(spanCount);
    counter.appendChild(plussButton);

    sizeText.innerHTML = 'Розмір:<br>';
    wrapPosition.appendChild(sizeText);

    // create select
    favSize.id = 'fav_size';
    favSize.className = 'fav_size';

    //fill select
    el.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.innerHTML = size;
        favSize.appendChild(option);
    });

    wrapPosition.appendChild(favSize);
    mainContent.appendChild(shopPosition);

    // Logic 
    //значення price додаємо в суму
    sum += el.price;
    //записусо в .sum текст
    updateBillText(bill, sum);

    plussButton.addEventListener('click', () => {
        const value = Number(spanCount.innerHTML) + 1;
        if (value <= max) {
            spanCount.innerHTML = value;
            const currnetPrice = Number(price.innerHTML.replace(currency, ''));
            sum += el.price;
            updatePrice(price, el.price, currnetPrice, (priceOne, priceTwo) => priceOne + priceTwo);
            updateBillText(bill, sum);
        }
    });
    minusButton.addEventListener('click', () => {
        const value = Number(spanCount.innerHTML) - 1;
        if (value >= min) {
            spanCount.innerHTML = value;
            const currenPrice = Number(price.innerHTML.replace(currency, ''));
            sum -= el.price;
            updatePrice(price, currenPrice, el.price, (priceOne, priceTwo) => priceOne - priceTwo);
            updateBillText(bill, sum);
        }
    });

});

function updateBillText(bill, sum) {
    bill.innerHTML = ` УСЬОГО: ${sum} <br>*з урахуванням ПДВ`;
}

function updatePrice(priceTag, priceOne, priceTwo, cb) {
    priceTag.innerHTML = cb(priceOne, priceTwo) + currency;
}