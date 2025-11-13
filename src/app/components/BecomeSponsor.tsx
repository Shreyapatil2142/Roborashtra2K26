import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import {Button} from "../ui/button";
import {Textarea} from "../ui/textarea";
import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

export default function BecomeSponsor() {
 const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    const serviceID = "default_service";
    const templateID = "template_qgttzuo";
    const userID = "srSNnRMfoAq3x1tD3"; // replace with your EmailJS public key

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      alert("⚠️ Please fill in all fields before sending.");
      return;
    }

    if (!form.current) return;
    
    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(() => {
        alert("✅ Sent successfully!");
        setIsSending(false);
      })
      .catch((err) => {
        alert("❌ Failed to send: " + JSON.stringify(err));
        setIsSending(false);
      });
  };

  return (
    <div
  data-aos="fade-left"
  className="min-h-screen flex items-center justify-center px-4 py-16"
>
  <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-2xl relative overflow-hidden">
    <h3 className="text-3xl font-bold text-white mb-8 font-mono flex items-center gap-2 justify-center">
      <Send className="h-7 w-7 text-[#0a91ab]" />
      Become a Sponsor
    </h3>

    <form ref={form} onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Name Field */}
      <div>
        <label className="block text-lg text-white mb-2 font-medium text-left">
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

      {/* Contact No Field */}
      <div>
        <label className="block text-lg text-white mb-2 font-medium text-left">
          Contact Number
        </label>
        <Input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={(e) => handleInputChange("contact", e.target.value)}
          className="border-2 border-white/40 rounded-lg w-full py-5 px-4 text-base text-white bg-transparent focus:border-[#0a91ab] focus:ring-0"
        />
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-lg text-white mb-2 font-medium text-left">
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

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[#0a91ab] to-[#ffc045] md:text-lg text-white py-6 sm:text-base font-mono uppercase tracking-wider rounded-lg"
      >
       {isSending ? "Sending..." : "Send Request"}
           </Button>
    </form>
  </div>
</div>

  );
}
