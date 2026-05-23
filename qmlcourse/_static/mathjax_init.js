(function() {
    // Проверяем, не загружен ли уже MathJax
    if (window.MathJax && window.MathJax.typeset) {
        console.log('MathJax already present, running typeset');
        MathJax.typeset();
        return;
    }
    
    // Настройки MathJax (без braket)
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            macros: {
                ket: ["|#1\\rangle", 1],
                bra: ["\\langle#1|", 1]
            }
        },
        options: {
            skipHtmlTags: [],
            ignoreHtmlClass: '',
            processHtmlClass: '.*'
        },
        startup: {
            ready: function() {
                console.log('MathJax loaded');
                MathJax.startup.defaultReady();
                console.log('Running MathJax.typeset()');
                MathJax.typeset();
            }
        }
    };
    
    // Загружаем MathJax
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
    console.log('Loading MathJax...');
})();
