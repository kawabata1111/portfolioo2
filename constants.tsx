import { GraduationCap, Smartphone, ShoppingCart } from 'lucide-react';
import { ServiceItem, NewsItem, CompanyInfo, NavItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "株式会社T.SCREEN",
  address: "大阪府大阪市東成区大今里3-26-26-902",
  founded: "令和5年6月30日",
  ceo: "代表取締役 田中 敦史",
  phone: "080-1518-7880",
  email: "t.screen0121@gmail.com",
  employees: "1名",
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Company', href: '/company' },
  { label: 'News', href: '/#news' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: '研修事業',
    description: 'ビジネススキル向上のための各種研修プログラムを提供。実践的なカリキュラムで人材育成をサポートします。',
    icon: GraduationCap
  },
  {
    id: '2',
    title: 'スマホ関連グッズ卸売業',
    description: 'スマートフォンケース、保護フィルム、アクセサリーなど、スマホ関連グッズの卸売を行っています。',
    icon: Smartphone
  },
  {
    id: '3',
    title: 'Amazon物販',
    description: 'Amazonマーケットプレイスを活用した物販事業を展開。豊富な商品ラインナップでお客様のニーズにお応えします。',
    icon: ShoppingCart
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    date: '2023.06.30',
    category: 'INFO',
    title: '株式会社T.SCREENを設立しました'
  },
  {
    id: '2',
    date: '2023.07.01',
    category: 'SERVICE',
    title: '研修事業・スマホ関連グッズ卸売業を開始しました'
  },
  {
    id: '3',
    date: '2023.08.01',
    category: 'SERVICE',
    title: 'Amazon物販事業を開始しました'
  }
];

export const AI_CONTEXT = `あなたは株式会社T.SCREENのAIアシスタントです。
株式会社T.SCREENは、研修事業、スマホ関連グッズ卸売業、Amazon物販を展開する企業です。
設立は令和5年6月30日、代表取締役は田中 敦史、所在地は大阪府大阪市東成区大今里3-26-26-902です。
電話番号は080-1518-7880、メールアドレスはt.screen0121@gmail.comです。

以下の事業を展開しています：
1. 研修事業（ビジネススキル向上のための研修プログラム）
2. スマホ関連グッズ卸売業（スマホケース、保護フィルム、アクセサリー等）
3. Amazon物販（Amazonマーケットプレイスでの販売事業）

広報担当として、Webサイト訪問者からの質問に礼儀正しく、丁寧に回答してください。
詳細なお問い合わせについては、お問い合わせフォームからの連絡を推奨してください。
`;