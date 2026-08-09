"use client";

import * as React from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart, Moon, Sun, Globe, Menu, X, Search,
  Heart, ChevronDown, Boxes, Factory, Leaf, Info, Phone, Layers
} from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const locale = useLocale() as "en" | "ar";
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const cartItemsCount = useCartStore((state) => state.getTotalItems());
  const wishlistCount = useWishlistStore((state) => state.items.length);

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ctrl+K / Cmd+K to open search
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  const isRtl = locale === "ar";

  const navLinks = [
    { nameEn: "Products", nameAr: "المنتجات", href: "/products", icon: Boxes },
    { nameEn: "Industries", nameAr: "الصناعات", href: "/industries", icon: Factory },
    { nameEn: "Materials", nameAr: "المواد", href: "/materials", icon: Layers },
    { nameEn: "Sustainability", nameAr: "الاستدامة", href: "/sustainability", icon: Leaf },
    { nameEn: "About", nameAr: "من نحن", href: "/about", icon: Info },
    { nameEn: "Contact", nameAr: "تواصل", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-pure-white/90 dark:bg-graphite/95 backdrop-blur-xl border-b border-light-gray dark:border-white/5 shadow-lg shadow-black/5"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl lg:text-2xl font-black tracking-tighter">
                PLASTI<span className="text-primary-blue">Q</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.nameEn}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-graphite/70 hover:text-graphite dark:text-soft-white/70 dark:hover:text-soft-white hover:bg-light-gray/60 dark:hover:bg-white/5 rounded-lg transition-all"
                >
                  {locale === "en" ? link.nameEn : link.nameAr}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="text-graphite/60 dark:text-soft-white/60"
                onClick={() => setSearchOpen(true)}
                title="Search (Ctrl+K)"
              >
                <Search className="w-4.5 h-4.5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-graphite/60 dark:text-soft-white/60"
                onClick={toggleLanguage}
                title="Switch Language"
              >
                <Globe className="w-4.5 h-4.5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-graphite/60 dark:text-soft-white/60"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-4.5 w-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4.5 w-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button variant="ghost" size="icon" className="relative text-graphite/60 dark:text-soft-white/60" asChild>
                <Link href="/wishlist">
                  <Heart className="w-4.5 h-4.5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white font-bold">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </Button>

              <Button variant="ghost" size="icon" className="relative text-graphite/60 dark:text-soft-white/60" asChild>
                <Link href="/cart">
                  <ShoppingCart className="w-4.5 h-4.5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-blue text-[9px] text-white font-bold">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </Button>

              <div className="w-px h-6 bg-light-gray dark:bg-white/10 mx-1" />

              <Button variant="primary" size="sm" asChild>
                <Link href="/quote">
                  {locale === "en" ? "Request a Quote" : "اطلب عرض سعر"}
                </Link>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-1">
              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="/cart">
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-blue text-[9px] text-white font-bold">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-graphite/60 backdrop-blur-md flex items-start justify-center pt-20 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-pure-white dark:bg-carbon rounded-2xl shadow-2xl overflow-hidden border border-light-gray dark:border-white/10"
            >
              <div className="flex items-center gap-3 p-4 border-b border-light-gray dark:border-white/10">
                <Search className="w-5 h-5 text-industrial-gray flex-shrink-0" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={locale === "en" ? "Search products, SKUs, categories..." : "ابحث عن المنتجات والأرقام والفئات..."}
                  className="flex-1 bg-transparent text-graphite dark:text-soft-white placeholder:text-industrial-gray outline-none text-base"
                />
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-industrial-gray border border-light-gray dark:border-white/10 rounded">
                  ESC
                </kbd>
              </div>
              {searchQuery.trim() ? (
                <div className="p-4">
                  <Link
                    href={`/products?search=${encodeURIComponent(searchQuery)}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-light-gray dark:hover:bg-graphite transition-colors text-sm"
                  >
                    <Search className="w-4 h-4 text-primary-blue" />
                    <span>
                      {locale === "en" ? `Search for "${searchQuery}"` : `البحث عن "${searchQuery}"`}
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="p-4 grid grid-cols-2 gap-2">
                  {[
                    { nameEn: "Packaging", nameAr: "التغليف", href: "/products?category=c1" },
                    { nameEn: "Industrial", nameAr: "الصناعية", href: "/products?category=c3" },
                    { nameEn: "Household", nameAr: "المنزلية", href: "/products?category=c2" },
                    { nameEn: "Construction", nameAr: "البناء", href: "/products?category=c4" },
                  ].map((cat) => (
                    <Link
                      key={cat.nameEn}
                      href={cat.href}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-light-gray dark:hover:bg-graphite transition-colors text-sm text-graphite dark:text-soft-white"
                    >
                      <Boxes className="w-4 h-4 text-primary-blue" />
                      {locale === "en" ? cat.nameEn : cat.nameAr}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-graphite/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed top-0 h-full w-4/5 max-w-xs bg-pure-white dark:bg-carbon z-50 flex flex-col shadow-2xl",
                isRtl ? "left-0 border-r border-light-gray dark:border-white/10" : "right-0 border-l border-light-gray dark:border-white/10"
              )}
            >
              <div className="flex items-center justify-between p-5 border-b border-light-gray dark:border-white/10">
                <span className="text-xl font-black tracking-tighter">
                  PLASTI<span className="text-primary-blue">Q</span>
                </span>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex-1 p-5 overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.nameEn}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-graphite dark:text-soft-white hover:bg-light-gray dark:hover:bg-graphite/60 transition-colors"
                    >
                      <link.icon className="w-4 h-4 text-primary-blue" />
                      {locale === "en" ? link.nameEn : link.nameAr}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-light-gray dark:border-white/10 flex flex-col gap-2">
                  <Link
                    href="/cart"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-graphite dark:text-soft-white hover:bg-light-gray dark:hover:bg-graphite/60 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4 text-primary-blue" />
                    {locale === "en" ? "Cart" : "السلة"}
                    {cartItemsCount > 0 && (
                      <span className="ml-auto bg-primary-blue text-white text-xs rounded-full px-2 py-0.5">
                        {cartItemsCount}
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/wishlist"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-graphite dark:text-soft-white hover:bg-light-gray dark:hover:bg-graphite/60 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-primary-blue" />
                    {locale === "en" ? "Wishlist" : "المفضلة"}
                  </Link>
                </div>
              </nav>

              <div className="p-5 border-t border-light-gray dark:border-white/10 flex flex-col gap-3">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                    onClick={toggleLanguage}
                  >
                    <Globe className="w-4 h-4" />
                    {locale === "en" ? "العربية" : "English"}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>
                <Button variant="primary" className="w-full" asChild>
                  <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                    {locale === "en" ? "Request a Quote" : "اطلب عرض سعر"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
