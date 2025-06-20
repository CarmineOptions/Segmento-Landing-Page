import {
  AlertTriangleIcon,
  TrendingDownIcon,
  DollarSignIcon,
  UsersIcon,
  SearchIcon,
} from "lucide-react";
export const WhereWeHelpSection = () => {
  return (
    <section id="problem" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Where We Help
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Current analytics solutions fail to provide accurate user metrics,
            leading to inefficient resource allocation and misleading growth
            data.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Highlighted Cards */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100 lg:col-span-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4 mx-auto">
              <UsersIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">
              Inflated User Metrics
            </h3>
            <p className="mt-2 text-gray-600">
              DAU and MAU figures are inflated by sybil wallets and airdrop
              farmers, making it difficult to measure real user engagement.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100 lg:row-span-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4 mx-auto">
              <SearchIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">
              Lack of User Targeting
            </h3>
            <p className="mt-2 text-gray-600">
              Existing dashboards offer user segmentations but cannot be plugged
              into targeted marketing to leverage this valuable information for
              customized messaging.
            </p>
          </div>
          {/* Regular Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4 mx-auto">
              <DollarSignIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">
              Expensive Analytics
            </h3>
            <p className="mt-2 text-gray-600">
              Existing analytics suites are closed-source and expensive, locking
              out smaller teams and public-goods grant programs from accessing
              critical insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4 mx-auto">
              <AlertTriangleIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">
              Information Asymmetry
            </h3>
            <p className="mt-2 text-gray-600">
              Small token investors and users don't know what they're investing
              in, putting them on the "less informed side" compared to larger
              players in the ecosystem.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4 mx-auto">
              <TrendingDownIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">
              Marketing Inefficiency
            </h3>
            <p className="mt-2 text-gray-600">
              Protocols cannot see where valuable users are coming from and what
              incentives bring them, making it hard to optimize marketing spend
              and user acquisition strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
