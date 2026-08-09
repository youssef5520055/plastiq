"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function QuotePage() {
  const locale = useLocale() as "en" | "ar";

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    quantity: "",
    targetPrice: "",
    requiredDate: "",
    specifications: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        quantity: "",
        targetPrice: "",
        requiredDate: "",
        specifications: "",
        notes: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-black mb-4 text-graphite dark:text-pure-white">
              {locale === "en" ? "Request a Quote" : "اطلب عرض سعر"}
            </h1>
            <p className="text-lg text-graphite/60 dark:text-soft-white/60">
              {locale === "en"
                ? "Get a personalized quote for your custom manufacturing needs. Our team will respond within 24 hours."
                : "احصل على عرض سعر مخصص لاحتياجاتك من التصنيع. سيرد فريقنا في غضون 24 ساعة."}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-pure-white dark:bg-carbon rounded-lg shadow-lg p-8 space-y-6"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder={locale === "en" ? "Company Name" : "اسم الشركة"}
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
              <Input
                placeholder={locale === "en" ? "Contact Name" : "اسم المتصل"}
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder={locale === "en" ? "Email Address" : "البريد الإلكتروني"}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="tel"
                placeholder={locale === "en" ? "Phone Number" : "رقم الهاتف"}
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                type="number"
                placeholder={locale === "en" ? "Quantity" : "الكمية"}
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                min="1"
              />
              <Input
                type="number"
                placeholder={locale === "en" ? "Target Price ($)" : "السعر المستهدف ($)"}
                name="targetPrice"
                value={formData.targetPrice}
                onChange={handleInputChange}
                step="0.01"
              />
              <Input
                type="date"
                placeholder={locale === "en" ? "Required Date" : "التاريخ المطلوب"}
                name="requiredDate"
                value={formData.requiredDate}
                onChange={handleInputChange}
              />
            </div>

            {/* Specifications */}
            <div>
              <label className="block text-sm font-medium text-graphite dark:text-pure-white mb-2">
                {locale === "en" ? "Product Specifications" : "مواصفات المنتج"}
              </label>
              <Textarea
                placeholder={locale === "en"
                  ? "Describe your custom specifications, materials, colors, dimensions, etc."
                  : "وصف المواصفات المخصصة والمواد والألوان والأبعاد وغيرها."}
                name="specifications"
                value={formData.specifications}
                onChange={handleInputChange}
                className="min-h-[120px]"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-graphite dark:text-pure-white mb-2">
                {locale === "en" ? "Additional Notes" : "ملاحظات إضافية"}
              </label>
              <Textarea
                placeholder={locale === "en"
                  ? "Any other information that might help us provide the best quote..."
                  : "أي معلومات أخرى قد تساعدنا في تقديم أفضل عرض سعر..."}
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="min-h-[100px]"
              />
            </div>

            {/* Info Box */}
            <div className="p-4 bg-primary-blue/5 border border-primary-blue/20 rounded-lg text-sm text-graphite dark:text-soft-white">
              {locale === "en"
                ? "✓ Our team will review your request and send a detailed quote within 24 hours."
                : "✓ سيراجع فريقنا طلبك وسيرسل عرض سعر مفصل في غضون 24 ساعة."}
            </div>

            {/* Submit */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-4 text-success-green font-bold text-lg"
              >
                <Check className="w-6 h-6" />
                {locale === "en" ? "Quote Request Submitted!" : "تم إرسال طلب العرض!"}
              </motion.div>
            ) : (
              <Button type="submit" variant="electric" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                {locale === "en" ? "Send Quote Request" : "إرسال طلب العرض"}
              </Button>
            )}
          </motion.form>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-graphite dark:text-pure-white">
              {locale === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: locale === "en" ? "How long does it take to receive a quote?" : "كم من الوقت يستغرق تلقي عرض السعر؟",
                  a: locale === "en" ? "We typically respond within 24 business hours." : "نرد عادة في غضون 24 ساعة عمل."
                },
                {
                  q: locale === "en" ? "What's the minimum order quantity?" : "ما هو الحد الأدنى للطلب؟",
                  a: locale === "en" ? "MOQ varies by product. Our team will confirm during quote discussion." : "يختلف الحد الأدنى حسب المنتج. سيؤكد فريقنا أثناء مناقشة العرض."
                },
                {
                  q: locale === "en" ? "Do you offer custom manufacturing?" : "هل تقدمون التصنيع المخصص؟",
                  a: locale === "en" ? "Yes! We specialize in custom plastic solutions tailored to your needs." : "نعم! نتخصص في حلول بلاستيكية مخصصة مصممة لاحتياجاتك."
                },
                {
                  q: locale === "en" ? "What payment methods do you accept?" : "ما طرق الدفع التي تقبلونها؟",
                  a: locale === "en" ? "We accept bank transfer, credit cards, and other industry-standard methods." : "نقبل التحويل البنكي والبطاقات الائتمانية وطرق قياسية أخرى."
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-pure-white dark:bg-carbon rounded-lg">
                  <h3 className="font-bold mb-2 text-graphite dark:text-pure-white">
                    {item.q}
                  </h3>
                  <p className="text-graphite/60 dark:text-soft-white/60 text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
