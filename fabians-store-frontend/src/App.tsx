// Importa o React e os hooks useState e useEffect
// Imports React and the useState and useEffect hooks
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';

function App() {
  // Caminho do servidor backend local
  // Backend server path (localhost)
  const serverPath = 'http://localhost:8080/';

  const img = require('./midia/img.jpg');

  // Estados para armazenar os dados do produto
  // States to store product data
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [instock, setInstock] = useState('');

  // Estados para controle de janelas e produtos
  // States for controlling modals and products
  const [changeInfoWindow, setChangeInfoWindow] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [productToUpdate, setProductToUpdate] = useState(null);

  // Função para buscar produtos do backend
  // Function to fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get(serverPath);
      setProducts(response.data); // Atualiza o estado com os produtos recebidos
      // Updates the state with the fetched products
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      // Logs error if fetch fails
    }
  };

  // Executa fetchProducts assim que o componente for montado
  // Executes fetchProducts when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Função para validar os inputs do formulário
  // Function to validate form inputs
  const validarInputs = () => {
    const precoFloat = parseFloat(price);
    const estoqueInt = parseInt(instock);
    // Verifica se os campos estão preenchidos corretamente
    // Checks if fields are filled correctly
    if (!name || precoFloat <= 0 || isNaN(precoFloat) || isNaN(estoqueInt) || estoqueInt < 0) {
      alert('Preencha todos os campos corretamente.');
      return false;
    }
    return true;
  };

  // Cria um novo produto no backend
  // Creates a new product in the backend
  const CriarProduto = async () => {
    if (!validarInputs()) return;
    try {
      await axios.post(serverPath, {
        name,
        price: parseFloat(price),
        description,
        instock: parseInt(instock),
      });
      setAddProduct(false); 
      // Fecha a janela de adicionar
      // Closes the add product modal
      limparCampos(); 
      // Limpa os inputs
      // Clears input fields
      fetchProducts(); 
      // Atualiza a lista de produtos
      // Refreshes product list
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  // Atualiza um produto existente no backend
  // Updates an existing product in the backend
  const AtualizarProduto = async () => {
    if (!validarInputs()) return;
    try {
      const produtoNovo = {
        id: productToUpdate.id,
        name,
        price: parseFloat(price),
        description,
        instock: parseInt(instock),
      };

      await axios.put(serverPath, {
        produtoAntigo: productToUpdate,
        produtoNovo: produtoNovo,
      });

      setChangeInfoWindow(false); 
      // Fecha janela de edição
      // Closes update modal
      setProductToUpdate(null); 
      // Reseta o produto selecionado
      // Resets selected product
      limparCampos();
      fetchProducts();
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  // Exclui um produto no backend
  // Deletes a product from the backend
  const ExcluirProduto = async (product) => {
    try {
      await axios.delete(serverPath, { data: product });
      fetchProducts(); 
      // Atualiza a lista após exclusão
      // Refreshes list after deletion
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  // Abre a janela de edição com dados do produto selecionado
  // Opens the edit modal with selected product data
  const abrirJanelaAtualizacao = (produto) => {
    setProductToUpdate(produto);
    setName(produto.name);
    setDescription(produto.description);
    setPrice(produto.price);
    setInstock(produto.instock);
    setChangeInfoWindow(true);
  };

  // Limpa os campos de input
  // Clears input fields
  const limparCampos = () => {
    setName('');
    setDescription('');
    setPrice('');
    setInstock('');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#f5f5f5] p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#f5f5f5]">Fabians Store</h1>
        <button
          className="mt-4 bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white px-6 py-2 rounded-full shadow"
          onClick={() => setAddProduct(true)}
        >
          Adicionar Produto
        </button>
      </header>

      {/* Formulário para criar produto */}
      {/* Form to create product */}
      {addProduct && (
        <div className="bg-[#1e1e1e] text-[#f5f5f5] p-6 rounded-lg shadow max-w-md mx-auto mb-10">
          <h2 className="text-2xl mb-4 font-semibold">Criar Produto</h2>
          <input className="input-dark" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="input-dark" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input className="input-dark" placeholder="Preço" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input className="input-dark" placeholder="Em estoque" type="number" value={instock} onChange={(e) => setInstock(e.target.value)} />
          <div className="flex justify-end mt-4">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white" onClick={CriarProduto}>Criar</button>
          </div>
        </div>
      )}

      {/* Formulário para atualizar produto */}
      {/* Form to update product */}
      {changeInfoWindow && (
        <div className="bg-[#1e1e1e] text-[#f5f5f5] p-6 rounded-lg shadow max-w-md mx-auto mb-10">
          <h2 className="text-2xl mb-4 font-semibold">Atualizar Produto</h2>
          <input className="input-dark" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="input-dark" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input className="input-dark" placeholder="Preço" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input className="input-dark" placeholder="Em estoque" type="number" value={instock} onChange={(e) => setInstock(e.target.value)} />
          <div className="flex justify-end mt-4">
            <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-white" onClick={AtualizarProduto}>Salvar</button>
          </div>
        </div>
      )}

      {/* Lista de produtos renderizados */}
      {/* Rendered product list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div key={index} className="bg-[#1e1e1e] text-[#f5f5f5] p-4 rounded-lg shadow">
            <img src={img} alt="Produto" className="w-full object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="text-lg font-semibold">R$ {parseFloat(item.price).toFixed(2)}</p>
            <p className="text-sm text-gray-400">{item.instock} em estoque</p>
            <div className="flex justify-between mt-4">
              <button className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white px-4 py-1 rounded" onClick={() => abrirJanelaAtualizacao(item)}>Editar</button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded" onClick={() => ExcluirProduto(item)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
