import datetime
from typing import Optional, List, Literal

from pydantic import BaseModel
from slugify import slugify


class FrontmatterModel(BaseModel):
    """
    Our base class for our default "Frontmatter" fields.
    """

    date: datetime.datetime | None = None
    layout: str
    permalink: str | None = None
    published: bool = True
    redirect_from: list[str] | None = None
    redirect_to: str | None = None  # via the jekyll-redirect-from plugin
    sitemap: bool | None = None
    title: str

    class Config:
        extra = "allow"


class Job(FrontmatterModel):
    hidden: bool = False
    layout: str = "base"
    name: str
    title: str | None = None
    website: str
    website_text: str = "Apply here"


class Organizer(FrontmatterModel):
    github: str | None = None
    hidden: bool = False
    layout: str = "base"
    name: str
    photo_url: str | None = None
    slug: str | None = None
    title: str | None = None
    twitter: str | None = None
    website: str | None = None
    mastodon: str | None = None


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
    date: datetime  # YYYY-MM-DD HH:MM:SS +/-TTTT
    image: str | None = None
    layout: str | None = "post"
    slug: str | None = None
    tags: list[str] | None = []


class Presenter(FrontmatterModel):
    company: str | None = None
    github: str | None = None
    hidden: bool = False
    layout: str = "speaker-template"
    name: str
    override_schedule_title: str | None = None
    pronouns: str | None = None
    photo_url: str | None = None
    role: str | None = None
    slug: str | None = None
    title: str | None = None
    twitter: str | None = None
    website: str | None = None
    website_text: str = "Apply here"
    mastodon: str | None = None

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
    abstract: str | None = None
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
    end_date: datetime.datetime | None = None
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
    layout: str | None = "session-details"  # TODO: validate against _layouts/*.html
    presenter_slugs: list[str] | None = None
    presenters: list[dict] | None = None  # TODO: break this into a sub-type
    published: bool = False
    room: str | None = None
    schedule: str | None = None
    schedule_layout: str | None = None  # TODO: Validate for breaks, lunch, etc
    show_video_urls: bool | None = None
    slides_url: str | None = None
    summary: str | None = None
    tags: list[str] | None = None
    talk_slot: str | None = "full"
    track: str | None = None
    video_url: str | None = None

    def __init__(self, **data):
        super().__init__(**data)

        # keep group in sync with category to work around a Jekyll
        # Collection bug that set category equal to the collection's
        # subfolder...
        if self.group != self.category:
            self.group = self.category


def migrate_mastodon_handle(*, handle: str) -> str:
    if not handle.startswith("@"):
        return handle

    username, domain = handle[1:].split("@")
    return f"https://{domain}/@{username}"
