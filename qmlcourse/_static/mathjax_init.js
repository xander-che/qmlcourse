(function() {
    // Полностью чистая конфигурация MathJax
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            packages: ['base', 'ams', 'newcommand'],
            macros: {
                bra: ["\\langle #1|", 1],
                ket: ["|#1\\rangle", 1],
                braket: ["\\langle #1|#2\\rangle", 2]
            }
        },
        options: {
            ignoreHtmlClass: '.*|',  // Не игнорируем ничего
            processHtmlClass: '.*'   // Обрабатываем всё
        },
        startup: {
            ready: function() {
                console.log('MathJax 3 ready with macros');
                MathJax.startup.defaultReady();
                // Многократно пытаемся обработать
                setTimeout(() => MathJax.typeset(), 100);
                setTimeout(() => MathJax.typeset(), 500);
                setTimeout(() => MathJax.typeset(), 1000);
            }
        }
    };
    
    // Загружаем скрипт
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
    console.log('MathJax loader added');
})();
