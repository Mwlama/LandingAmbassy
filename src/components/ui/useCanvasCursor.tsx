"use client";
import React from "react";
import useCanvasCursor from "@/hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      id="canvas"
      className="fixed top-0 left-0 pointer-events-none z-50"
    />
  );
};

export default CanvasCursor;
