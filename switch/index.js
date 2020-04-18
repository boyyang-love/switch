
let $switch
let $screen 
$(function(){
    // 点击home开机
    $switch = $("#switch");
    $screen = $switch.find(".screen");
    $switch.find(".home-btn").on('click', function(){
        // if($switch.hasClass("on")){
        //     $switch.removeClass("on");
            
        // }else{
        //     $switch.addClass("on")
        // }
        $switch.toggleClass("on");
        if($switch.hasClass('on')){
            setTimeout(() => {
                $switch.find('.welcome-wrapper').addClass('bye');
                setTimeout(() => {
                    $switch.find('.inter-face-wrapper').addClass('show');
                }, 500);
            }, 1000);
        }else{
            $switch.find('.welcome-wrapper').removeClass('bye')
            $switch.find('.inter-face-wrapper').removeClass('show');
        }
        // $screen.load("../switch/views/welcome.html");
    })

  
})