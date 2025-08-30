"use client"

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialIssues = [
  {
    id: "1",
    issue: "Missing Alt Text",
    description: "Images on the homepage lack descriptive alt text, impacting SEO and accessibility.",
    priority: "High",
    severity: "Critical",
    status: "Pending",
  },
  {
    id: "2",
    issue: "Slow Loading Images",
    description: "Several images are large and unoptimized, causing slow page load times.",
    priority: "Medium",
    severity: "Minor",
    status: "In Progress",
  },
  {
    id: "3",
    issue: "Broken Links",
    description: "Multiple broken links detected on the contact page.",
    priority: "High",
    severity: "Critical",
    status: "Pending",
  },
  {
    id: "4",
    issue: "Inconsistent Heading Structure",
    description: "Inconsistent use of heading tags (H1, H2, etc.) across the site.",
    priority: "Low",
    severity: "Suggestion",
    status: "Completed",
  },
  {
    id: "5",
    issue: "Mobile Responsiveness Issues",
    description: "Layout issues observed on smaller screen sizes, affecting mobile user experience.",
    priority: "Medium",
    severity: "Minor",
    status: "In Progress",
  },
];

export default function Reports() {
  const [issues, setIssues] = useState(initialIssues);

  const handlePriorityChange = (issueId: string, priority: string) => {
    setIssues(
      issues.map((issue) =>
        issue.id === issueId ? { ...issue, priority } : issue
      )
    );
  };

  const handleStatusChange = (issueId: string, status: string) => {
    setIssues(
      issues.map((issue) =>
        issue.id === issueId ? { ...issue, status } : issue
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4">
      <div>
        <h2 className="text-2xl font-bold">Detected Issues</h2>
        <p className="text-gray-400">
          Review and prioritize issues found during the site analysis.
        </p>
      </div>
      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <p className="font-medium">{issue.issue}</p>
                  <p className="text-sm text-gray-400">{issue.description}</p>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">{issue.priority}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => handlePriorityChange(issue.id, "High")}
                      >
                        High
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handlePriorityChange(issue.id, "Medium")}
                      >
                        Medium
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handlePriorityChange(issue.id, "Low")}
                      >
                        Low
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      issue.severity === "Critical"
                        ? "destructive"
                        : issue.severity === "Minor"
                        ? "secondary"
                        : "default"
                    }
                  >
                    {issue.severity}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    onClick={() => handleStatusChange(issue.id, "Resolved")}
                  >
                    Mark as Resolved
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
