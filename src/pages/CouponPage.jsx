import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import { FaClipboard, FaExternalLinkAlt } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const CouponPage = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandDetails = async () => {
      try {
        const response = await fetch('/coupon.data.json');
        const data = await response.json();

        const selectedBrand = data.find((brand) => brand._id === id);
        if (selectedBrand) {
          setBrand(selectedBrand);
          setCoupons(selectedBrand.coupons);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching brand details:', error);
        setLoading(false);
      }
    };

    fetchBrandDetails();
  }, [id]);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!brand) return <Navigate to="/brands" />;

  const handleCopy = () => {
    toast.success("Coupon Code Copied!");
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />

      <div className="flex justify-center items-center space-x-4 mb-8">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-gray-800">{brand.brand_name}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coupons.map((coupon) => (
          <div
            key={coupon.coupon_code}
            className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-between"
            style={{ minHeight: '350px' }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">{coupon.coupon_code}</h3>
            <p className="text-sm text-gray-700 mt-2 line-clamp-2">{coupon.description}</p>

            <div className="mt-4 flex flex-col space-y-2">
              <p className="text-sm text-gray-600">Expiry: {coupon.expiry_date}</p>
              <p className="text-sm text-gray-600">Condition: {coupon.condition}</p>
              <p className="text-sm text-gray-600">Type: {coupon.coupon_type}</p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="flex items-center bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                  <FaClipboard className="mr-2" />
                  Copy Code
                </button>
              </CopyToClipboard>

              <Link
                to={coupon.brand_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-400 flex items-center text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-500 transition duration-300 transform hover:scale-105"
              >
                <FaExternalLinkAlt className='mr-2' /> Use Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;
