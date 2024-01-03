import { HtmlAttributes } from 'csstype';
import React, { HTMLProps } from 'react';

export const QuarterCircle = () => <div className={`m-2 h-32 w-32 rounded-tl-full bg-emerald-800 `}></div>;

export const Circle = () => <div className={`m-2 mr-4 h-32  w-32 rounded-full bg-emerald-700 `}></div>;

export const Rectangle = () => <div className={`m-2 h-32 w-32 bg-blue-600 `}></div>;

export const FourEelementsColorful = ({ ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props}>
      <div>
        <QuarterCircle />
        <Rectangle />
      </div>
      <div>
        <Rectangle />
        <Circle />
      </div>
    </div>
  );
};

export const DotCircleGreenGlowing = ({ glow, ...props }: { glow: boolean & HTMLProps<HTMLDivElement> }) => {
  return glow ? (
    <div className="relative" {...props}>
      <div className="absolute mr-3 h-1 w-1 animate-ping rounded-full bg-emerald-400 opacity-70"></div>
      <div className="mr-3 h-1 w-1 rounded-full bg-emerald-500 "></div>
    </div>
  ) : (
    <div className="mr-3 h-1 w-1"></div>
  );
};
