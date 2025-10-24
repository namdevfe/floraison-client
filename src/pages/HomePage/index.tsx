import StreakTree from "~/components/StreakTree";

const HomePage = () => {
  return <div className="home">
    <div className="container">
      {/* Top */}
     <div className="flex flex-col lg:flex-row justify-between items-start">
       <div>
        <div className="text-vivid-red text-8xl font-medium">Chào buổi sáng</div>
        <div className="mt-4 text-pastel-rose font-great-vibes text-8xl font-medium text-shadow-lg text-shadow-[#fff] text-left lg:text-right">Yến Phương</div>
      </div>

      <div className="flex items-center gap-5">
        <button className="w-fit px-4 py-2 rounded-2xl text-nowrap bg-vivid-red text-white cursor-pointer">Thêm từ mới</button>
        <button className="w-fit px-4 py-2 rounded-2xl text-nowrap bg-pastel-periwinkle text-white cursor-pointer">Ôn tập</button>
      </div>
     </div>

      {/* Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="flex flex-col items-center justify-center shrink-0 gap-4 w-[380px] h-[380px] lg:w-[400px] lg:h-[400px] border-4 border-pastel-rose rounded-full overflow-hidden">
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
        <div className="w-full lg:w-[400px] h-[400px] flex flex-col gap-4">
          <div className="relative flex items-center justify-center bg-white py-6 px-4 border-4 border-vivid-red rounded-md">
            <h3 className="absolute top-0 left-2/4 -translate-y-2/4 -translate-x-2/4 text-sm text-white bg-vivid-red py-2 px-3 rounded-4xl">Học Flashcard</h3>
            <img src="/img/10.png" alt="Learning Flashcard" className="w-20" />
          </div>
          <div className="relative flex items-center justify-center bg-white py-6 px-4 border-4 border-vivid-red rounded-md">
            <h3 className="absolute top-0 left-2/4 -translate-y-2/4 -translate-x-2/4 text-sm text-white bg-vivid-red py-2 px-3 rounded-4xl">Thống kê</h3>
            <img src="/img/11.png" alt="Report" className="w-20" />
          </div>
          <div className="relative flex items-center justify-center bg-white py-6 px-4 border-4 border-vivid-red rounded-md">
            <h3 className="absolute top-0 left-2/4 -translate-y-2/4 -translate-x-2/4 text-sm text-white bg-vivid-red py-2 px-3 rounded-4xl">Danh sách từ tổng hợp</h3>
            <img src="/img/12.png" alt="Learning Flashcard" className="w-20" />
          </div>
        </div>
        <div className="bg-pastel-pear h-[400px] w-full lg:w-[400px]">Cột 3</div>
      </div>

      <StreakTree />
    </div>
  </div>;
};

export default HomePage;
