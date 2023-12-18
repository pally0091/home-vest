"use client";
import React, { useState, ChangeEvent } from "react";
// Add this to your JavaScript

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
        className="w-full h-2 rounded bg-gray-300 appearance-none focus:outline-none focus:shadow-outline input-range"
        onChange={handleChange}
      />
      <style jsx>{`
        .input-range::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            #ee7214 0%,
            #ee7214 ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db 100%
          );
          border-radius: 10px; // adjust this value as needed
        }

        .input-range::-moz-range-track {
          background: linear-gradient(
            to right,
            #ee7214 0%,
            #ee7214 ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db 100%
          );
          border-radius: 10px; // adjust this value as needed
        }

        input[type="range"]::-webkit-slider-thumb {
          width: 16px;
          height: 16px;
          border: 4px solid #ee7214;
          background-color: white;
          border-radius: 50%;
          appearance: none;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border: 4px solid #ee7214;
          background-color: white;
          border-radius: 50%;
          appearance: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Slider;
