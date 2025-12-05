import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  // Product data with stock information
  const products = {
    tshirts: {
      women: [
        { id: 1, name: 'Ocean Breeze Tee', price: 29.99, stock: 15, sizes: ['S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop' },
        { id: 2, name: 'Sunset Sail Tee', price: 32.99, stock: 8, sizes: ['S', 'M', 'L'], image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop' },
        { id: 3, name: 'Coastal Vibes Tee', price: 28.99, stock: 0, sizes: ['M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop' }
      ],
      men: [
        { id: 4, name: 'Adventure Explorer Tee', price: 29.99, stock: 20, sizes: ['M', 'L', 'XL', 'XXL'], image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop' },
        { id: 5, name: 'Nautical Navigator Tee', price: 31.99, stock: 12, sizes: ['S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop' },
        { id: 6, name: 'Wave Rider Tee', price: 30.99, stock: 5, sizes: ['M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop' }
      ],
      kids: [
        { id: 7, name: 'Little Explorer Tee', price: 19.99, stock: 25, sizes: ['XS', 'S', 'M', 'L'], image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop' },
        { id: 8, name: 'Young Adventurer Tee', price: 18.99, stock: 18, sizes: ['XS', 'S', 'M'], image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop' },
        { id: 9, name: 'Tiny Sailor Tee', price: 17.99, stock: 0, sizes: ['XS', 'S'], image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=400&fit=crop' }
      ]
    },
    stickers: [
      { id: 10, name: 'Anchor Pack', price: 5.99, stock: 50, type: 'sticker', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop' },
      { id: 11, name: 'Sailing Collection', price: 7.99, stock: 35, type: 'sticker', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop' },
      { id: 12, name: 'Ocean Waves Set', price: 6.99, stock: 0, type: 'sticker', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop' },
      { id: 13, name: 'Adventure Emblems', price: 8.99, stock: 42, type: 'sticker', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop' }
    ]
  };

  const getAllProducts = () => {
    const allTshirts = [...products.tshirts.women, ...products.tshirts.men, ...products.tshirts.kids];
    return [...allTshirts, ...products.stickers];
  };

  const getFilteredProducts = () => {
    let filtered = [];
    
    if (selectedCategory === 'all') {
      filtered = getAllProducts();
    } else if (selectedCategory === 'stickers') {
      filtered = products.stickers;
    } else {
      filtered = products.tshirts[selectedCategory] || [];
    }

    return filtered;
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { text: 'Out of Stock', class: 'out-of-stock' };
    if (stock <= 5) return { text: `Only ${stock} left!`, class: 'low-stock' };
    return { text: 'In Stock', class: 'in-stock' };
  };

  useEffect(() => {
    // Simulate loading for category change
    if (selectedCategory !== 'all') {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    }
  }, [selectedCategory]);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in">
          <h1 className="brand-logo animate-slide-down">
            ⚓ SAIL & SAGA
          </h1>
          <p className="brand-tagline animate-fade-in-delay">Adventure in Every Thread</p>
          <p className="brand-description animate-fade-in-delay-2">
            Discover custom-designed apparel that tells your story. From ocean-inspired tees 
            to adventure-ready gear, we craft unique pieces for women, men, and kids who dare to explore.
          </p>
          <div className="hero-features animate-fade-in-delay-3">
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Custom Designs</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👕</span>
              <span>Premium Quality</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌊</span>
              <span>Ocean Inspired</span>
            </div>
          </div>
          <button className="cta-button animate-pulse" onClick={() => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Collection
          </button>
        </div>
      </section>

      {/* Customization Section */}
      <section className="customization-section">
        <div className="container">
          <h2 className="section-title">Personalize Your Style</h2>
          <p className="section-subtitle">
            Every piece can be customized to match your unique personality
          </p>
          <div className="customization-grid">
            <div className="custom-card animate-float">
              <div className="custom-icon">👩</div>
              <h3>Women's Collection</h3>
              <p>Elegant designs with comfortable fits. Customize colors, add your text, or choose from our coastal-inspired patterns.</p>
            </div>
            <div className="custom-card animate-float-delay-1">
              <div className="custom-icon">👨</div>
              <h3>Men's Collection</h3>
              <p>Bold and adventurous styles. Pick your favorite graphics, adjust sizing, and make it uniquely yours.</p>
            </div>
            <div className="custom-card animate-float-delay-2">
              <div className="custom-icon">👶</div>
              <h3>Kids' Collection</h3>
              <p>Fun and playful designs for little explorers. Safe materials, vibrant colors, and endless imagination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="container">
          <h2 className="section-title">Browse Our Collection</h2>
          
          {/* Category Filter */}
          <div className="filter-bar">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'women' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('women')}
            >
              Women
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'men' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('men')}
            >
              Men
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'kids' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('kids')}
            >
              Kids
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'stickers' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('stickers')}
            >
              Stickers
            </button>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading products...</p>
            </div>
          ) : (
            <div className="products-grid">
              {getFilteredProducts().map((product, index) => {
                const stockStatus = getStockStatus(product.stock);
                return (
                  <div 
                    key={product.id} 
                    className={`product-card animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="product-image-container">
                      <img src={product.image} alt={product.name} className="product-image" />
                      <div className={`stock-badge ${stockStatus.class}`}>
                        {stockStatus.text}
                      </div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-price">${product.price}</p>
                      {product.sizes && (
                        <div className="product-sizes">
                          <span className="sizes-label">Sizes:</span>
                          {product.sizes.map(size => (
                            <span key={size} className="size-badge">{size}</span>
                          ))}
                        </div>
                      )}
                      <button 
                        className="add-to-cart-btn"
                        disabled={product.stock === 0}
                      >
                        {product.stock === 0 ? 'Out of Stock' : 'Customize & Add'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Stock Overview Section */}
      <section className="stock-overview-section">
        <div className="container">
          <h2 className="section-title">Inventory at a Glance</h2>
          <div className="stock-grid">
            <div className="stock-card">
              <h3>Women's T-Shirts</h3>
              <div className="stock-items">
                {products.tshirts.women.map(item => (
                  <div key={item.id} className="stock-item">
                    <span>{item.name}</span>
                    <span className={getStockStatus(item.stock).class}>
                      {item.stock} units
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stock-card">
              <h3>Men's T-Shirts</h3>
              <div className="stock-items">
                {products.tshirts.men.map(item => (
                  <div key={item.id} className="stock-item">
                    <span>{item.name}</span>
                    <span className={getStockStatus(item.stock).class}>
                      {item.stock} units
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stock-card">
              <h3>Kids' T-Shirts</h3>
              <div className="stock-items">
                {products.tshirts.kids.map(item => (
                  <div key={item.id} className="stock-item">
                    <span>{item.name}</span>
                    <span className={getStockStatus(item.stock).class}>
                      {item.stock} units
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stock-card">
              <h3>Sticker Packs</h3>
              <div className="stock-items">
                {products.stickers.map(item => (
                  <div key={item.id} className="stock-item">
                    <span>{item.name}</span>
                    <span className={getStockStatus(item.stock).class}>
                      {item.stock} units
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>⚓ SAIL & SAGA</h3>
              <p>Adventure in Every Thread</p>
            </div>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#shipping">Shipping</a>
              <a href="#returns">Returns</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Sail & Saga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
