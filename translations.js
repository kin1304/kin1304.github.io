// Hệ thống đa ngôn ngữ cho Portfolio
const translations = {
    vi: {
        // Navigation
        nav_home: "Trang chủ",
        nav_about: "Giới thiệu",
        nav_skills: "Kỹ năng",
        nav_projects: "Dự án",
        nav_contact: "Liên hệ",
        nav_project_live: "Project on Live",
        
        // Hero Section
        hero_title: "Xin chào, tôi là",
        hero_subtitle: "Sinh viên đam mê công nghệ và phát triển phần mềm",
        hero_btn_learn: "Tìm hiểu thêm",
        hero_btn_contact: "Liên hệ ngay",
        hero_floating_card: "Phát triển phần mềm",
        
        // About Section
        about_title: "Giới thiệu",
        about_subtitle: "Một chút về bản thân và đam mê của tôi",
        about_who: "Tôi là ai?",
        about_description: "Tôi là Kin, một sinh viên đam mê công nghệ và lập trình. Tôi thích khám phá những công nghệ mới và tìm hiểu về:",
        about_feature_1: "Phát triển ứng dụng web với ASP.NET Core",
        about_feature_2: "Phân tích dữ liệu và Machine Learning",
        about_feature_3: "Thuật toán và tối ưu hóa",
        about_feature_4: "Công nghệ Python và C#",
        about_stat_1: "Dự án học tập",
        about_stat_2: "Năm học lập trình",
        about_stat_3: "Đam mê công nghệ",
        
        // Skills Section
        skills_title: "Kỹ năng của tôi",
        skills_subtitle: "Những công nghệ và kỹ năng tôi đang học và phát triển",
        skills_web_title: "Phát triển Web",
        skills_web_desc: "Xây dựng ứng dụng web với ASP.NET Core và các công nghệ backend hiện đại",
        skills_data_title: "Phân tích dữ liệu",
        skills_data_desc: "Phân tích và khai thác dữ liệu với Python, Machine Learning và các thuật toán cơ bản",
        skills_cloud_title: "Cloud & DevOps",
        skills_cloud_desc: "Triển khai và quản lý ứng dụng trên cloud với Docker và các công cụ DevOps",
        
        // Projects Section
        projects_title: "Dự án của tôi",
        projects_subtitle: "Những dự án tôi đã thực hiện trong quá trình học tập",
        project_cnpm_desc: "Hệ thống quản lý dựa trên ASP.NET Core và SQL Server. Dự án học tập về phát triển web backend.",
        project_dapm_desc: "Ứng dụng phân tích dữ liệu sử dụng thuật toán data mining để gom cụm các đồ vật được mua nhiều trong cửa hàng.",
        project_duck_desc: "Game con vịt chạy đua được viết bằng C#. Dự án học tập về lập trình game đơn giản.",
        project_calc_desc: "Ứng dụng máy tính đơn giản được viết bằng Java. Dự án học tập về lập trình GUI.",
        project_knn_desc: "Triển khai thuật toán K-Nearest Neighbors (KNN) cho bài toán phân loại. Dự án học tập về Machine Learning.",
        project_regression_desc: "Phân tích hồi quy và dự đoán dữ liệu sử dụng các thuật toán regression khác nhau.",
        project_view: "Xem dự án",
        
        // Project on Live
        project_live_title: "Project on Live",
        project_live_subtitle: "Các dự án đang chạy trực tiếp trên Internet",
        project_live_duck_desc: "Game Đua Vịt phiên bản web ASP.NET 8.0, chơi trực tiếp trên trình duyệt.",
        project_live_play: "Chơi ngay",
        
        // Contact Section
        contact_title: "Liên hệ với tôi",
        contact_subtitle: "Hãy để lại thông tin nếu bạn muốn trao đổi về công nghệ",
        contact_name: "Họ và tên",
        contact_email: "Email",
        contact_message: "Tin nhắn",
        contact_send: "Gửi tin nhắn",
        contact_sending: "Đang gửi...",
        contact_success: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.",
        contact_error: "Vui lòng điền đầy đủ thông tin!",
        
        // Language Switcher
        lang_vi: "Tiếng Việt",
        lang_en: "English"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_project_live: "Project on Live",
        
        // Hero Section
        hero_title: "Hello, I'm",
        hero_subtitle: "A student passionate about technology and software development",
        hero_btn_learn: "Learn More",
        hero_btn_contact: "Contact Now",
        hero_floating_card: "Software Development",
        
        // About Section
        about_title: "About",
        about_subtitle: "A bit about myself and my passion",
        about_who: "Who am I?",
        about_description: "I'm Kin, a student passionate about technology and programming. I love exploring new technologies and learning about:",
        about_feature_1: "Web application development with ASP.NET Core",
        about_feature_2: "Data analysis and Machine Learning",
        about_feature_3: "Algorithms and optimization",
        about_feature_4: "Python and C# technologies",
        about_stat_1: "Learning Projects",
        about_stat_2: "Years of Programming",
        about_stat_3: "Passion for Technology",
        
        // Skills Section
        skills_title: "My Skills",
        skills_subtitle: "Technologies and skills I'm learning and developing",
        skills_web_title: "Web Development",
        skills_web_desc: "Building web applications with ASP.NET Core and modern backend technologies",
        skills_data_title: "Data Analysis",
        skills_data_desc: "Analyzing and mining data with Python, Machine Learning and basic algorithms",
        skills_cloud_title: "Cloud & DevOps",
        skills_cloud_desc: "Deploying and managing applications on cloud with Docker and DevOps tools",
        
        // Projects Section
        projects_title: "My Projects",
        projects_subtitle: "Projects I've completed during my studies",
        project_cnpm_desc: "Management system based on ASP.NET Core and SQL Server. Learning project about web backend development.",
        project_dapm_desc: "Data analysis application using data mining algorithms to cluster frequently purchased items in stores.",
        project_duck_desc: "Duck racing game written in C#. Learning project about simple game programming.",
        project_calc_desc: "Simple calculator application written in Java. Learning project about GUI programming.",
        project_knn_desc: "Implementation of K-Nearest Neighbors (KNN) algorithm for classification problems. Learning project about Machine Learning.",
        project_regression_desc: "Regression analysis and data prediction using various regression algorithms.",
        project_view: "View Project",
        
        // Project on Live
        project_live_title: "Project on Live",
        project_live_subtitle: "Live projects running on the Internet",
        project_live_duck_desc: "Duck Race game web version ASP.NET 8.0, play directly in your browser.",
        project_live_play: "Play now",
        
        // Contact Section
        contact_title: "Contact Me",
        contact_subtitle: "Leave your information if you want to discuss technology",
        contact_name: "Full Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_send: "Send Message",
        contact_sending: "Sending...",
        contact_success: "Thank you for contacting us! We will respond as soon as possible.",
        contact_error: "Please fill in all information!",
        
        // Language Switcher
        lang_vi: "Tiếng Việt",
        lang_en: "English"
    }
};

