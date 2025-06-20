export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-white">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Segmento
            </span>
          </div>
          <div className="mt-8 md:mt-0">
            <nav className="flex space-x-6">
              <a
                href="#problem"
                className="text-gray-300 hover:text-white text-sm"
              >
                Problem
              </a>
              <a
                href="#solution"
                className="text-gray-300 hover:text-white text-sm"
              >
                Solution
              </a>
              <a
                href="#impact"
                className="text-gray-300 hover:text-white text-sm"
              >
                Impact
              </a>
              <a
                href="#examples"
                className="text-gray-300 hover:text-white text-sm"
              >
                Examples
              </a>
              <a
                href="#team"
                className="text-gray-300 hover:text-white text-sm"
              >
                Team
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
