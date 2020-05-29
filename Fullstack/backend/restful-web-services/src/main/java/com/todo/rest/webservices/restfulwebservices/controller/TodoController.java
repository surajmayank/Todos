package com.todo.rest.webservices.restfulwebservices.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todo.rest.webservices.restfulwebservices.model.Movies;
import com.todo.rest.webservices.restfulwebservices.service.HardcodedDataRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users")
public class TodoController {

	@Autowired
	private HardcodedDataRepository hardcodedDataRepository;

	@GetMapping(value = "/{username}/todos")
	public List<Movies> getAllMovies(@PathVariable String username) {
		return hardcodedDataRepository.findAll();
	}

	@GetMapping(value = "/{username}/todos/{id}")
	public Movies getMovie(@PathVariable String username, @PathVariable long id) {
		return hardcodedDataRepository.findById(id);
	}

	@DeleteMapping(value = "/{username}/todos/{id}")
	public ResponseEntity<Void> deleteMovies(@PathVariable String username, @PathVariable long id) {
		Movies movie = hardcodedDataRepository.deleteById(id);
		if (movie != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping(value = "/{username}/todos/{id}")
	public ResponseEntity<Movies> updateMovie(@PathVariable String username, @PathVariable long id,
			@RequestBody Movies movie) {
		Movies updatedMovie = hardcodedDataRepository.save(movie);
		return new ResponseEntity<Movies>(updatedMovie, HttpStatus.OK);
	}

	@PostMapping(value = "/{username}/todos")
	public ResponseEntity<Void> saveMovie(@PathVariable String username, @RequestBody Movies movie) {
		Movies createdMovie = hardcodedDataRepository.save(movie);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdMovie.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

}
