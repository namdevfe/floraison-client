import { useState } from "react";
import { motion } from "framer-motion";

type TreeState = "seed" | "sprout" | "budding" | "flower" | "withered";

interface StageInfo {
  label: string;
  image: string;  // đường dẫn ảnh
}

const stages: Record<TreeState, StageInfo> = {
  seed: { label: "Hạt giống", image: "/img/level1.png" },
  sprout: { label: "Mầm non", image: "/img/level2.png" },
  budding: { label: "Ra nụ", image: "/img/level3.png" },
  flower: { label: "Nở hoa", image: "/img/level4.png" },
  withered: { label: "Héo úa", image: "/img/level5.png" },
};

const StreakTree = () => {
  const [stageIndex, setStageIndex] = useState(0);
  const [isWithered, setWithered] = useState(false);

  const treeKeys = Object.keys(stages) as TreeState[];
  const current = isWithered ? "withered" : treeKeys[stageIndex];
  const stage = stages[current];

  const grow = () => {
    setWithered(false);
    setStageIndex((prev) => (prev < treeKeys.length - 2 ? prev + 1 : prev));
  };

  const wither = () => setWithered(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-sky-100 to-green-100 text-center">
      <motion.img
        key={current}
        src={stage.image}
        alt={stage.label}
        className="w-72 h-72 object-contain drop-shadow-lg"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      />

      <h2 className="mt-4 text-2xl font-semibold">{stage.label}</h2>

      <div className="flex gap-4 mt-8">
        <button
          onClick={grow}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow"
        >
          Học hôm nay 🌞
        </button>
        <button
          onClick={wither}
          className="px-4 py-2 bg-rose-400 hover:bg-rose-500 text-white rounded-2xl shadow"
        >
          Bỏ học 😴
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Nhấn “Học hôm nay” để cây phát triển. Nếu không học nhiều ngày, cây sẽ héo. 🌿
      </p>
    </div>
  );
}

export default StreakTree