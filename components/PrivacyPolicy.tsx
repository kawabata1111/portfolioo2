import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const sections = [
    {
      title: '01. Introduction',
      content: '株式会社T.SCREEN（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、適切な取り扱いと保護に努めます。',
    },
    {
      title: '02. Information We Collect',
      content: '当社は、以下の情報を収集することがあります：',
      list: [
        '氏名、住所、電話番号、メールアドレス等の連絡先情報',
        'お問い合わせ内容',
        '当社サービスのご利用履歴',
        'その他、当社サービスの提供に必要な情報',
      ],
    },
    {
      title: '03. Purpose of Use',
      content: '収集した個人情報は、以下の目的で利用いたします：',
      list: [
        'お問い合わせへの対応',
        '当社サービスの提供・運営',
        'サービス向上のための分析',
        '新サービスや重要なお知らせのご案内',
        '法令に基づく対応',
      ],
    },
    {
      title: '04. Third Party Disclosure',
      content: '当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、以下の場合は例外とします：',
      list: [
        '法令に基づく開示請求があった場合',
        '人の生命、身体または財産の保護のために必要な場合',
        '公衆衛生の向上または児童の健全な育成の推進のために必要な場合',
      ],
    },
    {
      title: '05. Data Security',
      content: '当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。',
    },
    {
      title: '06. Your Rights',
      content: 'お客様は、ご自身の個人情報について、開示、訂正、削除を求めることができます。ご希望の場合は、下記のお問い合わせ先までご連絡ください。',
    },
    {
      title: '07. Policy Updates',
      content: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のポリシーは、当ウェブサイトに掲載した時点で効力を生じるものとします。',
    },
  ];

  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="grain"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-bg/80 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <a href="/" className="font-display font-bold text-lg sm:text-xl text-white tracking-tight hover:text-acid transition-colors">
            T.SCREEN
          </a>
          <a href="/" className="flex items-center gap-2 text-white/70 hover:text-acid transition-colors font-mono text-sm uppercase tracking-wider">
            <ArrowLeft size={16} />
            Back to Top
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className={`text-acid font-mono text-xs tracking-widest uppercase mb-4 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>Legal</p>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}>
            Privacy Policy
          </h1>
          <p className={`text-white/60 mb-12 font-mono text-sm uppercase tracking-wider transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Last Updated: January 2024
          </p>

          <div className="space-y-12 text-white/80 leading-relaxed">
            {sections.map((section, index) => (
              <section
                key={index}
                className={`transition-all duration-700 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <h2 className="text-lg sm:text-xl font-display font-bold text-white mb-4 uppercase tracking-wide">
                  {section.title}
                </h2>
                <p>{section.content}</p>
                {section.list && (
                  <ul className="list-none space-y-2 pl-4 border-l border-acid/50 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="pl-4">{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              <h2 className="text-lg sm:text-xl font-display font-bold text-white mb-4 uppercase tracking-wide">08. Contact</h2>
              <p className="mb-6">
                本ポリシーに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="bg-surface p-6 rounded-sm border border-white/10">
                <p className="font-display font-bold text-white text-lg mb-4">株式会社T.SCREEN</p>
                <div className="space-y-2 font-mono text-sm">
                  <p><span className="text-acid">Address:</span> 大阪府大阪市東成区大今里3-26-26-902</p>
                  <p><span className="text-acid">Tel:</span> 080-1518-7880</p>
                  <p><span className="text-acid">Email:</span> t.screen0121@gmail.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-white/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
          <p className="text-white/60 text-sm font-mono uppercase tracking-wider">
            © 2024 T.SCREEN Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
