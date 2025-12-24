import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  founded: string;
  ceo: string;
}

export interface NavItem {
  label: string;
  href: string;
}