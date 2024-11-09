import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Mic className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">XYZ.AI</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="text-muted-foreground hover:text-primary transition">Features</Link>
          <Link href="#analytics" className="text-muted-foreground hover:text-primary transition">Analytics</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary transition">Pricing</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}