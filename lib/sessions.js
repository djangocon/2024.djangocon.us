const fs = require('fs');
const yaml = require('yaml');

module.exports = function(config) {
  config.addCollection("sessionsByDateAndTime", function(collectionApi) {
    // Get all sessions
    let sessions = collectionApi.getFilteredByGlob("src/_content/schedule/{tutorials,talks,sprints}/*.md");

    // Read and parse manual.yaml
    const manualContent = fs.readFileSync('src/_content/schedule/manual.yaml', 'utf8');
    const manualData = yaml.parse(manualContent);

    // Merge manual sessions with existing sessions
    sessions = sessions.concat(manualData);

    // Filter out hidden sessions
    sessions = sessions.filter(session => !(session.data?.hidden || session.hidden));

    // Group sessions by date and time
    const sessionsByDateAndTime = sessions.reduce((acc, session) => {
      const sessionData = session.data || session;
      let date = new Date(sessionData.datetime).toISOString().split('T')[0];
      let time = new Date(sessionData.datetime).toISOString();

      if (!acc[date]) {
        acc[date] = []
      }

      let slot = acc[date].find(slot => slot.start === time);

      if (!slot) {
        slot = {
          start: time,
          end: sessionData.end_datetime,
          sessions: []
        };
        acc[date].push(slot);
      }

      slot.sessions.push(sessionData);

      return acc;
    }, {});

    return sessionsByDateAndTime;
  });
};
