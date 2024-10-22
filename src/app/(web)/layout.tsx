import AppLayout from '@/components/common/layout';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
