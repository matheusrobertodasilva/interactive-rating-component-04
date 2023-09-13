const component = document.querySelector('.content__thank-you')

let avaliacao = localStorage.getItem('avaliation')

const avaliacaoConvertido = JSON.parse(avaliacao)

component.innerHTML += `
<p class="thank__subtitle">You selected ${avaliacaoConvertido.valor} out of 5</p>
<h1 class="thank__title">Thank you!</h1>
<p class="thank__text"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
` 