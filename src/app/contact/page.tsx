"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { contactInfo, socialLinks } from "../constants/contact";
import SidebarStrip from "@/app/components/SidebarStrip";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full max-h-screen flex flex-col items-center justify-start py-10 bg-transparent overflow-x-hidden">
      <SidebarStrip />

      <div className="w-3/4 h-full max-w-7xl mx-auto mb-20 relative z-10">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mokoto tracking-widest font-bold mb-6">
            <span className="text-white">ESTABLISH_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Initialize communication protocols with mission control
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info & Map */}
          <div data-aos="fade-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group"
                >
                  <div
                    className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/30 p-6 relative overflow-hidden transition-colors duration-300 h-full"
                    style={{ color: contact.color }}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
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
                      </div>

                      <div
                        className="text-sm font-mono mb-1"
                        style={{ color: contact.color }}
                      >
                        {contact.info}
                      </div>
                      <div className="text-xs text-gray-400">
                        {contact.subInfo}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div
              data-aos="fade-up"
              className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-6 relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#0a91ab]" />
                LOCATION MATRIX
              </h3>
              <div className="relative h-64 bg-[#022333]/50 border border-[#0a91ab]/30 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a91ab_1px,transparent_1px),linear-gradient(0deg,#0a91ab_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-[#ffc045] rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-[#022333]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-6 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                <Send className="h-6 w-6 text-[#0a91ab]" />
                Contact Us
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-lg text-white mb-2 font-medium">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-2 border-white/40 rounded-lg w-full py-5 px-4 text-base text-white bg-transparent focus:border-[#0a91ab] focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-lg text-white mb-2 font-medium">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-2 border-white/40 rounded-lg w-full py-5 px-4 text-base text-white bg-transparent focus:border-[#0a91ab] focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-lg text-white mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={5}
                    className="border-2 border-white/40 rounded-lg w-full py-10 px-4 text-base text-white bg-transparent resize-none focus:border-[#0a91ab] focus:ring-0"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0a91ab] to-[#ffc045] text-white py-6 text-lg font-mono uppercase tracking-wider rounded-lg"
                >
                  Send Message
                </Button>
              </form>

            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-6 flex justify-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="w-14 h-14 border-2 flex items-center justify-center rounded-full"
                    style={{ borderColor: social.color + "60" }}
                  >
                    <social.icon
                      className="h-6 w-6 transition-colors duration-300"
                      style={{ color: social.color }}
                    />
                  </div>
                  <div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: social.color }}
                  >
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
