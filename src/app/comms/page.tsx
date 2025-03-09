"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Signal,
  Lock,
  Wifi,
  Globe,
} from "lucide-react";

const messages = [
  {
    id: "M-001",
    sender: "Agent 007",
    timestamp: "2 mins ago",
    priority: "High",
    status: "Encrypted",
    channel: "Secure Line Alpha",
    content: "***** ENCRYPTED MESSAGE *****",
  },
  {
    id: "M-002",
    sender: "Field Team Delta",
    timestamp: "15 mins ago",
    priority: "Medium",
    status: "Decrypted",
    channel: "Tactical Net",
    content: "Position secured. Awaiting further instructions.",
  },
  {
    id: "M-003",
    sender: "HQ Command",
    timestamp: "1 hour ago",
    priority: "Critical",
    status: "Encrypted",
    channel: "Command Channel",
    content: "***** ENCRYPTED MESSAGE *****",
  },
];

const channels = [
  {
    name: "Secure Line Alpha",
    status: "Active",
    encryption: "AES-256",
    users: 3,
  },
  {
    name: "Tactical Net",
    status: "Active",
    encryption: "Quantum",
    users: 5,
  },
  {
    name: "Command Channel",
    status: "Restricted",
    encryption: "Triple-DES",
    users: 2,
  },
];

export default function CommsPage() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">Communications</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          {messages.length} Active Channels
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              layoutId={`message-${message.id}`}
              onClick={() => setSelectedMessage(message.id)}
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-blue-400" />
                      <div>
                        <h3 className="font-mono font-bold text-gray-100">{message.sender}</h3>
                        <p className="text-sm text-gray-400">{message.channel}</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${
                        message.priority === "Critical"
                          ? "text-red-400 border-red-400"
                          : message.priority === "High"
                          ? "text-yellow-400 border-yellow-400"
                          : "text-blue-400 border-blue-400"
                      }`}
                    >
                      {message.priority}
                    </Badge>
                  </div>

                  <div className="p-4 bg-black/40 border border-blue-500/10 rounded-md font-mono text-sm text-gray-300">
                    {message.content}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-gray-400" />
                      <span>{message.status}</span>
                    </div>
                    <span className="text-gray-400">{message.timestamp}</span>
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
                <Signal className="w-4 h-4 text-blue-400" />
                Channel Status
              </h3>
              <div className="space-y-3">
                {channels.map((channel) => (
                  <div
                    key={channel.name}
                    className="p-3 border border-blue-500/20 rounded-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-200">{channel.name}</span>
                      <Badge
                        variant="outline"
                        className={
                          channel.status === "Active"
                            ? "text-green-400 border-green-400"
                            : "text-yellow-400 border-yellow-400"
                        }
                      >
                        {channel.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                      <div className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-gray-400" />
                        {channel.encryption}
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-gray-400" />
                        {channel.users} Users
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="relative p-6 space-y-4">
              <h3 className="font-mono font-bold flex items-center gap-2 text-gray-100">
                <Wifi className="w-4 h-4 text-blue-400" />
                Network Status
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Quantum Link", status: "Online", latency: "12ms" },
                  { name: "Satellite Relay", status: "Online", latency: "45ms" },
                  { name: "Ground Station", status: "Online", latency: "8ms" },
                ].map((network) => (
                  <div
                    key={network.name}
                    className="flex items-center justify-between text-sm text-gray-300"
                  >
                    <span>{network.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-gray-400">{network.latency}</span>
                    </div>
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