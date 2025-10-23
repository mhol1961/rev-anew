import { Metadata } from 'next';

// Metadata for the page
export const metadata: Metadata = {
  title: 'Privacy Policy | REV-ANEW',
  description: 'Our commitment to protecting your privacy. Learn how REV-ANEW handles your data and information.'
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
