import React, { useRef, useEffect, useState } from 'react';
import { useAnimationFrame } from 'framer-motion';

export default function CurvedMarquee() {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [offset, setOffset] = useState(0);

  const baseText = "BRINGING VISUAL TO LIVE ✦ DYNAMIC DESIGNS, SEAMLESS MOTION ✦ ART THAT SPEAKS ✦ ";
  const repeatedText = baseText.repeat(15);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (measureRef.current) {
      setTextWidth(measureRef.current.getComputedTextLength());
    }
  }, [width]);

  const speed = 5;

  useAnimationFrame((time, delta) => {
    if (!textWidth) return;
    setOffset((prev) => {
      const move = speed * (delta / 16.66);
      let newOffset = prev - move;
      if (newOffset <= -textWidth) {
        newOffset += textWidth;
      }
      return newOffset;
    });
  });

  if (!width) {
    return <div ref={containerRef} className="w-full h-[400px] bg-[#0f1115]" />;
  }

  const SVG_HEIGHT = 600;

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden h-[600px] bg-[#0f1115] flex items-start justify-center"
    >
      <svg
        width={width}
        height={SVG_HEIGHT}
        viewBox={`0 0 ${width} ${SVG_HEIGHT}`}
        className="absolute top-0 left-0 pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        {/*
          A mathematically perfect 400px drop across the visible screen (x=0 to x=width).
          By placing the ends at -2*width and 3*width, we maintain the parabola's shape.
          The Y coordinates are constant because the vertical drop is independent of width.
        */}
        <path
          id="curve-path"
          d={`M ${-width * 2} -9500 Q ${width / 2} 10500 ${width * 3} -9500`}
          fill="transparent"
        />

        <text className="text-4xl md:text-5xl font-bold fill-white/80" style={{ letterSpacing: '0.05em' }}>
          <textPath href="#curve-path" startOffset={offset}>
            {repeatedText}
          </textPath>
        </text>

        <text
          ref={measureRef}
          className="text-4xl md:text-5xl font-bold opacity-0"
        >
          {baseText}
        </text>
      </svg>
    </div>
  );
}
