import sys

with open('src/components/layout/Footer.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-carbon text-soft-white border-t border-white/10 pt-16 pb-8', 'bg-graphite text-soft-white border-t-4 border-soft-white pt-16 pb-8')

with open('src/components/layout/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
