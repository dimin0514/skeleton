"use strict";
var app = app || {};
app = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.';
	let _, js, authjs; //멤버변수, 인스턴스 변수  해당 클래스에서 공유
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',
			()=>{$.extend(new Session(x)) 
			onCreate();
	})
	
	let init =()=>{
		_ = $.ctx();   //메서드? 인스턴스 변수를 가져다 쓸 수 있음
		js = $.js();
		authjs = js+'/cmm/auth.js';
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(authjs)	
		)
		.done(()=>{
			auth.onCreate()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	return {run};
})();