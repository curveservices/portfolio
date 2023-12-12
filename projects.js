
class Projects {
    projects = [{
        name: 'Battleships',
        description: 'A classic game of Battleships using Jest test driven development. Play against the computer, part of The Odin Project Full-stack Javascript course.',
        live: 'https://curveservices.github.io/battleships/',
        repo:'https://github.com/curveservices/battleships',
        icon: 'https://github.com/curveservices/battleships/blob/main/dist/assets/ship.png?raw=true',
        img: 'https://github.com/curveservices/battleships/assets/101556296/0355a9eb-bf98-4bc1-a4e3-aa9287b05b32'
    }, {
        name: 'Weather app',
        description: 'A basic weather app, I created a basic weather app using weatherAPI.com, Part of The Odin Project Full-stack JavaScript course.',
        live: 'https://curveservices.github.io/weather-app/',
        repo: 'https://github.com/curveservices/weather-app',
        icon: 'https://github.com/curveservices/weather-app/blob/main/dist/assets/116.png?raw=true',
        img: 'https://github.com/curveservices/weather-app/assets/101556296/1de7ba14-ac98-4861-8dbc-42486e1ba2ca'
    }, {
        name: 'Tic-Tac-Toe',
        description: 'Tic Tac Toe. A two player game that you can play in your browser. Part of The Odin Project - Full stack Javascript course.',
        live: 'https://curveservices.github.io/tic-tac-toe/',
        repo: 'https://github.com/curveservices/tic-tac-toe/blob/main/README.md',
        icon: 'https://github.com/curveservices/tic-tac-toe/blob/main/assets/tic-tac-toe.png?raw=true',
        img: 'https://user-images.githubusercontent.com/101556296/230607326-48a15036-69c6-4089-bd16-f36d493116e0.png',
    }, {
        name: 'To-Do List',
        description: 'A ToDo List application, create projects and tasks. Part of The Odin Project Full-stack JavaScript course.',
        live: 'https://curveservices.github.io/todo-list/#',
        repo: 'https://github.com/curveservices/todo-list/blob/main/README.md',
        icon: 'https://github.com/curveservices/todo-list/blob/main/dist/checklist.png?raw=true',
        img: 'https://github.com/curveservices/todo-list/assets/101556296/95d23ae1-79e1-438c-aa8d-aa5e667c99f7',
    }, {
        name: 'Library app',
        description: 'A simple browser based book library. Create a library of books read or waiting to read. Part of The Odin Project Full-stack JavaScript course.',
        live: 'https://curveservices.github.io/Library/',
        repo: 'https://github.com/curveservices/Library/tree/main',
        icon: 'https://github.com/curveservices/Library/blob/main/assets/book-stack.png?raw=true',
        img: 'https://user-images.githubusercontent.com/101556296/227719310-f121be57-b7c9-40c6-ae5f-048ca0a1ed39.png',
    }, {
        name: 'Calculator',
        description: ' A simple browser based Javascript calculator. Part of The Odin Project Foundation course',
        live: 'https://curveservices.github.io/calculator/',
        repo: 'https://github.com/curveservices/calculator',
        icon: 'https://github.com/curveservices/calculator/blob/main/images/favicon_io/favicon-32x32.png?raw=true',
        img: 'https://user-images.githubusercontent.com/101556296/220672876-6a473a2e-c8e8-43ab-8288-a3f61689cae4.png',
    }];

    constructor() {
        this.build();
    }

    build() {
        this.projects.forEach(project => {
            const section = document.createElement('section');
            section.innerHTML = this.template(project);
            document.getElementById('projects').appendChild(section);
        })
    };

    template(project) {
        return `
        <img class="project-image" src="${project.img}" alt="Project Screenshot">
        <div class="project-header">
        <img class="project-icon" src="${project.icon}" alt="Project Icon" loading="lazy">
            <h4><a href="${project.live}">${project.name}</a></h4>
            <div class="project-links">
                <a href="${project.repo}"><svg class="fa-brands" xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                <a href="${project.live}"><svg class="fa-brands" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>
            </div>
        </div>
        <p class="project-description">${project.description}</p> 
        `;
    }
};

const project = new Projects
