"use client"

import { useState, useRef } from 'react'
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Facebook,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Palette,
  Monitor,
  Layers,
  User,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Social Media Links - Replace with your actual links
  const socialLinks = {
    github: "https://github.com/yourusername",
    instagram: "https://instagram.com/yourusername", 
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername"
  }

  // Project Links - Replace with your actual project URLs
  const projectLinks = [
    "https://your-project-1.com",
    "https://your-project-2.com",
    "https://your-project-3.com",
    "https://your-project-4.com",
    "https://your-project-5.com",
    "https://your-project-6.com"
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const downloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Add your CV file to the public folder
    link.download = 'Evidence_Tanaka_Murima_CV.pdf'
    link.click()
  }

  const openProject = (index) => {
    window.open(projectLinks[index], '_blank')
  }

  const openSocialLink = (platform) => {
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-teal-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-teal-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-teal-400 transition-colors">Service</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-teal-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="bg-teal-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-teal-300 transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-teal-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm mt-4 rounded-lg mx-6 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-teal-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-teal-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-teal-400 transition-colors text-left">Service</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-teal-400 transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="bg-teal-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-teal-300 transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Hi, I'm Evidence, Tanaka, Murima</h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              I'm Evidence Tanaka Murima, a creative and certified UX/UI & Graphic Designer 
              based in Zimbabwe. I help businesses bring their vision to life through innovative 
              design solutions. With expertise in user experience design, graphic design, 
              and web development, I create visually appealing and functional designs that engage audiences 
              and drive results — it's where client & world-class one 
              studio converge.
            </p>
            
            <div className="space-y-4">
              <p className="text-xl font-semibold">Find Me on:</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => openSocialLink('github')}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => openSocialLink('instagram')}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => openSocialLink('linkedin')}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => openSocialLink('facebook')}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </button>
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

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Professional headshot */}
              <div className="w-80 h-80 rounded-full overflow-hidden relative border-4 border-teal-400 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Evidence Tanaka Murima" 
                  className="w-full h-full object-cover"
                />
                {/* Design tool icons */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  Xd
                </div>
                <div className="absolute top-16 right-8 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  Ai
                </div>
                <div className="absolute bottom-16 right-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  Ps
                </div>
                <div className="absolute bottom-4 right-12 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Professional workspace image */}
              <div className="w-80 h-80 rounded-2xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Designer workspace" 
                  className="w-full h-full object-cover"
                />
                {/* Tool icons */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                  Xd
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                  Ps
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold mb-6">About</h2>
            <p className="text-blue-100 leading-relaxed">
              I'm Evidence Tanaka Murima, a creative and certified UX/UI & Graphic Designer based in 
              Zimbabwe. I help businesses bring their vision to life through innovative design 
              solutions that engage audiences and drive remarkable results.
            </p>

            <div className="space-y-3">
              <p><span className="font-semibold">Name:</span> Evidence Murima</p>
              <p><span className="font-semibold">Date of birth:</span> 05/10/2002</p>
              <p><span className="font-semibold">Address:</span> Kuwadzana Extension 759</p>
              <p><span className="font-semibold">Email:</span> murimaevidence97@gmail.com</p>
              <p><span className="font-semibold">Phone Number:</span> 0777003834</p>
            </div>

            <button 
              onClick={downloadCV}
              className="bg-teal-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mt-6"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>

            {/* Skills */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-400 mb-2">90%</div>
                <div className="text-sm">UI/UX Design</div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-400 mb-2">86%</div>
                <div className="text-sm">Graphic Design</div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{width: '86%'}}></div>
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-400 mb-2">60%</div>
                <div className="text-sm">Web design</div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p className="text-blue-200 mb-2">Services</p>
          <h2 className="text-4xl font-bold mb-4">What am I Providing</h2>
          <p className="text-blue-100 max-w-3xl mx-auto mb-16">
            Elevate your business with my comprehensive design and creative development expertise! 
            I specialize in transforming concepts into compelling visual experiences that captivate 
            audiences and drive meaningful results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Graphic Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-teal-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Graphic Design</h3>
              <p className="text-blue-100 mb-6">
                Creating visually stunning graphics that communicate your brand message effectively 
                and leave a lasting impression on your audience.
              </p>
              <button 
                onClick={() => alert('Graphic Design services - Contact me for more details!')}
                className="bg-teal-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 hover:scale-105"
              >
                View more
              </button>
            </div>

            {/* Web Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-teal-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Design</h3>
              <p className="text-blue-100 mb-6">
                Designing responsive and user-friendly websites that provide exceptional user 
                experiences across all devices and platforms.
              </p>
              <button 
                onClick={() => alert('Web Design services - Contact me for more details!')}
                className="bg-teal-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 hover:scale-105"
              >
                View more
              </button>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-teal-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">UI / UX Design</h3>
              <p className="text-blue-100 mb-6">
                Crafting intuitive and engaging user interfaces that enhance user satisfaction 
                and drive business growth through thoughtful design decisions.
              </p>
              <button 
                onClick={() => alert('UI/UX Design services - Contact me for more details!')}
                className="bg-teal-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300 hover:scale-105"
              >
                View more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-700 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 sm:mb-0">Latest Projects</h2>
            <div className="flex space-x-4">
              <button 
                onClick={() => alert('View all projects - Coming soon!')}
                className="text-teal-400 hover:text-teal-300 transition-colors flex items-center space-x-1"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => alert('Portfolio section - Coming soon!')}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Portfolios
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Real project images */}
            {[
              { id: 1, image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Mobile App Design", desc: "iOS & Android app interface" },
              { id: 2, image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Web Dashboard", desc: "Admin panel design system" },
              { id: 3, image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Brand Identity", desc: "Complete branding package" },
              { id: 4, image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400", title: "E-commerce Site", desc: "Online store design" },
              { id: 5, image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Portfolio Website", desc: "Creative portfolio showcase" },
              { id: 6, image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Marketing Materials", desc: "Print and digital designs" }
            ].map((project, index) => (
              <div 
                key={project.id} 
                onClick={() => openProject(index)}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 group cursor-pointer hover:scale-105"
              >
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="font-semibold mb-2 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-blue-100">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-teal-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
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

            {/* Contact Form */}
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

              {/* Status Messages */}
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
            <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">TM</span>
            </div>
            <span className="font-bold text-xl">Tanaka <span className="text-teal-400">VI</span></span>
          </div>
          <p className="text-blue-200 mb-4">
            Creating exceptional digital experiences through innovative design solutions.
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <button 
              onClick={() => openSocialLink('github')}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </button>
            <button 
              onClick={() => openSocialLink('instagram')}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </button>
            <button 
              onClick={() => openSocialLink('linkedin')}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button 
              onClick={() => openSocialLink('facebook')}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-blue-300">
            © 2024 Evidence Tanaka Murima. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}