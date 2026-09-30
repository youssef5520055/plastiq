import sys

with open('src/components/home/HeroSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-graphite text-pure-white', 'bg-soft-white dark:bg-graphite pt-20 border-b-4 border-graphite dark:border-soft-white')
content = content.replace('bg-gradient-to-br from-graphite via-carbon to-graphite', 'bg-transparent')
content = content.replace('backgroundImage: linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)', 'backgroundImage: linear-gradient(var(--color-graphite) 3px, transparent 3px), linear-gradient(90deg, var(--color-graphite) 3px, transparent 3px)')
content = content.replace('backgroundSize: "60px 60px"', 'backgroundSize: "80px 80px"')
content = content.replace('opacity-[0.03]', 'opacity-[0.08] dark:opacity-[0.04]')
content = content.replace('bg-pure-white/5 backdrop-blur-md border border-pure-white/10 rounded-xl px-4 py-3 shadow-xl', 'block-card px-6 py-4 bg-pure-white dark:bg-carbon')
content = content.replace('text-xl font-bold text-electric-blue', 'text-2xl font-black text-primary-blue dark:text-electric-blue')
content = content.replace('text-xs text-soft-white/60 mt-0.5', 'text-sm font-bold text-graphite/60 dark:text-soft-white/60 mt-1 uppercase tracking-wider')
content = content.replace('bg-primary-blue/10 border border-primary-blue/30 rounded-full px-4 py-1.5 text-xs font-semibold text-electric-blue', 'bg-electric-blue border-3 border-graphite dark:border-soft-white px-5 py-2 text-sm font-black text-graphite dark:text-graphite uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(248,250,252,1)]')
content = content.replace('text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6', 'text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight mb-8 text-graphite dark:text-soft-white uppercase')
content = content.replace('text-lg sm:text-xl text-soft-white/60 leading-relaxed mb-10 max-w-2xl mx-auto', 'text-xl sm:text-2xl text-industrial-gray dark:text-light-gray leading-relaxed mb-12 max-w-3xl mx-auto font-medium')

# Fix buttons
content = content.replace('<Button variant="electric" size="lg" asChild className="w-full sm:w-auto group min-w-[180px]">\n              <Link href="/products">', '<Link href="/products" className="block-btn-primary px-8 py-4 flex items-center justify-center w-full sm:w-auto text-lg">')
content = content.replace('<Button\n              variant="outline"\n              size="lg"\n              asChild\n              className="w-full sm:w-auto border-white/20 text-pure-white hover:bg-white/10 hover:border-white/40 min-w-[180px]"\n            >\n              <Link href="/quote">', '<Link href="/quote" className="px-8 py-4 flex items-center justify-center w-full sm:w-auto text-lg font-black text-graphite dark:text-soft-white border-4 border-graphite dark:border-soft-white uppercase tracking-wider hover:bg-graphite hover:text-soft-white dark:hover:bg-soft-white dark:hover:text-graphite transition-colors">')

content = content.replace('</Link>\n            </Button>', '</Link>')

with open('src/components/home/HeroSection.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
