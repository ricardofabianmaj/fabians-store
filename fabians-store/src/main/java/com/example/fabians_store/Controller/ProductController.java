package com.example.fabians_store.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fabians_store.DTO.AtualizacaoProdutoDTO;
import com.example.fabians_store.Models.Product.Product;
import com.example.fabians_store.Service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.ListarProdutos();
    }

    @PostMapping
    public void addProduct(@RequestBody Product novoProduto) {
        productService.adicionarProduto(novoProduto);
    }

    /*
     * EXEMPLO DO CORPO DA REQUISIÇÃO QUE DEVE VIR DO FRONTEND PARA O POST
     * {
     * "name": String,
     * "price": Double,
     * "description": String,
     * "instock": Integer
     * }
     */
    @PutMapping()
    public void changeInformation(@RequestBody AtualizacaoProdutoDTO dto) {
        productService.atualizarProduto(dto.getProdutoAntigo(), dto.getProdutoNovo());
    }

    /*
    EXEMPLO DO CORPO DA REQUISIÇÃO QUE DEVE VIR DO FRONTEND PARA O PUT
        {
        "produtoAntigo": {
            "id": Long,
            "name": String,
            "price": Double,
            "description": String,
            "instock": Integer
        },
        "produtoNovo": {
            "id": Long,
            "name": String,
            "price": Double,
            "description": String,
            "instock": Integer
        }
        }
     */
    @DeleteMapping
    public void deletProduct(@RequestBody Product ProductToDelete){
        productService.DeleteProduct(ProductToDelete);
    }
    /*
    EXEMPLO DO CORPO DA REQUISIÇÃO QUE DEVE VIR DO FRONTEND PARA O DELETE

    {
        "id": Long,
        "name": String,
        "price": Double,
        "description": String,
        "instock": Integer
    }
     */

}
