$(function(){


    let dLeft = $('#floatdiv').offset().left;
    $("nav ul li").click(function(){
        var i = ($this).index();
         var offset_t =  $('section>article').eq(i).offset().left;
   
    
    $("html,body").stop().animate({scrollLeft:offset_t},1300);
    $("nav ul li").removeClass("on");
    $("nav ul li").eq(i).addClass("on");
    return false;
 });
  $(window).scroll(function(){
        let sct = $(this).scrollLeft();
        $('#sTop').text(sct);
        $('#floatdiv').stop().animate({left:dLeft+sct},500)
    if(sct > 0){
            $("nav").addClass("on");  
        }else{
            $("nav").removeClass("on");
        }
        $(".section > article").each(function(i, e1){
            if(sct >= $(".section > article").eq(i).offset().left){
                $("nav ul li").removeClass("on")
                $("nav ul li").eq(i).addClass("on")
                $('#floatdiv ul li').removeClass("on");
                $('#floatdiv ul li').eq(i).addClass("on");
            }
        });
       if(sct >= 1900){
         $("nav").addClass("on");
       }else{
        $("nav").removeClass("on");
       }
    }); 
     $("nav ul li").click(function(){
            var i =$(this).index();
             let offset_t = $(".section > article").eq(i).offset().top;
             $("html,body").stop().animate({scrollTop:offset_t},1000);
            
            return false;
        });
     $("#floatdiv ul li").click(function(){
            var i = $(this).index();
             let offset_t = $(".section > article").eq(i).offset().top;
             $("html,body").stop().animate({scrollTop:offset_t},1000);
        
            return false;
        });



});