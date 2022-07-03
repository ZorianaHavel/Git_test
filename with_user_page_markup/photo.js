const loadsPhotoInfo = async () => {
    const albumId = Number(new URL(window.location.href).searchParams.get('albumId'));
    const container = document.querySelector('.container');

    const photoResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    const photoData = await photoResponse.json();
    //    alert(photoData)

    // photo comment
    const photoEl = document.createElement('div');
    photoEl.classList.add('comments_wrap');
    container.appendChild(photoEl);

    //h3 comment
    const titleEl = document.createElement('h3');
    titleEl.classList.add('comments_wrap-title');
    titleEl.innerHTML = 'Photo:';
    photoEl.appendChild(titleEl);

    //photowrap
    const photoWrap = document.createElement('div');
    photoWrap.classList.add('photos_wrap');
    photoEl.appendChild(photoWrap);


    photoData.forEach(photoData => {
        const albumPhoto = document.createElement('div');
        albumPhoto.classList.add('photo');
        photoWrap.appendChild(albumPhoto);

        const imgPhoto = document.createElement('img');
        imgPhoto.setAttribute('src', photoData.thumbnailUrl);
        albumPhoto.appendChild(imgPhoto);

        const photoATag=document.createElement('a');
        photoATag.classList.add('photo');
        photoATag.setAttribute('href',photoData.url);
        const albumPhotoSpan = document.createElement('span');
        albumPhotoSpan.innerText = photoData.title;
        photoATag.appendChild(albumPhotoSpan)
        albumPhoto.appendChild(photoATag);
    });
    photoWrap.appendChild(photoData);
};

loadsPhotoInfo();