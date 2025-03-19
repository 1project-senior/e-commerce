import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    setImagePreview(URL.createObjectURL(file)); // Preview the image
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    if (!productName || !productPrice || !productImage) {
      alert('Please fill all required fields.');
      setLoading(false);
      return;
    }

    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append('file', productImage);
    formData.append('upload_preset', 'testtheupload') // Replace with your upload preset
    formData.append('cloud_name', 'dbtchbjtz'); // Replace with your cloud name

    console.log('Form Data:', formData); // Log the form data

    try {
      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/dbtchbjtz/image/upload`, // Replace "your_cloud_name" with your actual cloud name
        formData
      );
      console.log('Cloudinary Response:', cloudinaryResponse.data) // Log the response

      const imageUrl = cloudinaryResponse.data.secure_url
      console.log('Image URL:', imageUrl) // Log the image URL

      // Save product details with the image URL
      const productData = {
        name: productName,
        price: productPrice,
        description: productDescription,
        stock: productStock,
        image: imageUrl,
      };

      // Send product data to your backend
      const backendResponse = await axios.post('http://localhost:3001/api/products/add', productData);
      console.log('Backend Response:', backendResponse.data);

      alert('Product added successfully!');
    } catch (error) {
      console.error('Error uploading image or saving product:', error);
      alert('Failed to add product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>ADD Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Price:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Description:</label>
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Stock:</label>
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Product Preview"
              style={{ width: '100px', height: '100px', marginTop: '10px' }}
            />
          )}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;