import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SEO from "../utils/SEO";
const FAQDB=()=> {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="bg-white min-h-screen ">
      <SEO title="FAQ-DOCK-BUMPERS by Elastomech" description="Explore Elastomech's comprehensive FAQ page on rubber dock bumpers, EPDM dock bumpers, and neoprene dock bumpers. Learn about materials like nitrile rubber, SBR rubber, and natural rubber, and discover heavy-duty, custom, and anti-vibration rubber solutions for industrial, warehouse, and logistics applications. Find installation tips, maintenance advice, and why Elastomech is the top choice for durable, weather-resistant, and high-impact rubber products. " keywords="rubber dock bumpers, EPDM dock bumpers, neoprene dock bumpers, nitrile rubber, heavy-duty dock bumpers, custom dock bumpers, rubber fenders, rubber buffers, anti-vibration rubber mounts, rubber shock mounts, rubber adhesive, rubber glue, rubber corner guards, rubber wall protectors, rubber cable protectors, rubber mounting pads, rubber strips, rubber moulding, EPDM rubber, neoprene rubber, SBR rubber, natural rubber, rubber compounds, rubber products, industrial rubber, rubber solutions, Elastomech.in, rubber dock fenders, heavy-duty rubber bumpers, custom rubber solutions, rubber corner protectors, rubber wall bumpers, rubber safety products, rubber industrial applications, rubber warehouse solutions, rubber logistics products, rubber manufacturing solutions, rubber automotive products, rubber food and beverage solutions, rubber retail products, rubber distribution products, rubber impact protection, rubber wear and tear solutions, rubber maintenance tips, rubber installation guides, rubber durability, rubber weather resistance, rubber oil resistance, rubber chemical resistance, rubber high-impact solutions, rubber noise reduction, rubber vibration reduction, rubber safety equipment, rubber industrial safety, rubber warehouse safety, rubber logistics safety, rubber manufacturing safety, rubber automotive safety, rubber food and beverage safety, rubber retail safety, rubber distribution safety, rubber long-lasting performance, rubber competitive pricing, rubber expert support, rubber nationwide shipping, rubber bulk orders, rubber custom orders, rubber industrial applications, rubber warehouse applications, rubber logistics applications, rubber manufacturing applications, rubber automotive applications, rubber food and beverage applications, rubber retail applications, rubber distribution applications, rubber impact absorption, rubber equipment protection, rubber vehicle protection, rubber wall protection, rubber dock protection, rubber loading dock solutions, rubber unloading dock solutions, rubber industrial dock solutions, rubber warehouse dock solutions, rubber logistics dock solutions, rubber manufacturing dock solutions, rubber automotive dock solutions, rubber food and beverage dock solutions, rubber retail dock solutions, rubber distribution dock solutions, rubber dock safety, rubber dock maintenance, rubber dock installation, rubber dock durability, rubber dock weather resistance, rubber dock oil resistance, rubber dock chemical resistance, rubber dock high-impact solutions, rubber dock noise reduction, rubber dock vibration reduction, rubber dock safety equipment, rubber dock industrial safety, rubber dock warehouse safety, rubber dock logistics safety, rubber dock manufacturing safety, rubber dock automotive safety, rubber dock food and beverage safety, rubber dock retail safety, rubber dock distribution safety, rubber dock long-lasting performance, rubber dock competitive pricing, rubber dock expert support, rubber dock nationwide shipping, rubber dock bulk orders, rubber dock custom orders" author="Elastomech-India"/>
      <NavBar/>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-black text-center mb-6">Dock Bumpers - FAQs</h1>

        {/* FAQ 1 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
            What are dock bumpers, and why are they important?
            <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
          </button>
          {openIndex === 0 && (
            <div className="p-4 bg-yellow-100 text-black">
              Dock bumpers are essential protective devices installed on loading docks to prevent damage to vehicles, walls, and equipment during loading and unloading. They absorb impact, reduce wear and tear, and improve safety. Elastomech specializes in high-quality rubber dock bumpers, EPDM dock bumpers, and neoprene dock bumpers designed for durability and performance. Learn more at <a href='https://en.wikipedia.org/wiki/Dock_bumper' target='_blank'  className='text-blue-700' >Wikipedia</a>.
            </div>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
            What types of dock bumpers does Elastomech offer?
            <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
          </button>
          {openIndex === 1 && (
            <div className="p-4 bg-yellow-100 text-black">
              Elastomech provides a wide range of dock bumpers, including rubber dock bumpers, heavy-duty dock bumpers, custom dock bumpers, and rubber fenders for added protection. More details can be found <a href='https://www.materialshandling.com.au/products/dock-bumpers/' target='_blank'  className='text-blue-700' >here</a>.
            </div>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
            What materials are used in Elastomech dock bumpers?
            <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
          </button>
          {openIndex === 2 && (
           <div className="p-4 bg-yellow-100 text-black leading-relaxed">
           Our dock bumpers are made from premium materials, including:
           <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
             <li><span className="font-semibold">EPDM rubber:</span> Weather-resistant and ideal for outdoor use.</li>
             <li><span className="font-semibold">Neoprene rubber:</span> Heavy-duty and durable under extreme conditions.</li>
             <li><span className="font-semibold">Nitrile rubber:</span> Oil-resistant for industrial applications.</li>
             <li><span className="font-semibold">SBR rubber:</span> Offers excellent abrasion resistance.</li>
             <li><span className="font-semibold">Natural rubber:</span> Flexible and impact-resistant.</li>
           </ul>
           <p className="mt-2">
             Read more about rubber types  
             <a 
               href="https://www.rubbercal.com/sheet-rubber/" 
               target="_blank" 
               className="text-blue-700 font-semibold hover:underline"
             >
               here
             </a>.
           </p>
         </div>
         
          )}
        </div>

        {/* FAQ 4 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
            How do I choose the right dock bumper for my facility?
            <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
          </button>
          {openIndex === 3 && (
            <div className="p-4 bg-yellow-100 text-black">
              Consider the following factors: 
              <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
        <li><span className="font-semibold">Impact level:</span> Heavy-duty bumpers for high-impact areas.</li>
        <li><span className="font-semibold">Environment:</span> Weather-resistant materials like EPDM for outdoor use.</li>
        <li><span className="font-semibold">Size and dimensions:</span> Ensure proper fit for your docking area.</li>
        <li><span className="font-semibold">Customization options:</span> Tailored solutions to meet specific needs.</li>
      </ol>
             Elastomech offers custom rubber bumpers tailored to your needs.
            </div>
          )}
        </div>

        {/* FAQ 5 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
            Are Elastomech dock bumpers easy to install?
            <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
          </button>
          {openIndex === 4 && (
            <div className="p-4 bg-yellow-100 text-black">
              Yes! Our dock bumpers are designed for easy installation. They come with pre-drilled holes and mounting hardware, making the process quick and hassle-free. We also provide detailed installation guides and support.
            </div>
          )}
        </div>

        {/* FAQ 6 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
            Can I get custom dock bumpers from Elastomech?
            <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
          </button>
          {openIndex === 5 && (
            <div className="p-4 bg-yellow-100 text-black">
              Absolutely! Elastomech specializes in custom dock bumpers tailored to your specific needs. Whether you need unique dimensions, materials, or designs, we can create a solution that fits perfectly.
              <a className='text-blue-700' href="https://elastomech.in/custom-product">Contact us here</a>
            </div>
          )}
        </div>

        {/* FAQ 7 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
            How do dock bumpers improve safety?
            <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
          </button>
          {openIndex === 6 && (
            <div className="p-4 bg-yellow-100 text-black">
              Dock bumpers prevent damage to vehicles and dock walls, reduce the risk of accidents during loading and unloading, and provide a cushioning effect to minimize wear and tear on equipment.
            </div>
          )}
        </div>

        {/* FAQ 8 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
            What industries benefit from Elastomech dock bumpers?
            <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
          </button>
          {openIndex === 7 && (
            <div className="p-4 bg-yellow-100 text-black">
              Our dock bumpers are used in various industries, including warehousing and logistics, manufacturing, retail and distribution, food and beverage, and automotive.
            </div>
          )}
        </div>

        {/* FAQ 9 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
            How do I maintain my dock bumpers?
            <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
          </button>
          {openIndex === 8 && (
            <div className="p-4 bg-yellow-100 text-black">
              Regularly inspect for wear and tear, clean with mild soap and water, and replace bumpers if they show signs of damage or reduced performance. Use rubber adhesive or rubber glue for minor repairs.
            </div>
          )}
        </div>

        {/* FAQ 10 */}
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
          <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
            Why choose Elastomech for dock bumpers?
            <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
          </button>
          {openIndex === 9 && (
            <div className="p-4 bg-yellow-100 text-black">
              Elastomech combines quality, durability, and affordability to deliver the best dock bumpers in the market. We offer custom solutions, expert support, and competitive pricing. Visit <a href="https://www.elastomech.in/products/dock-bumpers" target="_blank"  className='text-blue-700' >Elastomech.in</a> to learn more.
            </div>
          )}
        </div>

        {/* Back to Home Link */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-yellow-500 font-semibold">Back to Home</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default FAQDB