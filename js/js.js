//LATERAL

var menu=document.getElementById('header--menuSandwitch')
var menuDesplegable=document.getElementById('menuDesplegable')
var left= window.getComputedStyle(menuDesplegable,null).getPropertyValue("left");

menu.addEventListener('click',HideShowMenu)

function HideShowMenu(){

  if(window.getComputedStyle(menuDesplegable,null).getPropertyValue("left")!='0px'){
    menuDesplegable.classList.add('menuDesplegableShow')
  }else{
    menuDesplegable.classList.remove('menuDesplegableShow')
   }
}

//MENU FLOTANTE
var menuFlotante=document.getElementById('menuFlotante')
var botonFlotante=document.getElementById('floatingButton')
var leftFlotante= window.getComputedStyle(menuDesplegable,null).getPropertyValue("left");

botonFlotante.addEventListener('click',ShowMenuFlotante);
menuFlotante.addEventListener('click',HideBotonFlotante)

function ShowMenuFlotante(){
  menuFlotante.classList.add('menuFlotanteShow')
  botonFlotante.classList.add('floatingButtonHide')
}
function HideBotonFlotante(){
  menuFlotante.classList.remove('menuFlotanteShow')
  botonFlotante.classList.remove('floatingButtonHide')
}

//CARDS SUBMENU
var obj=document.getElementById('card1')
obj.addEventListener('click',ShowHideObj)

function ShowHideObj(o){
  console.log(o)
  o.hidden=true
}


/* var obj=document.getElementById('card1')
obj.addEventListener('click',ShowHideObj)

function ShowHideObj(){
  console.log(obj.nextSibling.nextElementSibling.id)
} */





/* 
function HideMenuFlotante(){
  if(window.getComputedStyle(menuFlotante,null).getPropertyValue("left")!='0px'){
    menuFlotante.classList.add('menuFlotanteShow')
    menuDesplegable.classList.remove('menuDesplegableShow')
    botonFlotante.classList.add('floatingButtonHide')
  }
}

function ShowBotonFlotante(){
  botonFlotante.classList.remove('floatingButtonHide')
  menuFlotante.classList.remove('menuFlotanteShow')
  menuDesplegable.classList.remove('menuDesplegableShow')
}
window.onscroll=function(e){
  menuFlotante.classList.remove('menuFlotanteShow')
  menuDesplegable.classList.remove('menuDesplegableShow')
} */




// You could now get your value like




/* //NavBar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  //button floating
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems,{
        toolbarEnabled:true
    });
  });


function GetData(){
    var n=document.getElementById("numberDj").value;
    var e=document.getElementById('emailDj').value;
    if(!n&&!e){
        Email.send
        ({
            SecureToken : "6AAF8E03C62A08D220DA6A923714202F6383",
            To : 'djarrieta@dja.red',
            From : "djarrieta@dja.red",
            Subject : "This is the subject",
            Body : "And this is the body",
        }).then(
          message => alert(message)
        );
    }
    
} */