"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, Terminal, Lock, Wifi, Fingerprint, Eye, Radio, Target, Activity, BarChart3, Users, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AnimatedCard } from "@/components/ui/animated-card";

const stats = [
  {
    id: "stats-1",
    title: "Active Agents",
    value: "12",
    change: "+2",
    trend: "up",
  },
  {
    id: "stats-2",
    title: "Threat Level",
    value: "High",
    change: "",
    trend: "neutral",
  },
  {
    id: "stats-3",
    title: "Active Missions",
    value: "5",
    change: "+1",
    trend: "up",
  },
];

const securityMetrics = [
  { name: "Network Security", value: 85 },
  { name: "Data Encryption", value: 95 },
  { name: "Access Control", value: 90 },
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [threatLevel, setThreatLevel] = useState(0);
  const [accessCode, setAccessCode] = useState("****");
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  useEffect(() => {
    // Simulate system scan progress
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    // Simulate random threat detection
    const threatTimer = setInterval(() => {
      setThreatLevel(Math.floor(Math.random() * 100));
      if (Math.random() > 0.7) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(threatTimer);
    };
  }, []);

  const generateAccessCode = () => {
    const code = Math.random().toString(36).substring(2, 6).toUpperCase();
    setAccessCode(code);
  };

  const agents = [
    { id: "007", name: "James Bond", status: "Active" },
    { id: "006", name: "Alec Trevelyan", status: "MIA" },
    { id: "008", name: "Bill", status: "On Mission" },
  ];

  return (
    <div className="relative min-h-screen p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">Mission Control</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          System Status: Online
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <AnimatedCard key={stat.id} layoutId={stat.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-mono font-bold text-gray-100">{stat.value}</h3>
              </div>
              <Badge
                variant="outline"
                className={`${
                  stat.trend === "up"
                    ? "text-green-400 border-green-400"
                    : stat.trend === "down"
                    ? "text-red-400 border-red-400"
                    : "text-blue-400 border-blue-400"
                }`}
              >
                {stat.change}
              </Badge>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-6">
            <h2 className="text-xl font-mono font-bold text-gray-100 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              Security Overview
            </h2>
            <div className="space-y-4">
              {securityMetrics.map((metric) => (
                <div key={metric.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{metric.name}</span>
                    <span className="text-gray-400">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-1" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="relative p-6">
              <div className="flex flex-col items-center justify-center h-full space-y-2">
                <Activity className="w-8 h-8 text-blue-400" />
                <h3 className="font-mono font-bold text-gray-100">System Status</h3>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  Operational
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="relative p-6">
              <div className="flex flex-col items-center justify-center h-full space-y-2">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h3 className="font-mono font-bold text-gray-100">Threat Level</h3>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                  Elevated
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              Active Personnel
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Field Agents</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">8</Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Support Staff</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">4</Badge>
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              Mission Success Rate
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Completed</span>
                <Badge variant="outline" className="text-green-400 border-green-400">92%</Badge>
              </div>
              <Progress value={92} className="h-1" />
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              System Performance
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Response Time</span>
                <span className="text-gray-400">45ms</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Uptime</span>
                <span className="text-gray-400">99.9%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
