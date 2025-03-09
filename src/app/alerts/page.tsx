"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Shield,
  Activity,
  Clock,
  Target,
  Zap,
  BarChart,
  Radio,
  MapPin,
  Server,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { AnimatedCard } from "@/components/ui/animated-card";

const alerts = [
  {
    id: "alert-1",
    title: "Unauthorized Access Attempt",
    severity: "Critical",
    timestamp: "10 minutes ago",
    status: "Active",
    location: "Server Room B",
    type: "Security Breach",
    details: "Multiple failed login attempts detected from unauthorized IP addresses",
    affectedSystems: ["Authentication Server", "Main Database"],
  },
  {
    id: "alert-2",
    title: "Anomalous Network Activity",
    severity: "High",
    timestamp: "25 minutes ago",
    status: "Investigating",
    location: "Network Core",
    type: "Network Security",
    details: "Unusual data transfer patterns detected in secure communication channels",
    affectedSystems: ["Network Gateway", "Encryption Module"],
  },
  {
    id: "alert-3",
    title: "System Vulnerability Detected",
    severity: "Medium",
    timestamp: "1 hour ago",
    status: "Monitoring",
    location: "Application Layer",
    type: "System Security",
    details: "Potential security vulnerability identified in system components",
    affectedSystems: ["Web Application", "API Gateway"],
  },
];

const threatMetrics = [
  { level: "Critical", count: 1, trend: "up" },
  { level: "High", count: 3, trend: "stable" },
  { level: "Medium", count: 5, trend: "down" },
];

export default function AlertsPage() {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">Threat Analysis</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          {alerts.length} Active Alerts
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {alerts.map((alert) => (
          <AnimatedCard key={alert.id} layoutId={alert.id}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-mono font-bold text-gray-100">{alert.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {alert.timestamp}
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    alert.severity === "Critical"
                      ? "text-red-400 border-red-400"
                      : alert.severity === "High"
                      ? "text-yellow-400 border-yellow-400"
                      : "text-blue-400 border-blue-400"
                  }
                >
                  {alert.severity}
                </Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  {alert.location}
                </div>
                <div className="text-gray-300">{alert.details}</div>
                <div className="space-y-2">
                  <div className="text-gray-400">Affected Systems:</div>
                  <div className="flex flex-wrap gap-2">
                    {alert.affectedSystems.map((system) => (
                      <Badge
                        key={system}
                        variant="outline"
                        className="text-gray-400 border-gray-400"
                      >
                        {system}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-blue-400" />
              Threat Metrics
            </h3>
            <div className="space-y-2">
              {threatMetrics.map((metric) => (
                <div
                  key={metric.level}
                  className="flex items-center justify-between text-sm text-gray-300"
                >
                  <span>{metric.level}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        metric.level === "Critical"
                          ? "text-red-400 border-red-400"
                          : metric.level === "High"
                          ? "text-yellow-400 border-yellow-400"
                          : "text-blue-400 border-blue-400"
                      }
                    >
                      {metric.count}
                    </Badge>
                    <span
                      className={
                        metric.trend === "up"
                          ? "text-red-400"
                          : metric.trend === "down"
                          ? "text-green-400"
                          : "text-blue-400"
                      }
                    >
                      {metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "→"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              Security Status
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Firewall</span>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Intrusion Detection</span>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  Monitoring
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Threat Scanner</span>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                  Scanning
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-400" />
              System Load
            </h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>CPU Usage</span>
                  <span className="text-gray-400">45%</span>
                </div>
                <Progress value={45} className="h-1" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Memory Usage</span>
                  <span className="text-gray-400">62%</span>
                </div>
                <Progress value={62} className="h-1" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Network Load</span>
                  <span className="text-gray-400">28%</span>
                </div>
                <Progress value={28} className="h-1" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 