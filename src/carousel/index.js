import {observeImages} from '../lazyLoading/index'
let projectIndex = 1;

let projects

let dots

let projectsContainer = document.getElementById('projects')

const start = () => {
    projects = projectsContainer.getElementsByClassName("project");
    dots = projectsContainer.getElementsByClassName("project-dot");
    
    observeImages(projectsContainer)
    showProject(projectIndex)
    observer.disconnect()
    const dotsA = Array.from(dots)
    dotsA.forEach((dot, i) => {
        dot.addEventListener('click', () => currentProject(i + 1))
    })

    const next = projectsContainer.getElementsByClassName('project-next')[0]
    const prev = projectsContainer.getElementsByClassName('project-prev')[0]

    next.addEventListener('click', () => plusProject(1))
    prev.addEventListener('click', ()=> plusProject(-1))
}
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(start)
observer.observe(projectsContainer, config)


function plusProject(n) {
  showProject(projectIndex += n);
}

function currentProject(n) {
  showProject(projectIndex = n);
}

function showProject(n) {
  if (n > projects.length) {projectIndex = 1}    
  if (n < 1) {projectIndex = projects.length}
  for (let i = 0; i < projects.length; i++) {
      const proj = projects[i]
      const list = proj.classList
     if(list.contains('visible')) list.remove('visible')
      setTimeout(()=>{
        proj.style.display ='none'
      }, 400)
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  projects[projectIndex-1].classList.add('visible')  
      setTimeout(()=>{
        projects[projectIndex-1].style.display ='flex'
      }, 400)
  dots[projectIndex-1].className += " active";
}




