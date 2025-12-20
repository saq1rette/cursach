document.addEventListener('DOMContentLoaded', function() {
    if (typeof anime === 'undefined') {
        console.log('Anime.js не загружена, используются базовые анимации');
        initBasicAnimations();
    } else {
        console.log('Anime.js загружена, инициализируем продвинутые анимации');
        initAnimeAnimations();
    }
    
    function initBasicAnimations() {
        initHoverEffects();
        initScrollAnimations();
    }
    
    function initAnimeAnimations() {
        animateCommonElements();
        
        if (document.querySelector('.home-page')) {
            animateHomePage();
        }
        if (document.querySelector('.chronology-page')) {
            animateChronologyPage();
        }
        if (document.querySelector('.bio-page')) {
            animateBioPage();
        }
        if (document.querySelector('.influence-page')) {
            animateInfluencePage();
        }
        
        initHoverEffects();
        initScrollAnimations();
    }
    
    function animateCommonElements() {
        // Анимация заголовков
        if (document.querySelector('.one')) {
            anime({
                targets: '.one',
                translateY: [-30, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutCubic'
            });
        }
        
        if (document.querySelector('.two')) {
            anime({
                targets: '.two',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 100,
                easing: 'easeOutCubic'
            });
        }
        
        if (document.querySelector('.three')) {
            anime({
                targets: '.three',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 200,
                easing: 'easeOutCubic'
            });
        }
        
        // Анимация кнопок
        if (document.querySelector('.block-2-1')) {
            anime({
                targets: '.block-2-1, .block-2-2',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 300,
                easing: 'easeOutBack'
            });
        }
        
        // Анимация специальных элементов
        if (document.querySelector('.hr')) {
            anime({
                targets: '.hr',
                translateY: [-20, 0],
                opacity: [0, 1],
                duration: 700,
                easing: 'easeOutCubic'
            });
        }
        
        if (document.querySelector('.cl')) {
            anime({
                targets: '.cl',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 700,
                delay: 200,
                easing: 'aseOutCubic'
            });
        }
    }
    
    function animateHomePage() {
        console.log('Инициализация анимаций для главной страницы');
        
        // Анимация хронологических пар
        const chronologyPairs = document.querySelectorAll('.chronology-pair');
        if (chronologyPairs.length > 0) {
            chronologyPairs.forEach((pair, index) => {
                anime({
                    targets: pair,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    delay: index * 200,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        // Анимация карточек хронологии
        const chronologyCards = document.querySelectorAll('.chronology-card');
        if (chronologyCards.length > 0) {
            chronologyCards.forEach((card, index) => {
                anime({
                    targets: card,
                    translateX: index % 2 === 0 ? [-50, 0] : [50, 0],
                    opacity: [0, 1],
                    duration: 700,
                    delay: index * 100 + 300,
                    easing: 'easeOutBack'
                });
            });
        }
        
        // Анимация годов
        const timelineYears = document.querySelectorAll('.timeline-year');
        if (timelineYears.length > 0) {
            timelineYears.forEach(year => {
                anime({
                    targets: year,
                    scale: [0.5, 1],
                    opacity: [0, 1],
                    duration: 600,
                    delay: 400,
                    easing: 'easeOutBack'
                });
            });
        }
    }
    
    function animateChronologyPage() {
        console.log('Инициализация анимаций для страницы хронологии');
        
        // Последовательная анимация пар
        const chronologyPairs = document.querySelectorAll('.chronology-pair');
        if (chronologyPairs.length > 0) {
            chronologyPairs.forEach((pair, index) => {
                // Задержка для каждого блока
                const delay = index * 300;
                
                // Анимация года
                const year = pair.querySelector('.timeline-year');
                if (year) {
                    anime({
                        targets: year,
                        scale: [0, 1],
                        opacity: [0, 1],
                        duration: 600,
                        delay: delay,
                        easing: 'easeOutBack'
                    });
                }
                
                // Анимация карточек слева
                const leftCard = pair.querySelector('.chronology-card:not(.right)');
                if (leftCard) {
                    anime({
                        targets: leftCard,
                        translateX: [-100, 0],
                        opacity: [0, 1],
                        duration: 700,
                        delay: delay + 100,
                        easing: 'easeOutCubic'
                    });
                }
                
                // Анимация карточек справа
                const rightCard = pair.querySelector('.chronology-card.right');
                if (rightCard) {
                    anime({
                        targets: rightCard,
                        translateX: [100, 0],
                        opacity: [0, 1],
                        duration: 700,
                        delay: delay + 200,
                        easing: 'easeOutCubic'
                    });
                }
            });
        }
        
        // Пульсация годов
        if (typeof anime !== 'undefined') {
            const years = document.querySelectorAll('.timeline-year');
            years.forEach(year => {
                anime({
                    targets: year,
                    scale: [1, 1.1, 1],
                    duration: 2000,
                    loop: true,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(500, {start: 2000})
                });
            });
        }
    }
    
    function animateBioPage() {
        console.log('Инициализация анимаций для страницы биографии');
        
        // Анимация секций биографии
        const bioSections = document.querySelectorAll('.audio-section, .video-section');
        if (bioSections.length > 0) {
            bioSections.forEach((section, index) => {
                anime({
                    targets: section,
                    translateY: [80, 0],
                    opacity: [0, 1],
                    duration: 900,
                    delay: index * 300,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        // Анимация карточек
        const bioCards = document.querySelectorAll('.audio-card, .video-card');
        if (bioCards.length > 0) {
            bioCards.forEach((card, index) => {
                anime({
                    targets: card,
                    scale: [0.9, 1],
                    opacity: [0, 1],
                    duration: 700,
                    delay: index * 200 + 200,
                    easing: 'easeOutBack'
                });
            });
        }
        
        // Анимация изображений в биографии
        const bioImages = document.querySelectorAll('.bio-image-text img');
        if (bioImages.length > 0) {
            bioImages.forEach((img, index) => {
                anime({
                    targets: img,
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    duration: 800,
                    delay: index * 150 + 400,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        // Анимация текстовых блоков
        const textContents = document.querySelectorAll('.text-content');
        if (textContents.length > 0) {
            textContents.forEach((text, index) => {
                anime({
                    targets: text,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 600,
                    delay: index * 150 + 500,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        // Анимация заметок
        const consequenceNotes = document.querySelectorAll('.consequence-note');
        if (consequenceNotes.length > 0) {
            consequenceNotes.forEach((note, index) => {
                anime({
                    targets: note,
                    translateX: [30, 0],
                    opacity: [0, 1],
                    duration: 500,
                    delay: index * 100 + 700,
                    easing: 'easeOutCubic'
                });
            });
        }
    }
    
    function animateInfluencePage() {
        console.log('Инициализация анимаций для страницы влияния');
        
        // Анимация заголовка влияния
        const influenceHeader = document.querySelector('.influence-header');
        if (influenceHeader) {
            anime({
                targets: influenceHeader,
                scale: [0.95, 1],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutCubic'
            });
        }
        
        // Анимация вступления
        const influenceIntro = document.querySelector('.influence-intro');
        if (influenceIntro) {
            anime({
                targets: influenceIntro,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 700,
                delay: 200,
                easing: 'easeOutCubic'
            });
        }
        
        // Анимация пар влияния с эффектом появления по цепочке
        const influencePairs = document.querySelectorAll('.influence-pair');
        if (influencePairs.length > 0) {
            influencePairs.forEach((pair, pairIndex) => {
                // Общая задержка для каждой пары
                const pairDelay = pairIndex * 500;
                
                // Анимация года
                const year = pair.querySelector('.timeline-year');
                if (year) {
                    anime({
                        targets: year,
                        scale: [0, 1.2, 1],
                        opacity: [0, 1],
                        duration: 600,
                        delay: pairDelay,
                        easing: 'easeOutBack'
                    });
                }
                
                // Анимация левой карточки
                const leftCard = pair.querySelector('.influence-card:not(.right)');
                if (leftCard) {
                    anime({
                        targets: leftCard,
                        translateX: [-150, 0],
                        opacity: [0, 1],
                        duration: 800,
                        delay: pairDelay + 200,
                        easing: 'easeOutCubic'
                    });
                }
                
                // Анимация стрелки
                const arrowLine = pair.querySelector('.arrow-line');
                const arrowHead = pair.querySelector('.arrow-head');
                if (arrowLine && arrowHead) {
                    anime({
                        targets: [arrowLine, arrowHead],
                        scaleX: [0, 1],
                        opacity: [0, 1],
                        duration: 600,
                        delay: pairDelay + 400,
                        easing: 'easeOutCubic'
                    });
                }
                
                // Анимация правой карточки
                const rightCard = pair.querySelector('.influence-card.right');
                if (rightCard) {
                    anime({
                        targets: rightCard,
                        translateX: [150, 0],
                        opacity: [0, 1],
                        duration: 800,
                        delay: pairDelay + 600,
                        easing: 'easeOutCubic'
                    });
                }
            });
        }
        
        // Анимация заметок последствий
        const consequenceNotes = document.querySelectorAll('.consequence-note');
        if (consequenceNotes.length > 0) {
            consequenceNotes.forEach((note, index) => {
                anime({
                    targets: note,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 500,
                    delay: 2000 + index * 100,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        // Анимация итогового блока
        const influenceSummary = document.querySelector('.influence-summary');
        if (influenceSummary) {
            anime({
                targets: influenceSummary,
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 900,
                delay: 2500,
                easing: 'easeOutCubic'
            });
        }
        
        // Плавное появление параграфов в итоговом блоке
        const summaryParagraphs = document.querySelectorAll('.influence-summary p');
        if (summaryParagraphs.length > 0) {
            summaryParagraphs.forEach((p, index) => {
                anime({
                    targets: p,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 600,
                    delay: 3000 + index * 150,
                    easing: 'easeOutCubic'
                });
            });
        }
    }
    
    function initHoverEffects() {
        console.log('Инициализация hover эффектов');
        
        // 1. Эффекты для карточек хронологии
        const chronologyCards = document.querySelectorAll('.chronology-card');
        chronologyCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: -8,
                        scale: 1.03,
                        boxShadow: '0 15px 35px rgb(254, 152, 115)',
                        borderColor: '#ff4500',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateY(-8px) scale(1.03)';
                    this.style.boxShadow = '0 15px 35px rgb(254, 152, 115)';
                    this.style.borderColor = '#ff4500';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: 0,
                        scale: 1,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: this.classList.contains('right') ? 
                            'rgb(254, 152, 115)' : 'rgb(254, 152, 115)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    this.style.borderColor = this.classList.contains('right') ? 
                        'rgb(254, 152, 115)' : 'rgb(254, 152, 115)';
                }
            });
        });
        
        // 2. Эффекты для карточек влияния
        const influenceCards = document.querySelectorAll('.influence-card');
        influenceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: -10,
                        scale: 1.04,
                        boxShadow: '0 20px 40px rgb(254, 152, 115)',
                        borderColor: '#ff4500',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    
                    // Подсветка стрелки при наведении
                    const arrowLine = this.closest('.influence-pair')?.querySelector('.arrow-line');
                    const arrowHead = this.closest('.influence-pair')?.querySelector('.arrow-head');
                    if (arrowLine && arrowHead) {
                        anime({
                            targets: [arrowLine, arrowHead],
                            scaleX: 1.2,
                            backgroundColor: '#ff4500',
                            borderColor: '#ff4500',
                            duration: 300,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(-10px) scale(1.04)';
                    this.style.boxShadow = '0 20px 40px rgb(254, 152, 115)';
                    this.style.borderColor = '#ff4500';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: 0,
                        scale: 1,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: this.classList.contains('right') ? 
                            'rgb(254, 152, 115)' : 'rgb(254, 152, 115)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    
                    // Возвращение стрелки к исходному состоянию
                    const arrowLine = this.closest('.influence-pair')?.querySelector('.arrow-line');
                    const arrowHead = this.closest('.influence-pair')?.querySelector('.arrow-head');
                    if (arrowLine && arrowHead) {
                        anime({
                            targets: [arrowLine, arrowHead],
                            scaleX: 1,
                            backgroundColor: 'coral',
                            borderColor: 'coral',
                            duration: 300,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    this.style.borderColor = this.classList.contains('right') ? 
                        'rgb(254, 152, 115)' : 'rgb(254, 152, 115)';
                }
            });
        });
        
        // 3. Эффекты для карточек биографии (аудио/видео)
        const mediaCards = document.querySelectorAll('.audio-card, .video-card');
        mediaCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: -8,
                        scale: 1.02,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    
                    // Анимация изображений внутри
                    const img = this.querySelector('img');
                    if (img) {
                        anime({
                            targets: img,
                            scale: 1.05,
                            duration: 400,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                    
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1.05)';
                    }
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: 0,
                        scale: 1,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    
                    const img = this.querySelector('img');
                    if (img) {
                        anime({
                            targets: img,
                            scale: 1,
                            duration: 400,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1)';
                    }
                }
            });
        });
        
        // 4. Эффекты для кнопок навигации
        const navLinks = document.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: getHoverColor(this),
                        color: getTextColor(this),
                        scale: 1.05,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = getHoverColor(this);
                    this.style.color = getTextColor(this);
                    this.style.transform = 'scale(1.05)';
                }
            });
            
            link.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: getOriginalColor(this),
                        color: getOriginalTextColor(this),
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = getOriginalColor(this);
                    this.style.color = getOriginalTextColor(this);
                    this.style.transform = 'scale(1)';
                }
            });
        });
        
        // 5. Эффекты для заметок
        const notes = document.querySelectorAll('.chronology-note, .consequence-note');
        notes.forEach(note => {
            note.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: '#fff0e6',
                        scale: 1.02,
                        translateX: this.classList.contains('right') ? -5 : 5,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = '#fff0e6';
                    this.style.transform = this.classList.contains('right') ? 
                        'translateX(-5px) scale(1.02)' : 'translateX(5px) scale(1.02)';
                }
            });
            
            note.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: '#fff5f0',
                        scale: 1,
                        translateX: 0,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = '#fff5f0';
                    this.style.transform = 'translateX(0) scale(1)';
                }
            });
        });
        
        // 6. Эффекты для годов
        const years = document.querySelectorAll('.timeline-year');
        years.forEach(year => {
            year.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        scale: 1.2,
                        backgroundColor: '#ff4500',
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'scale(1.2)';
                    this.style.backgroundColor = '#ff4500';
                }
            });
            
            year.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        scale: 1,
                        backgroundColor: 'coral',
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'scale(1)';
                    this.style.backgroundColor = 'coral';
                }
            });
        });
    }
    
    function initScrollAnimations() {
        if (typeof anime !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Разные анимации для разных элементов
                        if (entry.target.classList.contains('chronology-pair') || 
                            entry.target.classList.contains('influence-pair')) {
                            anime({
                                targets: entry.target,
                                translateY: [80, 0],
                                opacity: [0, 1],
                                duration: 1000,
                                easing: 'easeOutCubic'
                            });
                        } else if (entry.target.classList.contains('audio-section') || 
                                 entry.target.classList.contains('video-section')) {
                            anime({
                                targets: entry.target,
                                translateY: [60, 0],
                                opacity: [0, 1],
                                duration: 800,
                                easing: 'easeOutCubic'
                            });
                        } else if (entry.target.classList.contains('chronology-card') || 
                                 entry.target.classList.contains('influence-card')) {
                            const isRight = entry.target.classList.contains('right');
                            anime({
                                targets: entry.target,
                                translateX: [isRight ? 100 : -100, 0],
                                opacity: [0, 1],
                                duration: 700,
                                easing: 'easeOutCubic'
                            });
                        } else if (entry.target.classList.contains('audio-card') || 
                                 entry.target.classList.contains('video-card')) {
                            anime({
                                targets: entry.target,
                                scale: [0.9, 1],
                                opacity: [0, 1],
                                duration: 600,
                                easing: 'easeOutBack'
                            });
                        } else if (entry.target.classList.contains('bio-image-text')) {
                            anime({
                                targets: entry.target,
                                translateY: [40, 0],
                                opacity: [0, 1],
                                duration: 800,
                                easing: 'easeOutCubic'
                            });
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Наблюдаем за всеми анимируемыми элементами
            const scrollElements = document.querySelectorAll(
                '.chronology-pair, .influence-pair, .audio-section, .video-section, ' +
                '.chronology-card, .influence-card, .audio-card, .video-card, ' +
                '.bio-image-text, .influence-intro, .influence-summary'
            );
            
            scrollElements.forEach(el => {
                observer.observe(el);
            });
            
            console.log('Scroll animations initialized for', scrollElements.length, 'elements');
        }
    }
    
    function getHoverColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return '#ff7f50';
        if (element.classList.contains('block-2-1')) return '#ff7f50';
        if (element.classList.contains('block-2-2')) return '#edececff';
        if (element.parentElement.classList.contains('footer-links')) return '#FBF1F1';
        return '#ffffffff';
    }
    
    function getTextColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return 'white';
        if (element.classList.contains('block-2-1')) return 'white';
        if (element.parentElement.classList.contains('footer-links')) return '#ff7f50';
        return '#ff7f50';
    }
    
    function getOriginalColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return '#000000ff';
        if (element.classList.contains('block-2-1')) return '#ff7f50';
        if (element.classList.contains('block-2-2')) return 'transparent';
        if (element.parentElement.classList.contains('footer-links')) return 'transparent';
        return 'transparent';
    }
    
    function getOriginalTextColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return 'white';
        if (element.classList.contains('block-2-1')) return 'white';
        if (element.parentElement.classList.contains('footer-links')) return '#ff7f50';
        return '#ff7f50';
    }
    
    // Инициализация проигрывателя аудио
    initAudioPlayer();
    
    // Инициализация плавной прокрутки
    initSmoothScroll();
    
    // Инициализация бургер-меню
    initBurgerMenu();
});

