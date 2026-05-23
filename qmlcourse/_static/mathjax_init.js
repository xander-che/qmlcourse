(function() {
    // Настройки MathJax
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        options: {
            skipHtmlTags: [],
            ignoreHtmlClass: '',
            processHtmlClass: '.*'
        },
        startup: {
            pageReady: function() {
                console.log('MathJax processing started');
                return MathJax.startup.defaultPageReady();
            },
            ready: function() {
                console.log('MathJax script loaded');
                MathJax.startup.defaultReady();
                // После загрузки обрабатываем все формулы
                setTimeout(function() {
                    console.log('Running MathJax.typeset()');
                    MathJax.typeset();
                }, 500);
            }
        }
    };
    
    // Загружаем MathJax, если он ещё не загружен
    if (!document.querySelector('script[src*="mathjax"]')) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
        script.async = true;
        document.head.appendChild(script);
    } else {
        console.log('MathJax already loading');
    }
})();
