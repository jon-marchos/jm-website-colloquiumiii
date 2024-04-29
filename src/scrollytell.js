document.addEventListener('DOMContentLoaded', () => {
    const backgroundIframe = document.getElementById('background-iframe');
    const sections = document.querySelectorAll('.columns');
    const graphs = [
        "./graphs/graph2.html",
        "./graphs/graph.html",
        "./graphs/graph3.html",
        "./graphs/graph4.html"
    ]; // Array of URLs to your graphs

    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                // This checks if the section is visible
                if (section.classList.contains('special-background')) {
                    backgroundIframe.src = graphs[index] || ''; // Assign a graph if defined
                } else {
                    backgroundIframe.src = ''; // Clear the src if the section should not show any background
                }
            }
        });
    });
});