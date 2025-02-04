"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30); // Start loading on route change
    const timer = setTimeout(() => setProgress(100), 500); // Complete after a delay

    return () => clearTimeout(timer);
  }, [pathname]); // Runs on route change

  return <LoadingBar color="#757575" height={3}   shadow={false}  progress={progress} onLoaderFinished={() => setProgress(0)} />;
};

export default TopLoadingBar;
