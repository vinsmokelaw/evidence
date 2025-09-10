"use client"

import { useState } from 'react'
import { 
  Github, Instagram, Linkedin, Facebook,
  Mail, Phone, MapPin, Download, ExternalLink,
  Palette, Monitor, Layers, Menu, X, ArrowRight,
  CheckCircle
} from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const socialLinks = {
    github: "https://github.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername"
  }

  const projectLinks = [
    "https://your-project-1.com",
    "https://your-project-2.com",
    "https://your-project-3.com",
    "https://your-project-4.com",
    "https://your-project-5.com",
    "https://your-project-6.com"
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 3000)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Evidence_Tanaka_Murima_CV.pdf'
    link.click()
  }

  const openProject = (index: number) => {
    window.open(projectLinks[index], '_blank')
  }

  const openSocialLink = (platform: keyof typeof socialLinks) => {
    window.open(socialLinks[platform], '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-blue-600">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm fixed w-full z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">TM</span>
            </div>
            <span className="text-white font-bold text-xl">Tanaka <span className="text-teal-400">VI</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
              <button 
                key={section} 
                onClick={() => scrollToSection(section)}
                className={`text-white hover:text-teal-400 transition-colors ${section === 'contact' ? 'bg-teal-400 text-slate-900 px-4 py-2 rounded-lg' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-teal-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm mt-4 rounded-lg mx-6 p-4">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
                <button 
                  key={section} 
                  onClick={() => scrollToSection(section)}
                  className={`text-white hover:text-teal-400 transition-colors text-left ${section === 'contact' ? 'bg-teal-400 text-slate-900 px-4 py-2 rounded-lg' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Hero */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Hi, I'm Evidence, Tanaka, Murima</h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              I'm Evidence Tanaka Murima, a creative and certified UX/UI & Graphic Designer 
              based in Zimbabwe. I help businesses bring their vision to life through innovative 
              design solutions.
            </p>

            <div className="space-y-4">
              <p className="text-xl font-semibold">Find Me on:</p>
              <div className="flex space-x-4">
                {Object.keys(socialLinks).map((platform) => (
                  <button 
                    key={platform}
                    onClick={() => openSocialLink(platform as keyof typeof socialLinks)}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    {platform === 'github' && <Github className="w-6 h-6" />}
                    {platform === 'instagram' && <Instagram className="w-6 h-6" />}
                    {platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
                    {platform === 'facebook' && <Facebook className="w-6 h-6" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Hire me</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={downloadCV}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden relative border-4 border-teal-400 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Evidence Tanaka Murima" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-teal-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:border-teal-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:border-teal-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:border-teal-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:border-teal-400"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:border-teal-400 resize-none h-32"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
              {submitStatus === 'success' && <p className="text-green-400 font-semibold mt-2">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="text-red-400 font-semibold mt-2">Something went wrong.</p>}
            </form>

            <div className="text-white space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <span>tanaka@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <span>+263 77 123 4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
