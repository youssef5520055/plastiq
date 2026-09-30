import sys

with open('src/components/home/SustainabilitySection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors', 'block-card p-5 !bg-carbon !border-pure-white/20')

with open('src/components/home/SustainabilitySection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
