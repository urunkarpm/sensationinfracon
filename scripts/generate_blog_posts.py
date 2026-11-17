import os

os.makedirs('content/blog', exist_ok=True)

posts = [
    {
        "slug": "from-renting-to-owning-mumbais-real-estate-revolution",
        "title": "From Renting to Owning: Mumbai's Real Estate Revolution",
        "date": "2024-04-15",
        "image": "/images/from-renting-to-owning-mumbais-real-etate-revolution-1-1024x427.webp",
        "category": "Market Trends",
        "excerpt": "An examination of shifting ownership trends across Mumbai's urban micro-markets and the expansion of suburban residential corridors."
    },
    {
        "slug": "goa-getaways-your-real-estate-escape-plan",
        "title": "Goa Getaways: Your Real Estate Escape Plan",
        "date": "2024-02-20",
        "image": "/images/goa-getaways-your-real-estate-escape-plan-1-1024x427.webp",
        "category": "Second Homes",
        "excerpt": "How holiday homes and digital detox sanctuaries are emerging as high-yield lifestyle and rental assets in North and South Goa."
    },
    {
        "slug": "visakhapatnams-rise-real-estate-insights-in-the-city-of-destiny",
        "title": "Visakhapatnam's Rise: Real Estate Insights in the City of Destiny",
        "date": "2024-11-10",
        "image": "/images/Untitled-design-3-1024x427.webp",
        "category": "Emerging Hubs",
        "excerpt": "Infrastructure developments near Bhogapuram International Airport and their catalyst effect on coastal plotted enclaves."
    },
    {
        "slug": "becoming-the-alpha-in-real-estate-the-sensation-group-success-story",
        "title": "Becoming the Alpha in Real Estate: The Sensation Group Success Story",
        "date": "2024-10-05",
        "image": "/images/Untitled-design-4-1024x427.webp",
        "category": "Corporate",
        "excerpt": "A review of Sensation Group's disciplined capital deployment, joint development model, and nationwide project portfolio."
    },
    {
        "slug": "investing-in-hyderabad-city-a-thriving-hub-of-opportunities",
        "title": "Investing in Hyderabad City: A Thriving Hub of Opportunities",
        "date": "2024-09-12",
        "image": "/images/Untitled-design-6-1024x427.webp",
        "category": "Market Trends",
        "excerpt": "Evaluating capital appreciation and infrastructure growth across Hyderabad's financial and life-sciences growth nodes."
    },
    {
        "slug": "navigating-uncharted-waters-how-blue-ocean-strategy-sets-sensation-infracon-apart",
        "title": "Navigating Uncharted Waters: How Blue Ocean Strategy Sets Sensation Infracon Apart",
        "date": "2024-08-18",
        "image": "/images/Untitled-design-7-1024x427.webp",
        "category": "Strategy",
        "excerpt": "Creating uncontested market spaces through serviced living, digital detox resorts, and measured plotted communities."
    },
    {
        "slug": "bengaluru-real-estate-is-the-north-or-east-a-better-investment-option",
        "title": "Bengaluru Real Estate: Is the North or East a Better Investment Option?",
        "date": "2024-07-22",
        "image": "/images/Untitled-design-69-1024x427.webp",
        "category": "Investment Analysis",
        "excerpt": "Comparing infrastructure timelines, IT cluster expansions, and land valuation dynamics in North Bengaluru versus East Bengaluru."
    },
    {
        "slug": "karnataka-clears-rs-15441-crore-investment-proposals",
        "title": "Karnataka Clears Rs 15,441-Crore Investment Proposals Expected to Create Over 5,000 Jobs",
        "date": "2024-06-30",
        "image": "/images/Untitled-design-25-1024x427.webp",
        "category": "Economy & Policy",
        "excerpt": "State government clearances signal sustained industrial and corporate capital influx into regional commercial nodes."
    },
    {
        "slug": "taiwanese-industrial-park-near-chennai-set-to-draw-10000-crore-investment",
        "title": "Taiwanese Industrial Park Near Chennai Set to Draw ₹10,000 Crore Investment",
        "date": "2024-06-15",
        "image": "/images/Untitled-design-70-1024x427.webp",
        "category": "Industrial Growth",
        "excerpt": "Manufacturing expansions along Chennai's southern arterial corridor stimulate demand for structured industrial workforce housing."
    },
    {
        "slug": "15-billion-projects-proposed-to-transform-hyderabad-into-a-global-city",
        "title": "$15 Billion Projects Proposed to Transform Hyderabad Into a Global City: IT Minister",
        "date": "2024-05-10",
        "image": "/images/Untitled-design-6-1024x427.webp",
        "category": "Infrastructure",
        "excerpt": "Public-private infrastructure commitments driving long-term capital appreciation across peri-urban land holdings."
    }
]

for p in posts:
    content = f"""---
title: "{p['title']}"
slug: "{p['slug']}"
date: "{p['date']}"
image: "{p['image']}"
category: "{p['category']}"
excerpt: "{p['excerpt']}"
---

TODO: Official article body text from Sensation Infracon editorial archives.

This article was published under the legacy portal category "{p['category']}". The complete archival copy will be migrated here upon client verification.

Key focus areas highlighted in archival summary:
- {p['excerpt']}
- Regional infrastructure correlations and long-term land valuation factors.
- Capital safety and transparent joint development frameworks.

TODO: Client verification required for full article reproduction.
"""
    file_path = os.path.join('content', 'blog', f"{p['slug']}.md")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated {file_path}")

print("Successfully generated 10 Markdown blog post files.")
