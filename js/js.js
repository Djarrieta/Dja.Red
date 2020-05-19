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
      case 'card--principal__img':
      case 'card--principal__text':
        var cardPrincipal1=document.getElementById('card--principal1')
        cardPrincipal1.classList.add('hideCard--principal')
        break;
      case 'card--secundario__p':
        var cardPrincipal1=document.getElementById('card--principal1')
        cardPrincipal1.classList.remove('hideCard--principal')
        break;
    }
  }
}

