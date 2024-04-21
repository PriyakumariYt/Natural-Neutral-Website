// import React from 'react';


// const ProductCard = (curElem) => {
//     const { id, title, price, description, category, image, rating } = data
//   return (
//     <div className="border border-gray-200 rounded-lg p-4 mb-4">
//       <div className="flex items-center justify-between mb-2">
//         <div className="text-lg font-semibold">{title}</div>
//         <div className="text-gray-500">${price}</div>
//       </div>
//       <div className="text-gray-600 mb-2">{description}</div>
//       <div className="text-gray-500 mb-2">Category: {category}</div>
//       <div className="flex items-center">
//         <img src={image} alt={title} className="w-20 h-20 mr-4" />
//         <div>
//           <div className="text-yellow-500">Rating: {rating.rate}</div>
//           <div className="text-gray-500">Reviews: {rating.count}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// 2nd way
// import React from 'react';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: { rate: number; count: number };
// }

// const ProductCard: React.FC<Product> = ({ id, title, price, description, category, image, rating }) => {
//   return (
//     <div className="border border-gray-200 rounded-lg p-4 mb-4">
//       <div className="flex items-center justify-between mb-2">
//         <div className="text-lg font-semibold">{title}</div>
//         <div className="text-gray-500">${price}</div>
//       </div>
//       <div className="text-gray-600 mb-2">{description}</div>
//       <div className="text-gray-500 mb-2">Category: {category}</div>
//       <div className="flex items-center">
//         <img src={image} alt={title} className="w-20 h-20 mr-4" />
//         <div>
//           <div className="text-yellow-500">Rating: {rating.rate}</div>
//           <div className="text-gray-500">Reviews: {rating.count}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

