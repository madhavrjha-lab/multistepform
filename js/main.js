
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(function(){$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
});
});

function checkInp()
{
  var inputs, index, elem;

  inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) 
  {  
      if(inputs[i].value === "" || isNaN(inputs[i].value))
      {
        	document.getElementById(inputs[i].id).style.border="2px solid red";  
      } else
	  {
			document.getElementById(inputs[i].id).style.border="1px solid black";
	  }
  }
  
  if(inputs == null)
  {
    return true;
  } else 
  {
	alert("All input fields are mandatory")
    return false;
  }
  
  /*var x = document.forms.formMain.inputTankAIrr.value;
  var y = document.forms.formMain.inputTankBIrr.value;
  
  if (isNaN(x)|| isNaN(y)) 
  {
    alert("Must input numbers");
    return false;
  } else if(x === "" || y === ""){
    alert("Input fields are mandatory")
    return false;   
  } else {
    return true;
  }*/
}

function colorInput()
{
  	document.getElementById("inputTankAIrr").style.border="2px solid red";
}

function changeOutput() {
    var currentVal = document.getElementById("selectWtrAnalysis").value;

    if (currentVal === "ppm" || currentVal === "meq") {
        document.getElementById('divPpmMeq').style.display = "";
    } else {
		document.getElementById('divPpmMeq').style.display = "none";
	}
}
