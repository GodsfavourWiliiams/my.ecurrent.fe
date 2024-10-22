'use client';

import { Icons } from '@/app/assets/icons';
import Link from 'next/link';
import { AppLogo } from './app-logo';
import { ReactNode } from 'react';
import { FOOTER_DATA } from '@/utils/static';

// Interface for FooterSection props
interface FooterSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

// Interface for SocialIcon props
interface SocialIconProps {
  icon: string;
  href: string;
  label: string;
}

const FooterSection = ({
  title,
  children,
  className = '',
}: FooterSectionProps) => (
  <div className={`space-y-4 ${className}`}>
    <h3 className="text-base font-semibold tracking-wide">{title}</h3>
    {children}
  </div>
);

const SocialIcon = ({ icon, href, label }: SocialIconProps) => {
  const IconComponent = Icons[icon as keyof typeof Icons]; // Dynamically fetch the icon component
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-[#8FE2FF] transition-all hover:bg-[#12305B] hover:scale-110"
    >
      <IconComponent className="h-5 w-5 text-[#12305B] transition-colors group-hover:text-white" />
    </Link>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#12305B] text-white">
      <div className="app-container mx-auto py-16">
        {/* Logo Section */}
        <div className="mb-12 flex justify-center">
          <AppLogo className="h-20 w-32 transition-opacity hover:opacity-90" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-12">
          {/* Company Links */}
          <FooterSection
            title={FOOTER_DATA.company.title}
            className="xl:col-span-2"
          >
            <ul className="space-y-3">
              {FOOTER_DATA.company.links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#ABABAB] transition-colors hover:text-white hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact Information */}
          <FooterSection
            title={FOOTER_DATA.contact.title}
            className="xl:col-span-3"
          >
            <ul className="space-y-3">
              {FOOTER_DATA.contact.details.map(({ label, value }, index) => (
                <li key={index} className="space-y-1">
                  <span className="block text-[#ABABAB]">{label}</span>
                  <span className="block text-white font-bold">{value}</span>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Consumer Advisory */}
          <FooterSection title="CONSUMER ADVISORY" className="xl:col-span-4">
            <div className="space-y-4 text-sm leading-relaxed text-white">
              <p>
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label.
              </p>
              <p>
                By using our website or product, you agree to follow our terms
                of service.
              </p>
            </div>
          </FooterSection>

          {/* Get in Touch */}
          <div className="space-y-8 xl:col-span-3">
            <FooterSection title={FOOTER_DATA.social.title}>
              <div className="space-y-4">
                <p className="text-[#ABABAB]">
                  Feel free to get in touch with us via email
                </p>
                <Link
                  href={`mailto:${FOOTER_DATA.social.email}`}
                  className="block text-xl font-semibold tracking-wide transition-colors hover:text-[#8FE2FF]"
                >
                  {FOOTER_DATA.social.email}
                </Link>
              </div>
            </FooterSection>

            {/* Social Links */}
            <div className="flex gap-4">
              {FOOTER_DATA.social.links.map((social) => (
                <SocialIcon key={social.label} {...social} />
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-[#ABABAB]">
              © {currentYear} Sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
