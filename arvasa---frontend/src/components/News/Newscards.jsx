import React, { useEffect, useState } from 'react';
import axios from 'axios';

const articleData = [
  {
    title: "Top 10 things to know about $500mn fractional real estate market in India",
    url: "https://m.economictimes.com/markets/stocks/news/top-10-things-to-know-about-500mn-fractional-real-estate-market-in-india/articleshow/122085029.cms",
    description: "A breakdown of the booming $500mn fractional ownership real estate market and its implications.",
    date: "Jul 4, 2025",
    image: "images/article1.avif"
  },
  {
    title: "Luxury properties continue to fly off the shelves in Delhi-NCR",
    url: "https://timesofindia.indiatimes.com/business/india-business/luxury-properties-continue-to-fly-off-the-shelves-in-delhi-ncr/articleshow/121934313.cms",
    description: "Delhi-NCR sees a surge in high-end property demand despite broader market challenges.",
    date: "Jul 2, 2025",
    image: "images/article2.webp"
  },
  {
    title: "India housing outlook steady, but cracks in demand emerge",
    url: "https://www.reuters.com/world/india/india-housing-outlook-steady-cracks-demand-slowdown-start-widen-2025-06-06/",
    description: "The overall housing outlook remains strong, but early signs of a demand dip are surfacing.",
    date: "Jun 6, 2025",
    image: "images/article3.avif"
  },
  {
    title: "Nifty Realty outpaces Nifty 50, jumps 8% — analysts pick top stocks",
    url: "https://timesofindia.indiatimes.com/business/india-business/realty-breaks-out-nifty-realty-outpaces-nifty-50-jumps-8-in-a-month-analysts-pick-these-stocks-with-upside/articleshow/122075070.cms",
    description: "The Nifty Realty index is outperforming; analysts recommend key stock picks to watch.",
    date: "Jul 4, 2025",
    image: "images/article4.png"
  },
  {
    title: "Residential real estate volumes moderated in FY25, collections improved",
    url: "https://m.economictimes.com/industry/services/property-/-cstruction/residential-real-estate-volumes-moderated-in-fy25-overall-collections-improved/articleshow/121878025.cms",
    description: "FY25 saw fewer transactions but better collection rates across the residential sector.",
    date: "Jul 1, 2025",
    image: "images/article5.avif"
  },
  {
    title: "Land pooling offers 10x returns to farmers: Lucknow LDA",
    url: "https://timesofindia.indiatimes.com/city/lucknow/land-pooling-offers-10-fold-returns-to-farmers-lda-vc/articleshow/122077362.cms",
    description: "Farmers in Lucknow reap big gains as land pooling schemes gain traction.",
    date: "Jul 4, 2025",
    image: "images/article6.jpg"
  },
  {
    title: "Ultra-luxury homes reshape Chennai skyline",
    url: "https://timesofindia.indiatimes.com/city/chennai/ultra-luxury-homes-reshape-chennai-skyline-as-demand-rises-for-larger-high-end-residences/articleshow/122077523.cms",
    description: "Chennai sees rising demand for spacious, high-end homes — reshaping its urban skyline.",
    date: "Jul 4, 2025",
    image: "images/article7.jpg"
  },
  {
    title: "DLF clocks $1.3B luxury project sellout",
    url: "https://www.reuters.com/world/india/indian-developer-dlf-clocks-13-billion-luxury-project-sellout-2025-06-18/",
    description: "DLF's mega luxury project sees a complete sellout worth $1.3 billion.",
    date: "Jun 18, 2025",
    image: "images/article7.jpg"
  },
  {
    title: "RBI rationalises provisioning for infra loans",
    url: "https://www.reuters.com/world/india/indian-central-bank-rationalises-provisioning-infrastructure-loans-2025-06-19/",
    description: "The Indian central bank eases norms for infrastructure lending provisions.",
    date: "Jun 19, 2025",
    image: "images/article9.avif"
  }
];

const Newscards = ({ activeTab }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || process.env.VITE_NEWS_API_KEY;
  useEffect(() => {
    if (activeTab === 'news') {
      const fetchNews = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=6&apiKey=${NEWS_API_KEY}`
            );

          const mapped = response.data.articles.map((art) => ({
            title: art.title,
            url: art.url,
            description: art.description || '',
            date: new Date(art.publishedAt).toDateString(),
            image: art.urlToImage || 'paper.png',
          }));
          setNewsData(mapped);
        } catch (error) {
          console.error('Error fetching news:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchNews();
    }
  }, [activeTab]);

  const displayedData = activeTab === 'news' ? newsData : articleData;

  return (
    <div className="relative max-w-[1920px] mx-auto px-2 sm:px-4 md:px-8 py-4 sm:py-8">
      {/* Search */}
      <div className="flex justify-center mt-2 mb-8">
        <div className="flex w-full max-w-xl items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
          <input
            type="text"
            placeholder="Search for particular article"
            className="flex-1 bg-transparent outline-none text-base font-normal placeholder-gray-800 font-poppins"
          />
        </div>
      </div>

      {/*
        === Filter Dropdown (Category) ===
        Uncomment to enable filtering articles by category
        */}
        { /*
        <div className="flex justify-center mb-6">
            <select
                onChange={(e) => {
                const selected = e.target.value;
                // Add logic here to filter articleData or newsData based on selected
                console.log('Selected category:', selected);
                }}
                className="px-4 py-2 rounded-full shadow-md text-base bg-white text-gray-800"
            >
                <option value="">All Categories</option>
                <option value="housing">Housing</option>
                <option value="land">Land</option>
                <option value="luxury">Luxury</option>
                <option value="policy">Policy</option>
                <option value="investment">Investment</option>
            </select>
        </div>
        */}


      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 m-2 sm:m-4">
        {loading ? (
          <p className="text-center col-span-full">Loading news...</p>
        ) : (
          displayedData.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-md w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto h-[24rem] sm:h-[26rem] lg:h-[27rem] flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={article.image}
                className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-t-3xl"
                alt="News"
              />
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-poppins mb-2">{article.title}</h3>
                  <p className="text-neutral-700 text-sm font-normal leading-6 sm:leading-7 line-clamp-4">
                    {article.description}
                  </p>
                </div>
                <div className="text-right text-stone-600 text-xs sm:text-sm font-lato">{article.date}</div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Newscards;
