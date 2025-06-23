export function kmTracking() {

  console.log('Tracking is here!!!!!!!!!');
  console.group('Tracking');


  let click_link = document.querySelectorAll('a[href^="mailto:"]');
          
  click_link.forEach(function (item) {
    console.log('click_link', item);
    item.addEventListener('click', function (e) {
      _paq.push(['trackEvent', 'Kontakt', 'Kontaktaufnahme Prio', 'Mail-Link']);
    });
  });

  let click_link_tobias = document.querySelectorAll('a[href^="mailto:tobias"]');

  click_link_tobias.forEach(function (item) {
    console.log('click_link_tobias', item);
    item.addEventListener('click', function (e) {
      _paq.push(['trackEvent', 'Kontakt', 'Kontaktaufnahme Prio', 'Mailto-Tobias']);
    });
  });


  let click_link_anja = document.querySelectorAll('a[href^="mailto:anja"]');

  click_link_anja.forEach(function (item) {
    console.log('click_link_anja', item);
    item.addEventListener('click', function (e) {
      _paq.push(['trackEvent', 'Kontakt', 'Kontaktaufnahme Prio', 'Mailto-Anja']);
    });
  });


  let click_link_tel = document.querySelectorAll('a[href^="tel:"]');

  click_link_tel.forEach(function (item) {
    console.log('click_link_tel', item);
    item.addEventListener('click', function (e) {
      _paq.push(['trackEvent', 'Kontakt', 'Kontaktaufnahme Prio', 'Tel-Link']);
    });
  });
    


  let click_link_contactform = document.querySelectorAll('.powermail_form_1 .powermail_submit');

  click_link_contactform.forEach(function (item) {
    console.log('click_link_contactform', item);
    item.addEventListener('click', function (e) {
      _paq.push(['trackEvent', 'Kontakt', 'Kontaktaufnahme Prio', 'Kontaktformular']);
    });
  });
        

  let click_link_jobsform = document.querySelectorAll('.powermail_form_2 .powermail_submit');

  click_link_jobsform.forEach(function (item) {
    console.log('click_link_jobsform', item);
    item.addEventListener('click', function (e) {
      _paq.push(['trackEvent', 'Bewerbung', 'Bewerbung Prio', 'Bewerbungsformular']);
    });
  });

  console.groupEnd();
}