document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function(event) {
        const color = document.querySelector("#colors").value;
        document.querySelector("#hello").style.color = color;
        event.preventDefault();
      };
    })