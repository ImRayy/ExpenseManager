import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import NavigationBar from "./ui/NavigationBar";
import { useRouter } from "next/router";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", () => setProgress(40));
    router.events.on("routeChangeComplete", () => setProgress(100));
    router.events.on("routeChangeError", () => setProgress(100));
    return () => {
      router.events.off("routeChangeStart", () => setProgress(40));
      router.events.off("routeChangeComplete", () => setProgress(100));
      router.events.on("routeChangeError", () => setProgress(100));
    };
  }, [router.events]);

  return (
    <div>
      <LoadingBar
        color="#3b82f6"
        progress={progress}
        waitingTime={800}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="min-h-screen bg-zinc-50 text-black">{children}</div>
      <NavigationBar />
    </div>
  );
};

export default Layout;
