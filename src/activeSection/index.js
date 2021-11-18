const items = document.getElementsByTagName('li')
const section = document.getElementsByTagName('section')
let options = {
  threshold: [0.5]
}

const makeActive = (e, obs) => {
    deleteActive(items)
    e.forEach(section =>{
      if(section.isIntersecting) addActive(section.target.id, items)
    })
}

const observeSection = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      observer.observe(arr[i])
    }
}

const deleteActive = (list) => {
    for (let i = 0; i < list.length; i++){
        if (list[i].classList.contains('active')) {
            list[i].classList.remove('active')
            break
        }
    }
}

const addActive = (id, list) => {
    for (let i = 0; i < list.length; i++) {
        const li = list[i]
        const a = li.firstElementChild 
        if (a.href.includes(id)) {
            li.classList.add('active')
            break
        }
    }
}
const observer = new IntersectionObserver(makeActive, options);

observeSection(section)
