module.exports = function(config) {
  /*
    Setup collections
    https://www.11ty.dev/docs/collections/
  */
  config.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_content/posts/*.md");
  });

  config.addCollection("places", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_content/places/*.md");
  });

  config.addCollection("presenters", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_content/presenters/*.md").sort(function(a, b) {
        let nameA = a.data.name.toUpperCase();
        let nameB = b.data.name.toUpperCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
    }).filter(item => !item.data.hidden);
  });

  config.addCollection("organizers", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_content/organizers/*.md").sort(function(a, b) {
        let nameA = a.data.name.toUpperCase();
        let nameB = b.data.name.toUpperCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
    }).filter(item => !item.data.hidden);
  });

  config.addCollection("sponsorsByLevel", function(collectionApi) {
    const sponsors = collectionApi.getFilteredByGlob("src/_content/sponsors/*.md");
    const visibleSponsors = sponsors.filter(sponsor => !sponsor.data.hidden);
    const levelOrder = [
      "Diamond",
      "Platinum",
      "Gold",
      "Silver",
      "Bronze",
      "Coffee",
      "Opportunity Grants",
      "Community",
    ];

    const sponsorsByLevel = visibleSponsors.reduce((acc, sponsor) => {
      const level = sponsor.data.level;
      if (!acc[level]) {
        acc[level] = [];
      }
      acc[level].push(sponsor);
      return acc;
    }, {});

    // Sort sponsors within each level by date
    Object.keys(sponsorsByLevel).forEach(level => {
      sponsorsByLevel[level].sort((a, b) => new Date(a.data.date) - new Date(b.data.date));
    });

    // Sort levels based on predefined order
    const sortedSponsorsByLevel = {};
    levelOrder.forEach(level => {
      if (sponsorsByLevel[level]) {
        sortedSponsorsByLevel[level] = sponsorsByLevel[level];
      }
    });

    return sortedSponsorsByLevel;
  });
}
