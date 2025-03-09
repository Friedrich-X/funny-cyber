"use client";

import { useState, useEffect } from "react";
import { EncryptionLoader } from "@/components/ui/encryption-loader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="lg:pl-64 min-h-screen relative">
      {showLoader && <EncryptionLoader />}
      {children}
    </main>
  );
} 