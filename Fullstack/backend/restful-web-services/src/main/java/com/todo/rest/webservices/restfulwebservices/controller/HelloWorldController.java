package com.todo.rest.webservices.restfulwebservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.todo.rest.webservices.restfulwebservices.model.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(value = "/hello")
	public String getValue() {
		return "HelloWorld";
	}

	@GetMapping(value = "/hello-bean")
	public HelloWorldBean getBeanValue() {
		//throw new RuntimeException("error is coming");
		return new HelloWorldBean("helloWorld");
	}

	@GetMapping(value = "/helloWorld/{name}")
	public HelloWorldBean getPathVariable(@PathVariable String name) {
		
		return new HelloWorldBean(String.format("helloWorld, %s", name));
	}

}
