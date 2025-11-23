import type { ReactNode } from "react";

export interface FooterLinkItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

