
const TermsConditions = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of Hamza & Vassia LLC ("Company," "we," "us," or "our"), 
              you agree to comply with and be bound by these Terms and Conditions. If you do not agree to 
              these Terms and Conditions, please do not use our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Website</h2>
            <p>
              You agree to use our website only for lawful purposes and in a way that does not infringe the 
              rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited 
              behavior includes harassing or causing distress or inconvenience to any other user, transmitting 
              obscene or offensive content, or disrupting the normal flow of dialogue within our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property Rights</h2>
            <p>
              All content included on this website, such as text, graphics, logos, button icons, images, 
              audio clips, digital downloads, data compilations, and software, is the property of the 
              Company or its content suppliers and protected by international copyright laws. The compilation 
              of all content on this site is the exclusive property of the Company and protected by international 
              copyright laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Products and Services</h2>
            <p>
              We provide various tech services and digital products as described on our website. By purchasing 
              our services or products, you agree to the terms and conditions specific to those offerings, 
              which may be provided separately at the time of purchase.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, the Company shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits or 
              revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
              intangible losses, resulting from (a) your access to or use of or inability to access or use 
              the website; (b) any conduct or content of any third party on the website; or (c) unauthorized 
              access, use, or alteration of your transmissions or content.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
              in which the Company is established, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of the website 
              after any such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

export default TermsConditions;
