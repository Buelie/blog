function anc(){
	var info = document.getElementById("inf").value;
	document.getElementById("info").innerHTML='<p style="color:#fff">'+info+'</p>';
	return 0;
}
function mes(){
	var pas = window.prompt('请输入密码')
	if (pas == '321654'){
		document.getElementById("ms").style.display='block';
	}else if(pas == '123456'){
		document.getElementById("ms").style.display='none';
		alert("已隐藏公告后台")
	}else if(pas == 'bg'){
		var url = window.prompt('输入背景图片路径');
		document.body.style.backgroundImage=url;
	}else{
		alert("密码错误!!!")
	}
}
