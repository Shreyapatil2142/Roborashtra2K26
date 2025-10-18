"use client"
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageSquare, Send, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { contactInfo, socialLinks } from "../constants/contact";
import Frame from "../components/frame";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

 

  return (
<section className="min-h-screen w-screen relative overflow-x-hidden overflow-y-auto lg:h-screen lg:overflow-y-hidden">
  <Frame />
    <div className="w-full h-full max-w-7xl mx-auto mb-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        
          
          <h2 className="text-5xl md:text-6xl mt-12 font-bold mb-6 font-mokoto tracking-widest">
            <span className="text-white">ESTABLISH_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &gt; Initialize communication protocols with mission control...
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/30 p-6 relative overflow-hidden hover:border-[color]/60 transition-colors duration-300 h-full" style={{ 'color': contact.color }}>
                    {/* Holographic Corners */}
                    <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: contact.color }} />
                    <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: contact.color }} />
                    <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: contact.color }} />
                    <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: contact.color }} />

                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center gap-4 mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div 
                          className="p-3 rounded-full border-2"
                          style={{ borderColor: contact.color + "60" }}
                        >
                          <contact.icon 
                            className="h-6 w-6"
                            style={{ color: contact.color }}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white font-mono">
                            {contact.title}
                          </h3>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-sm font-mono mb-1"
                        style={{ color: contact.color }}
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {contact.info}
                      </motion.div>
                      
                      <div className="text-xs text-gray-400">
                        {contact.subInfo}
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${contact.color} 0%, transparent 70%)`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Futuristic Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-6 relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#0a91ab]" />
                LOCATION MATRIX
              </h3>

              {/* Holographic Map Display */}
              <div className="relative h-64 bg-[#022333]/50 border border-[#0a91ab]/30 overflow-hidden">
                {/* Grid Lines */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{ 
                    backgroundPosition: ["0px 0px", "20px 20px"],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, #0a91ab 1px, transparent 1px),
                      linear-gradient(0deg, #0a91ab 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Location Marker */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-[#ffc045] rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-[#022333]" />
                  </div>
                  <motion.div
                    className="absolute inset-0 border-2 border-[#ffc045] rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Scanning Lines */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ 
                    background: [
                      "linear-gradient(90deg, transparent 0%, #0a91ab20 50%, transparent 100%)",
                      "linear-gradient(0deg, transparent 0%, #0a91ab20 50%, transparent 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              <div className="mt-4 text-sm text-gray-400 font-mono">
                &gt; GPS Coordinates: 28.7041° N, 77.1025° E
              </div>
            </motion.div>
          </motion.div>
{/* Right Column - Contact Form */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-6 relative overflow-hidden">
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
        <Send className="h-6 w-6 text-[#0a91ab]" />
        Contact Us
      </h3>

      <form className="space-y-3">
        {/* Name Field */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Your Name
          </label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Enter your name"
            className="bg-[#022333]/50 border-2 text-white"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Your Email
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter your email"
            className="bg-[#022333]/50 border-2 text-white"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Subject
          </label>
          <Input
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            placeholder="What is this about?"
            className="bg-[#022333]/50 border-2 text-white"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Message
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            placeholder="Type your message here..."
            className="bg-[#022333]/50 border-2 text-white resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-[#0a91ab] to-[#ffc045] text-white py-4 font-mono uppercase tracking-wider"
        >
          Send Message
        </Button>
      </form>
    </div>

    {/* Corner Indicators */}
    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#0a91ab]" />
    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#ffc045]" />
    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#ffc045]" />
    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#0a91ab]" />
  </div>

{/* Social Links */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  viewport={{ once: true }}
  className="mt-4"
>
  
  <div className="flex justify-center gap-6">
    {socialLinks.map((social, index) => (
      <motion.a
        key={index}
        href={social.url}
        className="group relative"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div 
          className="w-14 h-14 border-2 flex items-center justify-center relative overflow-hidden rounded-full"
          style={{ borderColor: social.color + "60" }}
        >
          <social.icon 
            className="h-6 w-6 z-10 relative group-hover:text-white transition-colors duration-300"
            style={{ color: social.color }}
          />
          
          {/* Glow Background */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-300"
            style={{ backgroundColor: social.color }}
          />

          {/* Glow Shadow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"
            style={{ boxShadow: `0 0 20px ${social.color}80` }}
          />
        </div>
        
        {/* Floating Label */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: social.color }}
        >
          {social.name}
        </motion.div>
      </motion.a>
    ))}
  </div>
</motion.div>

</motion.div>

        </div>
      </div>

      {/* Floating Communication Signals */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
          }}
        />
      ))}
    </section>
  );
}