const avaliation = document.querySelectorAll('.value');

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    window.location.href = '../page/thank-you.html';
})


avaliation.forEach(av => {
    av.addEventListener('click',()=>{
        removeActive(av)
        av.classList.add('active')
        const item = {
            'valor': av.value
        }
        localStorage.setItem('avaliation', JSON.stringify(item))
    })
})

function removeActive(element){
    avaliation.forEach((element) => {
        element.classList.remove('active')
    })
}
