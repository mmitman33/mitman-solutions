import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Mitman Solutions</h3>
            <p className="text-muted-foreground text-sm">
              Professional software consulting and freelancing services for modern businesses.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web & Mobile Development</li>
              <li>Technical Strategy & Consulting</li>
              <li>Scale Your Business</li>
              <li>Optimize Operations</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Me</Link></li>
              <li>
                <a 
                  href="https://github.com/mmitman33"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="/Matt Mitman Resume.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://www.linkedin.com/in/matt-mitman-01191688/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Email</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mitman Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
