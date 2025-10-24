// NavBar & InfoBar scroll functions

let lastScrollTopInfo = 0;
const infoBar = document.querySelector('.info-bar');

window.addEventListener('scroll', () => {
    const scrollTopInfo = window.scrollY;

    if (scrollTopInfo > lastScrollTopInfo) {
        infoBar.classList.add('hidden');
    } else {
        infoBar.classList.remove('hidden');
    }

    lastScrollTopInfo = scrollTopInfo;
});

let lastScrollTopNav = 0;
const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTopNav = window.scrollY;

    if (scrollTopNav > lastScrollTopNav) {
        navBar.classList.add('hidden');
    } else {
        navBar.classList.remove('hidden');
    }

    lastScrollTopNav = scrollTopNav;
});

// scroll from the links functions

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.querySelectorAll(".link1");
const link2 = document.querySelectorAll(".link2");
const link3 = document.querySelectorAll(".link3");
const link4 = document.querySelectorAll(".link4");
const link5 = document.querySelectorAll(".link5");
const link6 = document.querySelectorAll(".link6");
const link7 = document.getElementById("link7");
const link8 = document.getElementById("link8");

link1.forEach(link => {
    link.addEventListener('click', () =>{
        scrollToElement('.container');
    });
})
link2.forEach(link => {
    link.addEventListener('click', () =>{
        scrollToElement('.container',1);
    });
});
link3.forEach(link => {
    link.addEventListener('click', () =>{
        scrollToElement('.container',2);
    });
});
link4.forEach(link => {
    link.addEventListener('click', () =>{
        scrollToElement('.container',3);
    });
});
link5.forEach(link => {
    link.addEventListener('click', () =>{
        scrollToElement('.container',4);
    });
});
link6.forEach(link => {
    link.addEventListener('click', () =>{
        scrollToElement('.container',4);
    });
});


link7.addEventListener('click', () =>{
    scrollToElement('.container',1);
});
link8.addEventListener('click', () =>{
    scrollToElement('.container',4);
});


// nav underline function 


const allLinks = document.querySelectorAll('.nav-links .link a');
const sections = document.querySelectorAll('.container');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        if (sectionTop <= window.innerHeight / 2.30 && sectionBottom >= window.innerHeight / 3) {
            current = section.getAttribute('id');
        } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight -200) {
            current = section.getAttribute('id');
        }
    });
    allLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.sectionName === current) {
        link.classList.add('active');
    }
    });
});


// side-bar menu function


const menuOpen = document.getElementById('menu-open');
const menuClose = document.querySelectorAll('.menu-close');
const sidebar = document.querySelector('.sidebar');

menuOpen.addEventListener('click', () => sidebar.style.right = '0');

menuClose.forEach(button => {
    button.addEventListener('click', () => sidebar.style.right = '-100%');
})


// overlay functions

const overlayOpenButtons = document.querySelectorAll('.openOverlay');
const overlayCloseButton = document.querySelector('.overlayClose');
const overlay = document.querySelector('.overlay');
const itemTitle = document.querySelector('.overlay .top h4');
const content = document.querySelector('.overlay .content p');

overlayOpenButtons.forEach(button => {
    overlayOpenButtons.forEach(button => {
        button.addEventListener('click', () => {
            const closestP = button.closest('div')?.querySelector('p');
            const closestT = button.closest('div')?.querySelector('h4');

            content.innerHTML = closestP?.dataset.fullhtml || closestP?.innerHTML || '';
            itemTitle.innerHTML = closestT?.innerHTML || '';

            document.body.style.pointerEvents = 'none';
            document.body.style.overflow = 'hidden';
            overlay.style.pointerEvents = 'auto';

            overlay.style.display = 'flex';
            requestAnimationFrame(() => { 
                overlay.style.opacity = '1';
                overlay.classList.add('active');
            });
        });
    });
});

overlayCloseButton.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.classList.remove('active');

    document.body.style.pointerEvents = 'all';
    document.body.style.overflow = 'auto';
    overlay.style.pointerEvents = 'auto';

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 400);
});

//

function addEllipsisOnOverflow() {
  const paragraphs = document.querySelectorAll('.item .content p');
  
  paragraphs.forEach(p => {
    if (!p.dataset.fulltext) {
      p.dataset.fulltext = p.innerText; 
      p.dataset.fullhtml = p.innerHTML;  
    }
    
    let text = p.dataset.fulltext;
    p.innerText = text; 

    if (p.scrollHeight > p.clientHeight) {
      while (p.scrollHeight > p.clientHeight && text.length > 0) {
        text = text.slice(0, -1); 
        p.innerText = text + '...';
      }
    }
  });
}

window.addEventListener('load', addEllipsisOnOverflow);
window.addEventListener('resize', addEllipsisOnOverflow);

window.addEventListener('load', () => {
    const div = document.querySelectorAll('.our-services .item .content')
    setTimeout(() => {
            div.forEach(div => {
                div.classList.remove('no-hover');
        })
    }, 800);
});

window.addEventListener('resize', () => {
    const div = document.querySelectorAll('.our-services .item .content')
    div.classList.add('no-hover');
    setTimeout(() => {
            div.forEach(div => {
                div.classList.remove('no-hover');
        })
    }, 800);
});