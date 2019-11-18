"use strict";
var auth = auth || {};  // 있으면 가져오고 없으면 새로 널(빈땅)객체로 새로 만들어라.
auth = (()=>{
	let _,js,css,img;
	
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		css = $.css();
		img = $.img();
		

		
	}
    let onCreate =()=>{
        init()
        $.when(
        	
        		$.getScript(router_js)
        ).done(()=>{
        	setContentView()
        		 
        }).fail(()=>{alert(WHEN_ERR)})
    }

	
    let setContentView =()=>{
       	alert("helow dongin")
    	$('body').html('<h1>hello dongin </h1>')
        
    }
	

	return{onCreate}
})();