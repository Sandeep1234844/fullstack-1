// WelcomeCard Component
// Demonstrates: Props.Children and Conditional Rendering

function WelcomeCard({ userName, isLoggedIn, children }) {
  return (
    <div className="welcome-card">
      {/* Conditional Rendering - Show different messages based on login status */}
      {isLoggedIn ? (
        <h2>Welcome back, {userName}! 👋</h2>
      ) : (
        <h2>Hello, Guest! Please log in.</h2>
      )}
      
      {/* Props.Children - Content passed between opening and closing tags */}
      <div className="card-content">
        {children}
      </div>
      
      {/* Another conditional rendering example */}
      {isLoggedIn && (
        <p className="status-message">You are currently logged in.</p>
      )}
    </div>
  );
}

export default WelcomeCard;

