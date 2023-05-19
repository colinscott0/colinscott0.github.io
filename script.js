window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.pageYOffset;
  
    if (scrollPosition > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });