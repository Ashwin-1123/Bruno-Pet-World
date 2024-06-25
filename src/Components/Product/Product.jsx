import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from './Products.json'; // Assuming you have productsData JSON array
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


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
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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

const Product = ({ addToCart }) => {
  const [addedToCartMessage, setAddedToCartMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCartMessage(`${product.name} added to cart!`);
    setTimeout(() => {
      setAddedToCartMessage('');
    }, 2000); // Clear message after 2 seconds
  };

  return (
    <div className="container">
    <Link to="/cart" className="btn btn-success mt-3 btn-block cart-icon"><FontAwesomeIcon icon={faCartShopping}/>
        Go to Cart
      </Link>
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {productsData.map((product) => (
          <div key={product.id} className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={imageMap[product.images[0]]} // Using imageMap for dynamic import
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary btn-block rounded-pill"
                  onClick={() => handleAddToCart(product)}
                >
                  {addedToCartMessage === `${product.name} added to cart!` ? (
                    <span>{addedToCartMessage}</span>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;