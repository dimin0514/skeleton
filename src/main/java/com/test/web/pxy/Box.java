package com.test.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class Box <T>{
	private ArrayList<T> list;
	public void Box() {
		list=new ArrayList<>();	}
	public void add(T item) {list.add(item);}
	public T get(int i) {return list.get(i);}
	public ArrayList<T> get(){return list;}
	public int size() {return list.size();}
	public String toString() {return list.toString();}
	public void clear() {list.clear();}
	
}
