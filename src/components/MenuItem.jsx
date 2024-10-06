import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const navigate = useNavigate();

  const handleBuyClick = (item) => {
    navigate('/purchase', { state: { item } });
  };

  return (
    <div className="col-md-3">
      <div className="card h-100">
        <div className="image-container">
          <img src={item.image} className="card-img-top" alt={item.title} />
          {item.badge && <span className="badge-sell">{item.badge}</span>}
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.originalPrice && <del>${item.originalPrice}</del>} ${item.price}
          </p>
          <button
            className="btn-hover"
            onClick={() => handleBuyClick(item)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;