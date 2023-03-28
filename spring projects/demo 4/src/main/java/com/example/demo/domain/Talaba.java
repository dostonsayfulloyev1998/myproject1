package com.example.demo.domain;

import jakarta.persistence.*;

import java.io.Serializable;


@Entity
@Table(name = "talaba")
public class Talaba implements Serializable {

  @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   long id;
  @Column(name = "name")
    String name;
    @Column(name = "surname")
    String surname;

    public Talaba(long id, String name, String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    public Talaba() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
