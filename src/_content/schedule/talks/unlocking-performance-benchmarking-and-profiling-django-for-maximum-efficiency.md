---
category: talks
start_datetime: 2024-09-23 17:20:00-04:00
end_datetime: 2024-09-23 17:45:00-04:00
permalink: /talks/unlocking-performance-benchmarking-and-profiling-django-for-maximum-efficiency/
presenter_slugs:
- ron-maravanyika
room: Online talks
tags:
- performance
title: 'Unlocking Performance: Benchmarking and profiling Django for Maximum Efficiency'
track: t2
video_url: 'https://youtu.be/xpNaOsLNxx4'
---

In most cases performance issues are caused by a very small fraction of the application.  Identifying these bottlenecks can be a daunting task. Well, not anymore, we now have tools to easily identify these bottlenecks. In this talk we will talk about it all: the why, what and how to do profiling and benchmarking.

We will look at `django-silk` for profiling while for benchmarking we will be using the ever reliable `pytest-benchmark`. We will cover the basics and slowly move into seeing things like the actual raw query buried which is buried in Django. Lastly l will share tips on how to avoid over running your services while try to optimise. This talk is suitable for intermediate to senior developers, however junior developers can also benefit.
