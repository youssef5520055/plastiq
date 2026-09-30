import sys

# StatsSection
with open('src/components/home/StatsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-primary-blue text-pure-white relative overflow-hidden', 'bg-graphite text-pure-white relative overflow-hidden border-y-4 border-soft-white')
content = content.replace('text-4xl lg:text-5xl font-black mb-2 text-pure-white drop-shadow-sm', 'text-5xl lg:text-6xl font-black mb-2 text-electric-blue drop-shadow-none')
content = content.replace('bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center', 'block-card p-6 text-center !bg-carbon !border-pure-white/20')

with open('src/components/home/StatsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# SustainabilitySection
with open('src/components/home/SustainabilitySection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-soft-white dark:bg-graphite border border-success-green/20 dark:border-success-green/10 rounded-3xl p-8 lg:p-12 overflow-hidden relative shadow-sm', 'block-card p-8 lg:p-12 overflow-hidden relative !border-success-green !border-4 !shadow-[8px_8px_0px_0px_var(--color-success-green)]')

content = content.replace('bg-white dark:bg-carbon border border-graphite/5 dark:border-white/5 rounded-2xl p-6 flex flex-col', 'block-card p-6 flex flex-col !shadow-[4px_4px_0px_0px_var(--color-success-green)] hover:!shadow-[6px_6px_0px_0px_var(--color-graphite)]')

with open('src/components/home/SustainabilitySection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# TestimonialsSection
with open('src/components/home/TestimonialsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-white dark:bg-carbon border border-graphite/10 dark:border-white/10 rounded-2xl p-8 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow', 'block-card p-8 flex flex-col h-full')

with open('src/components/home/TestimonialsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
