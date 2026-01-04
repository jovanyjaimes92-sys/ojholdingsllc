import React from 'react';
import { Target, Eye, Award, Handshake } from 'lucide-react';
import Layout from '../components/Layout';
import { aboutContent, companyInfo } from '../data/mock';

const About = () => {
  const valueIcons = {
    Excellence: Award,
    Integrity: Target,
    Growth: Eye,
    Partnership: Handshake
  };

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
              <span className="text-amber-500 text-sm font-medium">About Us</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              Building Lasting Value Through
              <span className="text-amber-500"> Strategic Vision</span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              OJ Holdings LLC stands as a premier holding company, committed to identifying, acquiring, 
              and nurturing exceptional businesses that demonstrate strong growth potential and align 
              with our vision of creating lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-10 bg-black border border-white/10 space-y-6">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-500/10">
                <Target size={32} className="text-amber-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="p-10 bg-black border border-white/10 space-y-6">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-500/10">
                <Eye size={32} className="text-amber-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide our decisions and define our character
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => {
              const IconComponent = valueIcons[value.title] || Award;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <IconComponent size={28} className="text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Story</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Founded in {companyInfo.founded}, OJ Holdings LLC emerged from a vision to create 
                  a holding company that goes beyond traditional investment. We believe in active 
                  partnership with our portfolio companies, providing not just capital but strategic 
                  guidance and operational support.
                </p>
                <p>
                  Our approach is rooted in the belief that sustainable success comes from building 
                  strong foundations. We take the time to understand each business deeply, working 
                  alongside leadership teams to unlock their full potential.
                </p>
                <p>
                  The lion—our emblem—represents our commitment to strength, leadership, and 
                  unwavering determination. Just as the lion leads with courage and protects its pride, 
                  we lead our portfolio companies toward growth while safeguarding their core values.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full" />
                <div className="relative w-80 h-80 flex items-center justify-center border border-amber-500/20">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_9e6d9073-bb02-4867-b451-c2dd9e23610a/artifacts/5xi4sk5s_Asset%203.png"
                    alt="OJ Holdings Lion Emblem"
                    className="w-56 h-56 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Interested in learning more about OJ Holdings LLC or exploring partnership opportunities?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${companyInfo.email}`}
              className="group p-8 bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="text-amber-500 text-lg font-medium mb-2">Email Us</div>
              <div className="text-white/60 group-hover:text-white transition-colors">{companyInfo.email}</div>
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="group p-8 bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="text-amber-500 text-lg font-medium mb-2">Call Us</div>
              <div className="text-white/60 group-hover:text-white transition-colors">{companyInfo.phone}</div>
            </a>
          </div>

          <div className="inline-flex items-center gap-3 text-white/40">
            <span className="w-2 h-2 bg-amber-500 rounded-full" />
            <span>Headquartered in {companyInfo.headquarters}</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
