const fs = require('fs');
const yaml = require('yaml');

module.exports = function(config) {
  config.addCollection("sessionsByDateAndTime", function(collectionApi) {
    // Get all sessions, including those manually created in the manual.yaml file.
    // Combine them together into a single listing for processing.
    let sessions = collectionApi.getFilteredByGlob("src/_content/schedule/{tutorials,talks,sprints}/*.md");
    const manualContent = fs.readFileSync('src/_content/schedule/manual.yaml', 'utf8');
    const manualData = yaml.parse(manualContent);
    sessions = sessions.concat(manualData);

    // Filter out any sessions that are marked as hidden
    sessions = sessions.filter(session => !(session.data?.hidden || session.hidden));

    const sessionsByDateAndTime = sessions.reduce((acc, session) => {
      const sessionData = session.data || session;

      // Process the start and end dates to ensure they are in the correct format
      let startDateObj = new Date(sessionData.start_datetime);
      let startDate = startDateObj.toISOString().split('T')[0];
      let start = startDateObj.toISOString();

      let endDateObj = new Date(sessionData.end_datetime);
      let end = endDateObj.toISOString();

      if (!acc[startDate]) {
        acc[startDate] = [];
      }

      let slotKey = `${start}-${end}`;
      let slot = acc[startDate].find(slot => `${slot.start}-${slot.end}` === slotKey);

      if (!slot) {
        slot = {
          start: start,
          end: end,
          sessions: []
        };
        acc[startDate].push(slot);
      }

      slot.sessions.push(sessionData);

      return acc;
    }, {});

    // Sort the dates in the resulting object
    const sortedSessionsByDateAndTime = Object.keys(sessionsByDateAndTime)
    .sort((a, b) => new Date(a) - new Date(b))
    .reduce((sortedAcc, date) => {
      sortedAcc[date] = sessionsByDateAndTime[date];
      return sortedAcc;
    }, {});


    for (let date in sortedSessionsByDateAndTime) {
      sessionsByDateAndTime[date].forEach(slot => {
        // Sort sessions within each slot by start date, then end date,
        // then track alphabetically
        slot.sessions.sort((a, b) => {
          let startComparison = new Date(a.start_datetime) - new Date(b.start_datetime);
          if (startComparison !== 0) return startComparison;
          let endComparison = new Date(a.end_datetime) - new Date(b.end_datetime);
          if (endComparison !== 0) return endComparison;
          return a.track.localeCompare(b.track); // Assuming 'track' is the property to sort by
        });
      });

      // Sort slots by start date and then end date
      sessionsByDateAndTime[date].sort((a, b) => {
        let startComparison = new Date(a.start) - new Date(b.start);
        if (startComparison !== 0) {
          return startComparison;
        } else {
          return new Date(a.end) - new Date(b.end);
        }
      });
    }

    return sortedSessionsByDateAndTime;
  });

  config.addCollection("talks", function(collectionApi) {
    let sessions = collectionApi.getFilteredByGlob("src/_content/schedule/talks/*.md");
    sessions = sessions.filter(session => !(session.data?.hidden || session.hidden));
    sessions.sort((a, b) => {
      const aDatetime = new Date(a.data?.state_datetime || a.start_datetime);
      const bDatetime = new Date(b.data?.state_datetime || b.state_datetime);
      return aDatetime - bDatetime;
    });

    return sessions;
  });

  config.addCollection("tutorials", function(collectionApi) {
    let sessions = collectionApi.getFilteredByGlob("src/_content/schedule/tutorials/*.md");
    sessions = sessions.filter(session => !(session.data?.hidden || session.hidden));
    sessions.sort((a, b) => {
      const aDatetime = new Date(a.data?.state_datetime || a.state_datetime);
      const bDatetime = new Date(b.data?.state_datetime || b.state_datetime);
      return aDatetime - bDatetime;
    });

    return sessions;
  });
};
