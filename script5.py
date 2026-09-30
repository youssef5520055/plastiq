import sys

with open('src/components/home/FeaturedProductsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make it blocky
content = content.replace('bg-white dark:bg-carbon border border-graphite/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group', 'block-card overflow-hidden group')

with open('src/components/home/FeaturedProductsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
