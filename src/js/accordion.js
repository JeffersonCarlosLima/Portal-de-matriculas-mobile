function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("title-cabecalho") == -1) {
      x.className += "title-cabecalho";

     
    } else {
      x.className = x.className.replace("title-cabecalho", "");

      
    }
  }

  