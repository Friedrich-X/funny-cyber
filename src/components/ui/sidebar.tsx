"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Target,
  Users,
  Map,
  Radio,
  FileText,
  AlertTriangle,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

const navItems = [
  { href: "/", label: "Mission Control", icon: Shield },
  { href: "/targets", label: "Target Database", icon: Target },
  { href: "/agents", label: "Field Agents", icon: Users },
  { href: "/map", label: "Global Operations", icon: Map },
  { href: "/comms", label: "Communications", icon: Radio },
  { href: "/intel", label: "Intelligence", icon: FileText },
  { href: "/alerts", label: "Threat Analysis", icon: AlertTriangle },
  { href: "/settings", label: "System Config", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const NavContent = () => (
    <div className="relative flex flex-col h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      <div className="relative p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-mono font-bold text-blue-400">IMF HQ</h2>
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-400 hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => isMobile && setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group relative ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                    : "text-gray-400 hover:text-blue-400 hover:bg-blue-500/5"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-mono text-sm">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 w-1 h-full bg-blue-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="relative mt-auto p-4 border-t border-blue-500/20">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-blue-400">SYSTEM ACTIVE</span>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 h-16 bg-black/40 border-b border-blue-500/20 backdrop-blur-sm z-40">
          <div className="flex items-center h-full px-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0 bg-black/90 border-blue-500/20">
                <NavContent />
              </SheetContent>
            </Sheet>
            <h1 className="ml-4 text-xl font-mono font-bold text-blue-400">IMF HQ</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 bg-black/40 border-r border-blue-500/20 backdrop-blur-sm hidden lg:block">
      <NavContent />
    </div>
  );
} 