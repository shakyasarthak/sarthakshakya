"use client"

import { Button } from './ui/button'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner' 

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
    // Initialize EmailJS with your public key
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sarthak Shakya",
          to_email: "shakya.sarthak002@gmail.com"
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        toast.success('Message sent successfully!')
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  name: e.target.value
                }))}
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  email: e.target.value
                }))}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-md h-32 resize-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  message: e.target.value
                }))}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Email: {" "}
              <a 
                href="mailto:shakya.sarthak002@gmail.com" 
                className="
                  text-primary
                  transition-all 
                  duration-300 
                  hover:text-primary/80
                  border-b-2 
                  border-primary/30 
                  hover:border-primary
                  pb-0.5
                "
              >
                shakya.sarthak002@gmail.com
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              Available for Summer 2024 internships
            </p>
            <Button 
                variant="outline" 
                onClick={() => {
                    window.open('/Sarthak_Shakya_Resume.pdf', '_blank')
                }}
                // Alternatively, you can use an anchor tag approach:
                asChild
            >
                <a href="/Sarthak_Shakya_Resume.pdf" download>
                    Download Resume
                </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}