$(document).ready(function(){

    $(".nav_btn").hover(btn_hover_handler, btn_hover_handler);

    function btn_hover_handler() {
        index = $(this).index();
        $(this).find(".btn_wrap").toggleClass("hide");
        $($(".description__block")[index]).toggleClass("overlay");
    };
});




//   var $slider_first = $(".slider1 > *:first-child");
//   var $slider_first = $(".slider1_txt");
//   });
//   $(".slider_buttons > *").mouseover(function(e){
//     id = $(".slider_buttons > *").index(e.currentTarget)
//     $(".slider_buttons > *").removeClass("active")
//     $(this).addClass("active")
//     set_slider_to(id);
//   })

//   function set_slider_to(id) {
//     $slider_first.css("margin-left", id * (-100) + "%");
//   }
// });


// SLIDER 1









$(function(){
  $(".catalog_header").click(function(e) {
    $(".catalog_menu").toggleClass("active");
  });

  // document.querySelector(".catalog_header").addEventListener('click', function(e) {
  //     document.querySelector(".catalog_menu").classList.toggle("active");
  //   })
  
  // $(".container_header_left_search").on('mouseenter', function(e) {
  //   $(".span_search").add("open");
  //   $(".container_header_left_search").add("open");
  // });
  
  // $(".container_header_left_search").on('mouseleave', function(e) {
  //   $(".span_search").remove("open");
  //   $(".container_header_left_search").remove("open");
  // });
});




// BTN DELIVERY

// $(function() {
//   $(".nav_btn").mouseover(function(e) {
//     $(".btn_wrap").toggleClass("hide");
// });
//     $(".nav_btn").mouseout(function(e) {
//       $(".btn_wrap").toggleClass("hide");
//   });
// });

// $(function() {
//   $(".nav_btn").mouseover(function(e) {
//     $(".description__block").toggleClass("overlay");
// });
//     $(".nav_btn").mouseout(function(e) {
//       $(".description__block").toggleClass("overlay");
//   });
// });


// // BTN2




// $(function() {
//   $(".nav_btn2").mouseover(function(e) {
//     $(".btn_wrap2").toggleClass("hide");
// });
//     $(".nav_btn2").mouseout(function(e) {
//       $(".btn_wrap2").toggleClass("hide");
//   });
// });


// $(function() {
//   $(".nav_btn2").mouseover(function(e) {
//     $(".description__block2").toggleClass("overlay");
// });
//     $(".nav_btn2").mouseout(function(e) {
//       $(".description__block2").toggleClass("overlay");
//   });
// });



// // BTN3

// $(function() {
//   $(".nav_btn3").mouseover(function(e) {
//     $(".btn_wrap3").toggleClass("hide");
// });
//     $(".nav_btn3").mouseout(function(e) {
//       $(".btn_wrap3").toggleClass("hide");
//   });
// }); 

// $(function() {
//   $(".nav_btn3").mouseover(function(e) {
//     $(".description__block3").toggleClass("overlay");
// });
//     $(".nav_btn3").mouseout(function(e) {
//       $(".description__block3").toggleClass("overlay");
//   });
// }); 



// ICONS WHITE
 