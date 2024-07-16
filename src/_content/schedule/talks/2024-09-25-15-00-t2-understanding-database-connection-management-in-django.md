---
category: talks
datetime: 2024-09-25 15:00:00-04:00
end_datetime: 2024-09-25 15:25:00-04:00
permalink: /talks/understanding-database-connection-management-in-django/
presenter_slugs:
- richard-ackon
room: Online talks
tags:
- orm
title: Understanding Database Connection Management in Django
track: t2
---

Django provides reasonable defaults for how to manage database connections. But what happens when these defaults are not enough? How do the options provided by Django for connection management affect how you design your applications for scale? 

In this talk, we will discuss the following topics:
- Options for managing connections in Django
- How do database connections affect scaling
- Maxed out connections and how they affect application performance
- Why increasing database connections isn't always a great idea
- Connection pooling

This talk is for anyone who is not familiar with database connection management or is curious about what their options are when using Django.