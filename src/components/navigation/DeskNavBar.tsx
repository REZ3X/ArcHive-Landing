import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="max-425:hidden bg-gray-900 text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full max-425:w-[425px] z-50">
      <div className="text-2xl font-bold text-yellow-400">ArcHive</div>
      <div className="flex items-baseline space-x-6">
        <a
          href="#about"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#features"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Features
        </a>
        <a
          href="#future"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Future
        </a>
        <a
          href="#create"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Create
        </a>
        <Link href="/patch" legacyBehavior>
          <a className="w-28 text-center text-black bg-[#fbcc16] px-2 py-1 rounded-lg hover:bg-[#b4920f] transition-colors duration-300">
            Patch Notes
          </a>
        </Link>
        <Link href="https://alpha-dev.archivenotes.site" legacyBehavior>
          <a className="w-28 text-center text-black bg-[#fbcc16] px-2 py-1 rounded-lg hover:bg-[#b4920f] transition-colors duration-300">
            Beta
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
