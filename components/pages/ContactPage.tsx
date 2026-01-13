import React, { useEffect, useState } from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { COMPANY_INFO } from '../../constants';

const ContactPage: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setShowSuccess(true);
      // URLからパラメータを削除
      window.history.replaceState({}, '', window.location.pathname);
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
            <p className="text-acid font-mono text-xs tracking-widest uppercase mb-4">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Contact
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              お問い合わせ・ご相談はお気軽にご連絡ください。
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-12 bg-acid/10 border border-acid p-6 rounded-sm">
              <p className="text-acid font-bold text-lg mb-2">Message Sent!</p>
              <p className="text-white/70">
                お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします。
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-8 uppercase tracking-wide">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="bg-surface border border-white/10 p-6 rounded-sm">
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Email</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white text-xl hover:text-acid transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="bg-surface border border-white/10 p-6 rounded-sm">
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Phone</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white text-xl hover:text-acid transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="bg-surface border border-white/10 p-6 rounded-sm">
                  <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">Address</span>
                  <p className="text-white text-lg">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-8 uppercase tracking-wide">
                Send a Message
              </h2>
              <form
                action="https://formsubmit.co/t.screen0121@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Settings */}
                <input type="hidden" name="_subject" value="【T.SCREEN】お問い合わせがありました" />
                <input type="hidden" name="_next" value="https://kawabata1111.github.io/portfolioo2/contact.html?success=true" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-surface border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-acid focus:outline-none transition-colors"
                    placeholder="お名前"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-surface border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-acid focus:outline-none transition-colors"
                    placeholder="メールアドレス"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full bg-surface border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-acid focus:outline-none transition-colors"
                    placeholder="件名"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-surface border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-acid focus:outline-none transition-colors resize-none"
                    placeholder="お問い合わせ内容"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-acid text-black py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default ContactPage;
