import sys

with open('src/components/home/CategoriesSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-white dark:bg-carbon border border-graphite/10 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary-blue/50 dark:hover:border-electric-blue/50 transition-all group overflow-hidden relative', 'block-card p-6 relative group overflow-hidden')

content = content.replace('w-12 h-12 rounded-xl bg-primary-blue/10 dark:bg-electric-blue/10 flex items-center justify-center text-primary-blue dark:text-electric-blue mb-6 group-hover:scale-110 transition-transform', 'w-16 h-16 bg-graphite dark:bg-soft-white flex items-center justify-center text-soft-white dark:text-graphite mb-6 shadow-[4px_4px_0px_0px_var(--color-primary-blue)] group-hover:shadow-[4px_4px_0px_0px_var(--color-electric-blue)] transition-shadow border-2 border-graphite dark:border-soft-white')

content = content.replace('text-2xl font-bold text-graphite dark:text-pure-white mb-3 group-hover:text-primary-blue dark:group-hover:text-electric-blue transition-colors', 'text-2xl font-black text-graphite dark:text-soft-white mb-3 uppercase tracking-tight')

content = content.replace('text-industrial-gray dark:text-light-gray/80 mb-6 line-clamp-2', 'text-industrial-gray dark:text-light-gray/80 mb-6 line-clamp-2 font-medium')

content = content.replace('inline-flex items-center text-sm font-semibold text-primary-blue dark:text-electric-blue group-hover:underline', 'inline-flex items-center text-sm font-bold text-primary-blue dark:text-electric-blue uppercase tracking-widest')

with open('src/components/home/CategoriesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
