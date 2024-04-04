document.getElementById('navButton').addEventListener('click', function() {
    var navOptions = document.getElementById('navOptions');
    if (navOptions.classList.contains('hidden')) {
      navOptions.classList.remove('hidden');
    } else {
      navOptions.classList.add('hidden');
   }
  });