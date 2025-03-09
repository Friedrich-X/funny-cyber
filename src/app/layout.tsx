import { GeistMono } from "geist/font/mono";
import { Sidebar } from "@/components/ui/sidebar";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";
import { metadata } from "./metadata";

const fontMono = GeistMono;

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontMono.className} antialiased bg-black/90 min-h-screen`}>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/50 via-gray-900 to-black -z-10" />
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCBNIDAgMTUgTCAyMCAxNSBNIDE1IDAgTCAxNSAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 -z-10" />
        <div className="scan-line" />
        <Sidebar />
        <ClientLayout>
          <main className="pt-20 lg:pt-0">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
