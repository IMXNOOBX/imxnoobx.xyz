$(document).ready(function() {
    $(this).mousemove(function(e) {
      $("#light").css({
        "top": e.pageY - 250,
        "left": e.pageX - 250
      })
    }).mousedown(function(e) {
      switch (e.which) {
          case 1:
              $("#light").toggleClass("light-off");
              break;
          case 2:
              console.log('Middle Mouse button pressed.');
              break;
          case 3:
              console.log('Right Mouse button pressed.');
              break;
          default:
              console.log('You have a strange Mouse!');
      }
    })
  })