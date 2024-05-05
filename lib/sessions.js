module.exports = function(config) {
  config.addCollection("sessionsByDateAndTime", function(collectionApi) {
    // Get all sessions
    let sessions = collectionApi.getFilteredByGlob("src/_content/schedule/talks/*.md");

    // Filter out hidden sessions
    sessions = sessions.filter(session => !session.data.hidden);

    // Group sessions by date and time
    const sessionsByDateAndTime = sessions.reduce((acc, session) => {
      let date = new Date(session.data.datetime).toISOString().split('T')[0];
      let time = new Date(session.data.datetime).toISOString();

      if (!acc[date]) {
        acc[date] = []
      }

      let slot = acc[date].find(slot => slot.start === time);

      if (!slot) {
        slot = {
          start: time,
          end: session.data.end_datetime,
          sessions: []
        };
        acc[date].push(slot);
      }

      slot.sessions.push(session.data);

      return acc;
    }, {});

    return sessionsByDateAndTime;
  });
};
