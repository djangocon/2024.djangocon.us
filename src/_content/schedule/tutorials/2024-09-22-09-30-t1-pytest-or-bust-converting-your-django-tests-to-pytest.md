---
category: tutorials
datetime: 2024-09-22 09:30:00-04:00
end_datetime: 2024-09-22 13:00:00-04:00
permalink: /tutorials/pytest-or-bust-converting-your-django-tests-to-pytest/
presenter_slugs:
- melanie-arbor
room: Tutorial Track B
tags:
- testing
title: 'pytest or Bust: Converting Your Django Tests to pytest'
track: t1
---

## Why

The power and utility of Python’s built-in testing framework is formidable. Simultaneously, the readability, flexibility, and extensibility of pytest is so compelling, and its bar to entry so low that it’s worth taking the time and energy to learn to write—and rewrite—your tests with pytest.

The difference between unittest-style tests and pytest-style tests is small enough to not feel completely foreign, but large enough that it’s worth giving it unique attention as you embark on the effort.

## How

First, we’ll look at an existing Django application, what it does, and how it’s currently tested.

Next, we’ll figure out how to run our existing unittest-style tests with pytests—no rewrites necessary! We’ll just see what pytest has to offer as a test runner. 

Then, we’ll write some brand new tests—both in existing test classes, and with new test classes—using pytest. We can start adding tests with pytest without ripping anything apart.

Finally, we’ll come back and rewrite our existing tests using pytest instead of unittest. To do this, we’ll also jump into the land of pytest’s fixtures; the data that we’d normally put in a `setUp` and/or `tearDown`. A lot of the magic (both good and bad) of pytest is in those fixtures.

## Who

If you’re a fan of testing your Django apps (of course you are!), and most of your tests have been either completely unitttest-style or a mashup, this tutorial is a great way to solidify your next-level testing plan.

If you know the concept of testing but haven’t started a consistent practice, this tutorial will help you craft a clear vision of how to structure your tests, create your test data, write your tests, and read your assertions. 

You’re already a Pytest superfan? Well, come hang out and see what tips and tricks I use! There’s always value in a good, old fashioned knowledge swap.