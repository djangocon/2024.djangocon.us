---
category: talks
start_datetime: 2024-09-23 13:40:00-04:00
end_datetime: 2024-09-23 14:25:00-04:00
permalink: /talks/an-opinionated-guide-to-modern-django-forms/
presenter_slugs:
- josh-thomas
room: Grand Ballroom III
tags:
- internals
- frontend
title: An Opinionated Guide to Modern Django Forms
video_url: 'https://youtu.be/BeWGag58PVA'
track: t1
---

Django forms have experienced a significant renaissance within the Django community, after years of being what felt like an afterthought. Recent releases to Django have brought major improvements to built-in form templating and rendering. Instead of writing APIs to support forms rendered by the JS framework of the week, you can now use Django forms to render dynamic, interactive, responsive forms using only the batteries provided by Django, various third-party Django packages, and a handful of small, focused JavaScript utility libraries. And if you're willing to do a little bit of the leg work yourself, you can even get by without those third-party Django packages.

In recent years, web development has started to see a shift away from complex JavaScript-heavy architectures toward more streamlined, HTML-centric approaches. Technologies like HTMX and Unpoly.js enable SPA-like experiences through server-rendered HTML, pairing nicely with Django’s template language. Similarly, libraries like Alpine.js and Stimulus enhance static HTML with dynamic behaviors inline, eliminating the need for comprehensive frameworks. Additionally, CSS frameworks like Tailwind CSS adopt a utility-first approach, simplifying the creation of  maintainable CSS. 

This shift towards an HTML-centric approach to building web applications is complemented nicely by the recent improvements to Django forms. By leveraging these new capabilities, Django forms can now be used to render forms that are more easily maintainable, more responsive, more accessible, and -- to the end user -- just as interactive as one built using one of the many JS frameworks.

By the end of this talk, attendees will have a deeper understanding of the power and potential of Django forms, equipped with the knowledge to implement them effectively in their projects.

### Outline

- Introduction to Django forms, including a quick historical overview of where they have come
- Exploration of a few new Django form features: template-based form rendering and `as_field_group`
- Styling forms, fields, and errors using modern CSS features, with a focus on Tailwind CSS
- Dynamic behavior with minimal JavaScript, with a focus on Alpine.js
- Inline validation using AJAX, with a focus on HTMX
- Useful third-party Django form packages and why you may not need them anymore
- Hands-on demonstration of a simple form using all of the above

This talk will be suitable for anyone who has a basic understanding of Django.
