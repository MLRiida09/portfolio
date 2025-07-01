window.addEventListener('DOMContentLoaded', function () {
  // زر العودة للأعلى
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // زر تغيير الوضع الليلي
  const themeBtn = document.getElementById("toggleThemeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
    });
  }

  // زر تغيير اللغة
  const langBtn = document.getElementById("toggleLangBtn");
  if (!langBtn) return;

  const translations = {
    ar: {
      title: 'مرحبًا',
      welcome: 'مرحبًا بك في معرض أعمالي الشخصي. أنا مطوّر ويب شغوف بإنشاء مواقع حديثة ومتجاوبة.',
      theme: '<i class="fas fa-moon"></i> تبديل الوضع الليلي',
      lang: '<i class="fas fa-language"></i> English',
      projects: 'مشاريعي',
      project1: "🚧! مشاريع جديدة قيد الإطلاق",
      project2: "🚧! مشاريع جديدة قيد الإطلاق",
      project3: "🚧! مشاريع جديدة قيد الإطلاق",
      profile: 'مبرمج ومصمم واجهات أمامية. شغوف بالتقنية والتعلم المستمر.',
      quote: '"التعلم المستمر هو سر النجاح في عالم التقنية."',
      quoteAuthor: '- ستيف جوبز',
      skills: 'المهارات',
      skill1: 'صناعة المحتوى',
      skill2: 'تحليل البيانات',
      achievements: 'الإنجازات',
      achievement1: 'برمجة AVR مباشرة عبر الريجسترات',
      achievement2: 'طوّرت واجهة MATLAB لحساب المعدل التراكمي',
      achievement3: 'تصدير النتائج إلى Excel تلقائيًا',
      achievement4: 'تصميم PCB باستخدام KiCad و Proteus',
      achievement5: 'تطوير تطبيق ويب بسيط',
      achievement6: 'العمل مع أكثر من 10 عملاء',
      achievement7: 'درّست لغات برمجة لزملائي',
      achievement8: 'قيادة فريق تقني من 5 أشخاص',
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
      welcome: 'Welcome! I’m a web developer passionate about building modern and responsive websites.',
      theme: '<i class="fas fa-moon"></i> Toggle Dark Mode',
      lang: '<i class="fas fa-language"></i> العربية',
      projects: 'My Projects',
      project1: "New Projects Coming Soon 🚧!",
      project2: "New Projects Coming Soon 🚧!",
      project3: "New Projects Coming Soon 🚧!",
      profile: 'Frontend developer & designer. Passionate about tech and learning.',
      quote: '"Continuous learning is the key to success in tech."',
      quoteAuthor: '- Steve Jobs',
      skills: 'Skills',
      skill1: 'Content creation',
      skill2: 'Data & Analytics',
      achievements: 'Achievements',
      achievement1: 'AVR low-level register programming',
      achievement2: 'MATLAB GUI for GPA + Excel export',
      achievement3: 'Automated report export to Excel',
      achievement4: 'PCB design using KiCad & Proteus',
      achievement5: 'Responsive web app',
      achievement6: 'Worked with over 10 clients',
      achievement7: 'Tutored peers in programming',
      achievement8: 'Led a 5-person tech team',
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
      footer: 'All rights reserved &copy; 2025 - Designed by <span class="footer-author">Mellal Rida</span>'
    }
  };

  let currentLang = 'ar';
  langBtn.addEventListener('click', function () {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const t = translations[currentLang];

    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.title = t.title;
    document.querySelector('.header h1').textContent = t.title;
    document.querySelector('.header p').textContent = t.welcome;
    if (themeBtn) themeBtn.innerHTML = t.theme;
    langBtn.innerHTML = t.lang;
    document.querySelector('.projects-title').textContent = t.projects;

    const projects = document.querySelectorAll('.list li');
    projects[0].innerHTML = t.project1;
    projects[1].innerHTML = t.project2;
    projects[2].innerHTML = t.project3;

    document.querySelector('.profile-desc').textContent = t.profile;
    document.querySelector('.quote-text').textContent = t.quote;
    document.querySelector('.quote-author').textContent = t.quoteAuthor;

    document.querySelector('.skills h3').textContent = t.skills;
    const skillsList = document.querySelectorAll('.skills-list li');
    if (skillsList.length >= 4) {
      skillsList[2].innerHTML = '<i class="fas fa-pencil-alt"></i> ' + t.skill1;
      skillsList[3].innerHTML = '<i class="fas fa-chart-line"></i> ' + t.skill2;
    }

    document.querySelector('.achievements h3').textContent = t.achievements;
    const achievementsList = document.querySelectorAll('.achievements-list li');
    for (let i = 0; i < achievementsList.length; i++) {
      achievementsList[i].innerHTML = `<i class="fas fa-check-circle"></i> ${t['achievement' + (i + 1)]}`;
    }

    document.querySelector('.contact-box h3').textContent = t.contact;
    document.querySelector('.contact-form button').innerHTML = t.send;
    document.querySelector('.cv-btn').innerHTML = t.download;

    document.querySelector('.hobbies h3').textContent = t.hobbies;
    const hobbies = document.querySelectorAll('.hobbies-list li');
    hobbies[0].innerHTML = `<i class="fas fa-camera-retro"></i> ${t.hobby1}`;
    hobbies[1].innerHTML = `<i class="fas fa-music"></i> ${t.hobby2}`;
    hobbies[2].innerHTML = `<i class="fas fa-bicycle"></i> ${t.hobby3}`;
    hobbies[3].innerHTML = `<i class="fas fa-book-reader"></i> ${t.hobby4}`;

    document.querySelector('.languages h3').textContent = t.languages;
    const langs = document.querySelectorAll('.languages-list li');
    langs[0].innerHTML = `<i class="fas fa-globe"></i> ${t.arabic}`;
    langs[1].innerHTML = `<i class="fas fa-globe"></i> ${t.english}`;
    langs[2].innerHTML = `<i class="fas fa-globe"></i> ${t.french}`;

    document.querySelector('.main-footer p').innerHTML = t.footer;

    // تغيير مكان التفاعل مع نموذج التواصل
    const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    if (currentLang === 'ar') {
      contactInputs[0].placeholder = 'اسمك';
      contactInputs[1].placeholder = 'بريدك الإلكتروني';
      contactInputs[2].placeholder = 'رسالتك';
    } else {
      contactInputs[0].placeholder = 'Your Name';
      contactInputs[1].placeholder = 'Your Email';
      contactInputs[2].placeholder = 'Your Message';
    }
  });
});


