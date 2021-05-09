document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        swapStyles('../CSS/Darkmode.css')
      } else {
        // do that
        swapStyles('../CSS/Lightmode.css')
      }
    });
  });