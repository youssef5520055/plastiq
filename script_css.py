import sys

with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('--color-graphite: #111315;', '--color-graphite: #0F172A;')
content = content.replace('--color-carbon: #181B1F;', '--color-carbon: #1E293B;')
content = content.replace('--color-soft-white: #F7F8FA;', '--color-soft-white: #F8FAFC;')
content = content.replace('--color-industrial-gray: #737981;', '--color-industrial-gray: #64748B;')
content = content.replace('--color-light-gray: #E8EAED;', '--color-light-gray: #E2E8F0;')
content = content.replace('--color-primary-blue: #2563EB;', '--color-primary-blue: #0369A1;')
content = content.replace('--color-electric-blue: #38BDF8;', '--color-electric-blue: #0EA5E9;')

# Append block styles
block_styles = '''
::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: var(--background); border-left: 2px solid var(--color-graphite); }
::-webkit-scrollbar-thumb { background: var(--color-graphite); border: 2px solid var(--background); }
::-webkit-scrollbar-thumb:hover { background: var(--color-primary-blue); }

.block-card {
  background-color: var(--background);
  border: 3px solid var(--color-graphite);
  box-shadow: 6px 6px 0px 0px var(--color-graphite);
  border-radius: 0;
  transition: all 0.2s ease;
}
.block-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px 0px var(--color-primary-blue);
}

.dark .block-card {
  background-color: var(--color-carbon);
  border-color: var(--color-soft-white);
  box-shadow: 6px 6px 0px 0px var(--color-soft-white);
}
.dark .block-card:hover { box-shadow: 8px 8px 0px 0px var(--color-electric-blue); }

.block-btn-primary {
  background-color: var(--color-primary-blue);
  color: #fff;
  border: 3px solid var(--color-graphite);
  box-shadow: 4px 4px 0px 0px var(--color-graphite);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0;
  transition: all 0.15s ease;
}
.block-btn-primary:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px var(--color-graphite);
}
.block-btn-primary:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px var(--color-graphite);
}

.dark .block-btn-primary {
  border-color: #fff;
  box-shadow: 4px 4px 0px 0px #fff;
}
.dark .block-btn-primary:hover { box-shadow: 2px 2px 0px 0px #fff; }
.dark .block-btn-primary:active { box-shadow: 0px 0px 0px 0px #fff; }
'''

content = content + block_styles

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(content)
