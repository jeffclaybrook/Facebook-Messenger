const searchBar = () => {
    const el = document.createElement('div');
    el.classList.add('search');
    el.innerHTML = `
    <form class="search-bar">
        <i class="fa-solid fa-search"></i>
        <input type="text" placeholder="Search">
    </form>
    `;
    document.getElementById('chats').appendChild(el);
}

const carouselBar = () => {
    const el = document.createElement('div');
    el.classList.add('carousel');
    el.innerHTML = `<ul></ul>`;
    document.getElementById('chats').appendChild(el);
}

const chatsList = () => {
    const el = document.createElement('div');
    el.classList.add('list');
    el.innerHTML = `<ul></ul>`;
    document.getElementById('chats').appendChild(el);
}

const recentCalls = () => {
    const el = document.createElement('div');
    el.classList.add('recent');
    el.innerHTML = `
    <h2>No calls</h2>
    <p>Recent calls will appear here.</p>
    <button aria-label="Start a Call">Start a Call</button>
    `;
    document.getElementById('calls').appendChild(el);
}

const suggestionsHeading = () => {
    const el = document.createElement('div');
    el.classList.add('heading');
    el.innerHTML = `<h5>Suggestions</h5>`;
    document.getElementById('calls').appendChild(el);
}

const callsList = () => {
    suggestionsHeading();
    const el = document.createElement('div');
    el.classList.add('list');
    el.innerHTML = `<ul></ul>`;
    document.getElementById('calls').appendChild(el);
}

const facebookUpdatesHeading = () => {
    const el = document.createElement('div');
    el.classList.add('heading');
    el.innerHTML = `
    <h5>Facebook updates (3)</h5>
    <button aria-label="See all">See All</button>
    `;
    document.getElementById('people').appendChild(el);
}

const facebookUpdates = () => {
    facebookUpdatesHeading();
    const el = document.createElement('div');
    el.classList.add('updates');
    el.innerHTML = `<ul></ul>`;
    document.getElementById('people').appendChild(el);
}

const activeNowHeading = () => {
    const el = document.createElement('div');
    el.classList.add('heading');
    el.innerHTML = `<h5>Active now (40)</h5>`;
    document.getElementById('people').appendChild(el);
}

const peopleList = () => {
    activeNowHeading();
    const el = document.createElement('div');
    el.classList.add('list');
    el.innerHTML = `<ul></ul>`;
    document.getElementById('people').appendChild(el);
}

const storiesGrid = () => {
    const el = document.createElement('div');
    el.classList.add('grid');
    el.innerHTML = `<ul></ul>`;
    document.getElementById('stories').appendChild(el);
}

const navBar = () => {
    const tabs = document.querySelectorAll('nav a');
    const title = document.getElementById('title');
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const titles = ['Chats', 'Calls', 'People', 'Stories'];
    const classes = ['fa-camera', 'fa-phone'];
    const classes2 = ['fa-pencil', 'fa-video', 'fa-address-book'];
    const sections = [
        document.getElementById('chats'),
        document.getElementById('calls'),
        document.getElementById('people'),
        document.getElementById('stories')
    ];
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            sections.forEach(section => {
                section.classList.remove('active');
            })
            tabs[i].classList.add('active');
            sections[i].classList.add('active');
            title.innerText = titles[i];
            btn1.innerHTML = `<i class="fa-solid ${classes[i]}"></i>`;
            btn2.innerHTML = `<i class="fa-solid ${classes2[i]}"></i>`;
            i >= 2 ? btn1.style.display = 'none' : btn1.style.display = 'inline-flex';
            i >= 3 ? btn2.style.display = 'none' : btn2.style.display = 'inline-flex';
        })
    })
}

const scrollShadow = () => {
    const el = document.querySelector('header');
    window.addEventListener('scroll', () => {
        window.pageYOffset > 0
        ? el.classList.add('shadow')
        : el.classList.remove('shadow')
    })
}

