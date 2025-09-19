"use client"

import { useState } from 'react'
import { 
  Github, Instagram, Linkedin, Facebook,
  Mail, Phone, MapPin, Download, ExternalLink,
  ArrowRight, CheckCircle, Menu, X
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
    github: "https://github.com/",
    instagram: "https://www.instagram.com/designwithtk9/",
    linkedin: "https://www.linkedin.com/in/evidence-murima-68066a37b/",
    facebook: "https://www.facebook.com/profile.php?id=61575281082248"
  }

  const projectLinks = [
    "https://www.figma.com/design/uDJK3jcOAKmt74p2xgMI8z/Buildlink-Zimbabwe-Website?node-id=193-45&t=2VfS6tAnzi68wYHV-1",
    "https://www.figma.com/design/60uoWZv3QdFqhkrQvZ9kJX/Fashion-design-App?node-id=0-1&t=cM6nIEYBcSj1Aqb4-1",
    "https://www.figma.com/design/cwbfxuufIipjsgkehWtfkV/Evidence-Edu-Zim-Connect?node-id=0-1&t=rJM03y7NO57g211d-1",
    "https://www.figma.com/design/gsxFciF1C4R5xlKv7RPtVS/Real-Estate-wesite?node-id=0-1&t=3KomHXzSSI5SIYzQ-1",
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
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
    link.download = 'Evidence Murima-CV.pdf'
    link.click()
  }

  const openProject = (index: number) => window.open(projectLinks[index], '_blank')
  const openSocialLink = (platform: keyof typeof socialLinks) => window.open(socialLinks[platform], '_blank')

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-blue-600 text-white">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm fixed w-full z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-bold text-xl">Tanaka</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map(section => (
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
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Hi, I'm Evidence, Tanaka, Murima
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              I'm Evidence Tanaka Murima, a creative and certified UX/UI & Graphic Designer based in Zimbabwe.
              I help businesses bring their vision to life through innovative design solutions.
            </p>
            <div className="space-y-4">
              <p className="text-xl font-semibold">Find Me on:</p>
              <div className="flex space-x-4">
                {['github', 'instagram', 'linkedin', 'facebook'].map(platform => {
                  const Icon = { github: Github, instagram: Instagram, linkedin: Linkedin, facebook: Facebook }[platform]
                  return (
                    <button
                      key={platform}
                      onClick={() => openSocialLink(platform as keyof typeof socialLinks)}
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                    >
                      <Icon className="w-6 h-6" />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-teal-400 shadow-2xl">
                <img src="/images/q.jpg" alt="Evidence Tanaka Murima" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative w-80 h-80">
            <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-teal-400 shadow-2xl">
              <img src="/images/boy.jpg" alt="Designer workspace" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold mb-6">About</h2>
            <p className="text-blue-100 leading-relaxed">
              I'm Evidence Tanaka Murima, a creative and certified UX/UI & Graphic Designer based in Zimbabwe. 
              I help businesses bring their vision to life through innovative design solutions that engage audiences and drive remarkable results.
            </p>
            <div className="space-y-3">
              <p><span className="font-semibold">Name:</span> Evidence Murima</p>
              <p><span className="font-semibold">Date of birth:</span> 05/10/2002</p>
              <p><span className="font-semibold">Address:</span> Kuwadzana Extension 759</p>
              <p><span className="font-semibold">Email:</span> murimaevidence97@gmail.com</p>
              <p><span className="font-semibold">Phone Number:</span> 0777003834</p>
            </div>
            <button onClick={downloadCV} className="bg-teal-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mt-6">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Projects</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectLinks.map((link, index) => (
            <div key={index} onClick={() => openProject(index)} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 group cursor-pointer hover:scale-105">
              <h3 className="font-semibold mb-2 group-hover:text-teal-400 transition-colors">Project {index + 1}</h3>
              <p className="text-sm text-blue-100">Project description here</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-teal-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white space-y-6">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="font-semibold">+263777003834</p>
                  <p className="text-blue-200">+263777003834</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="font-semibold">murimaevidence97@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="font-semibold">HARARE, ZIMBABWE, KUWADZANA EXT</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:border-teal-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:border-teal-400 focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:border-teal-400 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:border-teal-400 focus:outline-none transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Send Us Your Message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:border-teal-400 focus:outline-none resize-none transition-colors"
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 backdrop-blur-sm rounded-lg p-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 backdrop-blur-sm rounded-lg p-3">
                  <X className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl">Tanaka</span>
          </div>
          <p className="text-blue-200 mb-4">
            Creating exceptional digital experiences through innovative design solutions.
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            {Object.keys(socialLinks).map(platform => (
              <button 
                key={platform}
                onClick={() => openSocialLink(platform as keyof typeof socialLinks)}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                {platform === 'github' && <Github className="w-5 h-5" />}
                {platform === 'instagram' && <Instagram className="w-5 h-5" />}
                {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                {platform === 'facebook' && <Facebook className="w-5 h-5" />}
              </button>
            ))}
          </div>
          <p className="text-sm text-blue-300">
            © {new Date().getFullYear()} Evidence Tanaka Murima. All rights reserved.
          </p>
        </div>
      </footer>

  {/* Add CSS for the orbiting animation */}
      <style jsx>{`
        @keyframes orbit-top {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(-140px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateY(-140px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-right {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-bottom {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(140px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateY(140px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-left {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(-140px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(-140px) rotate(-360deg);
          }
        }
        
        .animate-orbit-top {
          animation: orbit-top 12s linear infinite;
        }
        
        .animate-orbit-right {
          animation: orbit-right 12s linear infinite;
        }
        
        .animate-orbit-bottom {
          animation: orbit-bottom 12s linear infinite;
        }
        
        .animate-orbit-left {
          animation: orbit-left 12s linear infinite;
        }
      `}</style>
    </div>
  )
}