var message = "Bruh, What You Wanna Do?";
function clickIE4() {
  if (event.button == 2) {
    alert(message);
    return false;
  }
}
function clickNS4(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      alert(message);
      return false;
    }
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } /* else {
      reveals[i].classList.remove("active");
    } */
  }
}

window.addEventListener("scroll", reveal);

// Validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contact-form');
  const inner = document.querySelector('.inner')
  const button = document.querySelector('.button')

  form.addEventListener('input', function() {
    let isValid = true;

    form.querySelectorAll('.form-control').forEach(function(control) {
      if (!control.checkValidity()) {
        isValid = false;
        return;
      }
    });

    if (isValid) {
      inner.classList.add('valid-form');
      button.classList.add('valid-button')
    } else {
      inner.classList.remove('valid-form');
      button.classList.remove('valid-button')
    }
  });
});