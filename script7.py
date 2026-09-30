import sys

with open('src/components/home/IndustriesSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-soft-white dark:bg-graphite border border-graphite/10 dark:border-white/10 rounded-2xl overflow-hidden group hover:shadow-xl hover:border-primary-blue/50 dark:hover:border-electric-blue/50 transition-all', 'block-card group')

with open('src/components/home/IndustriesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
