export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCardProps {
  image: string;
  title: string;
  buttonText?: string;
  overlay?: boolean;
}

export interface IconicItem {
  image: string;
  name: string;
}

export interface MemberBenefit {
  image: string;
  subtitle: string;
  title: string;
  buttonText: string;
}