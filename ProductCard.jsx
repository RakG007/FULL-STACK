import React from "react";

const ProductList = () => {
  // 1. Updated Data with actual Image URLs
  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 129.99, 
      inStock: true,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
    },
    { 
      id: 2, 
      name: "Mechanical Keyboard", 
      price: 89.99, 
      inStock: false,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300"
    },
    { 
      id: 3, 
      name: "Smart Watch", 
      price: 199.99, 
      inStock: true,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
    },
  ];

  return (
    <div className="experiment-container">
      <h2>Experiment 3.1: Product Card Component</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {/* 2. Using the .product-image class for modern CSS styling */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image" 
            />
            
            <h3>{product.name}</h3>
            
            {/* 3. toFixed(2) satisfies the Viva requirement for price formatting */}
            <p className="price-tag">${product.price.toFixed(2)}</p>
            
            {/* 4. Conditional Rendering with the new .status-badge classes */}
            <div className={`status-badge ${product.inStock ? 'in-stock-bg' : 'out-of-stock-bg'}`}>
              {product.inStock ? "● In Stock" : "○ Out of Stock"}
            </div>
            
            <button 
              className="add-btn" 
              disabled={!product.inStock}
              style={{ 
                backgroundColor: product.inStock ? '#2563eb' : '#bdc3c7',
                cursor: product.inStock ? 'pointer' : 'not-allowed',
                width: '100%'
              }}
            >
              {product.inStock ? "Add to Cart" : "Notify Me"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;