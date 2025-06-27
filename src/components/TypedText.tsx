import { useEffect, useRef } from "react";
import Typed from "typed.js"; // NOT from 'react-typed'

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
  className = "",
}) => {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (elRef.current) {
      typedRef.current = new Typed(elRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
      });
    }

    return () => {
      typedRef.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={elRef} className={className}></span>;
};
