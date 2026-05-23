(function() {
    console.log('MathJax loader started');
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    script.onload = function() {
        console.log('MathJax script loaded');
        setTimeout(function() {
            if (window.MathJax && MathJax.typeset) {
                MathJax.typeset();
                console.log('MathJax typeset called');
            }
        }, 500);
    };
    document.head.appendChild(script);
})();
