export function projects(arr){
    const projects = arr.map((project) => projectContainer(project))

    const prev = domEl('a', '<', 'project-prev')
    const next = domEl('a', '>', 'project-next')
    projects.push(prev)
    projects.push(next)

    const dots = []
    for (let i = 0; i < arr.length; i++) {
        dots.push(domEl('span', '', 'project-dot'))
    }
    const dotsContainer = makeDiv( 'project-dots', dots)
    projects.push(dotsContainer)
    return makeDiv('project-container', projects)
 }

function projectContainer({img, name, description, code, live}) {
    const codeLink = makeLink('project-code', 'GitHub', code)
    const liveLink = makeLink('project-live', 'Live version', live)
    const linksContainer = makeDiv('project-link', [codeLink, liveLink])

    const descriptonText = domEl('p', description, 'project-description')
    const title = domEl('h3', name, 'project-name')
    const textContainer = makeDiv('project-text', [title, descriptonText, linksContainer] )

    const image = makeImg('image', img, name+' preview') 
    const imgContainer = makeDiv( 'project-image', image)

    const container = makeDiv('project', [imgContainer, textContainer])

    return container
}


function domEl(type, content, className) {
    const one = document.createElement(type)
    one.innerHTML =content
    one.classList.add(className)

    return one
}

function makeImg(className, src, alt) {
    const img = domEl('img', '', className)
    img.dataSrc = src
    img.alt = alt
    return img
}

function makeDiv(className, childrens) {
    const div = domEl('div', '', className)
    
    if (childrens.length > 1) childrens.forEach(e => {div.appendChild(e)})
    else div.appendChild(childrens)

    return div
}

function makeLink(className, content, href) {
    const link = domEl('a', content, className, href)
    link.href = href
    return link
}

