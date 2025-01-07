"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Preloader from "./preloader";

const Root = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Preloader />}
      <div>{children}</div>
    </>
  );
};

export default Root;
