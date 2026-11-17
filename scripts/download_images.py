import os
import json
import urllib.request
from PIL import Image
import io

os.makedirs('public/images', exist_ok=True)
os.makedirs('content', exist_ok=True)

images = [
    {
        'id': 'logo',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2024/12/logo.webp',
        'target': 'logo.webp',
        'title': 'Sensation Infracon Logo'
    },
    {
        'id': 'blog-1',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2020/04/from-renting-to-owning-mumbais-real-etate-revolution-1-1024x427.webp',
        'target': 'from-renting-to-owning-mumbais-real-etate-revolution-1-1024x427.webp',
        'title': "From Renting to Owning: Mumbai's Real Estate Revolution"
    },
    {
        'id': 'blog-2',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2020/02/goa-getaways-your-real-estate-escape-plan-1-1024x427.webp',
        'target': 'goa-getaways-your-real-estate-escape-plan-1-1024x427.webp',
        'title': 'Goa Getaways: Your Real Estate Escape Plan'
    },
    {
        'id': 'blog-3',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2024/12/Untitled-design-3-1024x427.png',
        'target': 'Untitled-design-3-1024x427.webp',
        'title': "Visakhapatnam's Rise: Real Estate Insights in the City of Destiny"
    },
    {
        'id': 'blog-4',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2024/12/Untitled-design-4-1024x427.png',
        'target': 'Untitled-design-4-1024x427.webp',
        'title': 'Becoming the Alpha in Real Estate: The Sensation Group Success Story'
    },
    {
        'id': 'blog-5',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2024/12/Untitled-design-6-1024x427.png',
        'target': 'Untitled-design-6-1024x427.webp',
        'title': 'Investing in Hyderabad City: A Thriving Hub of Opportunities'
    },
    {
        'id': 'blog-6',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2024/12/Untitled-design-7-1024x427.png',
        'target': 'Untitled-design-7-1024x427.webp',
        'title': 'Navigating Uncharted Waters: How Blue Ocean Strategy Sets Sensation Infracon Apart'
    },
    {
        'id': 'blog-7',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2025/06/Untitled-design-69-1024x427.png',
        'target': 'Untitled-design-69-1024x427.webp',
        'title': 'Bengaluru Real Estate: Is the North or East a Better Investment Option?'
    },
    {
        'id': 'blog-8',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2025/06/Untitled-design-25-1024x427.png',
        'target': 'Untitled-design-25-1024x427.webp',
        'title': 'Karnataka Clears Rs 15,441-Crore Investment Proposals Expected to Create Over 5,000 Jobs'
    },
    {
        'id': 'blog-9',
        'url': 'https://sensationinfracon.com/wp-content/uploads/2025/06/Untitled-design-70-1024x427.png',
        'target': 'Untitled-design-70-1024x427.webp',
        'title': 'Taiwanese Industrial Park Near Chennai Set to Draw ₹10,000 Crore Investment'
    }
]

saved_records = []
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for item in images:
    out_path = os.path.join('public', 'images', item['target'])
    print(f"Downloading {item['url']} -> {out_path}")
    try:
        req = urllib.request.Request(item['url'], headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            img = Image.open(io.BytesIO(data))
            # Save as WebP
            img.save(out_path, 'WEBP', quality=90)
            w, h = img.size
            saved_records.append({
                'id': item['id'],
                'originalUrl': item['url'],
                'filename': item['target'],
                'path': f"/images/{item['target']}",
                'title': item['title'],
                'width': w,
                'height': h
            })
            print(f"Successfully saved {out_path} ({w}x{h})")
    except Exception as e:
        print(f"Failed {item['url']}: {e}")

# Save in public/images/images.json and images.json at root and content/images.json
with open(os.path.join('public', 'images', 'images.json'), 'w') as f:
    json.dump(saved_records, f, indent=2)

with open('images.json', 'w') as f:
    json.dump(saved_records, f, indent=2)

with open(os.path.join('content', 'images.json'), 'w') as f:
    json.dump(saved_records, f, indent=2)

print("Done. Total saved:", len(saved_records))
