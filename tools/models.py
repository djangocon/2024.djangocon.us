import datetime as pydatetime  # rename is needed because of yaml conflict
import json
from pathlib import Path
from typing import Literal
import zoneinfo

from pydantic import BaseModel
from slugify import slugify

from . import constants


class FrontmatterModel(BaseModel):
    """
    Our base class for our default "Frontmatter" fields.
    """

    layout: str | None = None
    permalink: str | None = None
    published: bool = True
    redirect_from: list[str] | None = None
    redirect_to: str | None = None  # via the jekyll-redirect-from plugin
    sitemap: bool | None = None
    title: str

    class Config:
        extra = "allow"


class Social(BaseModel):
    github: str | None = None
    website: str | None = None
    mastodon: str | None = None
    twitter: str | None = None
    bluesky: str | None = None
    instagram: str | None = None


class Organizer(FrontmatterModel):
    hidden: bool = False
    layout: str = "base"
    name: str
    photo_url: str | None = None
    slug: str | None = None
    title: str | None = None
    social: Social | None = None


class Page(FrontmatterModel):
    description: str | None = None
    heading: str | None = None
    hero_text_align: str | None = None  # homepage related
    hero_theme: str | None = None  # homepage related
    layout: str | None = None
    testimonial_img: str | None = None  # homepage related
    testimonial_img_mobile: str | None = None  # homepage related
    title: str | None = None


class Post(FrontmatterModel):
    author: str | None = None
    category: str | None = "General"  # TODO: build a list of these
    categories: list[str] | None = None
    date: pydatetime.datetime  # YYYY-MM-DD HH:MM:SS +/-TTTT
    image: str | None = None
    layout: str | None = "post"
    slug: str | None = None
    tags: list[str] | None = []


class Presenter(FrontmatterModel):
    company: str | None = None
    hidden: bool = False
    name: str
    override_schedule_title: str | None = None
    pronouns: str | None = None
    photo: str | None = None
    role: str | None = None
    slug: str | None = None
    social: Social | None = None

    def __init__(self, **data):
        super().__init__(**data)

        # if slugs are blank default them to slugify(name)
        if not self.slug:
            self.slug = slugify(self.name)

        # if permalink is blank, let's build a new one
        if not self.permalink:
            self.permalink = f"/presenters/{self.slug}/"

        if self.mastodon and self.mastodon.startswith("@"):
            self.mastodon = migrate_mastodon_handle(handle=self.mastodon)
            print(f"🚜 converting {self.mastodon=}")


class Schedule(FrontmatterModel):
    accepted: bool = False
    category: Literal[
        "break",
        "lunch",
        "rooms",
        "social-event",
        "sprints",
        "talks",
        "tutorials",
    ]
    difficulty: str | None = "All"
    end_datetime: pydatetime.datetime | None = None
    group: None | (
        Literal[
            "break",
            "lunch",
            "rooms",
            "social-event",
            "sprints",
            "talks",
            "tutorials",
        ]
    ) = None

    image: str | None = None
    layout: str | None = "session-details"
    presenter_slugs: list[str] | None = None
    room: str | None = None
    show_video_urls: bool | None = None
    slides_url: str | None = None
    start_datetime: pydatetime.datetime | None
    tags: list[str] | None = None
    track: str | None = None
    video_url: str | None = None

    def __init__(self, **data):
        super().__init__(**data)

        # TODO check with Michael if we still need both group and category
        if self.group != self.category:
            self.group = self.category


class ManualScheduleEntry(BaseModel):
    datetime: pydatetime.datetime
    end_datetime: pydatetime.datetime
    group: Literal[
        "break",
        "lunch",
        "rooms",
        "social-event",
        "sprints",
        "talks",
        "tutorials",
    ]
    permalink: str
    room: str
    title: str
    abstract: str


def migrate_mastodon_handle(*, handle: str) -> str:
    if not handle.startswith("@"):
        return handle

    username, domain = handle[1:].split("@")
    return f"https://{domain}/@{username}"
