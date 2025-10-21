const HomePage = () => {
  return <div className="home">
    <div className="container">
      {/* Top */}
     <div className="flex justify-between items-start">
       <div>
        <div className="text-vivid-red text-8xl font-medium">Chào buổi sáng</div>
        <div className="mt-4 text-pastel-rose font-great-vibes text-8xl font-medium text-shadow-lg text-shadow-[#fff] text-right">Yến Phương</div>
      </div>

      <div className="flex items-center gap-5">
        <button className="w-fit px-4 py-2 rounded-2xl text-nowrap bg-vivid-red text-white cursor-pointer">Thêm từ mới</button>
        <button className="w-fit px-4 py-2 rounded-2xl text-nowrap bg-pastel-periwinkle text-white cursor-pointer">Ôn tập</button>
      </div>
     </div>

      {/* Bottom */}
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center justify-center gap-4 w-[400px] h-[400px] border-4 border-pastel-rose rounded-full">
          {/* SVG with curved background and text */}
          <svg viewBox="0 0 130 130" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* This path creates the pink/coral curved shape */}
            <path
              id="backgroundPath"
              d="m10,45c53,-33 96,3 96,3"
              fill="none"
              stroke="#ff4f63"
              strokeWidth="40"
              strokeLinecap="round"
            />

            {/* Original text path */}
            <path id="ieltsText" fill="none" d="m10,50c53,-33 96,3 96,3" />
            <text fill="white" textAnchor="middle" fontSize="16" fontWeight="bold" letterSpacing="1">
              <textPath href="#ieltsText" startOffset="50%">
                IELTS 6.5+
              </textPath>
            </text>
          </svg>
          <div className="text-6xl text-pastel-rose uppercase">FLORAISON</div>
          <img src="/img/5.svg" alt="Flower" className="w-[160px]" />
        </div>
        <div className="bg-pastel-peach flex-1 h-[400px]">Cột 2</div>
        <div className="bg-pastel-pear flex-1 h-[400px]">Cột 3</div>
      </div>
    </div>
  </div>;
};

export default HomePage;
