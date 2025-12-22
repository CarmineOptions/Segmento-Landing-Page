import { TagIcon, BarChartIcon, CodeIcon } from "lucide-react";
export const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Solution
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Segmento provides a comprehensive user-intelligence layer that
            delivers accurate metrics and actionable insights.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Main Features */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mr-4">
                <BarChartIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Public and Private Dashboards
                </h3>
                <p className="mt-2 text-gray-600">
                  Access dashboard showing all the information about your users and KOLs.
                  From cohort sizes, retention rates, value of users, to cross-chain migration patterns.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-md border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mr-4">
                <CodeIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  User-Targeted Messaging
                </h3>
                <p className="mt-2 text-gray-600">
                  Ready to be plugged into dApps, allowing for personalized
                  offers based on user profiles and behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
