---
category: talks
start_datetime: 2024-09-23 15:30:00-04:00
end_datetime: 2024-09-23 16:15:00-04:00
permalink: /talks/passkeys-your-password-free-future/
presenter_slugs:
- ryan-hiebert
room: Grand Ballroom III
tags:
- security
title: 'Passkeys: Your password-free future'
track: t1
video_url: 'https://youtu.be/JSUn4HUMCsI'
---

We'll start at the beginning, with a simple username and password login form, and explore various approaches that the web has taken to try to solve it.

We'll explore briefly OpenID (remember that?), Federation, Single Sign-on, Magic Links, and Login Codes, and why each of them has usability drawbacks that often mean that the username and password, especially combined with a password manager, just can't be beat for its user experience.

Passkeys, however, are the better option that we've been waiting for. There are still some important trade-offs, but are a much better fit for consumer applications, with a user experience that is quite comparable to using a password manager.

They can be a simple login button, or they can augment a username and password dialog very similarly to a password manager's autocomplete. Finally, we have a way that gives a good user experience and doesn't have us storing a potentially shared secret!

Now that we've motivated passkeys, we'll explore how we can integrate them into Django. We'll see how we can use them to log into the Django admin. Then we'll see if we can disable them entirely for Django, and how we can bootstrap our superuser account creation, so that our new Django project never has a username and password form at all!

Along the way, we'll also cover some important challenges that can come up with Passkeys in development and how to address them, including dealing with localhost, and remote development environments like Codespaces.
