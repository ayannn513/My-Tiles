
// // animation
function animate(add, classes) {

  const observer_top = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(add);
      }
    });
  });

  const hiddenElements_top = document.querySelectorAll(classes);
  hiddenElements_top.forEach((el) => observer_top.observe(el));
}

animate('top_show', '.top_hidden');
animate('right_show', '.right_hidden');
animate('left_show', '.left_hidden');
// animate('bottom_show', 'bottom_hidden')


function information_toggle() {


  const cards = document.querySelectorAll('.cards_items');

  cards.forEach((card) => {
    const icon = card.querySelector('.toggle-icon');
    const info = card.querySelector('.cards_info');

    info.addEventListener('click', () => {
    
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove('active');
          otherCard.querySelector('.toggle-icon').src = "icons/plus-lg.svg";
        }
      });

      
      card.classList.toggle('active');
      icon.src = card.classList.contains('active')
        ? "icons/minus-lg.svg"
        : "icons/plus-lg.svg";
    });
  });
}

information_toggle()


function section3_toggle() {
  const s3_info = document.querySelectorAll(".about_cards")
  s3_info.forEach(info => {
    const i = info.querySelector(".toggle-icon");
    const p = info.querySelector(".cards_info")

    p.addEventListener("click", () => {
      s3_info.forEach((seccard) => {
        if (seccard !== info) {
          seccard.classList.remove("active")
          seccard.querySelector(".toggle-icon").src = "icons/plus-lg.svg";

        }
      })
      info.classList.toggle('active');
      i.src = info.classList.contains('active')
        ? "icons/minus-lg.svg"
        : "icons/plus-lg.svg";
    })

  });

}
section3_toggle()



document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hmburger');
  const closeButton = document.querySelector('.close-button');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  const openMenu = () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
    hamburgerButton.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    hamburgerButton.setAttribute('aria-expanded', 'false');
  };

  const checkWindowSize = () => {
    if (window.innerWidth <= 100) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  hamburgerButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  window.addEventListener('resize', checkWindowSize);


  checkWindowSize();
});


window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const section2 = document.getElementById("section2").offsetTop;

  if (window.scrollY >= section2 - 100) {
    navbar.classList.add("scrolled");
    navbar.classList.add("left_hidden");
    // navbar.classList.add("left_show");
  } else {
    navbar.classList.remove("scrolled");
    // navbar.classList.add("left_hidden");
    navbar.classList.add("left_show");
  }
});



const elements = document.querySelectorAll('.bottom_hidden');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('bottom_show');
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.carousel .slides'));



  let positions = ['lefts2', 'lefts1', 'centers', 'rights1', 'rights2'];

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove('lefts2', 'lefts1', 'centers', 'rights1', 'rights2');
      slide.classList.add(positions[i]);
    });
  }


 
  setInterval(() => {
    positions.unshift(positions.pop());
    updateSlides();
  }, 3000);

  updateSlides();
});

 
window.addEventListener("load", () => {

  const heading = document.getElementById("heading");
      heading.classList.add("start-bounce");

});
 
 
// window.addEventListener("load", () => {
//   const loader = document.getElementById("loading-overlay");

//   setTimeout(() => {
//     loader.style.opacity = "0";

//     setTimeout(() => {
//       loader.style.display = "none";
//     }, 200); 

//   setTimeout(() => {
//     loader.style.opacity = "0";

//     setTimeout(() => {
//       loader.style.display = "none";
//     }, 200); 

//   }, 300);
// });
 

//   }, 300);
// });
 

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-contented");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");

    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: link.getAttribute("href"),
      ease: "power3.out"
    });
  });
});


const elementss = document.querySelectorAll('.fade-in');

function showOnScroll() {
  elementss.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
