import { Metadata } from 'next';

// Metadata for the page
export const metadata: Metadata = {
  title: 'Privacy Policy | Technology Alliance Solutions',
  description: 'Our commitment to protecting your privacy. Learn how Technology Alliance Solutions handles your data and information.'
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
