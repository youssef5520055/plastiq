import sys

with open('src/components/layout/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('sticky top-0 z-50 w-full border-b border-graphite/10 dark:border-white/10 bg-soft-white/80 dark:bg-graphite/80 backdrop-blur-md', 'sticky top-0 z-50 w-full border-b-4 border-graphite dark:border-soft-white bg-soft-white dark:bg-graphite')

with open('src/components/layout/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
