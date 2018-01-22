//无阻塞加载脚本的方法
//load script async
function loadScript(url,callback){
	var script = document.createElement('script');
	script.type='text/javascript';
	if(script.readyState){//IE
		script.onreadystatechange = function(){//trigger when this state change
			if(script.readyState==='loaded'||script.readyState==='complete'){
				script.onreadystatechange = null;
				callback()
			}
		}
	}else {
		script.onload = function (){
			callback()
		}
	}
	script.src = url;
	document.getElementByTagName('head')[0].appendChild(script);
}
//LazyLoad类库。

//使用直接量和局部变量，减少数组项和对象成员的使用将加快js的运行速度

/*
多次跨作用域访问变量在低版本浏览器中将损耗很多性能，解决办法：
1、将多次使用的外部变量使用局部变量存储

*/

