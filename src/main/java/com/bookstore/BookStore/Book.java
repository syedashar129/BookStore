package com.bookstore.BookStore;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Book")
public class Book {

    @Id
    private int id;
    private String bookName;
    private String buyerName;

    public Book(int id, String bookName, String buyerName) {
        this.id = id;
        this.bookName = bookName;
        this.buyerName = buyerName;
    }

    Book (){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

}
