import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeSlider from "../components/Slider/HomeSlider";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [brandsOnSale, setBrandsOnSale] = useState([]);

  useEffect(() => {
    const fetchBrandData = async () => {
      const response = await fetch("/coupon.data.json");
      const data = await response.json();
      setBrands(data);
      setBrandsOnSale(data.filter((brand) => brand.isSaleOn));
    };

    fetchBrandData();
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <HomeSlider />

      {/* Top Brands Section */}
      <div className="my-8 px-6 py-6 bg-purple-50">
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
        <div className="w-full overflow-hidden">
          <Marquee
            speed={60}
            gradient={false}
            pauseOnHover={true}
            className="w-full"
          >
            <div className="flex items-center space-x-6">
              {brands.map((brand) => (
                <div
                  key={brand._id}
                  className="flex-shrink-0 mx-4 my-5 transform transition-transform duration-300 hover:scale-110"
                >
                  <Link to={`/brand-details/${brand._id}`}>
                    <img
                      src={brand.brand_logo || "default_logo_path.png"}
                      alt={brand.brand_name || "Brand Name"}
                      className="w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 object-contain shadow-md rounded-full transition-transform duration-200 ease-in-out hover:shadow-xl"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Brands on Sale Section */}
      <div className="my-8 px-4 mx-auto bg-purple-400 py-10">
        <h2 className="text-3xl font-semibold mb-4">Brands on Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brandsOnSale.map((brand) => (
            <div
              key={brand._id}
              className="max-w-sm bg-white rounded-2xl shadow-lg p-4"
            >
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-full h-36 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{brand.brand_name}</h3>
              <p className="text-sm text-gray-500">{brand.category}</p>
              <p className="text-lg font-bold text-indigo-600">
                {brand.coupons.length} Coupons
              </p>
              <Link
                to={`/brand-details/${brand._id}`}
                className="mt-4 block text-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-800"
              >
                View Coupons
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
