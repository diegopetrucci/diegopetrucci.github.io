fetch('items.json')
    .then(response => response.json())
    .then(data => {
        const wishlist = document.querySelector('body');

        data.forEach(category => {
            const section = document.createElement('section');
            section.setAttribute('data-collapsible', '');

            const header = document.createElement('h2');
            header.setAttribute('data-collapsible-trigger', '');
            header.textContent = category.title + ' ';
            const arrowSpan = document.createElement('span');
            arrowSpan.classList.add('arrow');
            arrowSpan.innerHTML = '&#9660;';
            header.appendChild(arrowSpan);
            section.appendChild(header);

            const ul = document.createElement('ul');
            section.appendChild(ul);

            category.items.forEach(item => {
                const li = document.createElement('li');
                ul.appendChild(li);

                const div = document.createElement('div');
                li.appendChild(div);

                const a = document.createElement('a');
                a.href = item.purchase_url;
                a.textContent = item.title;
                div.appendChild(a);

                const img = document.createElement('img');
                img.src = item.image_url;
                img.alt = item.title;
                div.appendChild(img);
            });

            wishlist.appendChild(section);
        });

        document.querySelectorAll("[data-collapsible-trigger]").forEach((header) => {
            header.addEventListener("click", (e) => {
                const section = e.target.closest("[data-collapsible]");
                const isCollapsed = section.classList.contains("collapsed");
                if (isCollapsed) {
                    section.classList.remove("collapsed");
                    header.querySelector('.arrow').innerHTML = "&#9660;";
                } else {
                    section.classList.add("collapsed");
                    header.querySelector('.arrow').innerHTML = "&#9654;";
                }
            });
        });
    });
