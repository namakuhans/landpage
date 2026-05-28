import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-[#0f1115] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Profile Card (Top on Mobile, Right on Desktop) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, y: 50, x: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          // Media query specific initial states can be tricky with Framer Motion,
          // but we can use CSS to help or just rely on a unified animation direction
          // that looks good on both.
          // Let's make it responsive using standard framer motion variants if needed,
          // or just simple conditional initial based on window size if we really needed to.
          // Since the prompt asked for specific directions:
          // Mobile: bottom to top
          // Desktop: right to left
          // A clean way is using responsive variants or simple CSS classes.
          // Let's define the motion block with a unified approach or variants.
        >
          <div className="hidden md:block w-full">
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true, margin: "-100px" }}
            >
               <ProfileCard
                name="A. Farhan M."
                title="Mograph Editor"
                handle="iHannsy"
                status="Creative"
                contactText="Contact Me"
                avatarUrl="/profile.png"
                showUserInfo
                enableTilt={true}
                enableMobileTilt
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#2e20388c 0%,#18548244 100%)"
              />
            </motion.div>
          </div>

          <div className="block md:hidden w-full flex justify-center">
            <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true, margin: "-100px" }}
               className="w-full flex justify-center"
            >
               <ProfileCard
                className="mx-auto"
                name="A. Farhan M."
                title="Mograph Editor"
                handle="iHannsy"
                status="Creative"
                contactText="Contact Me"
                avatarUrl="/profile.png"
                showUserInfo
                enableTilt={true}
                enableMobileTilt
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#2e20388c 0%,#18548244 100%)"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Section (Bottom on Mobile, Left on Desktop) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left order-2 md:order-1">
          <div className="hidden md:block w-full">
             <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
             >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  The Concept
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 font-light">
                  Motion graphics is more than just moving pictures; it's the art of breathing life into static concepts. Every frame is meticulously crafted to tell a story, evoke an emotion, and captivate the audience.
                </p>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                  My journey explores the intersection of design, technology, and storytelling. I believe in pushing boundaries with dynamic designs, creating seamless motion that speaks louder than words. Welcome to my creative sanctuary.
                </p>
             </motion.div>
          </div>

          <div className="block md:hidden w-full">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
             >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  The Concept
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 font-light">
                  Motion graphics is more than just moving pictures; it's the art of breathing life into static concepts. Every frame is meticulously crafted to tell a story, evoke an emotion, and captivate the audience.
                </p>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                  My journey explores the intersection of design, technology, and storytelling. I believe in pushing boundaries with dynamic designs, creating seamless motion that speaks louder than words. Welcome to my creative sanctuary.
                </p>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;