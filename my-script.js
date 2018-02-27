
  function myFunction() {
    var x = document.getElementById("mainNavigation");
    if (x.className === "mainNav") {
      x.className += " responsive";
      document.getElementById("menu").children[0].setAttribute('aria-expanded', 'true');
    } else {
      x.className = "mainNav";
      document.getElementById("menu").children[0].setAttribute('aria-expanded', 'false');
    }
  }
