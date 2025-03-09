"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Settings,
  Bell,
  Shield,
  Eye,
  Radio,
  Monitor,
  Wifi,
  Lock,
  Volume2,
  Languages,
  MapPin,
  Clock,
  Keyboard,
  Loader2,
} from "lucide-react";

export default function SettingsPage() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [encryptionLevel, setEncryptionLevel] = useState(256);
  const [autoLockTimeout, setAutoLockTimeout] = useState(5);
  const [volume, setVolume] = useState(80);

  const startUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => setIsUpdating(false), 1500);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">System Settings</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          v1.0.0
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-6">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-400" />
              Notifications & Alerts
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-gray-100">Enable Notifications</Label>
                  <p className="text-sm text-gray-400">Receive real-time mission updates</p>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-gray-100">Alert Volume</Label>
                <div className="flex items-center gap-4">
                  <Volume2 className="w-4 h-4 text-blue-400" />
                  <Slider
                    value={[volume]}
                    onValueChange={(values: number[]) => setVolume(values[0])}
                    max={100}
                    step={1}
                  />
                  <span className="text-sm text-gray-400 w-12">{volume}%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-6">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              Security Settings
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-gray-100">Encryption Level (bits)</Label>
                <div className="flex items-center gap-4">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <Slider
                    value={[encryptionLevel]}
                    onValueChange={(values: number[]) => setEncryptionLevel(values[0])}
                    max={512}
                    step={128}
                  />
                  <span className="text-sm text-gray-400 w-12">{encryptionLevel}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-100">Auto-Lock Timeout (minutes)</Label>
                <div className="flex items-center gap-4">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <Slider
                    value={[autoLockTimeout]}
                    onValueChange={(values: number[]) => setAutoLockTimeout(values[0])}
                    max={30}
                    step={1}
                  />
                  <span className="text-sm text-gray-400 w-12">{autoLockTimeout}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-6">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-blue-400" />
              Display & Interface
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-gray-100">Dark Mode</Label>
                  <p className="text-sm text-gray-400">Optimize for low-light conditions</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-gray-100">Motion Effects</Label>
                  <p className="text-sm text-gray-400">Enable UI animations</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-gray-100">High Contrast</Label>
                  <p className="text-sm text-gray-400">Increase text visibility</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-6">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Settings className="w-4 h-4 text-blue-400" />
              System Status
            </h3>
            <div className="space-y-4">
              <div 
                className="flex items-center justify-between text-sm text-gray-300 cursor-pointer hover:bg-blue-500/5 p-2 rounded-lg transition-colors"
                onClick={startUpdate}
              >
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-blue-400" />
                  <span>Connection Status</span>
                </div>
                <div className="flex items-center gap-2">
                  {isUpdating ? (
                    <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                  ) : (
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      Connected
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-blue-400" />
                    <span>Signal Strength</span>
                  </div>
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    Excellent
                  </Badge>
                </div>
                <Progress value={95} className="h-1" />
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  <Languages className="w-4 h-4 mr-1" />
                  Language: EN
                </Badge>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  Region: EUR
                </Badge>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  <Keyboard className="w-4 h-4 mr-1" />
                  Input: Ready
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 