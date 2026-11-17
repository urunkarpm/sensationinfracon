with open('scripts/gf_inner.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('scroll-page')
if pos != -1:
    print(html[max(0, pos-200):min(len(html), pos+400)])
