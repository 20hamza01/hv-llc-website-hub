
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-gray-600">
              Explore the range of tech services and digital products offered by Hamza & Vassia LLC.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Solutions Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-black text-white p-2 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
              Tech Solutions
            </h2>
            
            <div className="pl-11">
              <p className="text-gray-600 mb-8">
                We provide professional technical services to help businesses implement, optimize, and maintain their technology infrastructure.
              </p>

              <div className="space-y-8">
                {/* Custom Software Development */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3">Custom Software Development</h3>
                  <p className="text-gray-600 mb-4">
                    We build tailored software solutions designed to address your specific business challenges and requirements.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Web and mobile application development</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>API development and integration</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Backend system development</span>
                    </li>
                  </ul>
                </div>

                {/* Technical Consulting */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3">Technical Consulting</h3>
                  <p className="text-gray-600 mb-4">
                    Expert guidance and advice to help you make informed technology decisions for your business.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Technology assessment and recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital transformation strategy</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>IT infrastructure planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Products Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-black text-white p-2 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
              Digital Product E-commerce
            </h2>
            
            <div className="pl-11">
              <p className="text-gray-600 mb-8">
                We offer a variety of high-quality digital products designed to help businesses and individuals enhance their digital presence.
              </p>

              <div className="space-y-8">
                {/* Templates and UI Kits */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3">Templates and UI Kits</h3>
                  <p className="text-gray-600 mb-4">
                    Professional design assets to accelerate your development process and enhance the visual appeal of your projects.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Website templates and themes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>UI component libraries</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Design system resources</span>
                    </li>
                  </ul>
                </div>

                {/* Digital Tools and Software */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3">Digital Tools and Software</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized software tools to improve productivity and solve specific business challenges.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Productivity applications</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Development tools and plugins</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>Business process automation tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Our Services?</h2>
            <p className="text-gray-600 mb-6">
              We're here to help you with your technology needs. Reach out to discuss how we can support your business.
            </p>
            <p className="text-lg font-medium">
              Contact us at: <a href="mailto:hamzaalaouiismaili21@gmail.com" className="text-black hover:underline">hamzaalaouiismaili21@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
