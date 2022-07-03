const loadUserInfo = async () => {
    //container
    const containerEl = document.querySelector('.container');

    //h1
    const titleEl = document.createElement('h1');
    titleEl.classList.add('posts-title');
    titleEl.innerText = 'Leanne Graham';
    containerEl.appendChild(titleEl);


   
    // const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    // const userList = await userResponse.json();


    // userList.forEach(() => {

    // })
    
     //article
    const articleEl = document.createElement('article');
    articleEl.classList.add('post_wrap');
    containerEl.appendChild(articleEl);




    //pName
    const pTextName = document.createElement('p');
    pTextName.classList.add('post_wrap-text');
    articleEl.appendChild(pTextName);
    pTextName.innerHTML = '<span>Username:</span> Bret';
    // const pTextNameS= document.createElement('span');
    // pTextNameS.innerText='Username:';
    // pTextName.appendChild(pTextNameS);

    //Email
    const pTextEmail = document.createElement('p');
    pTextEmail.classList.add('post_wrap-text');
    const user = 'Sincere@april.biz';
    pTextEmail.innerHTML = `<span>Email:</span> <a href="mailto:${user}">${user}</a>`;
    articleEl.appendChild(pTextEmail);
    // const pTextEmailS= document.createElement('span');
    // pTextEmailS.innerText='Email:';
    // pTextEmail.appendChild(pTextEmailS);

    // const userNameLinkEl = document.createElement('a');
    // userNameLinkEl.setAttribute('href', `user.html?userId=${userData.id}`);

    //Address
    const pTextAddress = document.createElement('p');
    pTextAddress.classList.add('post_wrap-text');
    const userAd = 'https://www.google.com/maps/search/-37.3159,81.1496';
    pTextAddress.innerHTML = `<span>Address:</span> <a href=${userAd}>Apt.556, Kulas Light, Gwenborough, 92998-3874</a>`;
    articleEl.appendChild(pTextAddress);
    //Phone
    const pTextPhone = document.createElement('p');
    pTextPhone.classList.add('post_wrap-text');
    const userPho = 'tel:1-770-736-8031 x56442';
    pTextPhone.innerHTML = `<span>Phone:</span> <a href=${userPho}>1-770-736-8031 x56442</a>`;
    articleEl.appendChild(pTextPhone);
    //Website
    const pTextWebsite = document.createElement('p');
    pTextWebsite.classList.add('post_wrap-text');
    const userWeb = 'hildegard.org';
    pTextWebsite.innerHTML = `<span>Website:</span> <a href=${userWeb}>hildegard.org</a>`;
    articleEl.appendChild(pTextWebsite);
    //Company
    const pTextCompany = document.createElement('p');
    pTextCompany.classList.add('post_wrap-text');
    pTextCompany.innerHTML = `<span>Company:</span> Romaguera-Crona`;
    articleEl.appendChild(pTextCompany);

    //todos
    const todos = document.createElement('div');
    todos.classList.add('comments_wrap');
    containerEl.appendChild(todos);
    //todos  h3
    const todoTitle = document.createElement('h3');
    todoTitle.classList.add('comments_wrap-title');
    todoTitle.innerHTML = 'TODOs:';
    todos.appendChild(todoTitle);


    const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
    const todoList = await todoResponse.json();

    todoList.forEach(eltodo => {
        const todoEL = document.createElement('div');
        todoEL.classList.add('todo_wrap');
        if (eltodo.completed) {
            todoEL.classList.add('completed');
        }
        todoEL.innerHTML = eltodo.title;
        todos.appendChild(todoEL);
    });

    //albums and photo

    const albums = document.createElement('div');
    albums.classList.add('comments_wrap');
    containerEl.appendChild(albums);
    //albums  h3
    const albumsTitle = document.createElement('h3');
    albumsTitle.classList.add('comments_wrap-title');
    albumsTitle.innerHTML = 'Albums:';
    albums.appendChild(albumsTitle);

    //albums_wrap
    const albumsWrap = document.createElement('div');
    albumsWrap.classList.add('albums_wrap');

    const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums?userId=1');
    const albumsList = await albumsResponse.json();

    albumsList.forEach(album => {
        const albumId = album.id;
        const albumTitle = album.title;
        const albumATag = document.createElement('a');
        albumATag.classList.add('album');
        albumATag.setAttribute('href', `album.html?albumId=${albumId}`);
        const albumSpan = document.createElement('span');
        albumSpan.innerHTML = albumTitle;
        albumATag.appendChild(albumSpan);
        albumsWrap.appendChild(albumATag);

    });

    albums.appendChild(albumsWrap);

};

loadUserInfo();





