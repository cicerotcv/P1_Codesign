document.addEventListener('DOMContentLoaded', function() {
  // Igrediente 1: lendo as chaves e os valores 
  let data= coDesExtract()
  // Igrediente 2: Conectando os Valores no Firebase
  let db = coDesConnect('https://engineering-design-portfolio.firebaseio.com/')

  db.download('/portfolio/fisicos', function(data) {
    context = data
    coDesReplace('.navbar_items', context)
  
  })
})
