
import { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

export const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = false,
  className = '',
}) => {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop={loop}
      className={className}
    />
  );
};
