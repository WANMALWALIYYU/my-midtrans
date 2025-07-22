  //Script Tombol Read More
    const toggleBtn = document.getElementById('toggleParagraphs');
        let isExpanded = false;
        toggleBtn.addEventListener('click', function () {
            const hiddenParagraphs = document.querySelectorAll('.hidden-paragraph');

            hiddenParagraphs.forEach(p => {
                p.style.display = isExpanded ? 'none' : 'block';
            });

            toggleBtn.innerHTML = isExpanded
                ? 'Read More <i class="bi bi-chevron-down"></i>'
                : 'Show Less <i class="bi bi-chevron-up"></i>';

            isExpanded = !isExpanded;
        });