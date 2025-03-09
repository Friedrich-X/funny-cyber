"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Shield,
  AlertTriangle,
  User,
  MapPin,
  Clock,
  FileText,
} from "lucide-react";

const targets = [
  {
    id: "T-001",
    name: "Cipher",
    organization: "Shadow Syndicate",
    status: "High Priority",
    location: "Eastern Europe",
    lastSeen: "12 hours ago",
    threatLevel: "Critical",
    associates: 5,
    details: "International cyber terrorism organization",
  },
  {
    id: "T-002",
    name: "Black Lotus",
    organization: "Autonomous Collective",
    status: "Under Surveillance",
    location: "South East Asia",
    lastSeen: "2 days ago",
    threatLevel: "High",
    associates: 3,
    details: "Advanced AI weapons development",
  },
  {
    id: "T-003",
    name: "Phantom",
    organization: "Independent",
    status: "Active Hunt",
    location: "Unknown",
    lastSeen: "5 days ago",
    threatLevel: "Moderate",
    associates: 1,
    details: "Specialized in data theft and manipulation",
  },
];

export default function TargetsPage() {
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">Target Database</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          {targets.length} Active Targets
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {targets.map((target) => (
            <motion.div
              key={target.id}
              layoutId={`target-${target.id}`}
              onClick={() => setSelectedTarget(target.id)}
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-blue-400" />
                      <div>
                        <h3 className="font-mono font-bold text-gray-100">{target.name}</h3>
                        <p className="text-sm text-gray-400">{target.organization}</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${
                        target.threatLevel === "Critical"
                          ? "text-red-400 border-red-400"
                          : target.threatLevel === "High"
                          ? "text-yellow-400 border-yellow-400"
                          : "text-blue-400 border-blue-400"
                      }`}
                    >
                      {target.threatLevel}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {target.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {target.lastSeen}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blue-500/20">
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gray-400" />
                        <span>{target.status}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{target.associates} Known Associates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="relative p-6 space-y-4">
              <h3 className="font-mono font-bold flex items-center gap-2 text-gray-100">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Threat Assessment
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Critical Threats</span>
                  <Badge variant="outline" className="text-red-400 border-red-400">
                    1
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>High Priority</span>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                    1
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Moderate Risk</span>
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    1
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="relative p-6 space-y-4">
              <h3 className="font-mono font-bold flex items-center gap-2 text-gray-100">
                <FileText className="w-4 h-4 text-blue-400" />
                Latest Intel
              </h3>
              <div className="space-y-3 text-sm">
                {targets.map((target) => (
                  <div
                    key={`intel-${target.id}`}
                    className="p-3 border border-blue-500/20 rounded-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-200">{target.name}</span>
                      <span className="text-xs text-gray-400">{target.lastSeen}</span>
                    </div>
                    <p className="text-gray-300">{target.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 