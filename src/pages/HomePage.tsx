import React from 'react';
import MainLayout from '../layouts/MainLayout';
import MainBanner from '../components/MainBanner';
import Sports from '../components/Sports';

function HomePage(){
  return (
    <MainLayout>
        <main className="page page--index">
            <MainBanner />
            <Sports />
        </main>
    </MainLayout> 
  );
};

export default HomePage;