document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://engineering-design-portfolio.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.navbar_items', context)
  })
})
