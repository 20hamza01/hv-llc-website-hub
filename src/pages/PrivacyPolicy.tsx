
const PrivacyPolicy = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Hamza & Vassia LLC ("we," "our," or "us") respects your privacy and is committed to protecting 
              it through our compliance with this policy. This policy describes the types of information we 
              may collect from you or that you may provide when you visit our website and our practices for 
              collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Information that you provide by filling in forms on our website, including information 
                provided at the time of registering to use our website, subscribing to our services, or 
                requesting further services.
              </li>
              <li>
                Records and copies of your correspondence (including email addresses), if you contact us.
              </li>
              <li>
                Details of transactions you carry out through our website and of the fulfillment of your orders.
              </li>
              <li>
                Information about your internet connection, the equipment you use to access our website, 
                and usage details.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal 
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our website or any products or services we offer or provide through it.</li>
              <li>For any other purpose with your consent.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users, and information that does not identify 
              any individual, without restriction. We may disclose personal information that we collect or you 
              provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </p>
            <p className="my-4">
              <strong>Email:</strong> <a href="mailto:hamzaalaouiismaili21@gmail.com" className="text-black hover:underline">hamzaalaouiismaili21@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
