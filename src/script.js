// =========================================================================================================for smooth scrolling

// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);
//       const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - document.querySelector('nav').offsetHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     });
//   });

// =========================================================================================================for smooth scrolling

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Check if the link is for internal navigation (starts with #)
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - document.querySelector('nav').offsetHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Otherwise, allow the default behavior (for external links or full page navigation)
  });
});

// =========================================================================================================for adding tailwind on li items

// const home_btn = document.querySelector("#home_btn");
// const friends_btn = document.querySelector("#friends_btn");

// home_btn.addEventListener("click", ()=>{
//   home_btn.classList.remove("hover:bg-gray-200", "rounded-md", "cursor-pointer");
//   home_btn.classList.add("border-b-4", "border-blue-800");
// })

// friends_btn.addEventListener("click", ()=>{
//   friends_btn.classList.remove("hover:bg-gray-200", "rounded-md", "cursor-pointer");
//   friends_btn.classList.add("border-b-4", "border-blue-800");
// })

// =========================================================================================================for adding tailwind on li items 2

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll("#nav_list li");

  navItems.forEach(item => {
    const svg = item.querySelector("svg");

    item.addEventListener('click', (event) => {
      event.preventDefault();

      // Remove the active classes from all nav items
      navItems.forEach(li => {
        li.classList.remove("bg-blue-600", "rounded-md", "opacity-100");
        li.classList.add("hover:bg-light_primary_hover", "hover:rounded-md", "opacity-60", "dark:hover:bg-dark_primary_hover");
        li.querySelector("svg").classList.remove("fill-white");
      });

      // Add the active classes to the clicked nav item
      item.classList.add("bg-blue-600", "rounded-md", "opacity-100");
      item.classList.remove("hover:bg-light_primary_hover", "hover:rounded-md", "opacity-60", "dark:hover:bg-dark_primary_hover");
      svg.classList.add("fill-white");
    });
  });
});


// =========================================================================================================for left sidebar

// document.addEventListener('DOMContentLoaded', function () {
//   const menu = document.getElementById('menu');
//   const menuList = document.getElementById('menu-list');
//   const toggleButton = document.getElementById('toggle-button');

//   const collapsedHeight = 100;  // adjust based on your preference
//   const expandedHeight = menuList.scrollHeight;

//   // Set initial state
//   menu.style.height = `${collapsedHeight}px`;

//   toggleButton.addEventListener('click', function () {
//       if (menu.style.height === `${collapsedHeight}px`) {
//           menu.style.height = `${expandedHeight}px`;
//           toggleButton.textContent = 'See less';
//       } else {
//           menu.style.height = `${collapsedHeight}px`;
//           toggleButton.textContent = 'See more';
//       }
//   });
// });


// =========================================================================================================for left sidebar

let moreItems = document.getElementById('more-items');
document.getElementById('see-more').addEventListener('click', function (event) {
  event.preventDefault();
  if (moreItems.classList.contains('hidden')) {
    moreItems.classList.remove('hidden');
    this.innerHTML = '<a href="#" class="p-2 gap-3 flex items-center w-full h-13 hover:bg-gray-200 dark:hover:bg-dark_primary_hover hover:rounded-md "><svg class="size-9 rounded-full bg-gray-300 dark:bg-dark_secondaryBG dark:fill-darkfill p-2" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg><p>See less</p></a>';
  } else {
    moreItems.classList.add('hidden');
    this.innerHTML = '<a href="#" class="p-2 gap-3 flex items-center w-full h-13 hover:bg-gray-200 dark:hover:bg-dark_primary_hover hover:rounded-md "><svg class="size-9 rounded-full bg-gray-300 dark:bg-dark_secondaryBG dark:fill-darkfill p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg><p>See more</p></a>';
  }
});


// =========================================================================================================for stories


const stories_container = document.getElementById("stories-container");
const left_btn = document.getElementById("left-btn");
const right_btn = document.getElementById("right-btn");
const stories_container_first_li = document.getElementById('stories-container-first-li');

left_btn.addEventListener("click", () => {
  stories_container.scrollLeft -= 380;
  
  if (stories_container.scrollLeft <= 380) {
    left_btn.classList.add('hidden');
    left_btn.classList.remove('flex');
    
    stories_container_first_li.classList.remove('hidden');
    stories_container_first_li.classList.add('flex');
  }
  right_btn.classList.remove('hidden');
  right_btn.classList.add('flex');
  
});

right_btn.addEventListener("click", () => {
  stories_container.scrollLeft += 380;
  
  stories_container_first_li.classList.add('hidden');
  stories_container_first_li.classList.remove('flex');
  
  if (stories_container.scrollWidth - stories_container.clientWidth - stories_container.scrollLeft <= 380) {
    right_btn.classList.add('hidden');
    right_btn.classList.remove('flex');
  }
  left_btn.classList.remove('hidden');
  left_btn.classList.add('flex');
  
});

// ========================================================================================================= dark mode toggler

// icons
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// theme vars
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// icon toggling
const iconToggle = () =>{
  moonIcon.classList.toggle('display-none');
  sunIcon.classList.toggle('display-none');
}

// initial theme check
const themeCheck = () =>{
  if(userTheme === 'dark' || (!userTheme && systemTheme)){
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('display-none');
    return
  }
  sunIcon.classList.add('display-none');
}

// manual theme switch
const themeSwitch = () =>{
  if(document.documentElement.classList.contains('dark')){
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'Light');
    iconToggle();
    return
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
}

// call theme switch on clicking buttons
sunIcon.addEventListener('click', themeSwitch);
moonIcon.addEventListener('click', themeSwitch);

// invoke theme check on initial load
themeCheck();

// ========================================================================================================= 