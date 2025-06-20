import { CheckCircleIcon } from "lucide-react";
export const HowWeHelpSection = () => {
  return (
    <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How We Help
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Segmento delivers tangible benefits to protocols, foundations, and
            the broader ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform skew-y-0 -rotate-3 rounded-3xl"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">
                  Ecosystem Growth
                </h3>
              </div>
              <p className="text-gray-600">
                By providing accurate user data and enabling better resource
                allocation, Segmento contributes to the sustainable growth of
                the entire blockchain ecosystem.
              </p>
            </div>
          </div>
          {/* ... rest of the cards in their original order, excluding Ecosystem Growth ... */}
        </div>
      </div>
    </section>
  );
};
