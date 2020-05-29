package com.todo.rest.webservices.restfulwebservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.rest.webservices.restfulwebservices.model.Movies;

@Service
public class HardcodedDataRepository {

	private static List<Movies> movies = new ArrayList<Movies>();
	private static int idCounter = 0;
	static {
		movies.add(new Movies(++idCounter, "admin", "Mathu Vadalara", "Suspense, Thirller", new Date()));
		movies.add(new Movies(++idCounter, "admin", "Aruvi", "Drama", new Date()));
		movies.add(new Movies(++idCounter, "admin", "Avne SrimanNarayana", "Comedy, Adventure", new Date()));
		movies.add(new Movies(++idCounter, "admin", "special 26", "Comedy, Thirller", new Date()));
	}

	public List<Movies> findAll() {
		return movies;
	}

	public Movies save(Movies movie) {
		if (movie.getId() == -1 || movie.getId() == 0) {
			movie.setId(++idCounter);
			movies.add(movie);
		} else {
			deleteById(movie.getId());
			movies.add(movie);
		}
		return movie;

	}

	public Movies deleteById(long id) {
		Movies movie = findById(id);
		if (movie == null)
			return null;
		if (movies.remove(movie))
			return movie;

		return null;
	}

	public Movies findById(long id) {
		for (Movies movie : movies) {
			if (movie.getId() == id) {
				return movie;
			}
		}
		return null;
	}
}
