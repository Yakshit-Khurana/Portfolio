var typed=new Typed(".text",{
    strings:["Full Stack Developer","Web Developer","Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
//  document.addEventListener('DOMContentLoaded', function () { ... }) to ensure the JavaScript runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active')); // Remove active class from all links
            this.classList.add('active'); // Add active class to the clicked link
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    // Function to update active link
    function setActiveLink() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 5) {
                const currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === currentId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    // Initial active link
    setActiveLink();
    // Add scroll event listener
    window.addEventListener('scroll', setActiveLink);
});

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.contact .contact-form form');

//     form.addEventListener('submit', function () {
//         const formData = new FormData(form);
//         const name = formData.get('Name');
//         const email = formData.get('Email');
//         const message = formData.get('Message');

//         console.log('Form submitted with data:');
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Message:', message);
//     });
// });

