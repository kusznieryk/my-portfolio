export const observeImages =(e)=> {
    const images =Array.from(e.getElementsByTagName('img')) 
    images.forEach(img => observer.observe(img))
}
const mutateImages = (e) => {
    e.forEach(entity => {
        if (entity.isIntersecting) {
            const img = entity.target
            img.src = img.dataSrc
            observer.unobserve(img)
        }
    })
}
const options = {
        root: document,
        threshold: 1.0
}
const observer = new IntersectionObserver(mutateImages, options)
