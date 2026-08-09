"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckoutStep = "cart" | "customer" | "shipping" | "confirmation";

export default function CheckoutPage() {
  const locale = useLocale() as "en" | "ar";
  const isRtl = locale === "ar";
  const router = useRouter();

  const { items, getSubtotal, clearCart } = useCartStore();
  const [step, setStep] = useState<CheckoutStep>("cart");
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    notes: "",
  });

  const subtotal = getSubtotal();
  const shipping = items.length > 0 ? 25 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    // Mock order placement
    setStep("confirmation");
    setTimeout(() => {
      clearCart();
      router.push("/");
    }, 3000);
  };

  const steps = [
    { id: "cart", label: locale === "en" ? "Cart" : "السلة" },
    { id: "customer", label: locale === "en" ? "Customer" : "العميل" },
    { id: "shipping", label: locale === "en" ? "Shipping" : "الشحن" },
    { id: "confirmation", label: locale === "en" ? "Confirmation" : "التأكيد" },
  ];

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-screen bg-soft-white dark:bg-graphite flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="w-20 h-20 mx-auto text-light-gray mb-6" />
          <h1 className="text-3xl font-black mb-4 text-graphite dark:text-pure-white">
            {locale === "en" ? "Your cart is empty" : "سلتك فارغة"}
          </h1>
          <Button asChild variant="electric" size="lg">
            <a href="/products">
              {locale === "en" ? "Continue Shopping" : "متابعة التسوق"}
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center flex-1">
                <motion.div
                  initial={false}
                  animate={{
                    scale: step === s.id ? 1.2 : 1,
                  }}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                    step === s.id || steps.slice(0, idx).some((x) => x.id === step)
                      ? "bg-primary-blue text-white"
                      : "bg-light-gray dark:bg-industrial-gray/20 text-graphite dark:text-soft-white"
                  )}
                >
                  {idx + 1}
                </motion.div>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 bg-light-gray dark:bg-industrial-gray/20" />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            {steps.map((s) => (
              <span
                key={s.id}
                className={cn(
                  "font-medium",
                  step === s.id
                    ? "text-primary-blue"
                    : "text-graphite/60 dark:text-soft-white/60"
                )}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "cart" && (
                <motion.div
                  key="cart"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-pure-white dark:bg-carbon rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-graphite dark:text-pure-white">
                      {locale === "en" ? "Order Review" : "مراجعة الطلب"}
                    </h2>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.product.id} className="flex justify-between text-sm pb-4 border-b border-light-gray dark:border-industrial-gray/20">
                          <div>
                            <p className="font-medium">{locale === "en" ? item.product.name.en : item.product.name.ar}</p>
                            <p className="text-graphite/60 dark:text-soft-white/60">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 gap-2"
                    variant="electric"
                    size="lg"
                    onClick={() => setStep("customer")}
                  >
                    {locale === "en" ? "Continue" : "متابعة"}
                    <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                  </Button>
                </motion.div>
              )}

              {step === "customer" && (
                <motion.div
                  key="customer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-pure-white dark:bg-carbon rounded-lg p-6 space-y-4">
                    <h2 className="text-2xl font-bold mb-6 text-graphite dark:text-pure-white">
                      {locale === "en" ? "Customer Information" : "معلومات العميل"}
                    </h2>
                    <Input
                      placeholder={locale === "en" ? "Full Name" : "الاسم الكامل"}
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                    <Input
                      placeholder={locale === "en" ? "Company" : "الشركة"}
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                    <Input
                      type="email"
                      placeholder={locale === "en" ? "Email" : "البريد الإلكتروني"}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <Input
                      type="tel"
                      placeholder={locale === "en" ? "Phone" : "الهاتف"}
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" size="lg" onClick={() => setStep("cart")}>
                      {locale === "en" ? "Back" : "رجوع"}
                    </Button>
                    <Button
                      className="flex-1 gap-2"
                      variant="electric"
                      size="lg"
                      onClick={() => setStep("shipping")}
                    >
                      {locale === "en" ? "Continue" : "متابعة"}
                      <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "shipping" && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-pure-white dark:bg-carbon rounded-lg p-6 space-y-4">
                    <h2 className="text-2xl font-bold mb-6 text-graphite dark:text-pure-white">
                      {locale === "en" ? "Shipping Address" : "عنوان الشحن"}
                    </h2>
                    <Select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                    >
                      <option value="">{locale === "en" ? "Select Country" : "اختر الدولة"}</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ae">United Arab Emirates</option>
                      <option value="sa">Saudi Arabia</option>
                    </Select>
                    <Input
                      placeholder={locale === "en" ? "City" : "المدينة"}
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    <Textarea
                      placeholder={locale === "en" ? "Address" : "العنوان"}
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    <Input
                      placeholder={locale === "en" ? "Postal Code" : "الرمز البريدي"}
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                    <Textarea
                      placeholder={locale === "en" ? "Special Instructions (Optional)" : "تعليمات خاصة (اختيارية)"}
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" size="lg" onClick={() => setStep("customer")}>
                      {locale === "en" ? "Back" : "رجوع"}
                    </Button>
                    <Button
                      className="flex-1 gap-2"
                      variant="electric"
                      size="lg"
                      onClick={handlePlaceOrder}
                    >
                      {locale === "en" ? "Place Order" : "تأكيد الطلب"}
                      <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "confirmation" && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <Check className="w-20 h-20 mx-auto text-success-green mb-6" />
                  <h2 className="text-3xl font-black mb-4 text-graphite dark:text-pure-white">
                    {locale === "en" ? "Order Confirmed!" : "تم تأكيد الطلب!"}
                  </h2>
                  <p className="text-graphite/60 dark:text-soft-white/60 mb-8">
                    {locale === "en"
                      ? "Your order has been placed successfully. Redirecting to home..."
                      : "تم تأكيد طلبك بنجاح. جاري إعادة التوجيه..."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-pure-white dark:bg-carbon rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-graphite dark:text-pure-white">
                {locale === "en" ? "Order Summary" : "ملخص الطلب"}
              </h3>
              <div className="space-y-4 mb-6 pb-6 border-b border-light-gray dark:border-industrial-gray/20 text-sm">
                <div className="flex justify-between">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Subtotal" : "المجموع الفرعي"}
                  </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Shipping" : "الشحن"}
                  </span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Tax" : "الضريبة"}
                  </span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>{locale === "en" ? "Total" : "الإجمالي"}</span>
                <span className="text-primary-blue">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
