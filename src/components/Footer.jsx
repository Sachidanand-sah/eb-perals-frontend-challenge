
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="py-12 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <p className="text-gray-600">
            Curabitur consequat, purus a scelerisque sagittis, nulla metus tincidunt elit, vel venenatis nulla libero nec nulla. Suspendisse potenti. Aenean a justo vel sapien pellentesque tincidunt. Sed luctus, elit ac interdum convallis, ligula libero egestas orci, at actor felis ligula nec odio.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">Payments</a></li>
            <li><a href="#" className="hover:text-purple-600">Invoice Factoring</a></li>
            <li><a href="#" className="hover:text-purple-600">Invoice Finance</a></li>
            <li><a href="#" className="hover:text-purple-600">Supplier Finance</a></li>
            <li><a href="#" className="hover:text-purple-600">Customer Finance</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">About us</a></li>
            <li><a href="#" className="hover:text-purple-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">Frequently asked questions</a></li>
            <li><a href="#" className="hover:text-purple-600">Knowledge base</a></li>
            <li><a href="#" className="hover:text-purple-600">API documentation</a></li>
          </ul>
        </div>
      </div>

    
      <div className="mt-8 px-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-sky-600">Privacy policy</a>
          <a href="#" className="hover:text--600">Contact us</a>
        </div>
        <div className="flex space-x-2">
          <a href="#" className="hover:text-purple-600">Site map</a>
          <a href="#" className="hover:text-purple-600">@ebpearls</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;