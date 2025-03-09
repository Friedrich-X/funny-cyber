"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Crosshair,
  AlertTriangle,
  Radio,
  Shield,
  Users,
} from "lucide-react";

const missions = [
  {
    id: 1,
    name: "Operation Skyfall",
    location: { x: 30, y: 40 },
    status: "Active",
    type: "Infiltration",
    agents: 3,
    threat: "High",
  },
  {
    id: 2,
    name: "Operation Goldeneye",
    location: { x: 60, y: 20 },
    status: "Pending",
    type: "Surveillance",
    agents: 2,
    threat: "Medium",
  },
  {
    id: 3,
    name: "Operation Moonraker",
    location: { x: 80, y: 60 },
    status: "Complete",
    type: "Extraction",
    agents: 4,
    threat: "Low",
  },
];

export default function MapPage() {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const [hoveredMission, setHoveredMission] = useState<number | null>(null);

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">Global Operations</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          {missions.length} Active Missions
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 bg-gray-900/50 border-blue-500/30 backdrop-blur h-[600px] relative overflow-hidden">
            {/* World Map Grid Background */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
              {Array.from({ length: 72 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-blue-500/10 relative"
                />
              ))}
            </div>

            {/* Mission Markers */}
            {missions.map((mission) => (
              <motion.div
                key={mission.id}
                className="absolute"
                style={{
                  left: `${mission.location.x}%`,
                  top: `${mission.location.y}%`,
                }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={() => setHoveredMission(mission.id)}
                onHoverEnd={() => setHoveredMission(null)}
                onClick={() => setSelectedMission(mission.id)}
              >
                <div className="relative">
                  <Crosshair
                    className={`w-6 h-6 ${
                      mission.status === "Active"
                        ? "text-green-400"
                        : mission.status === "Pending"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }`}
                  />
                  {(hoveredMission === mission.id || selectedMission === mission.id) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap"
                    >
                      <Card className="p-2 bg-gray-900/90 border-blue-500/30 text-xs font-mono">
                        {mission.name}
                      </Card>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Scanning Effect */}
            <div className="absolute inset-0">
              <div className="absolute w-full h-1 bg-blue-500/20 blur-sm animate-scan" />
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 space-y-2">
              <button className="w-8 h-8 bg-gray-900/50 border border-blue-500/30 rounded flex items-center justify-center text-blue-400 hover:bg-blue-500/10">
                +
              </button>
              <button className="w-8 h-8 bg-gray-900/50 border border-blue-500/30 rounded flex items-center justify-center text-blue-400 hover:bg-blue-500/10">
                -
              </button>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Mission Details */}
          <Card className="p-6 bg-gray-900/50 border-blue-500/30 backdrop-blur">
            <div className="space-y-4">
              <h3 className="font-mono font-bold flex items-center gap-2 text-gray-100">
                <Shield className="w-4 h-4 text-blue-400" />
                Mission Details
              </h3>
              <div className="space-y-2">
                {missions.map((mission) => (
                  <div
                    key={mission.id}
                    className={`p-3 border rounded-md transition-colors cursor-pointer ${
                      selectedMission === mission.id
                        ? "border-blue-500/50 bg-blue-500/10"
                        : "border-blue-500/20 hover:border-blue-500/30"
                    }`}
                    onClick={() => setSelectedMission(mission.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-gray-100">{mission.name}</span>
                      <Badge
                        variant="outline"
                        className={`${
                          mission.status === "Active"
                            ? "text-green-400 border-green-400"
                            : mission.status === "Pending"
                            ? "text-yellow-400 border-yellow-400"
                            : "text-blue-400 border-blue-400"
                        }`}
                      >
                        {mission.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {mission.agents} Agents
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {mission.threat}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Communications */}
          <Card className="p-6 bg-gray-900/50 border-blue-500/30 backdrop-blur">
            <div className="space-y-4">
              <h3 className="font-mono font-bold flex items-center gap-2 text-gray-100">
                <Radio className="w-4 h-4 text-blue-400" />
                Comms Status
              </h3>
              <div className="space-y-2">
                {["Satellite Link", "Ground Control", "Agent Comms"].map(
                  (system) => (
                    <div
                      key={system}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-100">{system}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-400">Online</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 