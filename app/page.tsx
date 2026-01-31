export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-32 px-6 sm:px-8 lg:px-12 bg-background dark:bg-gray-900 font-sans">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-accent dark:text-orange-400 mb-8 tracking-tight leading-[0.95]">
            Nanditha
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-accent dark:text-orange-400/90 leading-relaxed">
            A marketing analyst and global management graduate student with a curiosity for how ideas scale across markets.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex px-5 py-2.5 rounded-full border-2 border-accent dark:border-orange-400 text-accent dark:text-orange-400 text-sm font-medium hover:bg-accent hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex px-5 py-2.5 rounded-full border-2 border-accent dark:border-orange-400 text-accent dark:text-orange-400 text-sm font-medium hover:bg-accent hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-background dark:bg-gray-800 font-sans">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent dark:text-orange-400 mb-10">
            About Me
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-accent/90 dark:text-gray-300 mb-4 leading-relaxed">
              I&apos;m passionate about transforming insights into meaningful business growth. My work bridges analytics and strategy, where creativity meets precision turning data into narratives that drive measurable impact.
            </p>
            <p className="text-lg text-accent/90 dark:text-gray-300 mb-4 leading-relaxed">
              At Thunderbird School of Global Management, I specialize in Digital Transformation, combining analytical skills with a global business perspective. From building Tableau and Power BI dashboards that uncover customer behavior to crafting go-to-market strategies for clients across industries, I thrive on solving problems through data storytelling and innovation.
            </p>
            <p className="text-lg text-accent/90 dark:text-gray-300 leading-relaxed">
              Previously, I have worked as a Marketing Analyst at Fiesta Vacations and as a Student Consultant for Elevated Materials, advising on market expansion and brand repositioning.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12 bg-background dark:bg-gray-900 font-sans">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent dark:text-orange-400 mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/60 dark:bg-gray-800 rounded-xl p-6 border border-accent/20 dark:border-gray-700 hover:border-accent/40 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-accent dark:text-orange-400 mb-3">
                Elevated Materials – Market Entry Strategy – Student Consultant
              </h3>
              <p className="text-accent/90 dark:text-gray-300 mb-4 leading-relaxed">
                Developed a 12–24-month market entry roadmap for a U.S.-based carbon-fiber manufacturer. Used CRM and HubSpot analytics to measure sales velocity and acquisition efficiency. Recommended industry expansion into robotics, UAVs, and medical devices, aligning brand messaging from sustainability to ROI-driven performance.
              </p>
              <a
                href="#"
                className="text-accent dark:text-orange-400 font-medium hover:opacity-80 transition-opacity"
              >
                Learn more →
              </a>
            </div>
            <div className="bg-white/60 dark:bg-gray-800 rounded-xl p-6 border border-accent/20 dark:border-gray-700 hover:border-accent/40 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-accent dark:text-orange-400 mb-3">
                Global University Rankings Analysis
              </h3>
              <p className="text-accent/90 dark:text-gray-300 mb-4 leading-relaxed">
                Conducted multivariate regression and ANOVA on data from 2,200 universities to identify ranking predictors. Built interactive Tableau dashboards visualizing correlations between research output and faculty quality. Delivered insights guiding strategic investments for global competitiveness.
              </p>
              <a
                href="#"
                className="text-accent dark:text-orange-400 font-medium hover:opacity-80 transition-opacity"
              >
                Learn more →
              </a>
            </div>
            <div className="bg-white/60 dark:bg-gray-800 rounded-xl p-6 border border-accent/20 dark:border-gray-700 hover:border-accent/40 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-accent dark:text-orange-400 mb-3">
                MBA Starting Salaries Analysis | Applied Marketing Analytics Project
              </h3>
              <p className="text-accent/90 dark:text-gray-300 mb-4 leading-relaxed">
                Initiated a data-driven study in response to growing challenges faced by MBA graduates in securing employment, aiming to understand what truly influences post-graduation outcomes. Analyzed salary distributions and key variables across prior graduating classes, uncovering that experience-related factors drive compensation more than academic indicators. Evaluated the credibility of MBA-reported salary figures, identifying gaps between published averages and real-world variability that impact candidate perception and program marketing.
              </p>
              <a
                href="#"
                className="text-accent dark:text-orange-400 font-medium hover:opacity-80 transition-opacity"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 bg-background dark:bg-gray-800 font-sans">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-accent dark:text-orange-400 mb-8">
            Get In Touch
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg text-accent/90 dark:text-gray-300 mb-8 leading-relaxed">
              I&apos;m open to discussing new projects, creative ideas, and making your visions into reality.
            </p>
            <a
              href="mailto:nanditha.pendakur@gmail.com"
              className="inline-flex px-6 py-3 rounded-full border-2 border-accent dark:border-orange-400 text-accent dark:text-orange-400 font-medium hover:bg-accent hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
