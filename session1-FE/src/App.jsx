// Main App Component
// Demonstrates: List Rendering with map(), Using all components

import { useState } from 'react';
import WelcomeCard from './components/WelcomeCard';
import ProductCard from './components/ProductCard';
import ColorBox from './components/ColorBox';
import './App.css';

// Import CSS for components
import './components/WelcomeCard.css';
import './components/ProductCard.css';
import './components/ColorBox.css';

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Sample data for products - demonstrating list rendering
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      description: 'High-quality wireless headphones with noise cancellation',
      inStock: true,
      imageUrl: null
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Feature-rich smartwatch with fitness tracking',
      inStock: true,
      imageUrl: null
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 29.99,
      description: 'Ergonomic laptop stand for better posture',
      inStock: false,
      imageUrl: null
    },
    {
      id: 4,
      name: 'USB-C Cable',
      price: 12.99,
      description: 'Fast charging USB-C cable, 6ft length',
      inStock: true,
      imageUrl: null
    }
  ];

  // Sample data for colors - demonstrating list rendering
  const colors = [
    { name: 'Ocean Blue', hex: '#4A90E2' },
    { name: 'Forest Green', hex: '#2ECC71' },
    { name: 'Sunset Orange', hex: '#E67E22' },
    { name: 'Royal Purple', hex: '#9B59B6' },
    { name: 'Crimson Red', hex: '#E74C3C' },
    { name: 'Golden Yellow', hex: '#F1C40F' }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛍️ Sandeep's React Components Demo</h1>
        <p>Demonstrating Props.Children, Conditional Rendering, Cards, and Lists</p>
      </header>

      {/* WelcomeCard - Demonstrates Props.Children and Conditional Rendering */}
      <section className="section">
        <h2 className="section-title">Welcome Section</h2>
        <WelcomeCard 
          userName="Sandeep" 
          isLoggedIn={isLoggedIn}
        >
          <p>This is content passed as children to the WelcomeCard component.</p>
          <p>You can pass any React elements between the opening and closing tags!</p>
        </WelcomeCard>
        
        <button 
          className="toggle-button"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </section>

      {/* ProductCard - Demonstrates Card Components with List Rendering */}
      <section className="section">
        <h2 className="section-title">Product Catalog</h2>
        <div className="products-grid">
          {/* List Rendering using map() - Key Concept from Homework */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.name}
              price={product.price}
              description={product.description}
              inStock={product.inStock}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* ColorBox - Demonstrates Conditional Rendering and Dynamic Styling */}
      <section className="section">
        <h2 className="section-title">Color Picker</h2>
        <p className="section-description">
          Click on a color to select it. Demonstrates conditional rendering and dynamic styling.
        </p>
        <div className="colors-grid">
          {/* List Rendering using map() - Another example */}
          {colors.map((color) => (
            <ColorBox
              key={color.hex}
              colorName={color.name}
              hexCode={color.hex}
              isActive={selectedColor === color.hex}
              onClick={() => setSelectedColor(color.hex)}
            />
          ))}
        </div>
        {selectedColor && (
          <p className="selected-color-info">
            Selected Color: <strong>{colors.find(c => c.hex === selectedColor)?.name}</strong> ({selectedColor})
          </p>
        )}
      </section>
    </div>
  );
}

export default App;

