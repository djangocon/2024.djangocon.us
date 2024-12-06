---
category: talks
start_datetime: 2024-09-25 12:50:00-04:00
end_datetime: 2024-09-25 13:35:00-04:00
permalink: /talks/django-celery-a-love-story-of-async-proportions/
presenter_slugs:
- hugo-bessa
room: Online talks
tags:
- celery
title: 'Django & Celery: A love story of async proportions'
track: t2
video_url: 'https://youtu.be/NCXtXDn4ppk'
---

### Django: A Framework for perfectionists with deadlines
1. Batteries included: Security, Authentication, Authorization, Administration, robust and mature ORM, etc.
2. Opinionated: Django defines the right path for doing things with it. And this open doors for building extensions.
3. Strong Community: Open source packages, events, meetups, active development of the main framework

### Django's performance issue is a thing. We need to be careful with:
1. Avoiding N+1s
2. Caching
3. Database indexes
4. Data denormalization
5. Running operations in the background

### Why running operations in the background?
* Each Django process loads the framework core
* It's expensive to have too many processes
* Requests hold one Django process each while being processed
* Requests should be processed quickly so we don't hold a process for too long
* We need to give feedback to the user quickly, so they can move forward with other operations

### What is Celery?
Asynchronous task queue or job queue which is based on distributed message passing

### Why Celery?
1. Distributed: It separates async tasks execution from your application
2. Fast: Celery has a very small boilerplate and executes tasks REALLY fast
3. Integrated: You can write Celery tasks within your application, with access to models, services, functions, classes, etc

### Celery 💘 Django
1. Documentation: We have dedicated docs for integrating them both
2. Django Settings: You can configure Celery from Django settings, not extra boilerplate
3. Django within tasks: Access to Django ORM and other tools on Celery tasks
4. Community: There are packages for enhancing the integration

### How does it look like?
Real world example

### What async tasks can be used for?
* Delegate long lasting jobs
* Execute remote API calls
* Prepare and cache values
* Spread bulk database insertions over time
* Execute recurring jobs

### How does it work under the hood:
1. Django uses Celery client to queue a message on the Broker
2. Celery watches the Broker queue
3. Celery marks a task as started so other workers don't pick it
4. Celery marks a task as succeeded
5. Celery send the result to the Results Backend
6. Django may read the result from the Results Backend or not
**Disclaimer:** these steps may vary depending on your configuration.


### Tough love 💔: As in every good love story, it isn't always rainbows and butterflies.
* All connections between a service and the other may fail
* Concurrency becomes your enemy
* Failures may be harder to handle as they aren't sync anymore
* Issues that only happens in production
* Tasks that never finish
* Infinite retries
* Conflicting operations
* Task runs more than once
* Unbalanced queues
* Periodic tasks that are queues again before the previous one starts
* Outdated data

### We're going to focus on these four problems:
1. Outdated data
3. Error feedback
2. Duplicate runs
4. Conflicting ops

### Outdated data
* Sending complex data as parameters to a Celery task may result in conflicts because we cannot ensure the data doesn't change between the task being schedule and its execution.
* We must, as much as possible, pass ids and retrieve the most up-to-date data in the scope of the task.

### Duplicate runs
* Depending of your Celery setup and task configuration, it may not be guaranteed that the task runs only once:
  - Multiple workers may pick the same task at the same time
  - A task may be interrupted and requeued

* So we have to ensure:
  - Atomicity
  - Idempotence

### Complex feedback loops for errors
* User may receive a success message from the request but the whole operation may still fail.
* We need to develop flows that take this possibility into consideration and give the user a feedback of this error.
* We may also need to undo successful operations run by the web service.

### Conflicting operations
* While a task haven't still run another operation is triggered by the user. This operation conflicts with the one that is still pending.
* Consider the following use cases:
  1. User can add notes
  2. User can delete a note
  3. User can bulk create copies of a note

#### Example of problematic interaction: 
1. User creates a Note
2. User creates 10 copies of the note, this runs in a background task
3. User deletes the original note before the task to copy the 10 notes runs
4. Task runs, but the original note isn't available anymore so it cannot be copied

#### There are many solutions to this:
* Implementing soft delete on the note so it's available even after delete
* Canceling pending tasks before deleting
* Locking notes with pending operations

### Couples therapy pt1 (or some tips that help the relationship to flow)
* Will retry tasks? use exponential backoffs
* Tasks shouldn't raise exceptions: handle all of them and send reports
* Monitoring is essential, celery-flower can help
* ALWAYS_EAGER makes your tasks synchronous and can help on debugging and development
* RDB is a remote debugger, it can help debug celery tasks

### Couples therapy pt2 (knowing the boundaries of the relationship)
* Celery is excellent for asynchronous tasks and for doing simple jobs. For complex workflows it may not be very reliable, there are open issues for that, and many complaints of lost tasks and unpredictable behaviors.
* Long running tasks may be problematic. Ideally split the task into smaller ones or use a different tool.
* Monitoring tools are very limited. You may need to implement some monitoring yourself. Ex.: queues heartbeat.
