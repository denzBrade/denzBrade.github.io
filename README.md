### Instructions on viewing the test

Please add the following code, to the **Custom Javascript for Websites** extension.

```// Function to add External CSS
function addCss(filename) {
    let head = document.head;
    let link = document.createElement('link');
    
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = filename;
    
    head.appendChild(link);
}

addCss('https://denzbrade.github.io/biglight.css');

// Function add External JS File
function addJs(filename) {
    let body = document.body;
    let script = document.createElement('script');
    
    script.type = 'text/javascript';
    script.src = filename;
    
    body.appendChild(script);
}

addJs('https://denzbrade.github.io/biglight.js');
```
