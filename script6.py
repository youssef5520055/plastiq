import sys

with open('src/components/home/ManufacturingSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-white dark:bg-carbon border border-graphite/10 dark:border-white/10 p-6 rounded-2xl hover:shadow-lg transition-all hover:border-primary-blue/50 dark:hover:border-electric-blue/50', 'block-card p-6')

content = content.replace('w-12 h-12 rounded-xl bg-graphite text-pure-white flex items-center justify-center mb-6 shadow-md', 'w-16 h-16 bg-primary-blue text-pure-white flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--color-graphite)] border-2 border-graphite dark:border-soft-white')

with open('src/components/home/ManufacturingSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
