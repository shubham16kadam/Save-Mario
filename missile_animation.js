
$(document).ready(function(){
	launch();//setTimeout(launch,0);
	function launch(){
		lineUp();
		var count = 200;
		var j = 0;
		var done = false;
		while(count != 4000){
			for(i = j; i <= 9; ++i){
				var tp = Math.floor(Math.random() * 2000);
				var temp = (Math.random() * 100);
				var lf = "-=" + temp + "";
				setTimeout(function(){},3000);
				$("#missile" + i).velocity({left :  " " + lf, top : tp},3000);
				setTimeout(function(){},3000);
			}
			count += 200;
		}
		for(i = 1; i <= 9; ++i){
			if($("#missile" + i).position().left <= 5){
				$("#missile" + i).remove();
			}
		}
		var txt = document.getElementById("start").textContent;
		if(txt == "Save Mario"){
			setTimeout(launch, 1000);
		}
		else{
			for(i = 1; i <= 9; ++i){
				$("#missile" + i).remove();
			}
			//$("#superman").remove();
		}
	}
	function lineUp(){
		var wd = document.getElementById('index').clientWidth - 220;
		var tp = 110;
		var count = 9;
		for(i = 1; i <= count; ++i){
			$("#index").append($('<img>',{src : 'missile.gif', id : 'missile' + i, style : 'position : absolute; top : '+ tp +'; left :'+ wd }));
			tp += 200;
		}
	}
});
/*function check(){
	var a = Math.floor(document.getElementById("#superman").getBoundingClientRect().left);
	var b = Math.floor(document.getElementById("#missile1").getBoundingClientRect().left);
	if(a == b){
		console.log("Yes");
		console.log(a + " " + b);
	}
	else{
		console.log("No");
		console.log(a + " " + b);
	}
}
//launch();

/*	function check(){
	/*	if(document.getElementById("superman").getBoundingClientRect().left == document.getElementById("missile1").getBoundingClientRect().left){
			console.log("Yes");
		}
		//else{
		//	console.log("No");
			console.log("Missile : " + document.getElementById("missile1").offset().left);// + " " +document.getElementById("missile1").offset().left)
		//}
	}*/
