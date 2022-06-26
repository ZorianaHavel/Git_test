const body = [
    {
        id: '001',
        text: 'МІНІ-СПІДНИЦЯ<br>Розкльошена спідниця з високою посадкою. Виточка спереду.Застібається на приховану блискавку збоку.<br>ЕКРЮ/ЗЕЛЕНИЙ | 0387/156<br>',
        price: 1299.00,
        imeg: 'wrap-img_1',
        sizes: ['XS','S','M','L']
    },

];

const mainContent = document.querySelector('.main-content');

body.forEach(el => {
    const shopPosition = document.createElement('div');
    shopPosition.className = 'shop-position';

    const wrapImg = document.createElement('div');
    wrapImg.className = el.imeg;
    shopPosition.appendChild(wrapImg);

    const wrapPosition = document.createElement('div');
    wrapPosition.className = 'wrap-position';
    wrapPosition.innerHTML = el.text;
    shopPosition.appendChild(wrapPosition);

    const price = document.createElement('div');
    price.className = 'price';
    price.innerHTML = el.price + ' UAH<br>';
    wrapPosition.appendChild(price);

    const counter = document.createElement('div');
    counter.className = 'counter';
    counter.setAttribute('data-min', '1');
    counter.setAttribute('data-max', '3');
    wrapPosition.appendChild(counter);

    const minusButton = document.createElement('button');
    minusButton.className = 'minus';
    minusButton.innerHTML = ' - ';


    const plussButton = document.createElement('button');
    plussButton.className = 'plus';
    plussButton.innerHTML = '+';

    const spanCount = document.createElement('span');
    spanCount.className = 'count';
    spanCount.innerHTML = '1';
    counter.appendChild(minusButton);
    counter.appendChild(spanCount);
    counter.appendChild(plussButton);

    const sizeText=document.createElement('span');
    sizeText.innerHTML='Розмір:<br>';
    wrapPosition.appendChild(sizeText);

    const favSize= document.createElement('select');
    favSize.id='fav_size';
    favSize.className='fav_size';

    el.sizes.forEach(size => {
        const option= document.createElement('option');
        option.value=size;
        option.innerHTML=size;
        favSize.appendChild(option);
    });
    wrapPosition.appendChild(favSize);
    mainContent.appendChild(shopPosition);
});