
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div>
      {/* Hero Section with Gradient and Minimalistic Background */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 relative overflow-hidden">
        {/* Minimalistic background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gray-200 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gray-300 opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-gray-100 opacity-30 blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Tech Solutions & Digital Products
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Hamza & Vassia LLC is your trusted partner for custom tech services and premium digital products.
            </p>
            <div className="pt-4">
              <Link to="/services">
                <Button className="rounded-md px-8 py-6 text-base transition-transform hover:scale-105">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Card Animations */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">About Hamza & Vassia LLC</h2>
              <p className="text-gray-600 mb-4">
                We are a technology-focused company dedicated to providing high-quality tech solutions and digital products to businesses and individuals alike.
              </p>
              <p className="text-gray-600 mb-6">
                Our team brings years of experience in software development, digital product creation, and technical consulting to help you achieve your goals.
              </p>
              <Link to="/services">
                <Button variant="outline" className="rounded-md transition-all hover:shadow-md">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-gradient-to-r from-black to-gray-700 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Professional and reliable tech services</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-to-r from-black to-gray-700 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>High-quality digital products</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-to-r from-black to-gray-700 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Tailored solutions for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-to-r from-black to-gray-700 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Dedicated customer support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview with Card Animations */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of technology services and digital products to help your business grow and succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <div className="inline-block p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                  <Code className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tech Solutions</h3>
              <p className="text-gray-600 mb-4">
                Custom software development, technical consulting, and IT infrastructure solutions tailored to your business requirements.
              </p>
              <Link to="/services" className="text-black font-medium inline-flex items-center group">
                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Digital Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <div className="inline-block p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                  <ShoppingCart className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Products</h3>
              <p className="text-gray-600 mb-4">
                Premium digital products including templates, tools, software licenses, and digital assets for your projects.
              </p>
              <Link to="/services" className="text-black font-medium inline-flex items-center group">
                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-black via-gray-800 to-black text-white rounded-xl p-8 md:p-12 shadow-lg"
          >
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Ready to get started?</h2>
              <p className="text-gray-300 text-lg">
                Contact us today to discuss how we can help with your tech needs or to explore our digital product offerings.
              </p>
              <div className="pt-2">
                <a href="mailto:hamzaalaouiismaili21@gmail.com">
                  <Button variant="outline" className="rounded-md bg-transparent border-white hover:bg-white hover:text-black text-white px-8 py-6 text-base transition-all hover:shadow-lg">
                    Contact Us Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
