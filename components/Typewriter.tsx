"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(() => words[0]?.length || 0);
  const [reverse, setReverse] = useState(true);
  const [blink, setBlink] = useState(true);

  // Blink cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 0);
      return;
    }

    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1500 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-mono font-bold text-xl md:text-2xl text-primary-dark flex items-center h-8 bg-primary-light px-2 py-1 rounded-sm border-2 border-border border-b-[4px]">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
}
