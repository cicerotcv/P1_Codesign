document.addEventListener('DOMContentLoaded', function() {

  let params = coDesExtract()
  let value_1 = params['categoria']
  // let value_2 = params['projetos']['titulo']
  // let value_3 = params['projetos']['imagem']
  // let value_4 = params['projetos']['descricao']
  // let value_1 = params['']

  let db = coDesConnect('https://engineering-design-portfolio.firebaseio.com/')

  db.download('/', function(data) {


    //Navbar
    coDesReplace('.navbar_items', data)
    //Título da Página e Texto introdutório
    context = data['portfolio'][value_1]
     coDesReplace('.call-title',context)
     coDesReplace('.call-text',context)
    //Projetos
    context = data['portfolio'][value_1]
    context['categoria']=value_1
    coDesReplace('.project-list',context)


    // context = params['projetos'][value_3]
    // coDesReplace('.call-title',context)

    // context = params['projetos'][value_2]
    // coDesReplace('.call-title',context)

    // context = params['projetos'][value_2]
    // coDesReplace('.call-title',context)
    


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
