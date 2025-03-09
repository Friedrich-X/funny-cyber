"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import {
  Shield,
  MapPin,
  Activity,
  Clock,
  Target,
  BarChart3,
  Globe,
  Mail,
  Phone,
  Crosshair,
  Radio,
  Wifi,
  Radar,
  Satellite,
  Swords,
  Plane,
  Loader2,
} from "lucide-react";

const agents = [
  {
    id: "agent-1",
    name: "James Bond",
    codename: "007",
    status: "Active",
    location: "London, UK",
    lastActive: "2 hours ago",
    successRate: 95,
    currentMission: "Operation Skyfall",
    specialization: "Infiltration",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    email: "bond.j@mi6.gov.uk",
    phone: "+44 20 7123 4567",
    achievements: ["Cross of Merit", "Distinguished Service Medal"],
    yearsOfService: 15,
    languages: ["English", "Russian", "German", "French"],
    expertise: ["Covert Operations", "Hand-to-hand Combat", "Strategic Planning"],
    clearanceLevel: "Level 5 - Ultra",
    division: "00 Section",
    status_details: {
      physical: 98,
      mental: 95,
      combat: 97,
    },
    equipment: {
      primary: "Walther PPK",
      secondary: "Omega Seamaster",
      gadgets: ["Explosive Pen", "Grappling Watch", "Tracking Device"],
    },
    recent_missions: [
      { name: "Operation Thunderball", status: "Completed", date: "2024-02-15" },
      { name: "Operation Moonraker", status: "Completed", date: "2024-01-20" },
      { name: "Operation Goldfinger", status: "Completed", date: "2023-12-10" },
    ],
    training: {
      combat: ["Advanced CQC", "Tactical Shooting", "Maritime Operations"],
      specialty: ["High-Speed Driving", "HALO Jump Certified", "Advanced Interrogation"],
      technical: ["Cryptography", "Surveillance", "Counter-Intelligence"],
    },
    medical: {
      blood_type: "O Negative",
      fitness_level: "Exceptional",
      last_evaluation: "2024-02-01",
    },
  },
  {
    id: "agent-2",
    name: "Alec Trevelyan",
    codename: "006",
    status: "On Mission",
    location: "Moscow, Russia",
    lastActive: "5 minutes ago",
    successRate: 88,
    currentMission: "Operation Goldeneye",
    specialization: "Demolitions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    email: "trevelyan.a@mi6.gov.uk",
    phone: "+44 20 7123 4568",
    achievements: ["Medal of Valor", "Service Star"],
    yearsOfService: 12,
    languages: ["English", "Russian", "Ukrainian"],
    expertise: ["Explosives", "Infiltration", "Asset Recruitment"],
    clearanceLevel: "Level 5 - Ultra",
    division: "00 Section",
    status_details: {
      physical: 94,
      mental: 92,
      combat: 96,
    },
    equipment: {
      primary: "Glock 17",
      secondary: "Tag Heuer Professional",
      gadgets: ["Remote Detonator", "Night Vision Contacts", "Stealth Suit"],
    },
    recent_missions: [
      { name: "Operation Nightshade", status: "In Progress", date: "2024-03-01" },
      { name: "Operation Black Ice", status: "Completed", date: "2024-01-15" },
      { name: "Operation Red Dawn", status: "Completed", date: "2023-12-05" },
    ],
    training: {
      combat: ["Demolitions Expert", "Arctic Warfare", "Urban Combat"],
      specialty: ["Explosive Ordinance", "Winter Operations", "Stealth Tactics"],
      technical: ["Electronic Warfare", "Sabotage", "Signal Intelligence"],
    },
    medical: {
      blood_type: "A Positive",
      fitness_level: "Excellent",
      last_evaluation: "2024-01-15",
    },
  },
  {
    id: "agent-3",
    name: "Bill Tanner",
    codename: "Chief of Staff",
    status: "Standby",
    location: "MI6 HQ",
    lastActive: "1 day ago",
    successRate: 92,
    currentMission: "Intelligence Analysis",
    specialization: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    email: "tanner.b@mi6.gov.uk",
    phone: "+44 20 7123 4569",
    achievements: ["Intelligence Service Medal", "Long Service Medal"],
    yearsOfService: 20,
    languages: ["English", "French", "Arabic"],
    expertise: ["Intelligence Analysis", "Mission Planning", "Personnel Management"],
    clearanceLevel: "Level 5 - Ultra",
    division: "Command Staff",
    status_details: {
      physical: 85,
      mental: 98,
      combat: 82,
    },
    equipment: {
      primary: "Sig Sauer P226",
      secondary: "Encrypted Tablet",
      gadgets: ["Secure Comms Device", "Biometric Scanner", "Emergency Beacon"],
    },
    recent_missions: [
      { name: "Operation Oversight", status: "Active", date: "2024-03-01" },
      { name: "Operation Intel Hub", status: "Completed", date: "2024-02-01" },
      { name: "Operation Network", status: "Completed", date: "2024-01-01" },
    ],
    training: {
      combat: ["Basic CQC", "Defensive Shooting", "Escape & Evasion"],
      specialty: ["Strategic Command", "Crisis Management", "Intelligence Operations"],
      technical: ["Advanced Analytics", "Secure Communications", "Threat Assessment"],
    },
    medical: {
      blood_type: "B Positive",
      fitness_level: "Good",
      last_evaluation: "2024-02-15",
    },
  },
];

