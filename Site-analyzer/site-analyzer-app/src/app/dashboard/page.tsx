import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-gray-400">
            Overview of your site's performance, SEO, and accessibility
          </p>
        </div>
        <Button>+ New Scan</Button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Overall Performance</h3>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Speed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">92/100</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">85/100</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">98/100</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Issue Summary</h3>
        <Card className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pending</TableCell>
                <TableCell>
                  <Badge variant="destructive">High</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="destructive">Critical</Badge>
                </TableCell>
                <TableCell>12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>In Progress</TableCell>
                <TableCell>
                  <Badge variant="secondary">Medium</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">Important</Badge>
                </TableCell>
                <TableCell>8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Completed</TableCell>
                <TableCell>
                  <Badge>Low</Badge>
                </TableCell>
                <TableCell>
                  <Badge>Normal</Badge>
                </TableCell>
                <TableCell>25</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
