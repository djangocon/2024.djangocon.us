
let data = {
  layout: "post.html",
  permalink: "news/{{ page.fileSlug }}/"
};


if(process.env.NODE_ENV === "production") {
  data.date = "git Last Modified";
}

module.exports = data;

