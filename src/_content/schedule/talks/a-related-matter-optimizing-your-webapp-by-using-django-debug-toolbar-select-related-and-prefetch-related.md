---
category: talks
start_datetime: 2024-09-23 14:30:00-04:00
end_datetime: 2024-09-23 14:55:00-04:00
permalink: /talks/a-related-matter-optimizing-your-webapp-by-using-django-debug-toolbar-select-related-and-prefetch-related/
presenter_slugs:
- christopher-adams
room: Junior Ballroom
tags:
- performance
- thirdparty
title: 'A Related Matter: Optimizing your webapp by using django-debug-toolbar, select_related(),
  and prefetch_related()'
video_url: 'https://youtu.be/iKn5VWD9l6E'
track: t0
---

What happens in an HTTP request-response cycle is often difficult to understand. Optimizing database queries is a crucial aspect of web development, yet it often remains shrouded in mystery for many beginners. By attending this talk, attendees will gain practical insights into how to leverage django-debug-toolbar to inspect an HTTP request-response cycle. By revealing and fixing pathological queries, developers can improve application performance and user experience. The talk will cover indexing, select_related, prefetching, and other optimization strategies.

During the session, I will guide attendees through the following key points:
1. Understanding Query Execution: Exploring the anatomy of a QuerySet, focusing on immutability, lazy evaluation, and the fact that a QuerySet is not a query.
2. Introduction to django-debug-toolbar: An overview of what django-debug-toolbar is and how it can be integrated into Django projects.
3. Identifying Pathological Queries: Techniques for using django-debug-toolbar to identify slow or inefficient database queries within an HTTP request.
4. Strategies for Optimization: Practical tips and strategies for optimizing identified queries, including indexing, select_related, prefetching, and other optimization.
5. Real-World Examples: Illustrative examples and case studies demonstrating the impact of query optimization on application performance.

This talk is ideal for beginners in Django development who are looking to deepen their understanding of query optimization and improve the performance of their Django applications. Attendees should have a basic familiarity with Django concepts such as models and basic database design, but no prior experience with query optimization is required.
