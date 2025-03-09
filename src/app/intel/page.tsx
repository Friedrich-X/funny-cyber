"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Lock,
  Eye,
  Calendar,
  AlertTriangle,
  Search,
  Fingerprint,
  Network,
  Clock,
  Tag,
  Link2,
  Activity,
  Users,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { AnimatedCard } from "@/components/ui/animated-card";

const documents = [
  {
    id: "doc-1",
    title: "Operation Nighthawk Analysis",
    classification: "Top Secret",
    dateAdded: "2024-03-15",
    lastAccessed: "2 hours ago",
    status: "Active",
    category: "Field Operations",
    summary: "Detailed analysis of covert operations in Eastern Europe",
    relatedCases: ["Case #2024-15", "Case #2024-18"],
  },
  {
    id: "doc-2",
    title: "Network Infrastructure Report",
    classification: "Secret",
    dateAdded: "2024-03-14",
    lastAccessed: "5 hours ago",
    status: "Under Review",
    category: "Technical Analysis",
    summary: "Assessment of critical network infrastructure vulnerabilities",
    relatedCases: ["Case #2024-12"],
  },
  {
    id: "doc-3",
    title: "Agent Field Reports Q1 2024",
    classification: "Confidential",
    dateAdded: "2024-03-10",
    lastAccessed: "1 day ago",
    status: "Archived",
    category: "Personnel",
    summary: "Quarterly compilation of field agent mission reports",
    relatedCases: ["Case #2024-08", "Case #2024-10", "Case #2024-11"],
  },
];

const recentActivity = [
  {
    id: "activity-1",
    action: "Document Access",
    user: "Agent Smith",
    timestamp: "10 minutes ago",
    details: "Accessed Operation Nighthawk Analysis",
  },
  {
    id: "activity-2",
    action: "New Document",
    user: "Analyst Johnson",
    timestamp: "1 hour ago",
    details: "Added Network Security Report",
  },
  {
    id: "activity-3",
    action: "Classification Update",
    user: "Director Wilson",
    timestamp: "2 hours ago",
    details: "Updated document security level",
  },
];

export default function IntelPage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-blue-400">Intelligence Database</h1>
        <Badge variant="outline" className="font-mono text-gray-100 border-blue-500/50">
          {documents.length} Classified Documents
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <AnimatedCard key={doc.id} layoutId={doc.id}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-mono font-bold text-gray-100">{doc.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    Last accessed: {doc.lastAccessed}
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    doc.classification === "Top Secret"
                      ? "text-red-400 border-red-400"
                      : doc.classification === "Secret"
                      ? "text-yellow-400 border-yellow-400"
                      : "text-blue-400 border-blue-400"
                  }
                >
                  {doc.classification}
                </Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Tag className="w-4 h-4 text-blue-400" />
                  {doc.category}
                </div>
                <div className="text-gray-300">{doc.summary}</div>
                <div className="space-y-2">
                  <div className="text-gray-400">Related Cases:</div>
                  <div className="flex flex-wrap gap-2">
                    {doc.relatedCases.map((caseId) => (
                      <Badge
                        key={caseId}
                        variant="outline"
                        className="text-gray-400 border-gray-400"
                      >
                        {caseId}
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
        <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm col-span-2">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <div className="relative p-6 space-y-4">
            <h3 className="font-mono font-bold text-gray-100 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between text-sm border-b border-blue-500/20 pb-4 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <div className="text-gray-300">{activity.details}</div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      {activity.user}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    {activity.timestamp}
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
              <Lock className="w-4 h-4 text-blue-400" />
              Security Level
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Top Secret</span>
                  <Badge variant="outline" className="text-red-400 border-red-400">
                    {documents.filter((d) => d.classification === "Top Secret").length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Secret</span>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                    {documents.filter((d) => d.classification === "Secret").length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Confidential</span>
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    {documents.filter((d) => d.classification === "Confidential").length}
                  </Badge>
                </div>
              </div>
              <div className="pt-4 border-t border-blue-500/20">
                <div className="text-sm text-gray-400">Access Level Required:</div>
                <div className="text-lg font-mono font-bold text-gray-100 mt-1">ALPHA</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 