import { Camera, MessageCircle, Palette, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-[#181b21] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">

        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-wider">GFX<span className="text-blue-500">.</span>STUDIO</h2>
          <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="p-3 rounded-full bg-[#0f1115] shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-gray-400 hover:text-white transition-all duration-300">
            <Camera className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-[#0f1115] shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-gray-400 hover:text-white transition-all duration-300">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-[#0f1115] shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-gray-400 hover:text-white transition-all duration-300">
            <Palette className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-[#0f1115] shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-gray-400 hover:text-white transition-all duration-300">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;