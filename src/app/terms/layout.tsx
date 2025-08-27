import { Metadata } from 'next';

// Metadata for the page
export const metadata: Metadata = {
  title: 'Terms of Service | Technology Alliance Solutions',
  description: 'Our Terms of Service. Learn about the terms and conditions for using Technology Alliance Solutions services and website.'
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
