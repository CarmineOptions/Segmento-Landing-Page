export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-white">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Segmento
            </span>
          </div>

          <div className="mt-8 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#problem" className="text-gray-300 hover:text-white text-sm">
                Problem
              </a>
              <a href="#solution" className="text-gray-300 hover:text-white text-sm">
                Solution
              </a>
              <a href="#impact" className="text-gray-300 hover:text-white text-sm">
                Impact
              </a>
              <a href="#examples" className="text-gray-300 hover:text-white text-sm">
                Examples
              </a>
              <a href="#team" className="text-gray-300 hover:text-white text-sm">
                Team
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-10" />

        {/* Funding section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left max-w-xl">
            This project was carried out with the financial support of the Technology
            Incubation programme.
          </p>

          <img
            src="/assets/techincubationlogo.png"
            alt="Technology Incubation Logo"
            className="h-12 md:h-14 object-contain"
          />
        </div>

        {/* Bottom spacing */}
        <div className="mt-10 text-center text-gray-500 text-xs">
          © {currentYear} Segmento
        </div>
      </div>
    </footer>
  );
};
