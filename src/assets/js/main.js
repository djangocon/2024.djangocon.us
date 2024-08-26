/*
  Mobile site navigation
*/
const navToggler = document.getElementById('NavToggler');
const siteNav = document.querySelector('.site-nav');
const allMenus = siteNav.querySelectorAll('[data-menu-list]');

navToggler.addEventListener('click', () => {
  const siteMain = document.getElementById('SiteMain');
  const siteFooter = document.getElementById('SiteFooter');

  if (siteNav.classList.contains('hidden')) {
    siteNav.classList.replace('hidden', 'flex');
  } else {
    siteNav.classList.replace('flex', 'hidden');
  }

  /*
    Hide the main content and footer when the mobile menu is open.
    This allows the menu to be scrollable and limits the DOM for screen readrs.
  */
  siteMain.classList.toggle('hidden');
  siteFooter.classList.toggle('hidden');
});

const navMenuTriggers = document.querySelectorAll('[data-menu-trigger]');

navMenuTriggers.forEach(trigger => {
  trigger.addEventListener('click', (evt) => {
    evt.preventDefault();
    const target = trigger.nextElementSibling;

    navMenuTriggers.forEach((trigger) => {
      trigger.setAttribute('aria-expanded', 'false');
    });

    allMenus.forEach((menu) => {
      if (menu !== target) {
        menu.classList.replace('flex', 'hidden');
      }
    });

    if (target.classList.contains('hidden')) {
      target.classList.replace('hidden', 'flex');
      trigger.setAttribute('aria-expanded', 'true');
    } else {
      target.classList.replace('flex', 'hidden');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
});

// Close all menus when the user clicks outside
document.addEventListener('click', function (evt) {
  if (!siteNav.contains(evt.target) && navToggler !== evt.target) {
    // Close all menus if you click outside of menu
    allMenus.forEach((menu) => {
      menu.classList.replace('flex', 'hidden');
    });

    navMenuTriggers.forEach((trigger) => {
      trigger.setAttribute('aria-expanded', 'false');
    });
  }
});

/*
  Show sessions and schedule in local timezone
*/

function convertToLocalTime(datetime) {
  // Create a new Date object from the datetime
  const date = new Date(datetime);

  // Format the date to a locale string with options
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true // Set to false if you prefer 24-hour format
  };

  // Convert the date to the user's local timezone and format it
  const localTimeString = date.toLocaleTimeString(undefined, options);

  return localTimeString;
}

function covertScheduleToLocalTime() {
  // Convert date ranges
  const timeSpanElems = document.querySelectorAll('[data-local-time]');

  timeSpanElems.forEach((timeSpan) => {
    const timeElems = timeSpan.querySelectorAll('time');
    const convertedTimes = [];

    timeElems.forEach((time) => {
      const dateTime = time.getAttribute('datetime');
      const localTime = convertToLocalTime(dateTime);

      convertedTimes.push(localTime);
    });

    const timeRender = `<span class="lowercase"><time>${convertedTimes[0]}</time> to <time>${convertedTimes[1]}</time> <span class="text-xs">(local time)</span></span>`;
    timeSpan.insertAdjacentHTML('afterend', timeRender);
  });
}
