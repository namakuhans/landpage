import { Camera, MessageCircle, Palette, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative z-20 border-t border-black/5 dark:border-white/5 bg-bg-surface mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">

        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-text-primary tracking-wider">GFX<span className="text-accent">.</span>STUDIO</h2>
          <p className="text-sm text-text-secondary mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="p-3 rounded-full bg-bg-base shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-text-secondary hover:text-accent transition-all duration-300">
            <Camera className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-bg-base shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-text-secondary hover:text-accent transition-all duration-300">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-bg-base shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-text-secondary hover:text-accent transition-all duration-300">
            <Palette className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-bg-base shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] text-text-secondary hover:text-accent transition-all duration-300">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;