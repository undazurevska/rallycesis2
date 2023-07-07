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
        
        changeImage(language);
      });
  }
  
  // Function to change the language
  function changeLanguage(language) {
    loadContent(language);
    document.documentElement.classList.remove('english');
    document.documentElement.classList.remove('latvian');
    document.documentElement.classList.add(language);
  }
  
  // Function to change the image based on the language
  function changeImage(language) {
    var imageElement = document.getElementById('home')
    if (language === 'en') {
      imageElement.style.backgroundImage = 'url("assets/img/bg-en.jpg")';
    } else if (language === 'lv') {
      imageElement.style.backgroundImage = 'url("assets/img/bg-lv.jpg")';
    }
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
  
  
  // Set the date we're counting down to
  var countDownDate = new Date("Aug 5, 2023 18:00:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("timer").innerHTML = days + "  :  " + hours + "  :  " 
      + minutes + "  :  " + seconds;
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "00:00:00";
      }
    
  }, 1000);
  
  /*Table
  const images = [];
  
  const image1 = new Image();
  image1.src = "path/to/image1.png";
  images.push(image1);
  
  const tableData = [
      { title: "Table 1", data: [[,"Hermanis Elviss <br> Veilands Gatis", "Škoda Fabia R5", "LRC1", "45:43.1"], [2.,"Neikšāns Jānis <br> Jesse Anrijs", "Ford Fiesta NRC Evo2", "LRC1", "45:55.73"]] },
      { title: "Table 2", data: [[10,11,12], [13,14,15], [16,17,18]] }
    ];
  
    function generateTableHTML(title, data) {
      let html = `<h6>${title}</h6><table>`;
      for (let row of data) {
        html += "<tr>";
        for (let cell of row) {
          html += `<td>${cell}</td>`;
        }
        html += "</tr>";
      }
      html += "</table>";
      return html;
    }
  
   /* const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const tableContainer = document.getElementById("table-container");
    
    button1.addEventListener("click", () => {
      const tableHTML = generateTableHTML(tableData[0].title, tableData[0].data);
      tableContainer.innerHTML = tableHTML;
    });
    
    button2.addEventListener("click", () => {
      const tableHTML = generateTableHTML(tableData[1].title, tableData[1].data);
      tableContainer.innerHTML = tableHTML;
    }); */
    
  //Email form
  /*const emailForm = document.querySelector('#emailModal form');
  
  emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailForm.querySelector('#inputEmail').value;
    const subject = emailForm.querySelector('#inputSubject').value;
    const message = emailForm.querySelector('#inputMessage').value;
    // Send email using your preferred method, such as an AJAX request or a server-side script
    // Close the modal
    const emailModal = document.querySelector('#emailModal');
    const bootstrapModal = bootstrap.Modal.getInstance(emailModal);
    bootstrapModal.hide();
  });
  
  
  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')
  
  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })
  */
  
  