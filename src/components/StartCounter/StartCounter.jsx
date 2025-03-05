import React, { useState, useEffect } from "react";
import { FolderOpenDot, Smile, UserCheck, ShoppingCart } from "lucide-react";
import { Tilt } from "react-tilt"; // Import Tilt for the animated tilt effect

const StatsCounter = () => {
  const statsData = [
    { value: 100, label: "Projects Completed", icon: FolderOpenDot },
    { value: 50, label: "Happy Clients", icon: Smile },
    { value: 200, label: "Followers", icon: UserCheck },
    { value: 150, label: "Items Sold", icon: ShoppingCart },
  ];

  const [counterValues, setCounterValues] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervalIds = statsData.map((stat, index) => {
      const targetValue = stat.value;
      const intervalId = setInterval(() => {
        setCounterValues((prevValues) => {
          const newValues = [...prevValues];
          if (newValues[index] < targetValue) {
            newValues[index] += 1; // Increase by 1 every interval
          }
          return newValues;
        });
      }, 20); // Update every 50ms

      // Stop counting when the target value is reached
      setTimeout(() => clearInterval(intervalId), (targetValue * 50));

      return intervalId;
    });

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [statsData]);

  return (
    <div className="py-20 bg-white dark:bg-gradient-to-b from-[#1e293b] to-[#0f172a] dark:border dark:border-gray-700 
    " id="statsSection">
        
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black dark:text-white">Our Achievements</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <Tilt
              key={index}
              options={{
                max: 25,
                scale: 1.05,
                glare: true,
                "max-glare": 0.2,
              }}
              className="w-full"
            >
              <div className="feature-card bg-white dark:bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl shadow-xl p-8 h-full transform transition-transform duration-500 hover:-translate-y-2">
                <div className="icon-container relative inline-block mb-8">
                  <div className="anim-icon absolute inset-0 animate-spin-slow">
                    <span className="icon-1 absolute w-5 h-5 bg-blue-500/80 rounded-full -left-6 top-12"></span>
                    <span className="icon-2 absolute w-5 h-5 bg-indigo-300 rounded-full left-2 -top-5"></span>
                    <span className="icon-3 absolute w-3 h-3 bg-indigo-400 rounded-full top-3 right-0"></span>
                  </div>
                  <div className="icon-box relative text-blue-500 text-6xl w-32 h-32 rounded-full bg-indigo-50 dark:bg-gradient-to-b from-[#1e293b] to-[#0f172a] flex items-center justify-center transition-colors duration-500">
                    <stat.icon size={40} className="text-blue-500" />
                  </div>
                </div>

                <h3 className="text-3xl font-semibold text-blue-400 mb-4">{counterValues[index]}+</h3>
                <p className="text-gray-600 dark:text-white">{stat.label}</p>
              </div>
            </Tilt>
          ))}
        </div>

        <style>{`@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }

  to {
    transform: perspective(400px);
    opacity: 1;
  }
}

.flipInY {
  animation-name: flipInY;
  backface-visibility: visible !important;
}

.feature-card {
  box-shadow: 0 20px 50px 5px #e9eef7;
}

.icon-box::before {
  content: '';
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  left: -8px;
  top: -5px;
  z-index: -1;
  border-radius: 50%;
  box-shadow: -10px 10px 20px 0px rgba(0, 0, 0, 0.2);
}

.icon-container:hover .anim-icon {
  animation-play-state: running;
}

.anim-icon {
  animation-play-state: paused;
}

@keyframes zoom-fade-two {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.8); opacity: 0.5; }
}

.icon-1 { animation: zoom-fade-two 5s infinite linear; }
.icon-2 { animation: zoom-fade-two 4s infinite linear; }
.icon-3 { animation: zoom-fade-two 3s infinite linear; }
@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }

  to {
    transform: perspective(400px);
    opacity: 1;
  }
}

.flipInY {
  animation-name: flipInY;
  backface-visibility: visible !important;
}

.feature-card {
  box-shadow: 0 20px 50px 5px #e9eef7;
}

.icon-box::before {
  content: '';
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  left: -8px;
  top: -5px;
  z-index: -1;
  border-radius: 50%;
  box-shadow: -10px 10px 20px 0px rgba(0, 0, 0, 0.2);
}

.icon-container:hover .anim-icon {
  animation-play-state: running;
}

.anim-icon {
  animation-play-state: paused;
}

@keyframes zoom-fade-two {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.8); opacity: 0.5; }
}

.icon-1 { animation: zoom-fade-two 5s infinite linear; }
.icon-2 { animation: zoom-fade-two 4s infinite linear; }
.icon-3 { animation: zoom-fade-two 3s infinite linear; }
`}</style>
      </div>
    </div>
  );
};

export default StatsCounter;
