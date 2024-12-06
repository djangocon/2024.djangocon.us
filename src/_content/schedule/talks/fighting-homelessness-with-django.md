---
category: talks
start_datetime: 2024-09-24 16:50:00-04:00
end_datetime: 2024-09-24 17:15:00-04:00
permalink: /talks/fighting-homelessness-with-django/
presenter_slugs:
- benjamin-zags-zagorsky
room: Junior Ballroom
tags:
- usecase
title: Fighting Homelessness with Django
video_url: 'https://youtu.be/qzrDOveNim8'
track: t0
---

My company built CHAMP, the online application for state-aided subsidized housing for the state of Massachusetts.  We did it in Django.  This site is used to find housing for thousands of low-income and homeless applicants a year.  The site handles over 10,000 monthly users at all times of day.  We've supported it in production for over five years, and deployed major new features continuously throughout that time.

In this talk, we'll cover the best tricks of Django we used to build the site, as well as the biggest challenges we faced and how we solved them.  This includes:

* Using Django with Vue
* Keeping the site running fast despite high user load and large data volumes
* Managing duplicate applications in the system
* Regularly replicating gigabytes of data to a data warehouse
* Migrating data from 230 organizations into the system
* Zero-downtime deployments
* And more!
