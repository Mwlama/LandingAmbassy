"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState, useCallback } from "react";

interface Props {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: any;
    numSquares?: number;
    className?: string;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
}

export function AnimatedBackground({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = 0,
    numSquares = 50,
    className,
    maxOpacity = 0.5,
    duration = 4,
    repeatDelay = 0.5,
    ...props
}: Props) {
    const id = useId();
    const containerRef = useRef<SVGSVGElement | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [squares, setSquares] = useState<{ id: number; pos: [number, number] }[]>([]);

    const getPos = useCallback(() => {
        return [
            Math.floor((Math.random() * dimensions.width) / width),
            Math.floor((Math.random() * dimensions.height) / height),
        ];
    }, [dimensions.width, dimensions.height, width, height]);

    const generateSquares = useCallback((count: number) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            pos: getPos() as [number, number],
        }));
    }, [getPos]);

    const updateSquarePosition = useCallback((id: number) => {
  setSquares((currentSquares) =>
    currentSquares.map((sq) =>
      sq.id === id
        ? {
            ...sq,
            pos: getPos() as [number, number],
          }
        : sq
    )
  );
}, [getPos]);

      

    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            setSquares(generateSquares(numSquares));
        }
    }, [dimensions, numSquares, generateSquares]);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });

        const currentRef = containerRef.current;
        if (currentRef) {
            resizeObserver.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-[rgba(0, 0, 0, 0)] stroke-muted-foreground/20",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            <svg x={x} y={y} className="overflow-visible">
                {squares.map(({ pos: [x, y], id }, index) => (
                    <motion.rect
                        initial={{ opacity: 0 }}
                        animate={{ opacity: maxOpacity }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            delay: index * 0.1,
                            repeatType: "reverse",
                        }}
                        onAnimationComplete={() => updateSquarePosition(id)}
                        key={`${x}-${y}-${index}`}
                        width={width - 1}
                        height={height - 1}
                        x={x * width + 1}
                        y={y * height + 1}
                        fill="currentColor"
                        strokeWidth="0"
                    />
                ))}
            </svg>
        </svg>
    );
}

export default AnimatedBackground;
