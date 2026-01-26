// ColorBox Component
// Demonstrates: Conditional Rendering and Dynamic Styling

function ColorBox({ colorName, hexCode, isActive, onClick }) {
  // Conditional styling based on props
  const boxStyle = {
    backgroundColor: hexCode,
    border: isActive ? '4px solid #333' : '2px solid #ccc',
    transform: isActive ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isActive 
      ? '0 8px 16px rgba(0, 0, 0, 0.3)' 
      : '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  // Determine text color based on background brightness
  const isLightColor = getBrightness(hexCode) > 128;
  const textColor = isLightColor ? '#000' : '#fff';

  return (
    <div 
      className="color-box"
      style={boxStyle}
      onClick={onClick}
    >
      <div className="color-info" style={{ color: textColor }}>
        <span className="color-name">{colorName}</span>
        <span className="color-hex">{hexCode}</span>
      </div>
      
      {/* Conditional rendering for active indicator */}
      {isActive && (
        <div className="active-indicator" style={{ color: textColor }}>
          ✓ Selected
        </div>
      )}
    </div>
  );
}

// Helper function to determine if color is light or dark
function getBrightness(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export default ColorBox;

