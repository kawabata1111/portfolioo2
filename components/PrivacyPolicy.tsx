import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="grain"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-bg/80 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <a href="/" className="font-display font-bold text-lg sm:text-xl text-white tracking-tight hover:text-acid transition-colors">
            T.SCREEN
          </a>
          <a href="/" className="flex items-center gap-2 text-white/70 hover:text-acid transition-colors font-mono text-sm">
            <ArrowLeft size={16} />
            トップに戻る
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-8">
            プライバシーポリシー
          </h1>
          <p className="text-white/60 mb-12 font-mono text-sm">
            最終更新日: 2024年1月
          </p>

          <div className="space-y-10 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. はじめに</h2>
              <p>
                株式会社T.SCREEN（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と認識し、
                以下のプライバシーポリシーに基づき、適切な取り扱いと保護に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. 収集する情報</h2>
              <p className="mb-4">当社は、以下の情報を収集することがあります：</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>氏名、住所、電話番号、メールアドレス等の連絡先情報</li>
                <li>お問い合わせ内容</li>
                <li>当社サービスのご利用履歴</li>
                <li>その他、当社サービスの提供に必要な情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. 情報の利用目的</h2>
              <p className="mb-4">収集した個人情報は、以下の目的で利用いたします：</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>お問い合わせへの対応</li>
                <li>当社サービスの提供・運営</li>
                <li>サービス向上のための分析</li>
                <li>新サービスや重要なお知らせのご案内</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. 第三者への提供</h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                ただし、以下の場合は例外とします：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                <li>法令に基づく開示請求があった場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. 情報の管理</h2>
              <p>
                当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、
                漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. 開示・訂正・削除</h2>
              <p>
                お客様は、ご自身の個人情報について、開示、訂正、削除を求めることができます。
                ご希望の場合は、下記のお問い合わせ先までご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. ポリシーの変更</h2>
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                変更後のポリシーは、当ウェブサイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. お問い合わせ</h2>
              <p className="mb-4">
                本ポリシーに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="bg-surface p-6 rounded-lg border border-white/10">
                <p className="font-bold text-white mb-2">株式会社T.SCREEN</p>
                <p>〒537-0014 大阪府大阪市東成区大今里3-26-26-902</p>
                <p>TEL: 080-1518-7880</p>
                <p>Email: t.screen0121@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-white/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
          <p className="text-white/60 text-sm">
            © 2024 株式会社T.SCREEN
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
