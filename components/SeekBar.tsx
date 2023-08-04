import React from "react";

interface SeekBarProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

const SeekBar: React.FC<SeekBarProps> = ({ value, max, onChange }) => {
  return (
    <input
      type="range"
      value={value}
      max={max}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full"
    />
  );
};

export default SeekBar;
