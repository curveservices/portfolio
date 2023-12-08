class Projects {
    projects = [{
        name: 'Battleships',
        description: 'A classic game of Battleships using Jest TDD',
        live: 'https://curveservices.github.io/battleships/',
        repo: 'https://github.com/curveservices/battleships',
        icon: '<i class="fa-solid fa-ship"></i>',
        img: 'https://github.com/curveservices/battleships/assets/101556296/0355a9eb-bf98-4bc1-a4e3-aa9287b05b32',
    }, {
        name: '',
        description: '',
        live: '',
        repo: '',
        icon: '',
        img: '',
    }, {
        name: '',
        description: '',
        live: '',
        repo: '',
        icon: '',
        img: '',
    }, {
        name: '',
        description: '',
        live: '',
        repo: '',
        icon: '',
        img: '',
    }, {
        name: '',
        description: '',
        live: '',
        repo: '',
        icon: '',
        img: '',
    }, {
        name: '',
        description: '',
        live: '',
        repo: '',
        icon: '',
        img: '',
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
    }
}