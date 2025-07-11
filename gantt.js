document.addEventListener('DOMContentLoaded', () => {
    // Initialize Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
            sectionBkgColor: '#ffcccc',
            sectionBkgColor2: '#ccffcc',
            altSectionBkgColor: '#ccccff'
        },
        gantt: {
            barHeight: 30,
            fontSize: 14
        }
    });
});