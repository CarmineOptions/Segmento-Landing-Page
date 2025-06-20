import React from 'react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
export const TeamSection = () => {
  const teamMembers = [{
    name: 'Marek Hauzr',
    title: 'CEO',
    bio: 'Founder of Carmine Finance, with experience in data-driven product development, machine learning, and blockchain technology. Previously led technical teams at CreativeDock and worked as a lead quant at a European investment bank.',
    linkedin: 'https://www.linkedin.com/in/marek-hauzr/',
    github: 'https://github.com/MarekHauzr'
  }, {
    name: 'Andrej Chepelau',
    title: 'Senior Software Engineer',
    bio: 'Started as a trading analyst at a crypto startup, focusing on high-frequency trading on DEXes. Co-founder of Carmine Finance where he played a key role in integrating DeRisk into multiple protocols.',
    linkedin: 'https://www.linkedin.com/in/andrej-chepelau',
    github: 'https://github.com/Chepelau'
  }, {
    name: 'David Vodrazka',
    title: 'Senior Full-Stack Engineer',
    bio: 'Spent nearly five years developing scalable interfaces at Seznam.cz. At Carmine Finance, focuses on frontend development while also managing DevOps and occasionally contributing to smart contract development.',
    linkedin: 'https://www.linkedin.com/in/davevodrazka',
    github: 'https://github.com/DaveVodrazka'
  }];
  return <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            At Carmine, our team combines deep expertise in Data analysis and
            modeling, DeFi and software development including on-chain behaviour
            mechanics.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.title}</p>
                <p className="mt-3 text-gray-600">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                    <GithubIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">
            Over the past three years, we have delivered sophisticated DeFi
            solutions, ranging from smart contract development to a systemic
            risk monitoring platform, DeRisk. Our experience also includes
            liquidations on AAVE and Compound and market making on various
            DEXes.
          </p>
        </div>
      </div>
    </section>;
};