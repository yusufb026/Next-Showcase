import { FC, ReactNode } from 'react';

interface ConatinerProps {
  children: ReactNode;
}

const Container: FC<ConatinerProps> = ({ children }) => {
  return <div className="w-ful mx-auto max-w-7xl">{children}</div>;
};

export default Container;
