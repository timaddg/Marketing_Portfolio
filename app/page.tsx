export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            I create amazing digital experiences
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I&apos;m passionate about transforming insights into meaningful business growth. My work bridges analytics and strategy, where creativity meets precision turning data into narratives that drive measurable impact.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              At Thunderbird School of Global Management, I specialize in Digital Transformation, combining analytical skills with a global business perspective. From building Tableau and Power BI dashboards that uncover customer behavior to crafting go-to-market strategies for clients across industries, I thrive on solving problems through data storytelling and innovation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Previously, I have worked as a Marketing Analyst at Fiesta Vacations and as a Student Consultant for Elevated Materials, advising on market expansion and brand repositioning.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Elevated Materials – Market Entry Strategy – Student Consultant
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developed a 12–24-month market entry roadmap for a U.S.-based carbon-fiber manufacturer. Used CRM and HubSpot analytics to measure sales velocity and acquisition efficiency. Recommended industry expansion into robotics, UAVs, and medical devices, aligning brand messaging from sustainability to ROI-driven performance.
              </p>
              <a
                href="#"
                className="text-gray-900 dark:text-white font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Global University Rankings Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Conducted multivariate regression and ANOVA on data from 2,200 universities to identify ranking predictors. Built interactive Tableau dashboards visualizing correlations between research output and faculty quality. Delivered insights guiding strategic investments for global competitiveness.
              </p>
              <a
                href="#"
                className="text-gray-900 dark:text-white font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Project 3
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Project description goes here. This is a sample project card that you can 
                customize with your own content.
              </p>
              <a
                href="#"
                className="text-gray-900 dark:text-white font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I&apos;m open to discussing new projects, creative ideas, and making your visions into reality.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
