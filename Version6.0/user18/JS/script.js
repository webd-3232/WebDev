function changeText() {
    document.getElementById("textChange").innerHTML = "<ul>Thanks for liking my Webpage</u>";
}

function openWin() {
    window.open("https://www.w3schools.com","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
}

function uppercase() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function botton() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  function paragraph() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  function highlight(x) {
    x.style.background = "blue";
  }

  function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
  }

  function page() {
    alert("Page is loaded");
  }