"use client";
import { useEffect } from "react";

interface ModalVideoProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  channel?: string;
}

export default function ModalVideo({
  isOpen,
  onClose,
  videoId,
  channel = "youtube",
}: ModalVideoProps) {
  // Cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const src =
    channel === "youtube"
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <iframe
          src={src}
          className="w-full h-full rounded-lg"
          allow="autoplay; fullscreen"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
}