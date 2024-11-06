import React from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';

const products = [
  { id: 1, name: 'Better Cal-D tablet', src: './assets/products/Better-Cal-DTab.jpg', details: 'Better Cal-D tablet is a combination of calcium citrate with vitamin D3 and minerals like zinc and magnesium. Calcium prevents low blood calcium levels in people who do not get enough calcium from their diets. Calcium is important for the growth and development of bones. Vitamin D3 is used in the absorption of calcium in the blood. Vitamin D3 helps process essential bodily minerals, like calcium and phosphorus. Lack of vitamin D3 results in bone weakening, bone pain, and skin diseases. ' },
  { id: 2, name: 'Better Cal-D suspension', src: './assets/products/Better-Cal-D Syrup-new.jpg', details: 'Better Cal-D suspension is a combination of calcium citrate with vitamin D3 and minerals like zinc and magnesium. Calcium prevents low blood calcium levels in people who do not get enough calcium from their diets. Calcium is important for the growth and development of bones. Vitamin D3 is used in the absorption of calcium in the blood. Vitamin D3 helps process essential bodily minerals, like calcium and phosphorus. Lack of vitamin D3 results in bone weakening, bone pain, and skin diseases. ' },
  { id: 1, name: 'Mrofer XT Total', src: './assets/products/Myrofer-XT-Total.jpg', details: 'Mrofer XT Total contains Ferrous Ascorbate(iron), Folic acid, Methylcobalamin, and Zinc which may be useful for anaemia. It may support iron levels in the body during pregnancy, blood loss, or iron deficiency.' },
  { id: 2, name: 'Myropra-DSR', src: './assets/products/Myropra-DSR-3d.jpg', details: 'Myropra-DSR Capsule 10\'s is a gastrointestinal medicine composed of Rabeprazole (stomach acid reducer) and Domperidone (nausea/vomiting reducer). Together they reduce the amount of acid your stomach makes and decrease the symptoms of nausea and vomiting.' },
  { id: 1, name: 'Vitasential syrup', src: './assets/products/Vitasential-new.jpg', details: 'Vitasential syrup helps boost immunity, prevent and manage nutritional deficiencies. It can also help improve appetite and speed up the recovery process post-illness. Vitamins and minerals present in Vitasential replenish the nutrient reserves of the body which aid in the proper functioning of the heart, nervous system, and immunity. The presence of natural antioxidants neutralize the damage caused by harmful chemicals called free radicals and improves the response of the human body against invading infections. This makes it efficient in providing speedy recovery from common infections such as cold and flu.Zinc has been found to be a very important mineral in boosting immunity. It can be used in treating major immune deficiency disorders. It acts as the best nutritional support in cardiac, diabetic, tubercular, and rheumatic patients. It is equally beneficial for patients who are suffering from acute and chronic diseases.' },
  // { id: 2, name: 'Product 2', src: './assets/banner/2.jpg', details: 'Product 2 details' },
  // { id: 1, name: 'Product 1', src: './assets/banner/4.jpg', details: 'Product 1 details' },
  // { id: 2, name: 'Product 2', src: './assets/banner/1.jpg', details: 'Product 2 details' },
  // Add more products
];

const ProductGallery: React.FC = () => {
  return (
    <section id="products" className="p-8 bg-gray-100">
      <h2 className="text-center text-3xl mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {
          products.map((product) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={product.src} alt="" />
              </a>
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
    </section>
  );
};

export default ProductGallery;
