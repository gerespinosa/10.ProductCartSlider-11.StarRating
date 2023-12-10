const fotos = document.querySelectorAll('.galeria img')
const modal = document.getElementById('modal')
const color = document.getElementById('color-select')

const cambiarColor = () => {
  let nuevoEnlace

  fotos.forEach((img) => {
    const enlaceFoto = img.getAttribute('src')
    modal.setAttribute('src', enlaceFoto)

    switch (color.value) {
      case 'rojo':
        nuevoEnlace = enlaceFoto
          .replace('azul', 'roja')
          .replace('verde', 'roja')
        modal.setAttribute('src', nuevoEnlace)
        break
      case 'verde':
        nuevoEnlace = enlaceFoto
          .replace('azul', 'verde')
          .replace('roja', 'verde')
        modal.setAttribute('src', nuevoEnlace)
        break
      case 'azul':
        nuevoEnlace = enlaceFoto
          .replace('verde', 'azul')
          .replace('roja', 'azul')
        modal.setAttribute('src', nuevoEnlace)
        break
    }
    img.setAttribute('src', nuevoEnlace)
  })
}
color.addEventListener('change', cambiarColor)

fotos.forEach((img) => {
  img.addEventListener('click', () => {
    const enlace = img.getAttribute('src')
    modal.setAttribute('src', enlace)
  })
})

const menos = document.getElementById('menos')
const mas = document.getElementById('mas')
let qty = document.getElementById('input-qty')

// añadimos el código para que el valor de la cantidad aumente o disminuya

menos.onclick = () => {
  qty.value--
}
mas.onclick = () => {
  qty.value++
}
