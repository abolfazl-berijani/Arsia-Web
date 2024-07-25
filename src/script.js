CheckS1=true
$( "#RotSl-1" ).click(function() {     
    if (CheckS1==true) {
        $("#Pr-1").css({"margin-top": "5%", "transition": "1s"});
        $("#RotSl-1").css({"rotate": "180deg", "transition": "1s"});
        CheckS1 = false;
    } else if(CheckS1==false) {
        $("#Pr-1").css({"margin-top": "45%", "transition": "1s"});
        $("#RotSl-1").css({"rotate": "360deg", "transition": "1s"});
        
        CheckS1=true;
    }
});

CheckS2=true
$( "#RotSl-2" ).click(function() {     
    if (CheckS2==true) {
        $("#Pr-2").css({"margin-top": "5%", "transition": "1s"});
        $("#RotSl-2").css({"rotate": "180deg", "transition": "1s"});
        CheckS2 = false;
    } else if(CheckS2==false) {
        $("#Pr-2").css({"margin-top": "45%", "transition": "1s"});
        $("#RotSl-2").css({"rotate": "360deg", "transition": "1s"});
        
        CheckS2=true;
    }
});

CheckS3=true
$( "#RotSl-3" ).click(function() {     
    if (CheckS3==true) {
        $("#Pr-3").css({"margin-top": "5%", "transition": "1s"});
        $("#RotSl-3").css({"rotate": "180deg", "transition": "1s"});
        CheckS3 = false;
    } else if(CheckS3==false) {
        $("#Pr-3").css({"margin-top": "45%", "transition": "1s"});
        $("#RotSl-3").css({"rotate": "360deg", "transition": "1s"});
        
        CheckS3=true;
    }
});


CheckS4=true
$( "#RotSl-4" ).click(function() {     
    if (CheckS4==true) {
        $("#Pr-4").css({"margin-top": "5%", "transition": "1s"});
        $("#RotSl-4").css({"rotate": "180deg", "transition": "1s"});
        CheckS4 = false;
    } else if(CheckS4==false) {
        $("#Pr-4").css({"margin-top": "45%", "transition": "1s"});
        $("#RotSl-4").css({"rotate": "360deg", "transition": "1s"});
        
        CheckS4=true;
    }
});

CheckS5=true
$( "#RotSl-5" ).click(function() {     
    if (CheckS5==true) {
        $("#Pr-5").css({"margin-top": "5%", "transition": "1s"});
        $("#RotSl-5").css({"rotate": "180deg", "transition": "1s"});
        CheckS5 = false;
    } else if(CheckS5==false) {
        $("#Pr-5").css({"margin-top": "45%", "transition": "1s"});
        $("#RotSl-5").css({"rotate": "360deg", "transition": "1s"});
        
        CheckS5=true;
    }
});

CheckS6=true
$( "#RotSl-6" ).click(function() {     
    if (CheckS6==true) {
        $("#Pr-6").css({"margin-top": "5%", "transition": "1s"});
        $("#RotSl-6").css({"rotate": "180deg", "transition": "1s"});
        CheckS6 = false;
    } else if(CheckS6==false) {
        $("#Pr-6").css({"margin-top": "45%", "transition": "1s"});
        $("#RotSl-6").css({"rotate": "360deg", "transition": "1s"});
        
        CheckS6=true;
    }
});

$("#Btn-1").click(function(){
    $("#Rezome-1").hide()
    $("#Rezome-2").hide()
    $("#Rezome-3").hide()
    $("#Rezome-4").hide()
    $("#Rezome-5").hide()
    $("#Rezome-6").hide()
    $("#Rezome-1").fadeIn(300)
  });
  $("#Btn-2").click(function(){
    $("#Rezome-1").hide()
    $("#Rezome-2").hide()
    $("#Rezome-3").hide()
    $("#Rezome-4").hide()
    $("#Rezome-5").hide()
    $("#Rezome-6").hide()
    $("#Rezome-2").fadeIn(300)
  });
  $("#Btn-3").click(function(){
    $("#Rezome-1").hide()
    $("#Rezome-2").hide()
    $("#Rezome-3").hide()
    $("#Rezome-4").hide()
    $("#Rezome-5").hide()
    $("#Rezome-6").hide()
    $("#Rezome-3").fadeIn(300)
  });
  $("#Btn-4").click(function(){
    $("#Rezome-1").hide()
    $("#Rezome-2").hide()
    $("#Rezome-3").hide()
    $("#Rezome-4").hide()
    $("#Rezome-5").hide()
    $("#Rezome-6").hide()
    $("#Rezome-4").fadeIn(300)
  });
  $("#Btn-5").click(function(){
    $("#Rezome-1").hide()
    $("#Rezome-2").hide()
    $("#Rezome-3").hide()
    $("#Rezome-4").hide()
    $("#Rezome-5").hide()
    $("#Rezome-6").hide()
    $("#Rezome-5").fadeIn(300)
  });
  $("#Btn-6").click(function(){
    $("#Rezome-1").hide()
    $("#Rezome-2").hide()
    $("#Rezome-3").hide()
    $("#Rezome-4").hide()
    $("#Rezome-5").hide()
    $("#Rezome-6").hide()
    $("#Rezome-6").fadeIn(300)
  });

