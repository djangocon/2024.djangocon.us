---
category: talks
start_datetime: 2024-09-24 16:20:00-04:00
end_datetime: 2024-09-24 16:45:00-04:00
permalink: /talks/deploying-django-migrations-at-kraken-scale/
presenter_slugs:
- tim-bell
room: Grand Ballroom III
tags:
- orm
title: Deploying Django migrations at Kraken scale
video_url: 'https://youtu.be/f3oIBd1enFE'
track: t1
---

Kraken is an energy retail system built on Django. It is currently in use by over 20 clients around the world, including the largest energy retailer in the UK, Octopus Energy, which developed Kraken.

When Kraken started out over 8 years ago supporting a single small client, applying Django migrations to make database schema changes was easy. Any migration that might be slightly dangerous was deployed outside business hours when the system was relatively quiet and there was no risk of disrupting the work of customer service staff. Kraken has now grown: the code has around 350 Django apps, with over 9000 migration files between them, and some database tables have billions of rows. With Kraken operating in 8 time zones around the globe, there is now no such thing as "outside business hours". We have needed to find other ways of deploying migrations that might be risky.

There are two main risk factors with applying migrations: taking exclusive database locks, and needing a long time to apply. Exclusive locks can interrupt normal system operations, while slow migrations can hold up the deployment process, potentially preventing later deployments for a long period.

This talk describes how we write migrations so that they avoid risks where possible, and how we deploy them in a scalable way, avoiding the need for manual intervention as much as possible. We describe techniques that use standard features in the Django migration system, as well as a system we have developed to complement standard Django migrations. The techniques described should be generally applicable to most large Django installations.
