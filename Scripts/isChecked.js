document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        swapStyles('/CSS/Darkmode.css')
      } else {
        // do that
        swapStyles('/CSS/Lightmode.css')
      }
    });
  });

var setTheme = localStorage.getItem('theme')
console.log('theme:', setTheme)
if (setTheme == null){
    swapStyle('../CSS/Lightmode.css')
}else{
    swapStyle(setTheme)
  }
  function swapStyle(sheet){
      document.getElementById('mystylesheet').href = sheet
      localStorage.setItem('theme', sheet)
  }

  $(document).ready(function(){
    var setdark = function () {
        $('#head').append('<link rel="stylesheet" href="CSS/dark.css" type="text/css" />');
    },
    setlight = function () {
        $('link[rel=stylesheet][href="CSS/dark.css type="text/css"]').remove();
    };
    
    $("#light").click(function () {
        localStorage.setItem('color', 'light');
        setlight();
    });
    
    $("#dark").click(function () {
        localStorage.setItem('color', 'dark');
        setdark();
    });
    
    if (localStorage.getItem('color') == 'light') {
        setlight(); 
    } 
    
    else if (localStorage.getItem('color') == 'dark') {
        setdark();
     }
    })