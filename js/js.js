//NavBar
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
    
}