import React, { useState } from 'react';
import Newshero from '../components/News/Newshero';
import Navbar from '../components/Navbar';
import Newscards from '../components/News/Newscards';
import Footer from '../components/Footer';
import Page from '../components/listing/Page';

const News = () => {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className='bg-orange-50 pb-[100px] pt-[90px]'>
      <Page />
      <Newshero activeTab={activeTab} setActiveTab={setActiveTab} />
      <Newscards activeTab={activeTab} />
    </div>
  );
};

export default News;
