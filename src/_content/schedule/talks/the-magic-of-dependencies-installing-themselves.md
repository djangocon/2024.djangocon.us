---
category: talks
start_datetime: 2024-09-23 10:10:00-04:00
end_datetime: 2024-09-23 10:35:00-04:00
permalink: /talks/the-magic-of-dependencies-installing-themselves/
presenter_slugs:
- ilerioluwakiiye-abolade
room: Online talks
tags:
- python
- thirdparty
title: The Magic of Dependencies Installing Themselves
video_url: 'https://youtu.be/TRE7FNCCUJs'
track: t2
---

When you write a Python script that has dependencies, the standard has always been to use a separate file like requirements.txt or pyproject.toml (using Tom’s Obvious, Minimal Language format) for handling the dependencies from external libraries. To share these scripts that are dependent on external libraries or other versions of Python, the process becomes more complex since the receiver has no choice but to create a new virtual environment with all the necessary dependencies. It becomes even more cumbersome in educational settings or among collaborators, where people might have different levels of Python expertise.

With the introduction of PEP 723, we’ve brought simplicity to our code, as we can now embed dependencies directly in a single file script. In this talk, we will explore this new method that enhances our productivity by making it easier to share, deploy, and work with Python scripts, making working with Django closer to being seamless.
