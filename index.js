// $(document).ready(function(){








// POP UP MENU

$(function(){
  $(".catalog_header").click(function(e) {
    $(".catalog_menu").toggleClass("active");
  });
});


// MODAL WINDOW
$(function(){
    $(".user_block").click(function(e) {
      $(".modal_window").toggleClass("active");
    });

    $(".modal_close_img").click(function(e) {
        $(".modal_window").toggleClass("active");
      });
  });



// DESCRIPTION BUTTONS

$(function() {
  $(".nav_btn").hover(btn_hover_handler, btn_hover_handler);

  function btn_hover_handler() {
    index = $(this).index();
    $(this).find(".btn_wrap").toggleClass("hide");
    $($(".description__block")[index]).toggleClass("overlay");

  }
});



// BLOCK OPEN DEFAULT

$(function() {
$(".nav_btn").hover(btn_hover_on);

    function btn_hover_on() {
        index = $(this).index();

        clear_btn();
        show_overlay(index);
    };

    function clear_btn() {
        $(".nav_btn").removeClass("active");
        $(".description__block").removeClass("overlay");
        $(".btn_wrap").removeClass("hide");
    }

    function show_overlay(id) {
        $this_wrap = $($(".btn_wrap")[id]);
        $this_button = $($(".nav_btn")[id]);
        $this_overlay = $($(".description__block")[id]);
        $this_button.addClass("active");
        $this_overlay.addClass("overlay");
        $this_wrap.addClass("hide");
    }

    function btn_hover_off() {
        clear_btn();
        show_overlay(0);
    }

    show_overlay(0);
  });

  // SLIDER

//   var $slider_first = $(".slider1 > *:first-child");
//       var $slider_first = $(".slider1_txt");
  
//       var current_slider_id = 0;
//       var last_slider_id = 2;
  
//       $slider_buttons = $(".slider_buttons > *");
  
//       $(".slider_buttons > *").click(function(e){
//          id = $slider_buttons.index(e.currentTarget)
//           current_slider_id = id;
//           set_slider_to(id);
//       });
      
//       function set_slider_to(id) {
//          $slider_first.css("margin-left", id * (-100) + "%");
//           $slider_buttons.removeClass("active")
//           $($slider_buttons[id]).addClass("active");
//       }
      
//       $("header .container").mousewheel(function(e) {
//           return;
//           e.preventDefault();
//           var next = (e.deltaY > 0) ? -1 : 1;
  
//           current_slider_id += next;
          
//           if (current_slider_id > last_slider_id)
//               current_slider_id = 0;
//           else if (current_slider_id < 0)
//               current_slider_id = last_slider_id;
          
//         set_slider_to(current_slider_id);
//       });

//       $(".nav_btn").hover(btn_hover_on);
  
     
    $(function(){
        $(".slider_buttons__radio1").mouseover(function(e) {
          $(".slider1_txt").addClass("active");
        });
        $(".slider_buttons__radio1").mouseout(function(e) {
            $(".slider1_txt").toggleClass("active");
        });
        $(".slider_buttons__radio2").mouseover(function(e) {
            $(".slider2_txt").addClass("active");
          });
          $(".slider_buttons__radio2").mouseout(function(e) {
              $(".slider2_txt").toggleClass("active");
          });
          $(".slider_buttons__radio3").mouseover(function(e) {
            $(".slider3_txt").addClass("active");
          });
          $(".slider_buttons__radio3").mouseout(function(e) {
              $(".slider3_txt").toggleClass("active");
          });


     $(function() {
        $(".slider_buttons__radio").hover(btn_hover_on);
        
            function btn_hover_on() {
                index = $(this).index();
        
                clear_btn();
                show_overlay(index);
            };
        
            function clear_btn() {
                $(".slider_buttons__radio").removeClass("active");
                $(".slider_txt").removeClass("overlay");
            }
        
            function show_overlay(id) {
                $this_button = $($(".slider_buttons__radio")[id]);
                $this_overlay = $($(".slider_txt")[id]);
                $this_button.addClass("active");
                $this_overlay.addClass("overlay");
            }
        
            function btn_hover_off() {
                clear_btn();
                show_overlay(0);
            }
        
            show_overlay(0);
          });
        });