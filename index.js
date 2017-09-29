$(document).ready(function(){

    var $slider_first = $(".slider1 > *:first-child");
    var $slider_first = $(".slider1_txt");

    var current_slider_id = 0;
    var last_slider_id = 2;

    $slider_buttons = $(".slider_buttons > *");

    $(".slider_buttons > *").click(function(e){
        id = $slider_buttons.index(e.currentTarget)
        current_slider_id = id;
        set_slider_to(id);
    });
    
    function set_slider_to(id) {
        $slider_first.css("margin-left", id * (-100) + "%");
        $slider_buttons.removeClass("active")
        $($slider_buttons[id]).addClass("active");
    }

    $("header .container").mousewheel(function(e) {
        return;
        e.preventDefault();
        var next = (e.deltaY > 0) ? -1 : 1;

        current_slider_id += next;
        
        if (current_slider_id > last_slider_id)
            current_slider_id = 0;
        else if (current_slider_id < 0)
            current_slider_id = last_slider_id;
        
        set_slider_to(current_slider_id);
    });

    $(".nav_btn").hover(btn_hover_on);

    function btn_hover_on() {
        index = $(this).index();

        show_overlay(index);
    };

    function btn_hover_off() {
        show_overlay(0);
    }

    show_overlay(0);
    set_slider_to(0);
    
});

function get_my_height(selector) {
    return $(selector).height();
}

function show_overlay(id) {
    clear_btn();
    $this_button = $($(".nav_btn")[id]);
    $this_overlay = $($(".description__block")[id]);
    $this_button.addClass("active");
    $this_overlay.addClass("overlay");
    return "success";
}

function clear_btn() {
    $(".nav_btn").removeClass("active");
    $(".description__block").removeClass("overlay");
}

//   
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
 