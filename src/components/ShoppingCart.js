import React from "react";

// Componente do Carrinho de Compras
const ShoppingCart = ({
  cartItems,
  removeFromCart,
  updateQuantity,
  onClose,
}) => {
  // Calcula o total dos itens no carrinho
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-content">
        {/* Botão para fechar o modal do carrinho */}
        <button onClick={onClose} className="cart-modal-close-button">
          &times;
        </button>
        <h2 className="cart-modal-title">Seu Carrinho</h2>

        {/* Exibe mensagem se o carrinho estiver vazio, ou a lista de itens */}
        {cartItems.length === 0 ? (
          <p className="cart-empty-message">Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="cart-items-list">
              {/* Mapeia e exibe cada item do carrinho */}
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-details">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="cart-item-image"
                      // Fallback para imagem caso o URL não carregue
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/64x64/CCCCCC/333333?text=Img";
                      }}
                    />
                    <div>
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">
                        R$ {item.price.toFixed(2).replace(".", ",")}{" "}
                        {/* Formata o preço */}
                      </p>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    {/* Botão para diminuir a quantidade */}
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-button"
                    >
                      -
                    </button>
                    {/* Exibe a quantidade atual do item */}
                    <span className="item-quantity">{item.quantity}</span>
                    {/* Botão para aumentar a quantidade */}
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-button"
                    >
                      +
                    </button>
                    {/* Botão para remover o item */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-item-button"
                    >
                      {/* Ícone de lixeira (SVG) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="remove-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Seção do total do carrinho */}
            <div className="cart-total-section">
              <span>Total:</span>
              <span>R$ {calculateTotal().toFixed(2).replace(".", ",")}</span>
            </div>
            {/* Botão para finalizar a compra */}
            <button className="checkout-button">Finalizar Compra</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
