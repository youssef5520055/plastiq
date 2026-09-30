import sys

with open('src/components/home/TestimonialsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-pure-white dark:bg-graphite rounded-2xl p-6 shadow-sm border border-light-gray dark:border-white/5 flex flex-col', 'block-card p-6 flex flex-col')

with open('src/components/home/TestimonialsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
