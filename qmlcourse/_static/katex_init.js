(function() {
    function renderKatex() {
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                macros: {
                    "\\bra": "\\langle #1 |",
                    "\\ket": "| #1 \\rangle",
                    "\\braket": "\\langle #1 | #2 \\rangle"
                },
                throwOnError: false
            });
            console.log('KaTeX rendered');
        } else {
            console.log('Waiting for KaTeX...');
            setTimeout(renderKatex, 100);
        }
    }
    
    // Ждём загрузки страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderKatex);
    } else {
        renderKatex();
    }
})();
