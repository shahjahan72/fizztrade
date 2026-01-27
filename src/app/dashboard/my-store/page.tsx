'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

export default function MyStore() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Premium Leather Wallet',
      description: 'High quality handmade leather wallet',
      price: 45.99,
      image: '👜',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Wireless Headphones',
      description: 'Noise cancelling bluetooth headphones',
      price: 129.99,
      image: '🎧',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Stainless Steel Water Bottle',
      description: 'Insulated water bottle keeps drinks cold',
      price: 34.50,
      image: '🧊',
      status: 'Draft',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFormData(prev => ({
        ...prev,
        image: file.name,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.price) {
      alert('Please fill all fields');
      return;
    }

    const newProduct = {
      id: products.length + 1,
      ...formData,
      price: parseFloat(formData.price),
      image: previewImage || '📦',
      status: 'Active',
    };

    setProducts([...products, newProduct]);
    setFormData({ title: '', description: '', price: '', image: '' });
    setPreviewImage(null);
    setShowForm(false);
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-dark">My Store</h1>
          <p className="text-gray-600 mt-1">Manage your products and listings</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-gray-600 text-sm font-semibold mb-2">Total Products</p>
          <p className="text-3xl font-bold text-dark">{products.length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-gray-600 text-sm font-semibold mb-2">Active Listings</p>
          <p className="text-3xl font-bold text-primary">{products.filter(p => p.status === 'Active').length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-gray-600 text-sm font-semibold mb-2">Total Value</p>
          <p className="text-3xl font-bold text-secondary">
            ${products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <div className="bg-white rounded-lg border-2 border-primary p-8 mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-dark">Add New Product</h2>
            <button
              onClick={() => {
                setShowForm(false);
                setFormData({ title: '', description: '', price: '', image: '' });
                setPreviewImage(null);
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-1">
                <label htmlFor="title" className="block text-sm font-semibold text-dark mb-2">
                  Product Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Premium Leather Wallet"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Price */}
              <div className="md:col-span-1">
                <label htmlFor="price" className="block text-sm font-semibold text-dark mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-semibold text-dark mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your product in detail..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Image Upload */}
              <div className="md:col-span-2">
                <label htmlFor="imageUpload" className="block text-sm font-semibold text-dark mb-2">
                  Product Image
                </label>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="w-full px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-primary transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
                  </div>

                  {/* Image Preview */}
                  {previewImage && (
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-200">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                List Product
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setFormData({ title: '', description: '', price: '', image: '' });
                  setPreviewImage(null);
                }}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-dark rounded-lg font-bold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table/Grid */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left font-semibold text-dark">Product</th>
                <th className="px-6 py-4 text-left font-semibold text-dark">Description</th>
                <th className="px-6 py-4 text-center font-semibold text-dark">Price</th>
                <th className="px-6 py-4 text-center font-semibold text-dark">Status</th>
                <th className="px-6 py-4 text-center font-semibold text-dark">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {previewImage ? '📸' : product.image}
                      </div>
                      <div>
                        <p className="font-semibold text-dark">{product.title}</p>
                        <p className="text-xs text-gray-500">ID: #{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-600 text-sm truncate max-w-xs">{product.description}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="font-bold text-primary">${product.price.toFixed(2)}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.status === 'Active'
                        ? 'bg-green-100 text-secondary'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-primary hover:text-blue-700"
                        title="Edit product"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors text-gray-600 hover:text-red-600"
                        title="Delete product"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No products yet. Start by adding your first product!</p>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add Your First Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
