"use client";
import React, { useState, useEffect } from "react";

const RealtimeClock = () => {
  const [time, setTime] = useState(new Date());
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    setText(
      `${time.getHours().toString().padStart(2, "0")}:${time
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")}`
    );
  }, [time]);

  return (
    <>
      {(text.split("") || []).map((i, index) => (
        <div
          className="w-[53px] h-[84px] bg-[#1B1C31] rounded-xl font-bold text-[48px] tracking-[5px] flex justify-center items-center"
          key={`${i}_${index}`}
        >
          {i}
        </div>
      ))}
    </>
  );
};
export default React.memo(RealtimeClock);
