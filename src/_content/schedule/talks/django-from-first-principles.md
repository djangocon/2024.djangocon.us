---
category: talks
start_datetime: 2024-09-23 16:20:00-04:00
end_datetime: 2024-09-23 16:45:00-04:00
permalink: /talks/django-from-first-principles/
presenter_slugs:
- eric-matthes
room: Junior Ballroom
tags:
- internals
title: 'Django from first principles'
track: t0
---

Most Django tutorials begin by telling people to run `manage.py startproject`, followed by `manage.py startapp`. While this creates a project structure that's helpful to experienced Django developers, it throws a bunch of unnecessary complexity in front of someone new to building web apps. After running just these two commands, there are about 12 files to make sense of!

In this talk we'll skip the `startproject` and `startapp` commands. Instead we'll start with a single file that serves a home page. We'll then build up a simple but non-trivial project, only adding complexity as it's needed. By the time the project is finished, we'll have a structure that's similar to what `startproject` and `startapp` generate. But, audience members will understand exactly why every part of the project exists, because it was only created out of necessity.

This talk is not just for beginners. People new to Django will come away with an understanding of why typical Django projects are structured the way they are, and won't have to wonder about the complexity that these two commands generate. People who've had some experience with Django will understand the projects they've already been working with better. People who are quite experienced with Django will hopefully see the framework from a beginner's eyes, in a different way.