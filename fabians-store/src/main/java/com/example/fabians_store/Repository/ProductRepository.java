package com.example.fabians_store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fabians_store.Models.Product.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{}