import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Target } from 'lucide-react';
import Layout from '../components/Layout';
import { companyInfo, stats, portfolioCompanies } from '../data/mock';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Gold Gradient Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-amber-500 text-sm font-medium">Strategic Investments</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Building Legacy Through
                <span className="text-amber-500"> Strategic Growth</span>
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                {companyInfo.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-black font-semibold text-lg hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 group"
                >
                  View Portfolio
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Visual - Lion Emblem */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full" />
                <div className="relative w-96 h-96 flex items-center justify-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_9e6d9073-bb02-4867-b451-c2dd9e23610a/artifacts/5xi4sk5s_Asset%203.png"
                    alt="OJ Holdings Lion Emblem"
                    className="w-80 h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-amber-500">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We identify, acquire, and grow exceptional businesses across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Strategic Acquisition", desc: "Identifying high-potential businesses aligned with our investment thesis" },
              { icon: TrendingUp, title: "Growth Acceleration", desc: "Providing resources and expertise to scale portfolio companies" },
              { icon: Shield, title: "Operational Excellence", desc: "Implementing best practices to optimize business performance" },
              { icon: Users, title: "Value Creation", desc: "Building lasting value for stakeholders and communities" }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <item.icon size={28} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
              <p className="text-xl text-white/60">Companies driving innovation and growth</p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors group"
            >
              View All
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {portfolioCompanies.map((company) => (
            <div
              key={company.id}
              className="group p-8 lg:p-12 bg-black border border-white/10 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-sm font-medium">
                      {company.status}
                    </span>
                    <span className="text-white/40 text-sm">Acquired {company.acquired}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{company.name}</h3>
                  <p className="text-amber-500 font-medium">{company.type}</p>
                  <p className="text-white/60 leading-relaxed max-w-2xl">{company.description}</p>
                </div>
                <div className="lg:w-72 space-y-4">
                  <h4 className="text-white/40 uppercase text-sm tracking-wider">Services</h4>
                  <ul className="space-y-2">
                    {company.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/80">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Something
            <span className="text-amber-500"> Extraordinary?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Whether you're looking for investment opportunities or exploring partnership possibilities, we'd love to hear from you.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-amber-500 text-black font-semibold text-lg hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 group"
          >
            Get In Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
