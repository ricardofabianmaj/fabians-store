package com.example.fabians_store.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fabians_store.Models.Product.Product;

import com.example.fabians_store.Repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> ListarProdutos(){
        return productRepository.findAll();
    }

    public void adicionarProduto(Product novoProduto){
        Product p = new Product();
    
        p.setName(novoProduto.getName());
        p.setPrice(novoProduto.getPrice());
        p.setDescription(novoProduto.getDescription());
        p.setInstock(novoProduto.getInstock());

        productRepository.save(p);
    }

    public void atualizarProduto(Product produtoAntigo, Product novoProduct){
        Product produtoExistente = productRepository.findById(produtoAntigo.getId()).orElseThrow(() -> new RuntimeException("Produto não encontrado!"));  

        produtoExistente.setId(produtoAntigo.getId());
        produtoExistente.setName(novoProduct.getName());
        produtoExistente.setDescription(novoProduct.getDescription());
        produtoExistente.setPrice(novoProduct.getPrice());
        produtoExistente.setInstock(novoProduct.getInstock());

        productRepository.save(produtoExistente);
        
    }

    public void DeleteProduct(Product ProductToDelete){
        Product productToDelete = productRepository.findById(ProductToDelete.getId()).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        productRepository.delete(productToDelete);
    }

}