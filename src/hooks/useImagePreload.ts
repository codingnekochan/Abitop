import React, { useEffect, useState } from "react";
import * as images from "../constants/images";

export default function useImagePreload() {
  const imageUrls = Object.values(images).filter(
    (url) => typeof url === "string",
  );
  const total = imageUrls.length;

  const [loadedCount, setLoadedCount] = useState(0);
  const loading = loadedCount < total;
  const progress = total > 0 ? Math.round((loadedCount / total) * 100) : 100;
  useEffect(() => {
    if (total === 0) {
      setLoadedCount(total);
      return;
    }

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        setLoadedCount((prev) => prev + 1);
      };
    });
  }, [total, imageUrls]);
  console.log(`Preloading images: ${loadedCount}/${total} (${progress}%)`);

  return { loading, loadedCount, total, progress };
}
