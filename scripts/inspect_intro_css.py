import urllib.request
import re

url = 'https://www.grayandfarrar.com/wp-content/themes/gray-and-farrar/style.css?ver=7.1.4'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        css = resp.read().decode('utf-8', errors='ignore')
        
        # Search for intro classes
        matches = re.findall(r'(\.intro[^{]+{[^}]+})', css)
        print('Intro classes count:', len(matches))
        for m in matches[:10]:
            print(m)
            print('-'*40)

        matches_btn = re.findall(r'(\.button-circle[^{]+{[^}]+})', css)
        print('\nButton circle classes:')
        for m in matches_btn[:5]:
            print(m)
            print('-'*40)
except Exception as e:
    print('Error:', e)
