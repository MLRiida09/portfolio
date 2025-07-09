const panles = document.querySelectorAll(".panel");
panles.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        
    panel.classList.add('active')
})

})
function removeActiveClass(){
    panles.forEach((panel) => {
        panel.classList.remove('active')
    })
}