searchBar();
carouselBar();
chatsList();
recentCalls();
callsList();
facebookUpdates();
peopleList();
storiesGrid();
navBar();
scrollShadow();

const updatesList = async () => {
    try {
        const res = await fetch('https://randomuser.me/api?nat=us&results=3');
        const data = await res.json();
        const users = data.results;
        users.forEach(user => {
            user = {
                first: user.name.first,
                last: user.name.last,
                image: user.picture.large
            }

            updateItems = () => {
                const el = document.createElement('li');
                el.innerHTML =  `
                <img src="${user.image}" alt="${user.first} ${user.last}" width="38px" height="38px" loading="lazy">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit sit...</p>
                <span>7h</span>
                `;
                document.querySelector('#people .updates ul').appendChild(el);
            }

            updateItems()
        })
    } catch {
        console.log('Error')
    }
}

updatesList();

const getUsers = async () => {
    try {
        const res = await fetch('https://randomuser.me/api?nat=us&results=40');
        const data = await res.json();
        const users = data.results;
        users.forEach(user => {
            user = {
                first: user.name.first,
                last: user.name.last,
                image: user.picture.large
            }

            carouselItems = () => {
                const el = document.createElement('li');
                el.innerHTML = `
                <img src="${user.image}" alt="${user.first} ${user.last}" width="52px" height="52px" loading="lazy">
                <h4>${user.first}</h4>
                <h4>${user.last}</h4>
                `;
                document.querySelector('.carousel ul').appendChild(el);
            }

            chatItems = () => {
                const el = document.createElement('li');
                el.innerHTML =  `
                <img src="${user.image}" alt="${user.first} ${user.last}" width="52px" height="52px" loading="lazy">
                <div class="wrapper">
                    <h3>${user.first} ${user.last}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit impedit veniam sunt molestiae, voluptatem fugit assumenda quod recusandae earum ipsam perferendis unde fugiat. Dicta ullam eveniet necessitatibus, ipsam error obcaecati.</p>
                </div>
                `;
                document.querySelector('#chats .list ul').appendChild(el);
            }

            callItems = () => {
                const el = document.createElement('li');
                el.innerHTML =  `
                <img src="${user.image}" alt="${user.first} ${user.last}" width="38px" height="38px" loading="lazy">
                <h3>${user.first} ${user.last}</h3>
                <button aria-label="Phone"><i class="fa-solid fa-phone"></i></button>
                <button aria-label="Video"><i class="fa-solid fa-video"></i></button>
                `;
                document.querySelector('#calls .list ul').appendChild(el);
            }

            peopleItems = () => {
                const el = document.createElement('li');
                el.innerHTML =  `
                <img src="${user.image}" alt="${user.first} ${user.last}" width="38px" height="38px" loading="lazy">
                <h3>${user.first} ${user.last}</h3>
                `;
                document.querySelector('#people .list ul').appendChild(el);
            }

            storiesItems = () => {
                const el = document.createElement('li');
                el.innerHTML = `
                <div class="wrapper" style="background: url('${user.image}') no-repeat center center / cover">
                    <img src="${user.image}" alt="${user.first} ${user.last}" width="38px" height="38px" loading="lazy">
                    <h3>${user.first} ${user.last}</h3>
                </div>
                `;
                document.querySelector('#stories .grid ul').appendChild(el);
            }

            carouselItems()
            chatItems()
            callItems()
            peopleItems()
            storiesItems()
        })
    } catch {
        document.querySelector('main').innerHTML = `<h2>Ooops! We're having trouble loading your content</h2>`
    }
}

getUsers();

const searchChats = () => {
    const el = document.querySelector('.search-bar input');
    const liTags = document.querySelectorAll('#chats .list li');
    const val = el.value.toUpperCase();
    for (let i = 0; i < liTags.length; i++) {
        const li = liTags[i];
        li.innerHTML.toUpperCase().indexOf(val) > -1
        ? liTags[i].style.display = ''
        : liTags[i].style.display = 'none'
    }
}

document.querySelector('.search-bar input').addEventListener('keyup', searchChats)