import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full" />
          <h1 className="text-xl font-bold">Site Analyzer</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-sm font-medium hover:underline">
            Dashboard
          </Link>
          <Link href="/reports" className="text-sm font-medium hover:underline">
            Reports
          </Link>
          <Link href="/settings" className="text-sm font-medium hover:underline">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h2 className="text-4xl font-bold">Uncover Insights, Optimize Performance.</h2>
        <p className="mt-2 text-lg text-gray-400">
          Enter any website URL to get a comprehensive analysis of its performance, SEO, and accessibility.
        </p>
        <div className="flex w-full max-w-md items-center space-x-2 mt-8">
          <Input type="url" placeholder="https://example.com" />
          <Button type="submit">Analyze</Button>
        </div>
      </main>
    </div>
  );
}
