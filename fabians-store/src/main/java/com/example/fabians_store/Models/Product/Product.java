package com.example.fabians_store.Models.Product;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Double price;
    private String description;
    private Integer instock;

    // Construtor padrão (obrigatório para JPA)
    public Product() {
    }
    public Long getId(){
        return id;
    }
    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public Integer getInstock() {
        return instock;
    }
    public void setId(Long Id){
        this.id = Id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setInstock(Integer instock) {
        this.instock = instock;
    }

}
