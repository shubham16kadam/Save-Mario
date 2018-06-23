
$(document).ready(function(){
	$("#index").append($('<img>',{src : 'superman.gif', id : 'superman', style : 'position : absolute; top : 160px; left : 5%'}));
	//$("#superman").append($({style : "overflow : hidden;"}));
	//moveIt();
	//launch();
	var w = screen.width;
	$(document).keydown(function(e){
		switch(e.which){
			case 37:
				if($("#superman").position().left >= 120){
					$("#superman").velocity({left : "-=100"}, -1000);
					//check();
				}
				if($(document).keyup())
				{
					$("#superman").finish();
					break;
				}
				break;
			case 38:
				if($("#superman").position().top >= 110){
					$("#superman").velocity({top : "-=200"}, -1000);
					//check();
					if($(document).keydown() || $("#superman").position().top <= 110)
					{
						$("#superman").finish();
					}
				}
				break;
			case 39:
				var w = document.getElementById("index").clientWidth-(document.getElementById("superman").clientWidth) -50;
				if($("#superman").position().left <= w){
					$("#superman").velocity({left : "+=100"}, -1000);
					//check();
					if($(document).keyup())
					{
						$("#superman").finish();
						break;
					}
				}
				break;
			case 40:
				var w = document.getElementById("index").clientHeight-(document.getElementById("superman").clientHeight) - 100;
				if($("#superman").position().top <= w){
					$("#superman").velocity({top : "+=200"}, -1000);
					//check();
					if($(document).keyup())
					{
						$("#superman").finish();
						break;
					}
				}
				break;
		}
		//setTimeout(launch,0);
	});
	//launch();
	/*function launch(){
		lineUp();
		var count = 200;
		var j = 0;
		var done = false;
		while(count != 4000){
			for(i = j; i <= 6; ++i){
				var tp = Math.floor(Math.random() * 2000);
				var temp = (Math.random() * 100);
				var lf = "-=" + temp + "";
				setTimeout(function(){},3000);
				$("#missile" + i).velocity({left :  " " + lf, top : tp},6000);
				check();
				setTimeout(function(){},3000);
			}
			count += 200;
		}
		for(i = 1; i <= 6; ++i){
			if($("#missile" + i).position().left <= 5){
				$("#missile" + i).remove();
			}
		}
	}
	function lineUp(){
		var wd = document.getElementById('index').clientWidth - 220;
		var tp = -70;
		var count = 6;
		for(i = 1; i <= count; ++i){
			$("#index").append($('<img>',{src : 'missile.gif', id : 'missile' + i, style : 'position : absolute; top : '+ tp +'; left :'+ wd }));
			tp += 400;
		}
	}*/
	function check(){
		var a = Math.floor($("#superman").offset().left);
		var b = Math.floor($("#missile1").offset().left);
		if(a == b){
			console.log("Yes");
			console.log(a + " " + b);
		}
		else{
			console.log("No");
			console.log(a + " " + b);
		}
	}
});

/*
function moveIt(){
	var div1 = document.getElementById("superman");
	var size = 0;
	var id = setInterval(frame, 10);
	function frame(){
		var w = screen.width;
		if(size == w){
			clearInterval(id);
		}
		else{
			size++;
			div1.style.left = size + 'px';
		}
	}
}
*/
