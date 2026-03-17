import { motion } from "framer-motion";
// import portrait from "@/assets/portrait.jpg";

const IdentityColumn = () => {
  return (
    <aside className="md:w-[40%] md:h-screen md:fixed left-0 top-0 p-8 md:p-16 flex flex-col justify-between border-r border-border/50">
      <div>
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[3/5] w-32 bg-secondary mb-12 overflow-hidden"
          style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.05)" }}
        >
          <img
            src={portrait}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            alt="Muhammed Sinan"
          />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl font-medium tracking-tighter leading-none mb-2">
            MUHAMMED SINAN
          </h1>
          <p className="text-muted-foreground font-mono text-sm tracking-tight mb-8">
             FULL STACK DEVELOPER 
          </p>

          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase text-muted-foreground tracking-widest">
                Core Stack
              </p>
              <p className="text-sm font-medium">
                Python, Django, React, PostgreSQL
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase text-muted-foreground tracking-widest">
                Status
              </p>
              <p className="text-sm font-medium">Available — Immediate Joining</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase text-muted-foreground tracking-widest">
                Location Pref
              </p>
              <p className="text-sm font-medium">
                Remote · Bengaluru · Hyderabad · Kerala
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden md:flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mt-8"
      >
        <a href="#summary" className="hover:text-foreground transition-colors duration-300">
          00 Summary
        </a>
        <a href="#projects" className="hover:text-foreground transition-colors duration-300">
          01 Projects
        </a>
        <a href="#experience" className="hover:text-foreground transition-colors duration-300">
          02 Experience
        </a>
        <a href="#skills" className="hover:text-foreground transition-colors duration-300">
          03 Skills
        </a>
        <a href="#education" className="hover:text-foreground transition-colors duration-300">
          04 Education
        </a>
      </motion.nav>
    </aside>
  );
};

export default IdentityColumn;
