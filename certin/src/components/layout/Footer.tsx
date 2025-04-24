import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-foreground/75 hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-foreground/75 hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-sm text-foreground/75 hover:text-foreground">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#updates" className="text-sm text-foreground/75 hover:text-foreground">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-foreground/75 hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-foreground/75 hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-foreground/75 hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-foreground/75 hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#documentation" className="text-sm text-foreground/75 hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#help" className="text-sm text-foreground/75 hover:text-foreground">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#guides" className="text-sm text-foreground/75 hover:text-foreground">
                  Guides
                </a>
              </li>
              <li>
                <a href="#api" className="text-sm text-foreground/75 hover:text-foreground">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/80 hover:text-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Separator className="bg-border" />
        <div className="pt-8 text-center text-sm text-foreground/75">
          <p>&copy; 2025 CERTIN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
