import Image from 'next/image';
import Link from 'next/link';

export const AppLogo = ({
  isDarkView = false,
  className,
}: {
  isDarkView?: boolean;
  className?: string;
}) => {
  const logoSrc = isDarkView
    ? '/sleepstiq-logo.svg'
    : '/sleepstiq-logo-white.svg';

  return (
    <Link href="/" passHref>
      <Image
        src={logoSrc}
        alt="Sleepstiq logo"
        className={className}
        width={60}
        height={40}
        quality={100}
        priority // Ensures it loads fast as it's part of the navigation
      />
    </Link>
  );
};
