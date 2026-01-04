import React from 'react';
import { ArrowRight, Building2, TrendingUp, Calendar, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { portfolioCompanies, companyInfo } from '../data/mock';

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-black py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 mb-8">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-sm font-medium">Our Investments</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              Portfolio
              <span className="text-amber-500"> Companies</span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Discover the exceptional businesses that form the OJ Holdings portfolio. 
              Each company represents our commitment to strategic growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="bg-zinc-950 border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{portfolioCompanies.length}</div>
              <div className="text-white/60 text-sm uppercase tracking-wider mt-1">Active Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">2+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider mt-1">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">100%</div>
              <div className="text-white/60 text-sm uppercase tracking-wider mt-1">Growth Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {portfolioCompanies.map((company) => (
              <div
                key={company.id}
                className="group bg-zinc-950 border border-white/10 hover:border-amber-500/30 transition-all duration-500"
              >
                {/* Company Header */}
                <div className="p-8 lg:p-12 border-b border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-amber-500/10 shrink-0">
                        <Building2 size={32} className="text-amber-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-sm font-medium">
                            {company.status}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">{company.name}</h2>
                        <p className="text-amber-500 font-medium text-lg mt-1">{company.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                      <Calendar size={18} />
                      <span>Acquired {company.acquired}</span>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Description */}
                    <div className="lg:col-span-2 space-y-6">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                        <TrendingUp size={20} className="text-amber-500" />
                        About the Company
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {company.description}
                      </p>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white">Services & Expertise</h3>
                      <ul className="space-y-4">
                        {company.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-amber-500 mt-0.5 shrink-0" />
                            <span className="text-white/80">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Our Investment Philosophy</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  At OJ Holdings, we don't just invest—we partner. Our portfolio companies benefit from 
                  our hands-on approach to growth, strategic guidance, and operational expertise.
                </p>
                <p>
                  We seek businesses with strong fundamentals, passionate leadership, and clear 
                  paths to scalable growth. Our focus on the retail and wholesale sectors allows 
                  us to bring specialized knowledge and industry connections to every investment.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: "Strategic Alignment", desc: "We invest in businesses that align with our expertise and vision" },
                { title: "Active Partnership", desc: "We work alongside leadership teams to accelerate growth" },
                { title: "Long-term Commitment", desc: "We're building for the future, not quick returns" },
                { title: "Operational Excellence", desc: "We implement best practices across all portfolio companies" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-black/50 border border-white/10 hover:border-amber-500/30 transition-all duration-300"
                >
                  <span className="text-amber-500 font-bold text-xl">0{index + 1}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Interested in
            <span className="text-amber-500"> Partnership?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Whether you're a business owner exploring opportunities or an investor seeking collaboration, 
            we'd love to start a conversation.
          </p>
          <a
            href={`mailto:${companyInfo.email}`}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-amber-500 text-black font-semibold text-lg hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
