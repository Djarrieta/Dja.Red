function elemento(e){
  var obj=e.srcElement
  if(obj){ 
    switch(obj.id){
      case 'MenuSandwitch':
        var menuDesplegable=document.getElementById('menuDesplegable')
        if(!menuDesplegable.classList.contains('menuDesplegableShow')){
          menuDesplegable.classList.add('menuDesplegableShow')
        }else{
          menuDesplegable.classList.remove('menuDesplegableShow')
        }
        break;
      case 'BotonFlotante':
        var menuFlotante=document.getElementById('menuFlotante')
        var floatingButton=document.getElementById('floatingButton')
        menuFlotante.classList.add('menuFlotanteShow')
        floatingButton.classList.add('floatingButtonHide')
        break;
      case 'menuFlotante':
        var menuFlotante=document.getElementById('menuFlotante')
        var floatingButton=document.getElementById('floatingButton')
        menuFlotante.classList.remove('menuFlotanteShow')
        floatingButton.classList.remove('floatingButtonHide')
        break;
      case 'card--principal1__img':
      case 'card--principal1__text':
        var cardPrincipal1=document.getElementById('card--principal1')
        cardPrincipal1.classList.add('hideCard--principal')
        break;
      case 'card--secundario1__p':
        var cardPrincipal1=document.getElementById('card--principal1')
        cardPrincipal1.classList.remove('hideCard--principal')
        break;
      case 'card--principal2__img':
      case 'card--principal2__text':
        var cardPrincipal2=document.getElementById('card--principal2')
        cardPrincipal2.classList.add('hideCard--principal')
        break;
      case 'card--secundario2__p':
        var cardPrincipal2=document.getElementById('card--principal2')
        cardPrincipal2.classList.remove('hideCard--principal')
        break;
      case 'card--principal3__img':
      case 'card--principal3__text':
        var cardPrincipal3=document.getElementById('card--principal3')
        cardPrincipal3.classList.add('hideCard--principal')
        break;
      case 'card--secundario3__p':
        var cardPrincipal3=document.getElementById('card--principal3')
        cardPrincipal3.classList.remove('hideCard--principal')
        break;
          
    }
  }
}

