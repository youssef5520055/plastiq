"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function ContactPage() {
  const locale = useLocale() as "en" | "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      titleEn: "Email",
      titleAr: "البريد الإلكتروني",
      valueEn: "info@plastiq.com",
      valueAr: "info@plastiq.com",
    },
    {
      icon: Phone,
      titleEn: "Phone",
      titleAr: "الهاتف",
      valueEn: "+1 (555) 123-4567",
      valueAr: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      titleEn: "Address",
      titleAr: "العنوان",
      valueEn: "123 Industrial Ave, Tech City, TC 12345",
      valueAr: "123 شارع صناعي، مدينة التقنية، TC 12345",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      {/* Hero */}
      <div className="bg-graphite text-pure-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black mb-4"
          >
            {locale === "en" ? "Get in Touch" : "تواصل معنا"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-soft-white/70"
          >
            {locale === "en"
              ? "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              : "نود أن نسمع منك. أرسل لنا رسالة وسنرد عليك في أقرب وقت."}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.titleEn}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-pure-white dark:bg-carbon rounded-lg p-8 text-center"
              >
                <Icon className="w-12 h-12 mx-auto text-primary-blue mb-4" />
                <h3 className="font-bold text-graphite dark:text-pure-white mb-2">
                  {locale === "en" ? info.titleEn : info.titleAr}
                </h3>
                <p className="text-graphite/60 dark:text-soft-white/60">
                  {locale === "en" ? info.valueEn : info.valueAr}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-pure-white dark:bg-carbon rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-graphite dark:text-pure-white">
            {locale === "en" ? "Send us a Message" : "أرسل لنا رسالة"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder={locale === "en" ? "Your Name" : "اسمك"}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                placeholder={locale === "en" ? "Your Email" : "بريدك الإلكتروني"}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <Input
              type="tel"
              placeholder={locale === "en" ? "Phone Number (Optional)" : "رقم الهاتف (اختياري)"}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <Input
              placeholder={locale === "en" ? "Subject" : "الموضوع"}
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />

            <Textarea
              placeholder={locale === "en" ? "Your Message" : "رسالتك"}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="min-h-[150px]"
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-4 text-success-green font-bold"
              >
                <Check className="w-6 h-6" />
                {locale === "en" ? "Message Sent!" : "تم إرسال الرسالة!"}
              </motion.div>
            ) : (
              <Button type="submit" variant="electric" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                {locale === "en" ? "Send Message" : "إرسال الرسالة"}
              </Button>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
