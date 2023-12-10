const estrellas = document.querySelectorAll('.estrella')
const calificacion = document.getElementById('calificacion')

estrellas.forEach((estrella, index) => {
  estrella.addEventListener('click', () => {
    let estrellaActual = index + 1
    calificacion.innerText = `${estrellaActual} de 5`

    estrellas.forEach((estrella, i) => {
      if (estrellaActual >= i + 1) {
        estrella.innerHTML = '&#9733'
        estrella.style.color = 'gold'
      } else {
        estrella.innerHTML = '&#9734'
      }
    })
  })
})
