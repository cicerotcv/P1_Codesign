
document.addEventListener('DOMContentLoaded', function() {
  // Igrediente 2: Conectando os Valores no Firebase
  let db = coDesConnect('https://engineering-design-portfolio.firebaseio.com/')
  // Igrediente 1: lendo as chaves e os valores 
  // let data = coDesExtract()
  // for(let key in data) {
  //   /*
  //     O resultado deste loop pode ser visto no console.
  //   */
  //   console.log(data[key])
  // }

  db.download('/', function(data) {

    let new_data = {
      
    }
    // for(let key in data){
    //   console.log(key)
      console.log(data)
      coDesReplace('.navbar_items', data)
      coDesReplace('.category-buttons', data)
    // }
  })
})
