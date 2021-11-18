import {projects} from './makeNodes.js'
const projectsContainer = document.getElementById('projects')
const projectsURL = 'https://gist.githubusercontent.com/kusznieryk/ab892e5b8448402cc79ef0a0ea54d6e8/raw/'

fetch(projectsURL)
    .then(r => r.json())
    .then(r => projects(r))
    .then(r => {
    projectsContainer.appendChild(r)
    projectsContainer.removeChild(projectsContainer.firstElementChild)
    })
