/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {

  $( "li:eq(0)" ).click(function () {
      $( "li:eq(1)" ).show().animate({ width: "90%" }, 1000 )
        .animate({ fontSize: "24px" }, 1000 )
        .animate({ borderRightWidth: "15px" }, 1500 );    
  });
  
  $( "li:eq(1)" ).click(function () {
    $( "li:eq(2)" ).show().animate({ width: "90%" }, 1000 )
        .animate({ fontSize: "24px" }, 1000 )
        .animate({ borderLeftWidth: "15px" }, 1000 );
  });
  
  $( "li:eq(2)" ).click(function () {
    $( "li:eq(3)" ).show().animate({ width: "90%" }, 1000 )
        .animate({ fontSize: "24px" }, 1000 )
        .animate({ borderRightWidth: "15px" }, 1500 );
  }); 
  
  var sound = $('#beep');
  $( "li:eq(3)" ).click(function () {
      sound[0].play();
      $('#img').show();
      $(this).parent().css("background", "url(../img/happy-birthday-ppt-background-632.png) no-repeat");
  });
});
