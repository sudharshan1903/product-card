// Section.js
import React, { useState } from 'react';
import Product from "../shoppingProducts/Product";
import Header from '../header/Header';
import Navigation from "../navigation/Navigation"
import Footer from '../footer/Footer';

const PRODUCT_DETAILS = [
    {productId:1,productName:"Bottle",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/GlassBottles.jpg",price:"$40.00 - $80.00",productItem:"Fancy Product"},
    {productId:2,productName:"Heart",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/pk.jpg",price:"$20.00$18.00",productItem:"Special Item"},
    {productId:3,productName:"Doll",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/Doll.jpg",price:"$50.00$25.00",productItem:"Sale Item"},
    {productId:4,productName:"Kulfis",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/Kulfis.jpg",price:"$40.00",productItem:"Popular Item"},
    {productId:5,productName:"Watch",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/Watch.jpg",price:"$50.00$25.00",productItem:"Sale Item"},
    {productId:6,productName:"Phone",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/Phone.jpg",price:"$120.00 - $280.00",productItem:"Fancy Product"},
    {productId:7,productName:"Hoodie",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/Hoodie.jpg",price:"$20.00$18.00",productItem:"Special Item"},
    {productId:8,productName:"Hat",isAddToCart:false,description:"Bank Offer10% off on HDFC Bank Credit Card EMI Transactions",images:"/images/Hat.jpg",price:"$40.00",productItem:"Popular Item"}
    ];

    const Section = () => {
        const [cartSize, setCartSize] = useState(0);
      
        const CartUpdate = (isAdded) => {
          setCartSize((prevSize) => (isAdded ? prevSize + 1 : prevSize - 1));
        };
      
        return (
          <>
          <Navigation cartSize={cartSize}/>
          <Header/>
            {/*  Section */}
            <section className="py-5">
              <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {PRODUCT_DETAILS.map((product) => (
                    <Product key={product.productId} productDetails={product} onCartUpdate={CartUpdate} />
                  ))}
                </div>
              </div>
            </section>
          <Footer/>
          </>
          
        );
      };
      
      export default Section;


    
      