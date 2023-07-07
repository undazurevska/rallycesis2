// Function to save the selected language
function saveLanguagePreference(language) {
  localStorage.setItem('language', language);
}

// Function to load the saved language preference
function loadLanguagePreference() {
  return localStorage.getItem('language');
}

// Function to load translated content
function loadContent(language) {
  fetch("js/translated.json")
    .then(response => response.json())
    .then(data => {
  const elements = [
    'nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5', 'nav-6', 'nav-7',
    'tickets', 'ticket-text', 'timer-h2', 'hist-text2', 'hist-text3',
    'hist-text4', 'hist-text5', 'hist-text', 'news-heading-text',
    'news-text', 'news-text2', 'news-text3', 'news-text4', 'news-text5', 'news-text6', 'more', 'read-more', 'read-more2',
    'read-more3', 'read-more4', 'read-more5', 'read-more6', 'follow-text', 'sponsor-text', 'sponsor-text2', 'sponsor-text3',
    'sponsor-text4', 'sponsor-text5', 'sponsor-text6', 'sponsor-text7',
    'footer-q-text', 'footer-contact-text', 'media', "media-text", "media-text2", "media-text3", "media-text4", "rally-cesis", "safety", "info", "prog",
    'prog-text', 'ticket-points', 'news-ticket-text', 'news-ticket-text2', 'news-ticket-text3', "news-reg-text", "news-reg-text2", "news-reg-text3", "news-reg-text4", "news-reg-text5", "news-button",
    'information', 'info-footer-text'
  ];
      const currentPageElements = elements.filter(element => document.getElementById(element));

      currentPageElements.forEach(element => {
        document.getElementById(element).textContent = data[language][element];
      });

      // Save the selected language when loading content
      saveLanguagePreference(language);

      // Change the image based on the language
      
    });
}

// Function to change the language
function changeLanguage(language) {
  loadContent(language);
  document.documentElement.classList.remove('english');
  document.documentElement.classList.remove('latvian');
  document.documentElement.classList.add(language);
}

// Load saved language preference or default language
var savedLanguage = loadLanguagePreference();
if (savedLanguage) {
  loadContent(savedLanguage);
} else {
  loadContent('lv'); // Set default language
}

// Load saved language preference or default language
var savedLanguage = loadLanguagePreference();
if (savedLanguage) {
  loadContent(savedLanguage);
} else {
  loadContent('lv'); // Set default language
}


window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link .nav-link2'),
    );
    document.addEventListener('click', function(event) {
     
    });
}); 

// Pop Function
function cardPop(card) {
    card.classList.toggle('pop');
  }

