document.addEventListener('DOMContentLoaded', function() {
  // Igrediente 2: Conectando os Valores no Firebase
  let db = coDesConnect('https://engineering-design-portfolio.firebaseio.com/')
  // Igrediente 1: lendo as chaves e os valores 
  let data= coDesExtract()
  db.download('/', function(data) {
    context = data
    coDesReplace('.navbar_items', context)
  
  })
})
