import { AlertCircleIcon, ShieldIcon, BarChart2Icon } from "lucide-react";
export const ExamplesSection = () => {
  return (
    <section id="examples" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Real-World Examples
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See how Segmento solves critical problems for protocols in the real
            world.
          </p>
        </div>
        <div className="space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600 mb-6 md:mb-0 md:mr-6">
                <AlertCircleIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Airdrop Hunters Raid
                </h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">What happened:</span> Airdrop
                  hunters flooded a protocol, causing TVL to spike sharply and
                  then crash as they left, leaving the protocol with unstable
                  liquidity.
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">Impact:</span> Genuine users and
                  long-term capital were crowded out, making it hard to tell if
                  growth was real. When hunters exited, the protocol faced a
                  sudden drop in TVL.
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">How Segmento helps:</span> By
                  flagging spikes in the Airdrop Hunter segment early, Segmento
                  would alert teams to pause incentives or adjust rewards,
                  preventing a sharp TVL crash and ensuring incentives target
                  real users.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6 md:mb-0 md:mr-6">
                <ShieldIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Prevented Airdrop Hunters Raid
                </h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">What happened:</span> Analytics
                  showed a sudden surge in Airdrop Hunter TVL, signaling most
                  new capital was from short-term farmers (airdrop hunters and
                  sybils).
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">Impact:</span> Without
                  intervention, these hunters would have withdrawn en masse
                  after claiming rewards, causing a sharp TVL collapse.
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">How Segmento helps:</span> By
                  flagging the high concentration of Airdrop Hunters in real
                  time, Segmento allowed the protocol to throttle or reallocate
                  incentives thus keeping more stable users engaged and avoiding
                  a major TVL drop.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-6 md:mb-0 md:mr-6">
                <BarChart2Icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Concentration Risk Example
                </h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">What happened:</span> A few
                  large Whale wallets account for the majority of TVL, making
                  overall liquidity dependent on their actions.
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">Impact:</span> If one or two
                  whales withdraw funds, TVL can crash suddenly, masking real
                  user engagement and putting the protocol at risk.
                </p>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">How Segmento helps:</span> By
                  flagging high concentration in Whale segments, Segmento allows
                  teams to incentivize smaller users or broaden liquidity
                  sources, reducing dependence on a handful of large holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
