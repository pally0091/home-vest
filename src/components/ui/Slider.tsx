"use client";
import React, { useState, ChangeEvent } from "react";

interface SliderProps {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  className?: string;
  content?: string;
  price?: boolean;
  percent?: boolean;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  initialValue = 0,
  minValue = 0,
  maxValue = 100,
  onChange,
  className,
  content,
  price,
  percent,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`${className} w-full mx-auto mt-8`}>
      <div className="flex justify-between items-center">
        <p>{content}</p>
        <div className="mt-2 text-lg">
          {price && "$"}
          {value}
          {percent && "%"}
        </div>
      </div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        className="w-full h-2 rounded bg-gray-300 appearance-none focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
