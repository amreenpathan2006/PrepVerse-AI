import "./Card.css";

function Card({ children, className = "" }) {
  return (
    <div className={`pv-card ${className}`}>
      {children}
    </div>
  );
}

export default Card;