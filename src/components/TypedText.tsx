
import { useEffect, useRef } from 'react';
import Typed from 'react-typed';

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
    <Typed
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop={loop}
      className={className}
    />
  );
};
