"use strict";
var auth = auth || {};  // 있으면 가져오고 없으면 새로 널(빈땅)객체로 새로 만들어라.
auth = (()=>{
	let _,js,css,img;
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
	}
    let onCreate =()=>{
        init()
        setContentView()

    }

    let setContentView =()=>{
       	alert("화면들어옴")
       	$('<table><tr></tr></table>')
    	.css({
    		width:'80%',
    		height:'800px',
    		border:'1px solid black',
    		margin:'0 auto'
    	})
    	.appendTo('body')
    	$('<td/>',{id:'left'})
    	.css({
    		width:'20%',
    		height:'100%',
    		border:'1px solid black',
    		'vertical-align':'top'
    	})
    	.appendTo('tr')
    	$('<td/>',{id:'right'})
    	.css({
    		width:'80%',
    		height:'100%',
    		border:'1px solid black'
    	})
    	.appendTo('tr')
    	$.each(['NAVER','CGV','BUGS'],(i,j)=>{
        	$('<div/>')
        	.text(j) //세터 
        	.css({
        		width:'100%',
        		height:'50px',
        		border:'1px solid black',
        		'text-align' : 'center'
        	}).appendTo('#left')
        	.click(function(){
        		alert($(this).text()) //게터
        		switch($(this).text()){
        		case'NAVER': 
        			$.getJSON(_+'/naver',d=>{
        				alert(d.msg)
        			})
        			break
        		case'CGV':
        			$.getJSON(_+'/cgv',d=>{
        				alert(d.msg)
        			})
        			break
        		case'BUGS':
        			$.getJSON(_+'/bugs',d=>{
        				alert(d.msg)
        			})
        			break
        		}
        	})
    	
    	})
    	
    }

	return {onCreate}
})();