const headers = document.querySelectorAll('.faq-accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-accordion-item.active');

        if(openItem && openItem !== header.parentElement){
            openItem.classList.remove('active');
            openItem.querySelector('.faq-accordion-content').style.maxHeight = null;
        }

        const content = header.nextElementSibling;
        header.parentElement.classList.toggle('active');

        if(header.parentElement.classList.contains('active')){
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});