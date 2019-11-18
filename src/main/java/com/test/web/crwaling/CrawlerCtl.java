package com.test.web.crwaling;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class CrawlerCtl {
	@Autowired Map<String,Object> map;
	
	@GetMapping("/naver")
	public Map<?,?> crawlingNaver(){
		map.clear();
		map.put("msg", "naver");
		return map;
	}
	
	@GetMapping("/bugs")
	public Map<?,?> crawlingBugs(){
		map.clear();
		map.put("msg","bugs");
		return map;
	}
	
	@GetMapping("/cgv")
	public Map<?,?> crwalingCGV(){
		map.clear();
		map.put("msg","CGV");
		return map;
	}

}
