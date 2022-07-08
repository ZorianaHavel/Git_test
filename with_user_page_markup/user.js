const loadUserInfo = async () => {
    //container
    const containerEl = document.querySelector('.container');
    const userId = Number(new URL(window.location.href).searchParams.get('userId'));
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await userResponse.json();
    //h1
    const titleEl = document.createElement('h1');
    titleEl.classList.add('posts-title');
    titleEl.innerText = userData.name;
    containerEl.appendChild(titleEl);

    //article
    const articleEl = document.createElement('article');
    articleEl.classList.add('post_wrap');
    containerEl.appendChild(articleEl);

    //pName
    const pTextName = document.createElement('p');
    pTextName.classList.add('post_wrap-text');
    articleEl.appendChild(pTextName);
    pTextName.innerHTML = `<span>Username:</span> ${userData.name}`;
    //Email
    const pTextEmail = document.createElement('p');
    pTextEmail.classList.add('post_wrap-text');
    pTextEmail.innerHTML = `<span>Email:</span> <a href="mailto:${userData.email}">${userData.email}</a>`;
    articleEl.appendChild(pTextEmail);
    //Address
    const pTextAddress = document.createElement('p');
    pTextAddress.classList.add('post_wrap-text');
    pTextAddress.innerHTML = `<span>Address:</span> <a href="${userData.address.street}"> ${userData.address.street}</a>`;
    articleEl.appendChild(pTextAddress);
    //Phone
    const pTextPhone = document.createElement('p');
    pTextPhone.classList.add('post_wrap-text');
    pTextPhone.innerHTML = `<span>Phone:</span> <a href="${userData.phone}">${userData.phone}</a>`;
    articleEl.appendChild(pTextPhone);
    //Website
    const pTextWebsite = document.createElement('p');
    pTextWebsite.classList.add('post_wrap-text');
    pTextWebsite.innerHTML = `<span>Website:</span> <a href="${userData.website}">${userData.website}</a>`;
    articleEl.appendChild(pTextWebsite);
    //Company
    const pTextCompany = document.createElement('p');
    pTextCompany.classList.add('post_wrap-text');
    pTextCompany.innerHTML = `<span>Company:</span> ${userData.company.name}`;
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


    const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todoList = await todoResponse.json();
    todoList.sort((todo1, todo2) => Number(todo1.completed) - Number(todo2.completed));
    todoList.forEach(eltodo => {
        const todoEL = document.createElement('div');
        todoEL.classList.add('todo_wrap');
        if (eltodo.completed) {
            todoEL.classList.add('completed');
        }
        todoEL.innerHTML = eltodo.title;
        todos.appendChild(todoEL);
    });
    selectTodo(todos, todoTitle);
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

selectTodo = (todos, todoTitle) => {
    const todoList = document.querySelectorAll('.todo_wrap');
    todoList.forEach(todo => {
        todo.addEventListener('click', () => {
            if (todo.classList.contains('completed')) {
                todo.classList.remove('completed');
            } else {
                todo.classList.add('completed');
            }
            updateTodo(todos, todoTitle, todoList);
        });
    });
} 

updateTodo = (todoHTML, todoTitle, todoList) => {
    while (todoHTML.lastElementChild) {
        todoHTML.removeChild(todoHTML.lastElementChild);
    }
    todoHTML.appendChild(todoTitle);

    const todoListSorted = [].slice.call(todoList).sort((todo1, todo2) => Number(todo1.classList.contains('completed')) - Number(todo2.classList.contains('completed')));

    todoListSorted.forEach(todo => todoHTML.appendChild(todo));
};

loadUserInfo();