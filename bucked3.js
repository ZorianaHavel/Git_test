const obj = [
    {
        img: 'wrap-img_2',
        text: 'Компютер QUBE Ігровий QB R i5 10400F RTX 3060 12 GB 1621',
        price: 40599,
        currency: 'UAH',
        button: 'add',

    },
    {
        img: 'wrap-img_1',
        text: 'Монітор 34" BenQ Mobiuz EX3415R (9H.LK2LJ.TBE)',
        price: 36225,
        currency: 'UAH',
        button: 'add',

    },

    {
        img: 'wrap-img_3',
        text: 'Крісло ігрове Anda Seat Kaiser 2 Black Size XL (AD12XL-07-B-PV-B01)',
        price: 14999,
        currency: 'UAH',
        button: 'add',

    },
];


let sum = 0;
const mainContent = document.querySelector('.main-content');
const footer=document.querySelector('.footer');

const sumTag=document.createElement('div');
sumTag.className='sun';
sumTag.innerHTML='ЗАГАЛЬНА ВАРТІСТЬ:';
footer.appendChild(sumTag);

obj.forEach(el => {
    const addPosition = document.createElement('div');
    const img = document.createElement('div');
    const position = document.createElement('div');
    const price = document.createElement('div');
    const currency = document.createElement('div');

    addPosition.className = 'addPosition';
    mainContent.appendChild(addPosition);

    img.className = el.img;
    addPosition.appendChild(img);

    position.className = 'position';
    position.innerHTML = el.text;
    addPosition.appendChild(position);

    price.className = 'price';
    price.innerHTML = el.price;
    addPosition.appendChild(price);

    currency.className = 'currency';
    currency.innerHTML = el.currency;
    addPosition.appendChild(currency);

    const button = document.createElement('button');
    button.className = 'button';
    button.innerHTML = el.button;
    addPosition.appendChild(button);

    button.addEventListener('click', () => {
        sum += el.price;
        updatePrice(sumTag, sum);
    })
});

function updatePrice(sumTag, sum) {
    sumTag.innerHTML=`ЗАГАЛЬНА ВАРТІСТЬ: ${sum} UAH`;
}
