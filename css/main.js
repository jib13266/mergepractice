$(document).ready(function() {
       var c=0;
       setInterval(function(){
           $("#wind").css("transform","rotate("+c+"deg)");
           c=c+10;
       },70
                   
                  );    
});
