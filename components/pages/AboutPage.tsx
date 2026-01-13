import React from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { COMPANY_INFO } from '../../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="grain"></div>
      <PageHeader />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-24">
            <p className="text-acid font-mono text-xs tracking-widest uppercase mb-4">Who We Are</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6">
              About Us
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              多角的な事業展開で、お客様のビジネスをサポートします。
            </p>
          </div>

          {/* Company Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                Our Vision
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  株式会社T.SCREENは、令和5年6月に大阪で設立されました。
                  研修事業、スマホ関連グッズ卸売業、Amazon物販の3つの事業を柱に、幅広いビジネスを展開しています。
                </p>
                <p>
                  お客様のニーズに寄り添い、質の高いサービスと商品を提供することで、
                  信頼されるビジネスパートナーとして成長し続けることを目指しています。
                </p>
              </div>
            </div>
            <div className="bg-surface border border-white/10 p-8 rounded-sm">
              <h3 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wide">Key Numbers</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-acid uppercase tracking-wider">Established</span>
                  <span className="text-3xl font-display font-bold text-white">2023</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-acid uppercase tracking-wider">Business Lines</span>
                  <span className="text-3xl font-display font-bold text-white">3</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-acid uppercase tracking-wider">Location</span>
                  <span className="text-xl font-display font-bold text-white">Osaka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-surface border border-white/10 p-8 sm:p-12 rounded-sm">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 uppercase tracking-wide">
              Company Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Company Name</span>
                  <span className="text-white text-lg">{COMPANY_INFO.name}</span>
                </div>
                <div>
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Representative</span>
                  <span className="text-white text-lg">{COMPANY_INFO.ceo}</span>
                </div>
                <div>
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Established</span>
                  <span className="text-white text-lg">{COMPANY_INFO.founded}</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Address</span>
                  <span className="text-white text-lg">{COMPANY_INFO.address}</span>
                </div>
                <div>
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Phone</span>
                  <span className="text-white text-lg">{COMPANY_INFO.phone}</span>
                </div>
                <div>
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Email</span>
                  <span className="text-white text-lg">{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default AboutPage;
