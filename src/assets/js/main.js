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
