import { Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative z-10">
      <div className="container mx-auto px-4 flex flex-col justify-center align-center items-center ml-14 max-425:max-w-[425px] max-425:ml-[0]">
        <div className="grid md:grid-cols-4 gap-8 w-full">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">ArcHive</h3>
            <p className="text-gray-400">
              Your dynamic hub for ideas and stories.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Business Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors">
                <a href="tel:+6282141884664">Phone: +62 821 4188 4664</a>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                <a href="mailto:abim@rejaka.me">Email: abim@rejaka.me</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row max-425:flex-row max-425:ml-12 gap-36">
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/comingSoon"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    The Team
                  </a>
                </li>
                <li>
                  <a
                    href="/comingSoon"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                <a 
                    href="/donate"
                    className="text-gray-400 hover:text-white transition-colors"
                    >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/rejakasusanto?igsh=dnZlZ25uZ2xuNzU1"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://github.com/REZ3X"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 ml-[-65px] max-425:ml-[0] max-425:text-sm flex align-center items-center justify-center mb-[-30px] text-center text-gray-400">
         <p> &copy; {new Date().getFullYear()} ArcHive, Team 8, and <a href="https://rejaka.me" target="_blank" className="hover:underline"> rejaka.me</a>. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
