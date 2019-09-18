document.addEventListener('DOMContentLoaded', function() {

  let db = coDesConnect('https://engineering-design-portfolio.firebaseio.com/')

  db.download('/', function(data) {
    //Navbar
    // console.log(data)
    coDesReplace('.navbar_items', data)
    coDesReplace('.category-buttons', data)
    //Título da Página
    context = data['categoria'][value]
    console.log(context)
    coDesReplace('.call-title',data)
    


    // context = data['biblioteca'][value]
    // coDesReplace('title', context)

    // context = data
    // coDesReplace('.menu-list', context)

    // context = data['biblioteca'][value]
    // coDesReplace('.call', context)

    // context = data['biblioteca'][value]
    // coDesReplace('.book-list', context)
  })
})
