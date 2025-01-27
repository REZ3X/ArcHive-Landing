const NavBar = () => {
    return (
      <nav className="max-425:hidden bg-gray-900 text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full max-425:w-[425px] z-50">
        <div className="text-2xl font-bold text-yellow-400">ArcHive</div>
        <div className="flex space-x-8">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
          <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a>
          <a href="#future" className="text-gray-400 hover:text-white transition-colors duration-300">Future</a>
          <a href="#create" className="text-gray-400 hover:text-white transition-colors duration-300">Create</a>
        </div>
      </nav>
    );
  };
  
  export default NavBar;