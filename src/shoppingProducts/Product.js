import React, { useState } from 'react';

const Product = ({ productDetails, onCartUpdate }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(productDetails.isAddToCart);

  const handleToggleCart = () => {
    setIsAddedToCart(!isAddedToCart);
    onCartUpdate(!isAddedToCart);
  };

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product image--> */}
          <img className="" src={productDetails.images} alt={productDetails.productName} />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{productDetails.productItem}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
              {/* <!-- Product price--> */}
              {productDetails.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={handleToggleCart}
              >
                <i className="bi-cart-fill me-1"></i>
                {isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