// Lưu ngôn ngữ hiện tại vào localStorage
let currentLanguage = localStorage.getItem('language') || 'vi';

// Hàm chuyển đổi ngôn ngữ
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Cập nhật lang attribute của html
    document.documentElement.lang = lang;
    
    // Cập nhật tất cả text
    updateAllText();
    
    // Cập nhật trạng thái nút language switcher
    updateLanguageSwitcher();
}

// Hàm cập nhật tất cả text
function updateAllText() {
    console.log('Updating text for language:', currentLanguage);
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Translating key:', key, 'for element:', element);
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
            console.log('Updated text to:', translations[currentLanguage][key]);
        } else {
            console.log('No translation found for key:', key);
        }
    });
    
    // Cập nhật placeholder cho input fields
    const inputs = document.querySelectorAll('[data-translate-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            input.placeholder = translations[currentLanguage][key];
        }
    });
}

// Hàm cập nhật trạng thái language switcher
function updateLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Khởi tạo ngôn ngữ khi trang load
document.addEventListener('DOMContentLoaded', function() {
    updateAllText();
    updateLanguageSwitcher();
});

// Test function
function testTranslation() {
    console.log('Current language:', currentLanguage);
    console.log('Available translations:', Object.keys(translations));
    console.log('Hero title translation:', translations[currentLanguage].hero_title);
    
    const heroTitleElement = document.querySelector('[data-translate="hero_title"]');
    console.log('Hero title element:', heroTitleElement);
    console.log('Current text:', heroTitleElement ? heroTitleElement.textContent : 'Element not found');
    
    // Force update
    updateAllText();
} 