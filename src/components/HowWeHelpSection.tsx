import { CheckCircleIcon } from "lucide-react";

const HowWeHelpItem = ({ title, text }: { title: string; text: string }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform skew-y-0 -rotate-3 rounded-3xl"></div>
    <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
      <div className="flex items-center mb-4">
        <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

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
          <HowWeHelpItem
            title="Ecosystem Growth"
            text="By providing accurate user data and enabling better resource allocation, Segmento contributes to the sustainable growth of the entire blockchain ecosystem."
          />
          <HowWeHelpItem
            title="Accurate Metrics"
            text="Provides reliable metrics (Real DAU, Genuine users, Airdrop Hunters, Sybils, Whales) for foundations and protocol grants, enabling data-driven decision making."
          />
          <HowWeHelpItem
            title="Reduced Wastage"
            text="Reduces incentive wastage by identifying sybil-driven growth early, allowing protocols to adjust strategies before resources are depleted."
          />
          <HowWeHelpItem
            title="Retention Insights"
            text="Equips protocol teams with retention and migration insights to fine-tune campaigns and improve user retention strategies."
          />
          <HowWeHelpItem
            title="Targeted Marketing"
            text="Allows targeted marketing via identification of value users for protocols. Instantly identify a visitor's on-chain profile to serve them customized messaging."
          />
        </div>
      </div>
    </section>
  );
};
