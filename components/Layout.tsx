import NavigationBar from "./ui/NavigationBar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="min-h-screen bg-zinc-50 text-black">{children}</div>
      <NavigationBar />
    </div>
  );
};

export default Layout;