$(document).ready(function () {
    var $slider = $('#MasterSlid img');
    var currentIndex = 0;

    function showSlide(index) {
        $slider.hide().eq(index).fadeIn();
        if (currentIndex == 5){
            currentIndex = 0
        }
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % $slider.length;
        showSlide(currentIndex);
    }
    function kol() {
        alert(currentIndex)
    }
    function Checkou() {
        if(currentIndex==0){
        
            $("#Pk-2").css({"background-color":"lightgray"})
            $("#Pk-3").css({"background-color":"lightgray"})
            $("#Pk-4").css({"background-color":"lightgray"})
            $("#Pk-5").css({"background-color":"lightgray"})
            $("#Pk-1").css({"background-color":"purple"})
        
        }
        else if(currentIndex==1){
            $("#Pk-1").css({"background-color":"lightgray"})
        
            $("#Pk-3").css({"background-color":"lightgray"})
            $("#Pk-4").css({"background-color":"lightgray"})
            $("#Pk-5").css({"background-color":"lightgray"})
            $("#Pk-2").css({"background-color":"purple"})
        }
        else if(currentIndex==2){
            $("#Pk-1").css({"background-color":"lightgray"})
        
            $("#Pk-2").css({"background-color":"lightgray"})
            $("#Pk-4").css({"background-color":"lightgray"})
            $("#Pk-5").css({"background-color":"lightgray"})
            $("#Pk-3").css({"background-color":"purple"})
        }
        else if(currentIndex==3){
            $("#Pk-1").css({"background-color":"lightgray"})
        
            $("#Pk-2").css({"background-color":"lightgray"})
            $("#Pk-3").css({"background-color":"lightgray"})
            $("#Pk-5").css({"background-color":"lightgray"})
            $("#Pk-4").css({"background-color":"purple"})
        }
        else if(currentIndex==4){
            $("#Pk-1").css({"background-color":"lightgray"})
        
            $("#Pk-2").css({"background-color":"lightgray"})
            $("#Pk-3").css({"background-color":"lightgray"})
            $("#Pk-4").css({"background-color":"lightgray"})
        
            $("#Pk-5").css({"background-color":"purple"})
        }
        
    }
    $("#Pk-1").click(function(){
        currentIndex = 0
        showSlide(currentIndex);
        Checkou()
    })
    $("#Pk-2").click(function(){
        currentIndex = 1
        showSlide(currentIndex);
        Checkou()
    })
    $("#Pk-3").click(function(){
        currentIndex = 2
        showSlide(currentIndex);
        Checkou()
    })
    $("#Pk-4").click(function(){
        currentIndex = 3
        showSlide(currentIndex);
        Checkou()
    })
    $("#Pk-5").click(function(){
        currentIndex = 4
        showSlide(currentIndex);
        Checkou()
    })
    $("#Next").click(function(){
        currentIndex = (currentIndex + 1) % $slider.length;
        showSlide(currentIndex);
        Checkou()
    })
       
   
    $("#Back").click(function(){
        if(currentIndex<1){

        }
        else if(currentIndex>0)
        {
            currentIndex = (currentIndex - 1) % $slider.length;
            Checkou()
            showSlide(currentIndex);
        }
        
    })

    setInterval(nextSlide, 3000);
    setInterval(Checkou, 3000);

    

});



CheckP=true
$( "#MenuBR" ).click(function() {     
    if (CheckP==true) {
        $("#MenuBar").show();
        CheckP= false;
    } 
    else if(CheckP==false) {
        $("#MenuBar").hide();
        CheckP=true;
    }
});

$("#BtnMenu").click(function(){
    
 })
 