// Skills Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                bar.classList.add('animated');
            }
        });
    };
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Add hover effects to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to skill items
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(99, 102, 241, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add typing effect to skill percentages
    const skillPercentages = document.querySelectorAll('.skill-percentage');
    
    skillPercentages.forEach(percentage => {
        const finalValue = percentage.textContent;
        const numericValue = parseInt(finalValue);
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50; // 50 steps
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                percentage.textContent = Math.round(currentValue) + '%';
            }, 40);
        }
    });
    
    // Add intersection observer for category animations
    const categories = document.querySelectorAll('.skill-category');
    
    const categoryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    categories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        categoryObserver.observe(category);
    });
    
    // Add floating animation to category icons
    const categoryIcons = document.querySelectorAll('.category-icon');
    
    categoryIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out infinite`;
        icon.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Add CSS for floating animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(floatStyle);
    
    // Add progress bar glow effect
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
        bar.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
        });
        
        bar.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Add skill category hover effects
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-primary)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-secondary)';
        });
    });
});
