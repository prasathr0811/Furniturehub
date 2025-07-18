import React, { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { Filter, Star, Grid, List, Search } from 'lucide-react';

const ProductsPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filterOpen, setFilterOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Premium Sofa Set',
      price: 45000,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      category: 'living-room',
      description: 'Comfortable 3-seater sofa with premium fabric'
    },
    {
      id: 2,
      name: 'Luxury Bed Frame',
      price: 35000,
      image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      category: 'bedroom',
      description: 'King size bed frame with headboard'
    },
    {
      id: 3,
      name: 'Office Chair',
      price: 12000,
      image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      category: 'office',
      description: 'Ergonomic office chair with lumbar support'
    },
    {
      id: 4,
      name: 'Dining Table Set',
      price: 28000,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      category: 'dining',
      description: '6-seater dining table with chairs'
    },
    {
      id: 5,
      name: 'Coffee Table',
      price: 8000,
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      category: 'living-room',
      description: 'Modern glass coffee table'
    },
    {
      id: 6,
      name: 'Wardrobe',
      price: 55000,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      category: 'bedroom',
      description: '4-door wardrobe with mirror'
    },
    {
      id: 7,
      name: 'Study Table',
      price: 15000,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      category: 'office',
      description: 'Wooden study table with drawers'
    },
    {
      id: 8,
      name: 'Bookshelf',
      price: 18000,
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      category: 'office',
      description: '5-tier wooden bookshelf'
    }
  ];

  let filteredProducts = products;

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  // Filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const categories = [
    { id: 'living-room', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'office', name: 'Office' },
    { id: 'dining', name: 'Dining' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <Link
                to="/products"
                className={`block p-2 rounded hover:bg-gray-100 ${!category ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                All Products
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/products/${cat.id}`}
                  className={`block p-2 rounded hover:bg-gray-100 ${category === cat.id ? 'bg-blue-100 text-blue-600' : ''}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Under ₹15,000
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  ₹15,000 - ₹30,000
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  ₹30,000 - ₹50,000
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Above ₹50,000
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 sm:mb-0">
              {searchQuery 
                ? `Search Results for "${searchQuery}"` 
                : category 
                  ? categories.find(c => c.id === category)?.name 
                  : 'All Products'
              }
            </h1>
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                Found {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </p>
              {sortedProducts.length === 0 && (
                <p className="text-blue-600 mt-2">
                  Try searching with different keywords or browse our categories.
                </p>
              )}
            </div>
          )}

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover ${
                      viewMode === 'list' ? 'w-48 h-32' : 'w-full h-48'
                    }`}
                  />
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <p className="text-xl font-bold text-blue-600 mb-4">₹{product.price.toLocaleString()}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? `No products match your search for "${searchQuery}"`
                  : 'No products available in this category'
                }
              </p>
              <Link
                to="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;