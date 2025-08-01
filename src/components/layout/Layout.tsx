import { useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Set default theme to light
    setTheme("light");
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;