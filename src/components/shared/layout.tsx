import React from 'react';
import Hero from './hero';
import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col gap-6 overflow-x-hidden">
      <div>
        <Header />
        <Hero />
      </div>
      <div className="space-y-6 py-10 sm:py-20">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
