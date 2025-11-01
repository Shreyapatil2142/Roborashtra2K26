"use client";
import emailjs from "@emailjs/browser";
import { useEffect, useState, useRef } from "react";
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
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("⚠️ Please fill in all fields before sending.");
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm(
        "default_service", //  Your EmailJS Service ID
        "template_imvs4aj", // Your Template ID
        form.current,
        "Dvl7IHf3g0huhr69E" // Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          alert("❌ Failed to send message: " + JSON.stringify(err));
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: -250 });
    AOS.refresh();
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
                      <div className="text-sm text-gray-200">
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
            <div className="relative w-full h-64 sm:h-80 md:h-[400px] bg-[#022333]/50 border border-[#0a91ab]/30 rounded-lg overflow-hidden">
  <iframe
    className="absolute inset-0 w-full h-full rounded-lg border-2 border-[#0a91ab]/40"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6357.674639144745!2d73.74122481005469!3d18.650710592595445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba0251959e2d%3A0x4d7ea2cc35724480!2sPCCOE-Ravet%2C%20Pimpri%20Chinchwad%20College%20of%20Engineering%20and%20Research%2C%20Ravet%2C%20Pune!5e0!3m2!1sen!2sin!4v1723558759207!5m2!1sen!2sin"
    loading="lazy"
    allowFullScreen
  ></iframe>
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


              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 w-full max-w-lg"
              >
                <div>
                  <label className="block text-lg text-white mb-2 font-medium">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
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
                    name="email"
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
                    name="message"
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
  data-aos-duration="600"     
  data-aos-easing="ease-out"
  className="mt-6 flex justify-center gap-6"
>
  {socialLinks.map((social, index) => (
    <a
      key={index}
      href={social.url}
      className="group relative"
      data-aos="zoom-in"
      data-aos-duration="400"  
      data-aos-delay={index * 50}
    >
      <div
        className="w-14 h-14 border-2 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
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
