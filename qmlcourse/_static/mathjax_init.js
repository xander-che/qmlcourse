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
            processHtmlClass: '.*'  // Обрабатывать ВСЕ элементы
        },
        startup: {
            pageReady: function() {
                console.log('MathJax: pageReady triggered');
                // Находим все абзацы с символами $
                var paragraphs = document.querySelectorAll('p, div, span, li');
                console.log('Checking ' + paragraphs.length + ' elements');
                paragraphs.forEach(function(el, i) {
                    if (el.innerHTML && el.innerHTML.includes('$')) {
                        console.log('Found formula in element ' + i);
                    }
                });
                return MathJax.startup.defaultPageReady();
            },
            ready: function() {
                console.log('MathJax: ready');
                MathJax.startup.defaultReady();
                // Несколько попыток обработать формулы
                setTimeout(function() {
                    console.log('MathJax: manual typeset attempt 1');
                    MathJax.typeset();
                }, 500);
                setTimeout(function() {
                    console.log('MathJax: manual typeset attempt 2');
                    MathJax.typeset();
                }, 1500);
            }
        }
    };
    
    // Загружаем MathJax
    if (!document.querySelector('script[src*="mathjax"]')) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
        script.async = true;
        document.head.appendChild(script);
        console.log('MathJax: loading script');
    }
})();
