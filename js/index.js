const avaliation = document.querySelectorAll('#value');

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const av ={'value':e.target.elements['value'].value}
    
    localStorage.setItem('avaliation', JSON.stringify(av))

    window.location.href = '../page/thank-you.html';
})

avaliation.forEach(av => {
    av.addEventListener('click',()=>{
        removeActive(av)
        av.classList.add('active')
    })
})

function removeActive(element){
    avaliation.forEach((element) => {
        element.classList.remove('active')
    })
}