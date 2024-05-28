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

    // Manually set session URLs
    /*
    sessions = sessions.map(session => {
      const sessionData = session.data || session;
      if (sessionData.permalink) {
        sessionData.url = sessionData.permalink;
      } else {
        sessionData.url = `/talks/${sessionData.slug}/`;
      }

      return session;
    });
    */

    // Group sessions by date and time
    const sessionsByDateAndTime = sessions.reduce((acc, session) => {
      const sessionData = session.data || session;

      let dateObj = new Date(sessionData.datetime);
      let date = dateObj.toISOString().split('T')[0];
      let start = dateObj.toISOString();
      let end = sessionData.end_datetime;

      if (!acc[date]) {
        acc[date] = []
      }

      let slotKey = `${start}-${end}`;
      let slot = acc[date].find(slot => `${slot.start}-${slot.end}` === slotKey);

      if (!slot) {
        slot = {
          start: start,
          end: end,
          sessions: []
        };
        acc[date].push(slot);
      }

      slot.sessions.push(sessionData);

      return acc;
    }, {});

    // Sort sessions by start date and then end date
    for (let date in sessionsByDateAndTime) {
      sessionsByDateAndTime[date].sort((a, b) => {
        let startComparison = new Date(a.start) - new Date(b.start);
        if (startComparison !== 0) {
          return startComparison;
        } else {
          return new Date(a.end) - new Date(b.end);
        }
      });
    }

    return sessionsByDateAndTime;
  });
};
