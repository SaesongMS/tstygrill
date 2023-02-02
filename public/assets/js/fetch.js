document.addEventListener("DOMContentLoaded", function() {
  var but1 = document.getElementById("edit");
  but1.addEventListener('click', function(){
      fetch("http://localhost/projekt_aplikacje/assets/data/edit.txt")
      .then( response => {return response.text();} )
      .then( dane => { document.getElementById("container").innerHTML = dane; })
  }, false);
})