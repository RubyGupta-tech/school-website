import "./FloatingBackground.css";

function FloatingBackground() {
  const icons = ["✏️", "📚", "🎓", "⭐", "🎨", "⚽", "🍎"];
  
  return (
    <div className="floating-bg">
      <span className="floating-icon icon-1 brand-red">✏️</span>
      <span className="floating-icon icon-2 brand-gold">📚</span>
      <span className="floating-icon icon-3 brand-red">🎓</span>
      <span className="floating-icon icon-4 brand-gold">⭐</span>
      <span className="floating-icon icon-5 brand-red">🎨</span>
      <span className="floating-icon icon-6 brand-gold">⚽</span>
      <span className="floating-icon icon-7 brand-red">🍎</span>
    </div>
  );
}

export default FloatingBackground;
