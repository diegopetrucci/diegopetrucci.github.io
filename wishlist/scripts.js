document.querySelectorAll("[data-collapsible-trigger]").forEach((header) => {
    header.addEventListener("click", (e) => {
        const section = e.target.closest("[data-collapsible]");
        const isCollapsed = section.classList.contains("collapsed");
        if (isCollapsed) {
            section.classList.remove("collapsed");

            // Change arrow to expanded state
            header.querySelector('.arrow').innerHTML = "&#9660;";
        } else {
            section.classList.add("collapsed");

            // Change arrow to collapsed state
            header.querySelector('.arrow').innerHTML = "&#9654;";
        }
    });
});
