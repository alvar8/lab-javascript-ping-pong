var board = new Board();


$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}




// $( document ).ready(function() {
//   var keys = {};
//    setInterval(checkControls, 30);
//
//     $(document).keydown(function(e){
//      keys[e.keyCode] = true;
//       }).keyup(function(e){
//       delete keys[e.keyCode];
//     });
//
//     function checkControls(){
//       console.log("entro checkcontrol");
//       if (keys[81]){
//         moveleft();
//       }else if (keys[65])
//         moveright();
//       }
//     }
//
//   function moveleft (){
//     console.log("left");
//      var a = parseInt($(".cuadrado").css('left'));
//     a +=8;
//     $(".cuadrado").css('left', a +'px');
//   }
//
//    function moveright (){
//     console.log("right");
//     var b = parseInt($(".cuadrado").css('left'));
//     b -=8;
//     $(".cuadrado").css('left', b +'px') ;
//   }
//
// });


var interval = setInterval(function(keycode) {

// var ballTop= parseInt($("#ball").css('top'));
// var ballLeft= parseInt($("#ball").css('left'));
// var ballTop2= parseInt($("#ball").css('top'));
// var ballLeft2= parseInt($("#ball").css('left'));
//
// ballTop += 30;
// ballTop2 -=30;
// ballLeft += 30;
// ballLeft2 -=30;
//
//
// if(ballTop>500){
//   $("#ball").css("top", ballTop2 +"px");
// }else if (ballTop<50){
//
// $("#ball").css("top", ballTop +"px");
//
//
// }






var a = parseInt($("#paddle1").css('top'));
var b = parseInt($("#paddle1").css('top'));
a += 30;
b -=30;

var c = parseInt($("#paddle2").css('top'));
var d = parseInt($("#paddle2").css('top'));
c += 30;
d -=30;



  $(document).on('keydown', function(e){
    var code = e.keyCode;
    //paddle1 lo movemos con las flechas de arriba y abajo
    if(a>500 || a<50){
      e.stopPropagation();
    }else{
    if(code == 40){
    $("#paddle1").css("top", a +"px");
  }else if(code == 38){
    $("#paddle1").css("top", b +"px");

  }
}
if(c>500 || c<50){
  //paddle2 lo movemos con w adelante s atras
  e.stopPropagation();
}else{
if(code == 87){
$("#paddle2").css("top", c +"px");
}else if(code == 83){
$("#paddle2").css("top", d +"px");

}
}


  });


},500);

var keys = {};





// function activatePaddle2() {
// }
//
// function renderGame(){
// }
//
// function renderScore(){
// }
//
// function renderBall(){
// }
//
// function renderPaddle(){
// }
