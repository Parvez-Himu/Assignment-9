import React, { useState, useEffect } from 'react';
import BrandCard from '../components/Card/BrandCard';
import { ClipLoader } from 'react-spinners';

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/coupon.data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBrands(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3498db" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBrands = searchTerm
    ? brands.filter((brand) =>
      brand.brand_name && brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : brands;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Browse Brands</h2>
      <input
        type="text"
        placeholder="Search for a brand..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-3 border border-gray-300 rounded-lg w-full mb-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBrands.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No brands found.
          </div>
        ) : (
            filteredBrands.map((brand) => (
              <BrandCard key={brand._id} brand={brand} />
            ))
          )}
      </div>
    </div>
  );
};

export default BrandsPage;
