with open('scripts/gf_exact_styles.css', 'r', encoding='utf-8') as f:
    styles = f.read()

for rule in styles.split('\n\n'):
    if any(k in rule for k in ['intro-mask', 'logo-text', 'button-circle-group.active', 'animatecircleborder']):
        print(rule)
        print('-'*40)
