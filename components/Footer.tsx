import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Sarthak Shakya</h3>
            <p className="text-gray-400">
              Data Science Student
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
              <li><Link href="#about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link href="#skills" className="hover:text-orange-500 transition-colors">Skills</Link></li>
              <li><Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/Sarthak_Shakya_Resume.pdf" className="hover:text-orange-500 transition-colors" download>Resume</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Certifications</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="https://www.linkedin.com/in/sarthak-shakya/" className="hover:text-orange-500 transition-colors">LinkedIn</Link></li>
              <li><Link href="https://github.com/shakyasarthak" className="hover:text-orange-500 transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2024 Sarthak Shakya. All rights reserved.
        </div>
      </div>
    </footer>
  )
}