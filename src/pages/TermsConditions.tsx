
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TermsConditions = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          >
            Terms and Conditions
          </motion.h1>
          
          <div className="prose prose-lg max-w-none">
            <motion.p variants={fadeIn}>Last updated: {new Date().toLocaleDateString()}</motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              1. Acceptance of Terms
            </motion.h2>
            <motion.p variants={fadeIn}>
              By accessing or using the website of Hamza & Vassia LLC ("Company," "we," "us," or "our"), 
              you agree to comply with and be bound by these Terms and Conditions. If you do not agree to 
              these Terms and Conditions, please do not use our website.
            </motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              2. Use of Website
            </motion.h2>
            <motion.p variants={fadeIn}>
              You agree to use our website only for lawful purposes and in a way that does not infringe the 
              rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited 
              behavior includes harassing or causing distress or inconvenience to any other user, transmitting 
              obscene or offensive content, or disrupting the normal flow of dialogue within our website.
            </motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              3. Intellectual Property Rights
            </motion.h2>
            <motion.p variants={fadeIn}>
              All content included on this website, such as text, graphics, logos, button icons, images, 
              audio clips, digital downloads, data compilations, and software, is the property of the 
              Company or its content suppliers and protected by international copyright laws. The compilation 
              of all content on this site is the exclusive property of the Company and protected by international 
              copyright laws.
            </motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              4. Products and Services
            </motion.h2>
            <motion.p variants={fadeIn}>
              We provide various tech services and digital products as described on our website. By purchasing 
              our services or products, you agree to the terms and conditions specific to those offerings, 
              which may be provided separately at the time of purchase.
            </motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              5. Limitation of Liability
            </motion.h2>
            <motion.p variants={fadeIn}>
              To the fullest extent permitted by applicable law, the Company shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits or 
              revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
              intangible losses, resulting from (a) your access to or use of or inability to access or use 
              the website; (b) any conduct or content of any third party on the website; or (c) unauthorized 
              access, use, or alteration of your transmissions or content.
            </motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              6. Governing Law
            </motion.h2>
            <motion.p variants={fadeIn}>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
              in which the Company is established, without regard to its conflict of law provisions.
            </motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              7. Changes to Terms
            </motion.h2>
            <motion.p variants={fadeIn}>
              We reserve the right to modify these Terms at any time. Your continued use of the website 
              after any such changes constitutes your acceptance of the new Terms.
            </motion.p>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-semibold mt-8 mb-4"
            >
              8. Contact Information
            </motion.h2>
            <motion.p variants={fadeIn}>
              If you have any questions about these Terms, please contact us at:
            </motion.p>
            <motion.p variants={fadeIn} className="my-4">
              <strong>Email:</strong> <a href="mailto:hamzaalaouiismaili21@gmail.com" className="text-black hover:underline transition-colors">hamzaalaouiismaili21@gmail.com</a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
