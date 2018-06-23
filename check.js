var sc = 0;
$(document).ready(function(){
	function check(){
		/*if(cnt == 500){
			clearInterval(id);
		}*/
		$("#index").append($("<div>",{id : 'score', style : 'position : absolute; font-size : 180px; background-color : black; color : white; top : 0%; left : 80%; width : 20%;'}));
		document.getElementById("score").innerHTML = "Time:" + Math.floor(sc/100);;
		sc++;
		var s_left = document.getElementById("superman").getBoundingClientRect().left;
		//var m_left = $("#missile1").offset().left;
		var s_top =  document.getElementById("superman").getBoundingClientRect().top;
		//var m_top = $("#missile1").offset().top;
		var con  = 1;
		//var left_diff = Math.abs(s_left - m_left);
		//var top_diff = Math.abs(m_top - s_top);
		var store = [];
		var oldf = console.log;
		for(i = 1; i <= 9; ++i){
			var m_left = document.getElementById("missile" + i).getBoundingClientRect().left;
			var m_top = document.getElementById("missile" + i).getBoundingClientRect().top;
			var top_diff = Math.abs(m_top - s_top);
			var left_diff = Math.abs(s_left - m_left);
			if(left_diff <= 14 && top_diff <= 140){
				$("#index").append($('<img>',{id : "exp",src : 'explosion.gif',style:"position : absolute; left : " + s_left + "px; top : "+ s_top + "px"}));
				document.getElementById("start").innerHTML = "Mario is Dead!! R.I.P.";
				stopIt();
				$("#index").append($("<div>",{id :'won', style : 'position : absolute; color : white; font-size : 180px; top : 50%; left : 40%;'}));
				document.getElementById("won").innerHTML = "You Lost!!!<br/>Time taken: " + Math.floor(sc/100) + " sec";
				return;

			}
			else if(Math.floor($('#superman').offset().left) >= 3950 && Math.floor($('#superman').offset().top) >= 953 && Math.floor($('#superman').offset().top) <= 1100){
				$("#index").append($("<div>",{id :'won', style : 'position : absolute; color : white; font-size : 180px; top : 50%; left : 40%;'}));
				document.getElementById("won").innerHTML = "You Won!!!<br/>Time taken: " + Math.floor(sc/100) + " sec";
				stopIt();
				return;
			}
		}
		setTimeout(check,0);
	}
	check();
	function stopIt(){
		for(i = 1; i <= 9; ++i){
			$("#missile" + i).remove();
		}
		$("#superman").remove();
	}
});
