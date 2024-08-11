---
category: talks
start_datetime: 2024-09-24 16:50:00-04:00
end_datetime: 2024-09-24 17:15:00-04:00
permalink: /talks/fighting-homelessness-with-django/
presenter_slugs:
- benjamin-zags-zagorsky
room: Junior Ballroom
tags:
- usecase
title: Fighting Homelessness with Django
track: t0
---

In the outline below, each bullet point corresponds to roughly 1 minute of talk content

## Introduction
* Who am I
* Motivation
* Outline

## Brief Overview of Housing in Massachusetts
* Three programs
* ~230 housing agencies, 100k+ applicants
* Previously all paper, still needs to support paper

## What We Built
* Online application with dynamic questions
* Ranking waitlists for a vacancy and housing applicants
* Generation of screening letters
* Document uploads and storage for verification documents
* Recording determination of applicant claims
* Reports and data pipeline
* Migration of data from 230 organizations

## How We Built It
* Django model forms
* Django + Datatables
* Django + Vue integration
* Permissions framework
* Multi-organization support
* Async tasks

## Particular Challenges
* Efficient computation across clusters of linked models
* Duplicate application management
* Security features
* Accessibility features
* Translations
* Zero-downtime deployments
* Performance monitoring and optimizations
* Reports and data pipeline memory use
* Upgrading Python versions
