---
category: talks
start_datetime: 2024-09-25 13:40:00-04:00
end_datetime: 2024-09-25 14:25:00-04:00
permalink: /talks/webrtc-with-django-channels-htmx-and-coturn/
presenter_slugs:
- ken-whitesell
room: Junior Ballroom
tags:
- async
- usecase
- frontend
- thirdparty
title: WebRTC with Django, Channels, HTMX, and coturn
video_url: 'https://youtu.be/8EJzcpw8i8s'
track: t0
---

Audio/Video conferencing has become standard in many areas for augmenting communications among individuals. Modern browsers facilitate this by including support for Web Real Time Communications (WebRTC).

WebRTC itself is a point-to-point protocol, which means that two browsers using this for a video call are talking directly to each other. But, before that can happen, the those browsers need to know that each other exists and are looking to establish this connection. Then they need to negotiate the parameters for the connection.

Then there are many network-related issues that can affect the ability for those two browsers to connect.  Things like firewalls and Network Address Translation (NAT) can affect how each side "sees" the other side, further complicating the situation.

All these issues have known solutions. The WebRTC APIs have matured to the point where they can be considered reasonably stable and reliable. It has become practical to incorporate these solutions in a Django-based website.

This session will discuss one implementation of a Django-based website that facilitates a group video conferencing system, using Channels as the signalling mechanism, HTMX for page-content management, and coturn as the NAT transveral and and gateway server.
