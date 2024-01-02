'use client';

import { useEffect, useState } from 'react';
import { Progress } from './ui/progress';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = totalScroll / windowHeight;
      setScroll(scrollPercentage);
    };

    window.addEventListener('scroll', progressBarHandler);

    return () => {
      window.removeEventListener('scroll', progressBarHandler);
    };
  }, []);

  return (
    <div className="fixed w-full">
      <Progress value={scroll * 100} />
    </div>
  );
};

export default ScrollProgress;
