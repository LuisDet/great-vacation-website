var flkty = new Flickity('.carousel', {
  autoPlay: 5000,
  pageDots: false,
  wrapAround: true
})

document.querySelectorAll('.nav-bar-item').forEach(el =>
  el.addEventListener('click', () => {
    document.getElementById('menu').checked = false
  })
)
