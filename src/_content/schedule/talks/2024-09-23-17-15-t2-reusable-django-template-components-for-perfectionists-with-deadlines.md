---
accepted: true
category: talks
datetime: 2024-09-23 17:15:00-04:00
end_datetime: 2024-09-23 17:40:00-04:00
group: talks
layout: session-details
permalink: /talks/reusable-django-template-components-for-perfectionists-with-deadlines/
presenter_slugs:
- hernan-lozano
room: Online talks
sitemap: true
slug: reusable-django-template-components-for-perfectionists-with-deadlines
tags:
- frontend
title: Reusable Django Template Components for Perfectionists with Deadlines
track: t2
---

We pay great attention to how to write composable python code (with inheritance, decorators, modules, namespaces, etc). But when it comes to architecting the templates of your website, this is often overlooked, which rapidly degenerates in tons of copy&paste of html, css and javascript.
Some might say that this is what React or Vue (et al) are all about and already solve, but having to render HTML on the client can increase the complexity of the application (introducing build steps, another language, more dependencies, etc).
  
Writing reusable and composable UI components can be achieved using the good 'ol django templates, with the help of some libraries to fill in the gaps (like django-components, wagtail blocks, crispy-forms with their templates, tailwindcss) that we will explore and suggest as a possible solution.