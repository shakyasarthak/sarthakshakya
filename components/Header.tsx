"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleResumeClick = () => {
    // Replace this URL with the actual path to your resume file
    const resumeUrl = '/Sarthak_Shakya_Resume.pdf'
    
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Sarthak_Shakya_Resume.pdf' // The name that will be used when downloading
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            Sarthak Shakya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="#projects" className="hover:text-orange-500 transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link href="#skills" className="hover:text-orange-500 transition-colors">Skills</Link>
            <Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link>
            <Button size="sm" className="ml-4" onClick={handleResumeClick}>Resume</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link 
              href="#projects" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#skills" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3">
              <Button className="w-full" onClick={handleResumeClick}>Resume</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}