function initAudioPlayer() {
    const audio = document.getElementById('Audio');
    if (audio) {
        audio.addEventListener('play', function() {
            console.log('Аудио воспроизводится');
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

function initBurgerMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const mainNav = document.getElementById('mainNav');
    if (burgerMenu && mainNav) {
        burgerMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            mainNav.classList.toggle('active');
        });
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const sticks = burgerMenu.querySelectorAll('.burger-menu_stick');
                sticks.forEach(stick => {
                    stick.style.transform = 'none';
                    stick.style.opacity = '1';
                });
            });
        });
        document.addEventListener('click', function(e) {
            if (!burgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
                mainNav.classList.remove('active');
                const sticks = burgerMenu.querySelectorAll('.burger-menu_stick');
                sticks.forEach(stick => {
                    stick.style.transform = 'none';
                    stick.style.opacity = '1';
                });
            }
        });
        console.log('Burger menu initialized');
    }
}
window.addEventListener('load', function() {
    if (typeof anime !== 'undefined') {
        anime({
            targets: 'body',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutQuad'
        });
        setTimeout(() => {
            const years = document.querySelectorAll('.timeline-year');
            years.forEach((year, index) => {
                anime({
                    targets: year,
                    scale: [1, 1.15, 1],
                    duration: 800,
                    delay: index * 200,
                    easing: 'easeInOutSine'
                });
            });
        }, 1500);
    }
});
function initHoverEffects() {
    console.log('Инициализация hover эффектов');
    const isMobile = window.matchMedia("(max-width: 845px)").matches;
    if (isMobile) {
        console.log('Мобильное устройство - hover эффекты отключены');
        return;
    }
}
function initScrollAnimations() {
    // Проверяем мобильное устройство
    const isMobile = window.matchMedia("(max-width: 845px)").matches;
    
    if (isMobile) {
        console.log('Мобильное устройство - scroll анимации упрощены');
        // Упрощённые анимации для мобильных
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Только плавное появление без трансформаций
                    entry.target.style.opacity = '1';
                    entry.target.style.transition = 'opacity 0.5s ease';
                }
            });
        }, { threshold: 0.1 });
        const elements = document.querySelectorAll(
            '.chronology-pair, .influence-pair, .audio-section, .video-section'
        );
        elements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
        
        return;
    }
    if (typeof anime !== 'undefined') {
        // Существующий код для десктопной версии...
    }
}