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