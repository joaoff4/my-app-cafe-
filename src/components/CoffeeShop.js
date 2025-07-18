import React from "react";

// Componente da Seção da Loja de Café
const CoffeeShop = ({ addToCart }) => {
  // Lista de produtos de café
  const products = [
    {
      id: 1,
      name: "Café Expresso Intenso",
      description:
        "Um blend encorpado com notas de chocolate amargo e caramelo. Perfeito para o seu expresso da manhã.",
      price: 35.9, // Preço do produto
      imageUrl: "https://placehold.co/400x300/A0522D/FFFFFF?text=Café+Intenso", // Imagem placeholder
    },
    {
      id: 2,
      name: "Café Suave Matinal",
      description:
        "Café de torra média com acidez equilibrada e notas florais. Ideal para coado e métodos de preparo mais suaves.",
      price: 32.5,
      imageUrl: "https://placehold.co/400x300/D2B48C/FFFFFF?text=Café+Suave",
    },
    {
      id: 3,
      name: "Café Gourmet Especial",
      description:
        "Grãos selecionados de origem única, com perfil de sabor complexo e frutado. Uma experiência sensorial única.",
      price: 48.0,
      imageUrl: "https://placehold.co/400x300/8B4513/FFFFFF?text=Café+Gourmet",
    },
    {
      id: 4,
      name: "Café Descafeinado Premium",
      description:
        "Todo o sabor do café, sem cafeína. Processo natural para preservar as características dos grãos.",
      price: 38.0,
      imageUrl:
        "https://placehold.co/400x300/6B4226/FFFFFF?text=Café+Descafeinado",
    },
  ];

  return (
    <section className="coffee-shop-section">
      <h2 className="section-title">Nossa Seleção de Cafés</h2>
      <div className="product-grid">
        {/* Mapeia e exibe cada produto */}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
              // Fallback para imagem caso o URL não carregue
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x300/CCCCCC/333333?text=Imagem+Não+Disponível";
              }}
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-actions">
                <span className="product-price">
                  R$ {product.price.toFixed(2).replace(".", ",")}{" "}
                  {/* Formata o preço */}
                </span>
                <button
                  onClick={() => addToCart(product)} // Adiciona o produto ao carrinho
                  className="add-to-cart-button"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoffeeShop;
