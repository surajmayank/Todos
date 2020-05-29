package com.todo.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationControlle {
	@GetMapping(value = "/basicauth")
	public AuthenticationBean getValue() {
		return new AuthenticationBean("You are Authenticated");
	}

}
