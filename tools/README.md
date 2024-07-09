# Python tools for 2024 schedule generation

## Getting started

1. Download and install Python 3.12 (or newer)
2. `cd /path/to/repo/root/`
3. `python3.12 -m venv .venv`
4. `pip install --upgrade pip setuptools wheel pip-tools`
5. `pip install -r tools/requirements.txt`

### If you're going to be taking screenshots of pages
1. `playwright install-deps`
2. `playwright install`

## Update dependencies

1. `cd /path/to/repo/root`
2. `source .venv/bin/activate`
3. `pip-compile tools/requirements.in`
4. `git add requirements.txt`
5. Commit and push your changes

## Import the schedule from Pretalx

1. Create your schedule in pretalx. This requires marking accepted talks as confirmed
2. Release the schedule in pretalx.
3. Export both the speakers (only with confirmed talks is fine) and sessions (only confirmed ones) as JSON, using all available fields.
4. Clone the [pretalx-api-export](https://github.com/djangocon/pretalx-api-import) repo and move over to that directory
5. Using Python 3.12 or newer, create a virtual environment and `pip install -r requirements.in`
6. Import the speakers: `python main.py presenters /path/to/speakers.json --output-folder /path/to/year.djangocon.us/`
7. Import the schedule: `python main.py main /path/to/sessions.json --output-folder /path/to/year.djangocon.us/`
8. Add and commit the result in `src/_content/`

## Generate the list of talks blog post

Before you start, edit `tools/generate_speaker_blog_post.py` and adjust
the template bits to get the year and conference info right.

1. After importing the schedule, `cd /path/to/year.djangocon.us/tools/`
2. `python generate_speaker_blog_post.py`
3. Copy the output into `src/_content/posts/announcing-lineup.md`
4. Add and commit it
