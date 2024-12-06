---
category: talks
start_datetime: 2024-09-24 15:30:00-04:00
end_datetime: 2024-09-24 16:15:00-04:00
permalink: /talks/how-to-design-and-implement-extensible-software-with-plugins/
presenter_slugs:
- simon-willison
room: Junior Ballroom
tags:
- infrastructure
title: How to design and implement extensible software with plugins
video_url: 'https://youtu.be/IdTHaCo8gKY'
track: t0
---

This talk will cover:

- When to consider adding plugin support to your project
- Understanding [Pluggy](https://pluggy.readthedocs.io/), the Python world's most mature plugin mechanism and possibly the most effective plugin framework in any language
- How [entrypoints](https://packaging.python.org/en/latest/specifications/entry-points/) enable simply installing a new Python package to register it as an installed plugin
- How to effectively design your plugin hooks: the ways in which your software can be customized by plugins
- Traps to avoid in implementing plugins
- Documentation! How to ensure potential authors have everything they need to start writing plugins

I'll illustrate the talk with examples of different plugin patterns I have tried in my own software.