const missionStats = {
  total: 156,
  successful: 142,
  inProgress: 8,
  failed: 6,
};

const activeByRegion = [
  { region: "Europe", count: 5 },
  { region: "Asia", count: 3 },
  { region: "Americas", count: 2 },
  { region: "Middle East", count: 4 },
  { region: "Africa", count: 1 },
];

const equipmentStats = {
  vehicles: {
    aircraft: 12,
    vessels: 5,
    groundVehicles: 28,
    drones: 45,
  },
  weapons: {
    tactical: 156,
    sniper: 34,
    support: 89,
  },
  tech: {
    satellites: 4,
    surveillanceSystems: 23,
    communicationHubs: 8,
  },
};

const missionTypes = [
  { type: "Reconnaissance", count: 45, successRate: 96 },
  { type: "Infiltration", count: 38, successRate: 88 },
  { type: "Asset Extraction", count: 27, successRate: 92 },
  { type: "Counter-Intelligence", count: 24, successRate: 94 },
  { type: "Cyber Operations", count: 22, successRate: 98 },
];

const readinessMetrics = {
  personnel: 92,
  equipment: 88,
  logistics: 95,
  communications: 98,
};

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const agent = selectedAgent ? agents.find((a) => a.id === selectedAgent) : null;

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  const startEncryption = () => {
    setIsEncrypting(true);
    setTimeout(() => setIsEncrypting(false), 1500);
  };

  const simulateNewMessage = () => {
    setMessageCount(prev => prev + 1);
    startEncryption();
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">Field Agents</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          {agents.length} Active Agents
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AnimatedCard 
            key={agent.id} 
            layoutId={agent.id}
            onClick={() => setSelectedAgent(agent.id)}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-mono font-bold text-gray-100">{agent.name}</h3>
                <Badge
                  variant="outline"
                  className={
                    agent.status === "Active"
                      ? "text-green-400 border-green-400"
                      : agent.status === "On Mission"
                      ? "text-yellow-400 border-yellow-400"
                      : "text-blue-400 border-blue-400"
                  }
                >
                  {agent.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  {agent.location}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Last active: {agent.lastActive}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Target className="w-4 h-4 text-blue-400" />
                  {agent.currentMission}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Success Rate</span>
                    <span>{agent.successRate}%</span>
                  </div>
                  <Progress value={agent.successRate} className="h-1" />
                </div>
                <div className="pt-2">
                  <Badge variant="outline" className="text-gray-400 border-gray-400">
                    {agent.specialization}
                  </Badge>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <Dialog open={!!selectedAgent} onOpenChange={() => setSelectedAgent(null)}>
        <DialogContent className="max-w-[95vw] xl:max-w-[85vw] 2xl:max-w-[75vw] max-h-[90vh] overflow-y-auto bg-black/90 border border-blue-500/20 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-mono font-bold text-blue-400">
              Agent Profile - {agent?.codename}
            </DialogTitle>
          </DialogHeader>
          {agent && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-6">
              <div className="space-y-6">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-blue-500/20">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-mono font-bold text-gray-100">{agent.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Division: {agent.division}</p>
                    <Badge variant="outline" className="text-purple-400 border-purple-400">
                      {agent.clearanceLevel}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    {agent.email}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    {agent.phone}
                  </div>
                </div>
                <Card className="border border-blue-500/20 bg-black/40">
                  <div className="p-4 space-y-3">
                    <h4 className="font-mono font-bold text-gray-100">Medical Status</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Blood Type</span>
                        <span>{agent.medical.blood_type}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Fitness Level</span>
                        <span>{agent.medical.fitness_level}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Last Evaluation</span>
                        <span>{agent.medical.last_evaluation}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border border-blue-500/20 bg-black/40">
                  <div className="p-4 space-y-4">
                    <h4 className="font-mono font-bold text-gray-100">Current Status</h4>
                    <div className="space-y-3">
                      {Object.entries(agent.status_details).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300 capitalize">{key}</span>
                            <span className="text-gray-400">{value}%</span>
                          </div>
                          <Progress 
                            value={value} 
                            className={`h-1 ${
                              value >= 95 ? "bg-green-400/20" : 
                              value >= 90 ? "bg-blue-400/20" : 
                              "bg-yellow-400/20"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="border border-blue-500/20 bg-black/40">
                  <div className="p-4 space-y-4">
                    <h4 className="font-mono font-bold text-gray-100">Equipment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>Primary</span>
                        <span>{agent.equipment.primary}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>Secondary</span>
                        <span>{agent.equipment.secondary}</span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-sm text-gray-400">Gadgets</span>
                        <div className="flex flex-wrap gap-2">
                          {agent.equipment.gadgets.map((gadget) => (
                            <Badge
                              key={gadget}
                              variant="outline"
                              className="text-blue-400 border-blue-400"
                            >
                              {gadget}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="border border-blue-500/20 bg-black/40">
                  <div className="p-4 space-y-4">
                    <h4 className="font-mono font-bold text-gray-100">Recent Missions</h4>
                    <div className="space-y-3">
                      {agent.recent_missions.map((mission) => (
                        <div
                          key={mission.name}
                          className="flex items-center justify-between text-sm border-b border-blue-500/20 pb-2 last:border-0 last:pb-0"
                        >
                          <div className="space-y-1">
                            <div className="text-gray-300">{mission.name}</div>
                            <div className="text-gray-400">{mission.date}</div>
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              mission.status === "Completed"
                                ? "text-green-400 border-green-400"
                                : mission.status === "In Progress"
                                ? "text-yellow-400 border-yellow-400"
                                : "text-blue-400 border-blue-400"
                            }
                          >
                            {mission.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border border-blue-500/20 bg-black/40">
                  <div className="p-4 space-y-4">
                    <h4 className="font-mono font-bold text-gray-100">Training & Certifications</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="text-sm font-mono text-gray-400">Combat Training</h5>
                        <div className="flex flex-wrap gap-2">
                          {agent.training.combat.map((cert) => (
                            <Badge
                              key={cert}
                              variant="outline"
                              className="text-red-400 border-red-400"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-mono text-gray-400">Specialty Training</h5>
                        <div className="flex flex-wrap gap-2">
                          {agent.training.specialty.map((cert) => (
                            <Badge
                              key={cert}
                              variant="outline"
                              className="text-yellow-400 border-yellow-400"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-mono text-gray-400">Technical Training</h5>
                        <div className="flex flex-wrap gap-2">
                          {agent.training.technical.map((cert) => (
                            <Badge
                              key={cert}
                              variant="outline"
                              className="text-blue-400 border-blue-400"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <h4 className="font-mono font-bold text-gray-100">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.achievements.map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="outline"
                        className="text-yellow-400 border-yellow-400"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono font-bold text-gray-100">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((language) => (
                      <Badge
                        key={language}
                        variant="outline"
                        className="text-blue-400 border-blue-400"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono font-bold text-gray-100">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-gray-400 border-gray-400"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              Mission Statistics
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Total Missions</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {missionStats.total}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Successful</span>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  {missionStats.successful}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>In Progress</span>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                  {missionStats.inProgress}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Failed</span>
                <Badge variant="outline" className="text-red-400 border-red-400">
                  {missionStats.failed}
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              Active by Region
            </h3>
            <div className="space-y-2">
              {activeByRegion.map((region) => (
                <div
                  key={region.region}
                  className="flex items-center justify-between text-sm text-gray-300"
                >
                  <span>{region.region}</span>
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    {region.count}
                  </Badge>
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
              Communications Hub
            </h3>
            <div className="space-y-4">
              <div 
                className="flex items-center justify-between text-sm text-gray-300 cursor-pointer hover:bg-blue-500/5 p-2 rounded-lg transition-colors"
                onClick={startScan}
              >
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-blue-400" />
                  <span>Network Security</span>
                </div>
                <div className="flex items-center gap-2">
                  {isScanning ? (
                    <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                  ) : (
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      Optimal
                    </Badge>
                  )}
                </div>
              </div>

              <div 
                className="flex items-center justify-between text-sm text-gray-300 cursor-pointer hover:bg-blue-500/5 p-2 rounded-lg transition-colors"
                onClick={simulateNewMessage}
              >
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-blue-400" />
                  <span>Encrypted Messages</span>
                </div>
                <div className="flex items-center gap-2">
                  {isEncrypting ? (
                    <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />
                  ) : (
                    <>
                      <Badge variant="outline" className="text-blue-400 border-blue-400">
                        {messageCount}
                      </Badge>
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        Secure
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Radar className="w-4 h-4 text-blue-400" />
                  <span>Signal Strength</span>
                </div>
                <div className="w-24">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="h-1 bg-blue-400/50 rounded-full"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-blue-400 border-blue-400 animate-pulse">
                  Live Feed
                </Badge>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  Channels: 8
                </Badge>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                  Bandwidth: 98%
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-6">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-blue-400" />
              Mission Types & Success Rates
            </h3>
            <div className="space-y-4">
              {missionTypes.map((mission) => (
                <div key={mission.type} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>{mission.type}</span>
                      <Badge variant="outline" className="text-blue-400 border-blue-400">
                        {mission.count}
                      </Badge>
                    </div>
                    <span className="text-gray-400">{mission.successRate}%</span>
                  </div>
                  <Progress value={mission.successRate} className="h-1" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-6">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              Global Readiness Status
            </h3>
            <div className="space-y-4">
              {Object.entries(readinessMetrics).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 capitalize">{key}</span>
                    <span className="text-gray-400">{value}%</span>
                  </div>
                  <Progress 
                    value={value} 
                    className={`h-1 ${
                      value >= 95 ? "bg-green-400/20" : 
                      value >= 90 ? "bg-blue-400/20" : 
                      "bg-yellow-400/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Plane className="w-4 h-4 text-blue-400" />
              Vehicle Assets
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Aircraft</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.vehicles.aircraft}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Naval Vessels</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.vehicles.vessels}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Ground Vehicles</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.vehicles.groundVehicles}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Drones</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.vehicles.drones}
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Swords className="w-4 h-4 text-blue-400" />
              Weapons Systems
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Tactical</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.weapons.tactical}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Sniper Systems</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.weapons.sniper}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Support Weapons</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.weapons.support}
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Satellite className="w-4 h-4 text-blue-400" />
              Tech Infrastructure
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Satellites</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.tech.satellites}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Surveillance Systems</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.tech.surveillanceSystems}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Comm Hubs</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  {equipmentStats.tech.communicationHubs}
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 