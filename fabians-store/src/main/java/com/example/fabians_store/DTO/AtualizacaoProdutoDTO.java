package com.example.fabians_store.DTO;

import com.example.fabians_store.Models.Product.Product;

public class AtualizacaoProdutoDTO {

    private Product produtoAntigo;
    private Product produtoNovo;

    public AtualizacaoProdutoDTO() {}

    public Product getProdutoAntigo() {
        return produtoAntigo;
    }

    public void setProdutoAntigo(Product produtoAntigo) {
        this.produtoAntigo = produtoAntigo;
    }

    public Product getProdutoNovo() {
        return produtoNovo;
    }

    public void setProdutoNovo(Product produtoNovo) {
        this.produtoNovo = produtoNovo;
    }
}
