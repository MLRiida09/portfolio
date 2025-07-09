const  progress = document.getElementById('progress') 
const  prev = document.getElementById('prev') 
const  next = document.getElementById('next') 
const  circels = document.querySelectorAll('.circle') 


let currentActive = 1 

next.addEventListener('click',()=> {
        currentActive++ 
        if(currentActive > circels.length) {
            currentActive = circels.length
        }
        update()
})

prev.addEventListener('click',()=> {
        currentActive-- 
        if(currentActive < 1) {
            currentActive = 1
        }
        update()
})
function update() { 
        circels.forEach((circel, idx) => {
        if(idx < currentActive) {
            circel.classList.add('active')
        } else {
            circel.classList.remove('active')
            }
})
const actives = document.querySelectorAll('.active')
progress.style.width = (actives.length - 1) / (circels.length - 1) * 100 + '%' 
if(currentActive === 1) {
    prev.disabled = true
} else if (currentActive === circels.length) {
    next.disabled = true
} else {
    prev.disabled = false
    next.disabled = false
}
}