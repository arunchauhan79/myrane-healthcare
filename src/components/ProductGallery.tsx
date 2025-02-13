import React from 'react';
// import { Flipped, Flipper } from 'react-flip-toolkit';
// import { products } from '../utils/products'
import { products } from '../utils/products';
import ProductDetails from './ProductDetails';



const ProductGallery: React.FC = () => {
  const [showProductDetails, setShowProductDetails] = React.useState(false);
  const [id, setId] = React.useState(0);
  const handleProductClick = (productId: number) => {
    setId(productId);
    setShowProductDetails(true);
  }
  return (
    <section id="products" className="p-8 bg-gray-100">
      <h2 className="text-center text-3xl mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {
          products.map((product) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >

              <img className="rounded-t-lg hover:opacity-70" src={product.src} alt="" />

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.details}</p>
               
              </div>
            </div>
          ))
        }

      </div>
      {showProductDetails && <ProductDetails productId={id} showProductDetails={showProductDetails} />}
    </section>
  );
};

export default ProductGallery;
