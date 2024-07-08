import frontmatter
import typer
import yaml

import constants
import models


app = typer.Typer()


@app.command()
def generate_manual_schedule_data(
    output_path: str = "src/_content/schedule/manual.yaml",
):
    """Take the manual schedule entries and write them to YAML"""
    output_file = constants.REPO_ROOT / output_path
    items = [
        schedule_item.model_dump(exclude_unset=True)
        for schedule_item in models.MANUAL_SCHEDULE_ENTRIES
    ]
    data = yaml.dump(items)
    output_file.write_text(data)


if __name__ == "__main__":
    app()
