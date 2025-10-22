import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(100);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
        
        // Calculate progress (assuming 30 days total countdown)
        const totalDays = 30;
        const daysLeft = newTimeLeft.days + (newTimeLeft.hours / 24);
        const newProgress = Math.max(0, Math.min(100, ((totalDays - daysLeft) / totalDays) * 100));
        setProgress(newProgress);
      }

      return newTimeLeft;
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-red-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.h3 
        className="text-2xl font-bold text-center mb-6 text-orange-600 relative inline-block"
        whileHover={{ scale: 1.05 }}
      >
        Time Until Rajwada 2.0
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeBlocks.map(({ label, value }, index) => (
          <motion.div
            key={label}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg cursor-pointer relative group"
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              >
                {value.toString().padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <div className="text-sm md:text-base font-medium text-gray-600 mt-2">
              {label}
            </div>
            
            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
              whileHover={{ scale: 1.2, opacity: 0.2 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Event details on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 text-center text-gray-600"
          >
            <p className="text-sm">Join us for an incredible celebration of Rajasthani culture!</p>
            <p className="text-xs mt-1">🎉 Music • Dance • Traditions • Food</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}