package com.bookstore.BookStore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BookController {

    @Autowired
    private BookRepository repository;

    //GET (All)
    @GetMapping("/books")
    public List<Book> getBooks (){
        return repository.findAll();
    }

    @GetMapping("/books/{id}")
    public Optional<Book> getBook (@PathVariable int id){
        return repository.findById(id);
    }


    //POST
    @PostMapping("/books")
    public void addBook(@RequestBody Book book){
        repository.save(book);
    }

    //PUT
    @PutMapping("/books/{id}")
    public void editBook (@PathVariable int id, @RequestBody Book book){
        repository.save(book);
    }

    //DELETE
    @DeleteMapping("/books/{id}")
    public void deleteBook (@PathVariable int id){
        repository.deleteById(id);
    }


}
