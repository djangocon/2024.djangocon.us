---
category: talks
start_datetime: 2024-09-24 10:40:00-04:00
end_datetime: 2024-09-24 11:25:00-04:00
permalink: /talks/postgresql-beyond-django-strategies-to-get-max-performance/
presenter_slugs:
- alvaro-justen
room: Grand Ballroom III
tags:
- postgres
- performance
title: 'PostgreSQL Beyond Django: Strategies to Get Max Performance'
video_url: 'https://youtu.be/Kdlhsxs6ZOo'
track: t1
---

PostgreSQL has been evolving in functionality and performance for decades, yet we often fail to extract full potential of the most advanced FL/OSS RDBMS. In this talk, I'll cover techniques for optimizing database performance and reducing space usage, beyond the basics of modeling and indexing and exploring powerful features such as triggers and bulk data import/export (not the Django one).
If you want to handle millions of records easily and lower your infrastructure costs, this talk is for you! All the features mentioned will be presented using a simple Django app, created specifically for this talk. Topics to be covered:
- Introduction of the speaker
- Context about the dataset used on examples (52M+ rows)
- Issues caused by inadequate data modeling (from wrong types to field ordering)
- Understanding query execution
- Indexing, triggers, and other tools
- Using postgres' full-text search the right way
- Importing and exporting large amounts of data with Python
