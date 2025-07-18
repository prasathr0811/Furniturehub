import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const product = {
    id: parseInt(id || '1'),
    name: 'Premium Sofa Set',
    price: 45000,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 124,
    description: 'Transform your living space with our premium sofa set. Crafted with high-quality materials and designed for ultimate comfort, this sofa set combines style and functionality perfectly.',
    features: [
      'Premium fabric upholstery',
      '3-seater configuration',
      'Solid wood frame',
      'High-density foam cushions',
      'Removable cushion covers',
      'Anti-sagging spring system'
    ],
    specifications: {
      'Dimensions': '220cm x 90cm x 85cm',
      'Material': 'Fabric and Wood',
      'Weight': '85 kg',
      'Color': 'Grey',
      'Warranty': '2 years',
      'Assembly': 'Required'
    },
    inStock: true,
    category: 'living-room'
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    });
  };

  const relatedProducts = [
    {
      id: 5,
      name: 'Coffee Table',
      price: 8000,
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5
    },
    {
      id: 9,
      name: 'Side Table',
      price: 5000,
      image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.3
    },
    {
      id: 10,
      name: 'Floor Lamp',
      price: 3500,
      image: 'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-6">₹{product.price.toLocaleString()}</p>
          
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
            <ul className="space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
              <Heart className="h-5 w-5" />
              <span>Add to Wishlist</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-blue-600" />
                <span>Free delivery on orders above ₹25,000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-blue-600" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold">{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <p className="text-xl font-bold text-blue-600">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;