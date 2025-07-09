// كود تبديل الوضع الليلي
const toggleBtn = document.getElementById('toggleThemeBtn');
toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // تغيير الأيقونة
    const icon = toggleBtn.querySelector('i');
    if(document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i> تبديل للوضع النهاري';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i> تبديل الوضع الليلي';
    }
});

// شريط تقدم الصفحة حسب التمرير
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progressBarInner').style.width = progress + '%';
});

// نافذة ترحيب عصرية تظهر دائماً عند دخول الموقع
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const modal = document.createElement('div');
        modal.className = 'welcome-modal';
        modal.innerHTML = `
            <div class="welcome-modal-content">
                <h2>مرحباً بك!</h2>
                <p>سعيدون بزيارتك لموقعي الشخصي.<br>نتمنى لك تصفحاً ممتعاً ومفيداً.</p>
                <button id="closeWelcomeModal">شكراً</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('closeWelcomeModal').onclick = function() {
            modal.remove();
        };
    }, 800);

    //up botton
    const backToTopBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// زر تغيير اللغة (عربي/إنجليزي)
const langBtn = document.getElementById('toggleLangBtn');
const translations = {
    ar: {
        title: 'مرحبًا',
        welcome: 'مرحبا بكم مرحبًا بك في معرض أعمالي الشخصي. أنا مطوّر ويب شغوف بإنشاء مواقع حديثة ومتجاوبةا',
        theme: '<i class="fas fa-moon"></i> تبديل الوضع الليلي',
        lang: '<i class="fas fa-language"></i> English',
        projects: 'مشاريعي',
        profile: 'مبرمج ومصمم واجهات أمامية. شغوف بالتقنية والتعلم المستمر.',
        quote: '"التعلم المستمر هو سر النجاح في عالم التقنية."',
        quoteAuthor: '- ستيف جوبز',
        skills: 'المهارات',
        skill1: 'صناعة المحتوى ',
        skill2:'تحليل البيانات',
        achievements:'الإنجازات',
        achievement1: 'برمجة <span dir="ltr">AVR</span> مباشرة عبر الريجسترات',
        achievement2: ' طوّرت واجهة مستخدم في برنامج MATLAB لحساب المعدل التراكمي' , 
        achievement3: ' Excel تلقائيًا إلى  GPA إصدار نتائج ',     
        achievement4: ' KiCad و Proteus باستخدام PCB تصميم',
        achievement5: 'تطوير تطبيق ويب بسيط',
        achievement6:'العمل مع أكثر من 10 عملاء',
        achievement7:'درّست لغات برمجة لزملائي.',
        achievement8:'قدت فريقًا مكوّنًا من خمسة',
        contact: 'تواصل معي',
        send: '<i class="fas fa-paper-plane"></i> إرسال',
        download: '<i class="fas fa-download"></i> تحميل السيرة الذاتية',
        hobbies: 'الهوايات',
        hobby1: 'التصوير',
        hobby2: 'الاستماع للموسيقى',
        hobby3: 'ركوب الدراجات',
        hobby4: 'قراءة الكتب',
        languages: 'اللغات التي أتحدثها',
        arabic: 'العربية <span class="lang-level">(اللغة الأم)</span>',
        english: 'الإنجليزية <span class="lang-level">(جيد جداً)</span>',
        french: 'الفرنسية <span class="lang-level">(مبتدئ)</span>',
        footer: 'جميع الحقوق محفوظة &copy; 2025 - تصميم <span class="footer-author">ملال رضا</span>'
    },
    en: {
        title: 'Welcome to My Portfolio',
        welcome: 'Welcome I’m a web developer passionate about building modern and responsive websites.',
        theme: '<i class="fas fa-moon"></i> Toggle Dark Mode',
        lang: '<i class="fas fa-language"></i> العربية',
        projects: 'My Projects' ,
        profile : 'Frontend developer and designer . Passionate about tech and continuous learning.',
        quote: '"Continuous learning is the secret to success in the tech world."',
        quoteAuthor: '- Steve Jobs',
        skills: 'Skills',
        skill1: 'Content creation',
        skill2:'Data & Analytics',
        achievements: 'Achievements',
        achievement1:' Implemented direct register-level programming on an AVR microcontroller using bit manipulation.',
        achievement2:'Developed MATLAB GUI  to calculate cumulative GPA and export results automatically to an Excel file',  
        achievement3:'Analyzed data and generated reports, then exported them automatically to Excel',
        achievement4:'Designed printed circuit boards (PCB) using specialized tools, including schematic capture, board layout, and pre-production simulation',
        achievement5:'Developed a responsive web application with a user-friendly interface.',
        achievement6:'Tutored peers in programming languages through well-prepared sessions',
        achievement7:'Worked with over ten clients on various technical projects',
        achievement8:'Led a five-person in a technical projec',    
        contact: 'Contact Me',
        send: '<i class="fas fa-paper-plane"></i> Send',
        download: '<i class="fas fa-download"></i> Download CV',
        hobbies: 'Hobbies',
        hobby1: 'Photography',
        hobby2: 'Listening to Music',
        hobby3: 'Cycling',
        hobby4: 'Reading Books',
        languages: 'Languages I Speak',
        arabic: 'Arabic <span class="lang-level">(Native)</span>',
        english: 'English <span class="lang-level">(Very Good)</span>',
        french: 'French <span class="lang-level">(Beginner)</span>',
        footer: 'All rights reserved &copy; 2025 - Designed by <span class="footer-author">Mellal Rida</span>' ;
    }
};
let currentLang = 'ar';
langBtn.addEventListener('click', function() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.title = translations[currentLang].title;
    document.querySelector('.header h1').textContent = translations[currentLang].title;
    document.querySelector('.header p').textContent = translations[currentLang].welcome;
    document.getElementById('toggleThemeBtn').innerHTML = translations[currentLang].theme;
    langBtn.innerHTML = translations[currentLang].lang;
    //quote section
    document.querySelector('.quote-text').textContent = translations[currentLang].quote;
    document.querySelector('.quote-author').textContent = translations[currentLang].quoteAuthor;
    //skills section
    document.querySelector('.skills h3').textContent = translations[currentLang].skills;
    const skillsList = document.querySelectorAll('.skills-list li');
    skillsList[2].innerHTML = '<i class="fas fa-pencil-alt"></i> ' + translations[currentLang].skill1;
    skillsList[3].innerHTML = '<i class="fas fa-chart-line"></i> ' + translations[currentLang].skill2;
    
    //document.querySelector('.profile-card h2').textContent = translations[currentLang].name;
    document.querySelector('.profile-desc').textContent = translations[currentLang].profile;
    document.querySelector('.skills h3').textContent = translations[currentLang].skills;
    document.querySelector('.achievements h3').textContent = translations[currentLang].achievements;
    document.querySelector('.contact-box h3').textContent = translations[currentLang].contact;
    document.querySelector('.contact-form button').innerHTML = translations[currentLang].send;
    document.querySelector('.cv-btn').innerHTML = translations[currentLang].download;
    document.querySelector('.projects-title').textContent = translations[currentLang].projects;

    // Hobbies section
    document.querySelector('.hobbies h3').textContent = translations[currentLang].hobbies;
    const hobbiesList = document.querySelectorAll('.hobbies-list li');
    hobbiesList[0].innerHTML = '<i class="fas fa-camera-retro"></i> ' + translations[currentLang].hobby1;
    hobbiesList[1].innerHTML = '<i class="fas fa-music"></i> ' + translations[currentLang].hobby2;
    hobbiesList[2].innerHTML = '<i class="fas fa-bicycle"></i> ' + translations[currentLang].hobby3;
    hobbiesList[3].innerHTML = '<i class="fas fa-book-reader"></i> ' + translations[currentLang].hobby4;
    // Languages section
    document.querySelector('.languages h3').textContent = translations[currentLang].languages;
    const langs = document.querySelectorAll('.languages-list li');
    langs[0].innerHTML = '<i class="fas fa-globe"></i> ' + translations[currentLang].arabic;
    langs[1].innerHTML = '<i class="fas fa-globe"></i> ' + translations[currentLang].english;
    langs[2].innerHTML = '<i class="fas fa-globe"></i> ' + translations[currentLang].french;
    document.querySelector('.main-footer p').innerHTML = translations[currentLang].footer;
    //achievments section 
    const achievementsList = document.querySelectorAll('.achievements-list li');
    achievementsList[0].innerHTML = '<i class="fas fa-microchip"></i> ' + translations[currentLang].achievement1;    achievementsList[1].innerHTML = '<i class="fas fa-calculator"></i> ' + translations[currentLang].achievement2;
    achievementsList[2].innerHTML = '<i class="fas fa-file-excel"></i> ' + translations[currentLang].achievement3;
    achievementsList[3].innerHTML = '<i class="fas fa-project-diagram"></i> ' + translations[currentLang].achievement4;
    achievementsList[4].innerHTML = '<i class="fas fa-globe"></i> ' + translations[currentLang].achievement5;
    achievementsList[5].innerHTML = '<i class="fas fa-code"></i> ' + translations[currentLang].achievement6;
    achievementsList[6].innerHTML = '<i class="fas fa-shopping-cart"></i> ' + translations[currentLang].achievement7;
    achievementsList[7].innerHTML = '<i class="fas fa-users"></i> ' + translations[currentLang].achievement8;
   



    // تغيير نصوص القائمة الرئيسية
    const navLinks = document.querySelectorAll('.list li a');
    if(currentLang === 'ar') {
        navLinks[0].innerHTML = ' الرئيسية';
        navLinks[1].innerHTML = 'الفيسبوك';
        navLinks[2].innerHTML = ' تويتر';
        navLinks[3].innerHTML = ' إنستغرام';
    } else {
        navLinks[0].innerHTML = 'Home';
        navLinks[1].innerHTML = ' Facebook';
        navLinks[2].innerHTML = ' Twitter';
        navLinks[3].innerHTML = ' Instagram';
    }
    // تغيير نصوص نموذج التواصل
    const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    if(currentLang === 'ar') {
        contactInputs[0].placeholder = 'اسمك';
        contactInputs[1].placeholder = 'بريدك الإلكتروني';
        contactInputs[2].placeholder = 'رسالتك';
    } else {
        contactInputs[0].placeholder = 'Your Name';
        contactInputs[1].placeholder = 'Your Email';
        contactInputs[2].placeholder = 'Your Message';
    }
    // تغيير نص نافذة الترحيب إذا كانت موجودة
    const welcomeModal = document.querySelector('.welcome-modal-content');
    if (welcomeModal) {
        if (currentLang === 'ar') {
            welcomeModal.querySelector('h2').textContent = 'مرحباً بك!';
            welcomeModal.querySelector('p').innerHTML = 'سعيدون بزيارتك لموقعي الشخصي.<br>نتمنى لك تصفحاً ممتعاً ومفيداً.';
            welcomeModal.querySelector('button').textContent = 'شكراً';
        } else {
            welcomeModal.querySelector('h2').textContent = 'Welcome!';
            welcomeModal.querySelector('p').innerHTML = 'We are happy to have you on my personal site.<br>Wishing you a pleasant and useful browsing.';
            welcomeModal.querySelector('button').textContent = 'Thanks';
        }
    }

});
