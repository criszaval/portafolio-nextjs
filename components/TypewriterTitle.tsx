"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const words = ["Ingeniero en Sistemas", "Desarrollador Web", "Full Stack Builder"];

export default function TypewriterTitle() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500); // Pausa antes de borrar
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <div className="mt-6 h-12 flex items-center justify-center">
      <h2 className="text-2xl font-semibold text-slate-300 sm:text-3xl">
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-[2px] h-7 bg-blue-500 ml-1 align-middle"
        />
      </h2>
    </div>
  );
}