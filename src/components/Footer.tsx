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
              <li><Link href="/services" className="hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Consulting</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Technical Strategy</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
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
