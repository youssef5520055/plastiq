import sys

with open('src/components/home/QuoteCtaSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-primary-blue text-pure-white relative overflow-hidden', 'bg-electric-blue text-graphite relative overflow-hidden border-y-4 border-graphite dark:border-soft-white')
content = content.replace('absolute inset-0 bg-gradient-to-br from-primary-blue via-blue-700 to-graphite opacity-90', 'hidden')
content = content.replace('text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6', 'text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 uppercase')
content = content.replace('text-lg text-white/80 max-w-2xl mx-auto mb-10', 'text-xl text-graphite/80 max-w-2xl mx-auto mb-10 font-bold')

# The exact button blocks:
button1_old = '''<Button size="lg" variant="secondary" asChild className="min-w-[200px]">
              <Link href="/quote">
                {t('primaryCta')}
                <ArrowRight className={ml-2 w-4 h-4 } />
              </Link>
            </Button>'''
button1_new = '''<Link href="/quote" className="block-btn-primary px-10 py-5 text-xl font-black flex items-center justify-center min-w-[200px]">
                {t('primaryCta')}
                <ArrowRight className={ml-2 w-4 h-4 } />
              </Link>'''

button2_old = '''<Button
              size="lg"
              variant="outline"
              asChild
              className="min-w-[200px] border-white/30 text-pure-white hover:bg-white/10"
            >
              <Link href="/contact">
                {t('secondaryCta')}
              </Link>
            </Button>'''
button2_new = '''<Link href="/contact" className="px-10 py-5 text-xl font-black border-4 border-graphite text-graphite uppercase hover:bg-graphite hover:text-soft-white transition-colors flex items-center justify-center min-w-[200px]">
                {t('secondaryCta')}
              </Link>'''

content = content.replace(button1_old, button1_new)
content = content.replace(button2_old, button2_new)

with open('src/components/home/QuoteCtaSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
