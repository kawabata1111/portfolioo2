import React, { useEffect, useState, useRef } from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { COMPANY_INFO } from '../../constants';

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    const timer = setTimeout(() => {
      observer.observe(element);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
};

const ContactPage: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const formSection = useScrollAnimation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setShowSuccess(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="grain"></div>
      <PageHeader />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-24 overflow-hidden">
            <p className={`text-acid font-mono text-xs tracking-widest uppercase mb-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>Get in Touch</p>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
              Contact
            </h1>
            <p className={`text-white/60 max-w-2xl text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              お問い合わせ・ご相談はお気軽にご連絡ください。
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-12 bg-acid/10 border border-acid p-6 rounded-sm animate-[fadeIn_0.5s_ease-out]">
              <p className="text-acid font-bold text-lg mb-2">Message Sent!</p>
              <p className="text-white/70">
                お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします。
              </p>
            </div>
          )}

          <div ref={formSection.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`transition-all duration-1000 ease-out ${
              formSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
              <h2 className="text-2xl font-display font-bold text-white mb-8 uppercase tracking-wide">
                Contact Information
              </h2>
              <div className="space-y-8">
                {[
                  { label: 'Email', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
                  { label: 'Phone', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
                  { label: 'Address', value: COMPANY_INFO.address },
                ].map((item, index) => (
                  <div key={index} className={`bg-surface border border-white/10 p-6 rounded-sm transition-all duration-700 ${
                    formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                    <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-white text-xl hover:text-acid transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-lg">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-200 ease-out ${
              formSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}>
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

                {[
                  { label: 'Name', type: 'text', name: 'name', placeholder: 'お名前' },
                  { label: 'Email', type: 'email', name: 'email', placeholder: 'メールアドレス' },
                  { label: 'Subject', type: 'text', name: 'subject', placeholder: '件名' },
                ].map((field, index) => (
                  <div key={index} className={`transition-all duration-500 ${
                    formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: `${index * 100 + 400}ms` }}>
                    <label className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      className="w-full bg-surface border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-acid focus:outline-none transition-colors"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className={`transition-all duration-500 ${
                  formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '700ms' }}>
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
                  className={`w-full bg-acid text-black py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 ${
                    formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <PageFooter />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
