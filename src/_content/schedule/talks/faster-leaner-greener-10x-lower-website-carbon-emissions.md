---
category: talks
start_datetime: 2024-09-24 16:20:00-04:00
end_datetime: 2024-09-24 16:45:00-04:00
permalink: /talks/faster-leaner-greener-10x-lower-website-carbon-emissions/
presenter_slugs:
- thibaud-colas
room: Junior Ballroom
tags: null
title: 'Faster, leaner, greener: 10x lower website carbon emissions'
track: t0
video_url: 'https://youtu.be/uC5lfegt4qQ'
---

We’ll first look at a quantitative assessment of thousands of Django websites on the web, to get a good picture of the Django ecosystem’s overall emissions, and understand which specific aspects of a project contribute to overall power and resource usage.

We’ll then dive deeper on a single Django website’s energy use, studying djangoproject.com specifically, as a good example of a high-traffic website with a big footprint. We’ll use different performance testing, power measurement, and generic static analysis tools to understand how the site could be improved. We will review common issues, straightforward improvements, and more “pie in the sky” changes that are attainable with effort:

- Energy consumption of front-end technology (React, HTMX, vanilla JS)
- How design affects emissions (light vs. dark mode, image assets, fonts)
- Application server: serverless Django options to reduce emissions
- Database: how SQLite and other "serverless" database options can reduce emissions
- Overlap with common Django performance considerations
