import urllib.request
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

assets = [
    ('london-calling.gif', 'https://www.grayandfarrar.com/wp-content/uploads/2018/02/London-Calling.gif'),
    ('london-calling.png', 'https://www.grayandfarrar.com/wp-content/uploads/2022/10/output-onlinegiftools.png'),
    ('lonely-at-the-top.gif', 'https://www.grayandfarrar.com/wp-content/uploads/2018/01/Lonely-at-the-top.gif'),
    ('lonely-at-the-top.png', 'https://www.grayandfarrar.com/wp-content/uploads/2022/10/output-onlinegiftools-2.png'),
    ('wealth-of-experience.gif', 'https://www.grayandfarrar.com/wp-content/uploads/2018/01/Wealth-of-experience.gif'),
    ('wealth-of-experience.png', 'https://www.grayandfarrar.com/wp-content/uploads/2022/10/output-onlinegiftools-1.png'),
    ('personal-not-digital.gif', 'https://www.grayandfarrar.com/wp-content/uploads/2018/01/Personnal-not-digital2.gif'),
    ('personal-not-digital.png', 'https://www.grayandfarrar.com/wp-content/uploads/2022/10/output-onlinegiftools-3.png'),
]

for filename, url in assets:
    target_path = os.path.join('public', 'images', filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(target_path, 'wb') as f:
                f.write(data)
            print(f"Downloaded {filename}: {len(data)} bytes")
    except Exception as e:
        print(f"Error {filename}: {e}")
