document.getElementById('navButton').addEventListener('click', function() {
    var navOptions = document.getElementById('navOptions');
    if (navOptions.classList.contains('hidden')) {
      navOptions.classList.remove('hidden');
    } else {
      navOptions.classList.add('hidden');
   }
  });




  document.addEventListener("DOMContentLoaded", function() {
    var animatedElement = document.querySelector('.animated-element');
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function handleScroll() {
      if (isElementInViewport(animatedElement)) {
        animatedElement.classList.add('animate');
        // Remove the event listener after the animation has been triggered
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    // Initial check in case the element is already in viewport
    handleScroll();
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  });

 
