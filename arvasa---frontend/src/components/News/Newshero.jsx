const Newshero = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => () => {
    setActiveTab(tab);
  };

  return (
    <div className="relative max-w-[1920px] mx-4 md:mx-4 rounded-lg overflow-hidden">
      <div className="relative h-[516px]">
        <img
          className="absolute h-full w-full rounded-[20px] object-center object-cover"
          src="paper.png"
          alt="News Background"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-[3rem]">
          <h1 className="text-white text-5xl md:text-7xl font-bold text-center max-w-[80%] drop-shadow-lg">
            News & Article
          </h1>
          <div className="relative flex rounded-full bg-white p-1 w-[15rem] h-[4rem]">
            <div
              className={`${
                activeTab === 'news' ? 'bg-[#6D1E3D] text-white' : 'bg-white text-black'
              } transition-colors duration-300 ease-in w-28 h-14 px-7 py-3 rounded-[50px] inline-flex justify-center items-center gap-2.5 cursor-pointer hover:text-gray-400`}
              onClick={handleTabClick('news')}
            >
              <div className="text-center justify-center text-base font-medium leading-normal">News</div>
            </div>
            <div
              className={`${
                activeTab === 'articles' ? 'bg-[#6D1E3D] text-white' : 'bg-white text-black'
              } transition-colors duration-300 ease-in w-28 h-14 px-7 py-3 rounded-[50px] inline-flex justify-center items-center gap-2.5 cursor-pointer hover:text-[#6D1E3D]`}
              onClick={handleTabClick('articles')}
            >
              <div className="text-center justify-center text-base font-medium leading-normal">Articles</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 rounded-[20px]"></div>
    </div>
  );
};

export default Newshero;
