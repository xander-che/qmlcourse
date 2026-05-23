(function() {
    // Проверяем, загружен ли уже MathJax
    if (window.MathJax && window.MathJax.typeset) {
        window.MathJax.typeset();
        return;
    }
    
    // Настройки MathJax
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            packages: {'[+]': ['braket']},
            macros: {
                ket: ["|#1\\rangle", 1],
                bra: ["\\langle#1|", 1]
            }
        },
        options: {
            skipHtmlTags: [],
            processHtmlClass: '.*'
        },
        startup: {
            ready: function() {
                console.log('MathJax loaded and ready');
                MathJax.startup.defaultReady();
                MathJax.typeset();
            }
        }
    };
    
    // Загружаем MathJax
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
})();
