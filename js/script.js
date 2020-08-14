let links = document.querySelectorAll('.menuLink');
console.log(links);

links.forEach(elem => {
    elem.onclick = () => {
        links.forEach(link => {
            link.classList.remove('active');
        })
        elem.classList.add('active');
    }
})