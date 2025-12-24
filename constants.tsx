import { Brain, Cpu, Globe, Rocket, Shield, LineChart } from 'lucide-react';
import { ServiceItem, NewsItem, CompanyInfo, NavItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "NovaSphere Solutions",
  address: "東京都港区六本木 1-1-1 グランドタワー 45F",
  founded: "2018年4月",
  ceo: "神宮寺 健",
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
    title: 'AI トランスフォーメーション',
    description: '最先端の生成AI技術を活用し、ビジネスプロセスを根本から再構築。業務効率化と新たな価値創造を実現します。',
    icon: Brain
  },
  {
    id: '2',
    title: 'クラウドネイティブ開発',
    description: 'スケーラビリティと堅牢性を兼ね備えたクラウドインフラの設計・構築。AWS/GCP/Azureに対応。',
    icon: Globe
  },
  {
    id: '3',
    title: 'データドリブン経営支援',
    description: '社内外の膨大なデータを統合・分析。経営判断の迅速化と精度向上をサポートするダッシュボードを構築。',
    icon: LineChart
  },
  {
    id: '4',
    title: '次世代セキュリティ',
    description: 'ゼロトラストアーキテクチャに基づいた強固なセキュリティ対策で、企業のデジタル資産を守り抜きます。',
    icon: Shield
  },
  {
    id: '5',
    title: 'IoT ソリューション',
    description: '物理世界のデータをデジタル化し、リアルタイムでのモニタリングと制御を実現するスマートファクトリー化を支援。',
    icon: Cpu
  },
  {
    id: '6',
    title: 'DX コンサルティング',
    description: '単なるツール導入ではなく、企業文化や組織構造まで踏み込んだ本質的なデジタルトランスフォーメーションを伴走支援。',
    icon: Rocket
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    date: '2024.05.20',
    category: 'PRESS',
    title: '次世代生成AI活用プラットフォーム「NovaGen」のベータ版提供を開始'
  },
  {
    id: '2',
    date: '2024.04.15',
    category: 'EVENT',
    title: '「Global Tech Summit 2024」に弊社代表の神宮寺が登壇します'
  },
  {
    id: '3',
    date: '2024.03.01',
    category: 'RECRUIT',
    title: '2025年度新卒採用のエントリー受付を開始しました'
  }
];

export const AI_CONTEXT = `あなたはNovaSphere SolutionsのAIアシスタントです。
NovaSphere Solutionsは、最先端のAI技術と確かなエンジニアリングで企業のDXを加速させるテックパートナーです。
設立は2018年4月、代表取締役CEOは神宮寺 健、住所は東京都港区六本木 1-1-1 グランドタワー 45Fです。

以下のサービスを提供しています：
1. AI トランスフォーメーション (ビジネスプロセスの再構築)
2. クラウドネイティブ開発 (AWS/GCP/Azure)
3. データドリブン経営支援 (データ統合・分析)
4. 次世代セキュリティ (ゼロトラスト)
5. IoT ソリューション (スマートファクトリー)
6. DX コンサルティング (組織変革支援)

広報担当として、Webサイト訪問者からの質問に礼儀正しく、専門的に回答してください。
具体的な開発費用や見積もりについては、プロジェクトの規模や要件によると伝え、お問い合わせフォームからの連絡を推奨してください。
`;