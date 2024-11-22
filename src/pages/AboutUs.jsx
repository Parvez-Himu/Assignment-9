import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="w-full mx-auto px-8">
        {/* Section 1: Introduction */}
        <section className="mb-10 bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Welcome to <strong className="text-blue-600">DiscountPro</strong>! We are dedicated to providing
            top-quality products and excellent customer service. Our mission is to make online shopping a seamless and
            enjoyable experience for everyone. Whether you're looking for the latest fashion trends, tech gadgets, or home
            essentials, we've got you covered. Our team works tirelessly to ensure that every product meets the highest
            standards of quality.
          </p>
        </section>

        {/* Section 2: Our Services */}
        <section className="mb-10 bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-green-700 mb-4">Our Services</h3>
          <p className="text-lg text-gray-700">
            At <strong className="text-green-600">DiscountPro</strong>, we offer a wide range of services to enhance your
            shopping experience:
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <h4 className="text-xl font-bold text-green-800">Fast and Secure Delivery</h4>
              <p className="text-gray-600">
                We ensure quick and reliable delivery to your doorstep. Our logistics partners provide fast, secure, and
                tracking-enabled shipments for your peace of mind.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold text-green-800">Customer Support</h4>
              <p className="text-gray-600">
                Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues you
                may have. We are here to ensure your shopping experience is smooth and hassle-free.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold text-green-800">Easy Returns and Exchanges</h4>
              <p className="text-gray-600">
                We understand that sometimes a product may not meet your expectations. Our easy returns and exchanges
                policy ensures you can shop with confidence.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold text-green-800">Secure Payment Options</h4>
              <p className="text-gray-600">
                We offer a range of secure payment methods, including credit cards, PayPal, and more. Your data is
                encrypted, ensuring safe transactions every time.
              </p>
            </li>
          </ul>
        </section>

        {/* Section 3: Products */}
        <section className="mb-10 bg-yellow-50 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-yellow-700 mb-4">Our Products</h3>
          <p className="text-lg text-gray-700">
            We offer a diverse selection of high-quality products across various categories:
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <h4 className="text-xl font-bold text-yellow-800">Fashion</h4>
              <p className="text-gray-600">
                Stay stylish with our curated collection of apparel, shoes, accessories, and more. From casual wear to
                formal attire, we have something for every occasion.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold text-yellow-800">Electronics</h4>
              <p className="text-gray-600">
                Discover the latest gadgets and tech accessories. From smartphones to laptops, we offer cutting-edge
                technology to enhance your digital lifestyle.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold text-yellow-800">Home & Living</h4>
              <p className="text-gray-600">
                Transform your home with our home essentials, decor, furniture, and kitchenware. We offer stylish and
                functional products to suit your needs.
              </p>
            </li>
          </ul>
        </section>

        {/* Section 4: Contact Info */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to get in
            touch with us.
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <FaGithub size={30} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={30} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={30} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
