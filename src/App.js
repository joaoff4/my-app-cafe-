import React, { useState } from "react";
import "./index.css"; // Importa o arquivo CSS principal para estilização
import CoffeeShop from "./components/CoffeeShop"; // Importa o componente CoffeeShop
import CoffeeProductionGuide from "./components/CoffeeProductionGuide"; // Importa o componente CoffeeProductionGuide
import ShoppingCart from "./components/ShoppingCart"; // Importa o componente ShoppingCart

// Componente Principal do Aplicativo
const App = () => {
  // Estado para controlar a seção ativa (loja ou guia de produção)
  const [activeSection, setActiveSection] = useState("shop"); // 'shop' ou 'guide'
  // Estado para armazenar os itens no carrinho de compras
  const [cartItems, setCartItems] = useState([]);
  // Estado para controlar a visibilidade do modal do carrinho
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Estado para a mensagem a ser exibida na caixa de mensagem personalizada
  const [message, setMessage] = useState("");
  // Estado para controlar a visibilidade da caixa de mensagem personalizada
  const [showMessageBox, setShowMessageBox] = useState(false);

  // Função para exibir uma mensagem personalizada na tela
  const showMessage = (msg) => {
    setMessage(msg); // Define a mensagem
    setShowMessageBox(true); // Torna a caixa de mensagem visível
    // Define um temporizador para esconder a mensagem após 2 segundos
    setTimeout(() => {
      setShowMessageBox(false);
      setMessage("");
    }, 2000);
  };

  // Adiciona um produto ao carrinho
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Verifica se o item já existe no carrinho
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Se existir, atualiza a quantidade e exibe uma mensagem
        showMessage(`"${product.name}" quantidade atualizada no carrinho!`);
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Incrementa a quantidade
            : item
        );
      } else {
        // Se não existir, adiciona o novo produto com quantidade 1 e exibe uma mensagem
        showMessage(`"${product.name}" adicionado ao carrinho!`);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove um produto do carrinho
  const removeFromCart = (productId) => {
    setCartItems(
      (prevItems) => prevItems.filter((item) => item.id !== productId) // Filtra o item a ser removido
    );
    showMessage("Item removido do carrinho."); // Exibe mensagem de remoção
  };

  // Atualiza a quantidade de um produto no carrinho
  const updateQuantity = (productId, newQuantity) => {
    // Se a nova quantidade for 0 ou menos, remove o item do carrinho
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map(
        (item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item // Atualiza a quantidade
      )
    );
  };

  // Calcula o número total de itens no carrinho
  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app-container">
      {/* Cabeçalho do aplicativo */}
      <header className="app-header">
        <div className="header-content">
          {/* Título do aplicativo */}
          <h1 className="app-title">
            <span className="app-title-coffee">Café</span> Perfeito
          </h1>
          {/* Navegação principal */}
          <nav className="main-nav">
            {/* Botão para a seção da loja */}
            <button
              onClick={() => setActiveSection("shop")}
              className={`nav-button ${
                activeSection === "shop" ? "active" : ""
              }`}
            >
              Nossos Cafés
            </button>
            {/* Botão para a seção do guia de produção */}
            <button
              onClick={() => setActiveSection("guide")}
              className={`nav-button ${
                activeSection === "guide" ? "active" : ""
              }`}
            >
              Guia de Produção
            </button>
            {/* Botão do carrinho de compras */}
            <button onClick={() => setIsCartOpen(true)} className="cart-button">
              {/* Ícone do carrinho (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cart-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Contador de itens no carrinho, visível apenas se houver itens */}
              {getTotalItemsInCart() > 0 && (
                <span className="cart-count">{getTotalItemsInCart()}</span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal do aplicativo, alternando entre loja e guia */}
      <main className="main-content">
        {activeSection === "shop" ? (
          <CoffeeShop addToCart={addToCart} />
        ) : (
          <CoffeeProductionGuide />
        )}
      </main>

      {/* Rodapé do aplicativo */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 Café Perfeito. Todos os direitos reservados.</p>
          <p className="footer-tagline">Feito com paixão por café.</p>
        </div>
      </footer>

      {/* Caixa de mensagem personalizada (visível condicionalmente) */}
      {showMessageBox && <div className="message-box">{message}</div>}

      {/* Modal do carrinho de compras (visível condicionalmente) */}
      {isCartOpen && (
        <ShoppingCart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          onClose={() => setIsCartOpen(false)} // Fecha o modal do carrinho
        />
      )}
    </div>
  );
};

export default App;
