import React, { useEffect } from 'react';
import { GraduationCap, Smartphone, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="grain"></div>
      <PageHeader />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-24">
            <p className="text-acid font-mono text-xs tracking-widest uppercase mb-4">What We Do</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Services
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              株式会社T.SCREENは、3つの事業を柱に多角的なビジネスを展開しています。
              それぞれの分野で培った専門知識とノウハウを活かし、お客様に最適なソリューションを提供します。
            </p>
          </div>

          {/* Service 01: 研修事業 */}
          <section id="training" className="mb-24 sm:mb-32 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-acid text-black rounded-sm">
                    <GraduationCap size={28} />
                  </div>
                  <span className="font-mono text-sm text-acid">01</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight mb-6">
                  Training Business
                </h2>
                <p className="text-2xl text-white/80 font-light mb-6">研修事業</p>
                <p className="text-white/60 leading-relaxed mb-8">
                  ビジネスパーソンのスキルアップを支援する各種研修プログラムを提供しています。
                  実践的なカリキュラムと経験豊富な講師陣により、即戦力となる人材育成をサポートします。
                </p>
              </div>
              <div className="bg-surface border border-white/10 p-8 rounded-sm">
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-6">
                  Service Details
                </h3>
                <ul className="space-y-4">
                  {[
                    'ビジネスマナー研修',
                    'コミュニケーションスキル研修',
                    'リーダーシップ研修',
                    'マネジメント研修',
                    '新入社員研修',
                    'カスタマイズ研修プログラム',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-acid flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Flexible', desc: '企業ニーズに合わせたカスタマイズ対応' },
                { label: 'Practical', desc: '実践重視のカリキュラム設計' },
                { label: 'Support', desc: '研修後のフォローアップ体制' },
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-acid/50 pl-4">
                  <p className="font-mono text-xs text-acid uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-white/10 mb-24 sm:mb-32"></div>

          {/* Service 02: スマホ関連グッズ卸売業 */}
          <section id="wholesale" className="mb-24 sm:mb-32 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-acid text-black rounded-sm">
                    <Smartphone size={28} />
                  </div>
                  <span className="font-mono text-sm text-acid">02</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight mb-6">
                  Wholesale Business
                </h2>
                <p className="text-2xl text-white/80 font-light mb-6">スマホ関連グッズ卸売業</p>
                <p className="text-white/60 leading-relaxed mb-8">
                  スマートフォン関連アクセサリーの卸売事業を展開。
                  高品質な商品を競争力のある価格で提供し、小売店様・EC事業者様のビジネスをサポートします。
                </p>
              </div>
              <div className="bg-surface border border-white/10 p-8 rounded-sm lg:order-1">
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-6">
                  Product Lineup
                </h3>
                <ul className="space-y-4">
                  {[
                    'スマートフォンケース（各種ブランド対応）',
                    '液晶保護フィルム・ガラスフィルム',
                    '充電器・モバイルバッテリー',
                    'イヤホン・オーディオアクセサリー',
                    'スマホスタンド・車載ホルダー',
                    'その他スマホ周辺機器',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-acid flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Quality', desc: '厳選された高品質商品のみを取り扱い' },
                { label: 'Price', desc: '競争力のある卸売価格を実現' },
                { label: 'Delivery', desc: '迅速な配送体制で在庫リスクを軽減' },
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-acid/50 pl-4">
                  <p className="font-mono text-xs text-acid uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-white/10 mb-24 sm:mb-32"></div>

          {/* Service 03: Amazon物販 */}
          <section id="ecommerce" className="mb-24 sm:mb-32 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-acid text-black rounded-sm">
                    <ShoppingCart size={28} />
                  </div>
                  <span className="font-mono text-sm text-acid">03</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight mb-6">
                  E-Commerce
                </h2>
                <p className="text-2xl text-white/80 font-light mb-6">Amazon物販</p>
                <p className="text-white/60 leading-relaxed mb-8">
                  Amazonマーケットプレイスを活用した物販事業を展開しています。
                  市場分析に基づいた商品選定と効率的な運営により、安定した販売実績を実現しています。
                </p>
              </div>
              <div className="bg-surface border border-white/10 p-8 rounded-sm">
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-6">
                  Business Features
                </h3>
                <ul className="space-y-4">
                  {[
                    'Amazon FBAを活用した効率的な物流',
                    'データ分析に基づく商品選定',
                    '適正価格での販売戦略',
                    'カスタマーサポート体制',
                    '継続的な商品ラインナップの拡充',
                    '季節・トレンドに応じた販売施策',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-acid flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Analysis', desc: '市場動向を分析し最適な商品を選定' },
                { label: 'Efficiency', desc: 'FBAで配送・カスタマー対応を効率化' },
                { label: 'Growth', desc: '継続的な売上拡大を目指す運営体制' },
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-acid/50 pl-4">
                  <p className="font-mono text-xs text-acid uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-surface border border-white/10 p-8 sm:p-12 rounded-sm text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight mb-4">
              Get in Touch
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              各サービスに関するお問い合わせ、お見積もりのご依頼など、お気軽にご連絡ください。
            </p>
            <a
              href="/contact.html"
              className="inline-flex items-center gap-3 bg-acid text-black px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default ServicesPage;
