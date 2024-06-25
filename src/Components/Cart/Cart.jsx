import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../Product/Products.json'; // Assuming you have productsData JSON array
// import '../Product/Product.css'; // Optional: You can add a separate CSS file for styling if needed

// Import images statically
import dogFood1 from '../../Components/images/dog-food-1.jpg';
import dogFood2 from '../../Components/images/dog-food-2.jpg';
import dogGroomingKit1 from '../../Components/images/dog-grooming-kit-1.jpg';
import dogGroomingKit2 from '../../Components/images/dog-grooming-kit-2.jpg';
import dogCollar1 from '../../Components/images/dog-collar-1.jpg';
import dogCollar2 from '../../Components/images/dog-collar-2.jpg';
import dogCollar3 from '../../Components/images/dog-collar-3.jpg';
import dogLeash1 from '../../Components/images/dog-leash-1.jpg';
import dogLeash2 from '../../Components/images/dog-leash-2.jpg';
import dogChewToy1 from '../../Components/images/dog-chew-toy-1.jpg';
import dogChewToy2 from '../../Components/images/dog-chew-toy-2.jpg';
import dogRaincoat1 from '../../Components/images/dog-raincoat-1.jpg';
import dogRaincoat2 from '../../Components/images/dog-raincoat-2.jpg';
import dogBrush1 from '../../Components/images/dog-brush-1.jpg';
import dogBrush2 from '../../Components/images/dog-brush-2.jpg';
import dogTrainingPads1 from '../../Components/images/dog-training-pads-1.jpg';
import dogTrainingPads2 from '../../Components/images/dog-training-pads-2.jpg';
import dogTravelCarrier1 from '../../Components/images/dog-travel-carrier-1.jpg';
import dogTravelCarrier2 from '../../Components/images/dog-travel-carrier-2.jpg';
import dogCoolingMat1 from '../../Components/images/dog-cooling-mat-1.jpg';
import dogCoolingMat2 from '../../Components/images/dog-cooling-mat-2.jpg';
import dogToys1 from '../../Components/images/dog-toys-1.jpg';
import dogToys2 from '../../Components/images/dog-toys-2.jpg';

const imageMap = {
  'dog-food-1.jpg': dogFood1,
  'dog-food-2.jpg': dogFood2,
  'dog-grooming-kit-1.jpg': dogGroomingKit1,
  'dog-grooming-kit-2.jpg': dogGroomingKit2,
  'dog-collar-1.jpg': dogCollar1,
  'dog-collar-2.jpg': dogCollar2,
  'dog-collar-3.jpg': dogCollar3,
  'dog-leash-1.jpg': dogLeash1,
  'dog-leash-2.jpg': dogLeash2,
  'dog-chew-toy-1.jpg': dogChewToy1,
  'dog-chew-toy-2.jpg': dogChewToy2,
  'dog-raincoat-1.jpg': dogRaincoat1,
  'dog-raincoat-2.jpg': dogRaincoat2,
  'dog-brush-1.jpg': dogBrush1,
  'dog-brush-2.jpg': dogBrush2,
  'dog-training-pads-1.jpg': dogTrainingPads1,
  'dog-training-pads-2.jpg': dogTrainingPads2,
  'dog-travel-carrier-1.jpg': dogTravelCarrier1,
  'dog-travel-carrier-2.jpg': dogTravelCarrier2,
  'dog-cooling-mat-1.jpg': dogCoolingMat1,
  'dog-cooling-mat-2.jpg': dogCoolingMat2,
  'dog-toys-1.jpg': dogToys1,
  'dog-toys-2.jpg': dogToys2,
};

const Cart = ({ cart, removeFromCart, addToCart }) => {
  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="row">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="col-lg-4 mb-4">
              <div className="card">
                {/* Display product image */}
                <img
                  src={imageMap[product.images[0]]} // Assuming first image in images array
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${(product.price * product.quantity).toFixed(2)}</p>
                  <p>Quantity: {product.quantity}</p>
                  <div className="btn-group">
                    <button
                      className="btn btn-secondary"
                      onClick={() => removeFromCart(product)}
                    >
                      -
                    </button>
                    <button className="btn btn-light" disabled>
                      {product.quantity}
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromCart(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Link to="/product" className="btn btn-secondary mt-3">
        Continue Shopping
      </Link>
      <Link to="/checkout" className="btn btn-success mt-3 ms-3">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
