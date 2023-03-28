import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

type MyComponentProps = React.PropsWithChildren<{}>

function MainLayout({ children}:  MyComponentProps) {
  return (
    <>
      <Header />
        {children}
      <Menu />
    </>
  );
};

export default MainLayout;