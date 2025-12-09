// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const sidebarThemeToggle = document.getElementById('sidebarThemeToggle');
    const body = document.body;
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        body.classList.toggle('light-mode', savedTheme === 'light');
    } else if (!prefersDark) {
        body.classList.add('light-mode');
    }
    
    function toggleTheme() {
        body.classList.toggle('light-mode');
        const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Add animation effect to main toggle
        if (themeToggle) {
            themeToggle.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                themeToggle.style.transform = 'rotate(0)';
            }, 300);
        }
        
        // Add animation effect to sidebar toggle
        if (sidebarThemeToggle) {
            sidebarThemeToggle.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                sidebarThemeToggle.style.transform = 'rotate(0)';
            }, 300);
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (sidebarThemeToggle) {
        sidebarThemeToggle.addEventListener('click', toggleTheme);
    }

    // Typing Animation
    const typingText = document.getElementById('typing-text');
    const words = [
        'a Engineer',
        'a Developer',
        'a Debugger',
        'a Stack Overflow Surfer',
        'a Digital Nomad',
        'a Lifelong Learner',
        'Farhan Ali Bhat'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function typeEffect() {
        if (!typingText) return;
        
        const currentWord = words[wordIndex];
        
        if (!isDeleting && !isPaused) {
            // Typing forward
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentWord.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                }, 2000); // Pause for 2 seconds at the end
            }
        } else if (isDeleting && !isPaused) {
            // Deleting
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        const randomSpeed = typingSpeed + Math.random() * 50;
        setTimeout(typeEffect, randomSpeed);
    }
    
    // Start typing animation
    setTimeout(typeEffect, 1000);

    // Mobile Code Background
    const mobileCodeBg = document.getElementById('mobile-code-bg');
    const codeSnippets = [
        `function develop() {\n  return cleanCode\n    + bestPractices\n    + creativity;\n}`,
        `const farhan = {\n  skills: ["React", "Node"],\n  passion: "Coding",\n  location: "Kashmir"\n};`,
        `import { creativity } from 'mind';\nimport { skill } from 'experience';\n\nexport default class Developer {\n  build() {\n    return magic();\n  }\n}`,
        `// Solving problems\nwhile (problem) {\n  const solution = think();\n  implement(solution);\n}`,
        `const stack = [\n  "React.js",\n  "Node.js",\n  "MongoDB",\n  "Express",\n  "JavaScript"\n];`,
        `app.get('/success', (req, res) => {\n  const hardWork = true;\n  const consistency = true;\n  res.json({ result: hardWork && consistency });\n});`
    ];
    
    function createMobileCodeBackground() {
        if (!mobileCodeBg) return;
        
        // Clear existing code snippets
        mobileCodeBg.innerHTML = '';
        
        // Create multiple code snippets
        for (let i = 0; i < 6; i++) {
            const snippet = document.createElement('div');
            snippet.className = 'code-snippet';
            snippet.textContent = codeSnippets[i % codeSnippets.length];
            
            // Random position (avoid center area for mobile)
            const top = 10 + Math.random() * 70;
            const left = 5 + Math.random() * 70;
            
            // Random rotation
            const rotation = Math.random() * 10 - 5;
            
            snippet.style.cssText = `
                position: absolute;
                top: ${top}%;
                left: ${left}%;
                transform: rotate(${rotation}deg);
                opacity: ${0.3 + Math.random() * 0.3};
                font-size: ${10 + Math.random() * 4}px;
            `;
            
            mobileCodeBg.appendChild(snippet);
        }
    }
    
    // Scroll effect for code background
    function handleCodeBackgroundScroll() {
        if (!mobileCodeBg || window.innerWidth > 992) return;
        
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const scrollPercentage = scrollPosition / windowHeight;
        
        // Reduce opacity as user scrolls
        const opacity = Math.max(0, 0.05 - scrollPercentage * 0.05);
        mobileCodeBg.style.opacity = opacity;
        
        // Hide completely after scrolling past hero section
        if (scrollPosition > windowHeight * 0.8) {
            mobileCodeBg.style.display = 'none';
        } else {
            mobileCodeBg.style.display = 'block';
        }
    }
    
    // Initialize mobile code background
    if (window.innerWidth <= 992) {
        createMobileCodeBackground();
    }

    // Hamburger Menu & Sidebar
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarClose = document.querySelector('.sidebar-close');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    
    function openSidebar() {
        if (sidebar && overlay) {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Animate hamburger
            if (hamburger) {
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            }
        }
    }
    
    function closeSidebar() {
        if (sidebar && overlay) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset hamburger
            if (hamburger) {
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }
    
    // Hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', openSidebar);
    }
    
    // Close sidebar
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
    
    // Sidebar links click
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
    
    // Close sidebar on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });

    // Active navigation on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const allSidebarLinks = document.querySelectorAll('.sidebar-nav a');

    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        // Update main nav
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Update sidebar nav
        allSidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success';
            successMsg.innerHTML = `
                <div class="success-content">
                    <i class="fas fa-check-circle"></i>
                    <h3>Message Sent!</h3>
                    <p>Thank you for your message. I'll get back to you soon.</p>
                </div>
            `;
            
            document.body.appendChild(successMsg);
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
                contactForm.reset();
            }, 3000);
            
            // In real implementation, you would send data to your server here
            console.log('Form submitted:', data);
        });
    }

    // Download CV function
    window.downloadCV = function() {
        // Create download animation
        const downloadAnim = document.createElement('div');
        downloadAnim.className = 'download-animation';
        downloadAnim.innerHTML = `
            <div class="download-content">
                <div class="loader">
                    <i class="fas fa-download"></i>
                </div>
                <p>Downloading Resume...</p>
            </div>
        `;
        
        document.body.appendChild(downloadAnim);
        
        setTimeout(() => {
            downloadAnim.remove();
            
            // Create and trigger download
            const link = document.createElement('a');
            link.href = 'resume.pdf'; // Replace with actual resume path
            link.download = 'Farhan_Ali_Bhat_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Close sidebar if open
            closeSidebar();
        }, 1500);
    };

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-item, .project-card, .hobby-card, .contact-card').forEach(el => {
        observer.observe(el);
    });

    // Terminal typing animation
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize terminal typing effect
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Account for fixed header
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close sidebar if open
                closeSidebar();
            }
        });
    });

    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(5px)';
        });
    });

    // Add project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('img');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });

    // Window resize handling
    window.addEventListener('resize', function() {
        // Recreate code snippets if switching to mobile view
        if (window.innerWidth <= 992 && mobileCodeBg) {
            createMobileCodeBackground();
            mobileCodeBg.style.display = 'block';
        } else if (mobileCodeBg) {
            // Hide on desktop
            mobileCodeBg.style.display = 'none';
        }
        
        // Close sidebar when resizing to desktop
        if (window.innerWidth > 992) {
            closeSidebar();
        }
        
        // Update active nav
        updateActiveNav();
    });

    // Add window scroll events
    window.addEventListener('scroll', function() {
        updateActiveNav();
        handleCodeBackgroundScroll();
    });

    // Initial calls
    updateActiveNav();
    handleCodeBackgroundScroll();

    // Add fade-in animation to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Add CSS for success messages
const style = document.createElement('style');
style.textContent = `
    .form-success {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card);
        padding: 30px;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow);
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .success-content {
        text-align: center;
    }
    
    .success-content i {
        color: var(--success);
        font-size: 48px;
        margin-bottom: 15px;
    }
    
    .success-content h3 {
        margin-bottom: 10px;
        color: var(--text-primary);
    }
    
    .success-content p {
        color: var(--text-secondary);
    }
    
    .download-animation {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card);
        padding: 30px;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow);
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .download-content {
        text-align: center;
    }
    
    .loader {
        width: 60px;
        height: 60px;
        border: 3px solid var(--border-color);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .loader i {
        color: var(--primary);
        font-size: 24px;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -60%); }
        to { opacity: 1; transform: translate(-50%, -50%); }
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .animate-in {
        animation: fadeUp 0.6s ease forwards;
    }
    
    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);