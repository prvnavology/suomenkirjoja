// Toggle Menu Functionaliy Start
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-icon").addEventListener("click", function () {
    document.body.classList.add("menuToggle");
  });

  document.querySelector(".close-icon").addEventListener("click", function () {
    document.body.classList.remove("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// AOS JS Start
AOS.init();
// AOS JS Start

// Accordion JS Start
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.icon');

    button.classList.toggle('active');

    if (content.style.height === '0px' || !content.style.height) {
      content.style.height = content.scrollHeight + 'px';
      content.style.opacity = '1';
      icon.textContent = '−';


      content.addEventListener('transitionend', function setHeightAuto() {
        content.style.height = 'auto';
        content.removeEventListener('transitionend', setHeightAuto);
      });
    } else {

      content.style.height = content.scrollHeight + 'px';

      content.offsetHeight;

      content.style.height = '0';
      content.style.opacity = '0';
      icon.textContent = '+';
    }
  });
});

// Accordion JS End

//Cookies JS Start
const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};
window.addEventListener('load', executeCodes);
//Cookies JS End


// Read More Functionality JS Start
document.querySelectorAll('.subpage-readmore-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var moreText = this.closest('.pages-cards-content').querySelector('.moretextt');

    if (moreText) {
      if (moreText.style.maxHeight) {
        moreText.style.maxHeight = null;
        this.textContent = "Lue lisää";
      } else {
        moreText.style.maxHeight = moreText.scrollHeight + "px";
        this.textContent = "Lue Vähemmän";
      }


      var expandedHeight = moreText.scrollHeight + "px";
      document.querySelectorAll('.pages-cards-content').forEach(function (content) {
        var otherText = content.querySelector('.moretextt');
        if (otherText !== moreText) {
          content.style.minHeight = expandedHeight;
        } else {
          content.style.minHeight = '';
        }
      });
    }
  });
});


// Read More Functionality JS end


const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});



