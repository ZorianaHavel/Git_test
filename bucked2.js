const body = [
    {
        id: '001',
        text: 'МІНІ-СПІДНИЦЯ<br>Розкльошена спідниця з високою посадкою. Виточка спереду.Застібається на приховану блискавку збоку.<br>ЕКРЮ/ЗЕЛЕНИЙ | 0387/156<br>',
        price: 1299.00,
        imeg: 'wrap-img_1',
        sizes: ['XS', 'S', 'M', 'L']
    },

];

const mainContent = document.querySelector('.main-content');

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
    price.innerHTML = el.price + ' UAH<br>';
    wrapPosition.appendChild(price);

    //create counter
    counter.className = 'counter';
    counter.setAttribute('data-min', '1');
    counter.setAttribute('data-max', '3');
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
});