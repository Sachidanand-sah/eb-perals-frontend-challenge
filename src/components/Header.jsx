function Header() {
    return (
      <header className="flex justify-between items-center p-4 md:p-6 bg-white shadow-sm">
        <img src="/Group.png" alt="Logo" className="h-8 md:h-10" />
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-black hover:text-purple-800">Products</a>
          <a href="#" className="text-black hover:text-purple-600">Solutions</a>
          <a href="#" className="text-black hover:text-purple-600">Help center</a>
          <a href="#" className="text-black hover:text-purple-600">Get Started</a>
        </nav>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Login & Signup
        </button>
      </header>
    );
  }
  
  export default Header;