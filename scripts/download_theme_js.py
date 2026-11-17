import urllib.request

url = 'https://www.grayandfarrar.com/wp-content/themes/gray-and-farrar/assets/js/theme.jquery.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        code = resp.read().decode('utf-8', errors='ignore')
        with open('scripts/theme.jquery.js', 'w', encoding='utf-8') as f:
            f.write(code)
        print("Downloaded theme.jquery.js, length:", len(code))
except Exception as e:
    print("Error:", e)
