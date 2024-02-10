const isMobile = window.innerWidth <= 768;
if (isMobile) {
    console.log("helo");

    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    const options = document.querySelectorAll('h5');
    const search = document.querySelector('.ri-search-line');
    const close = document.querySelector('.ri-close-fill');

    menu.addEventListener('click', () => {
        menu.style.display = 'none';
        nav.style.display = 'block';
        close.style.display = 'block';
        search.style.display = 'block';
        count = 1;
        options.forEach(item =>{
            item.style.display = 'block';
        });
    });
    close.addEventListener('click',
    () => {
        menu.style.display = 'block';
        nav.style.display = 'none';
        close.style.display = 'none';
        search.style.display = 'none';
        count = 1;
        options.forEach(item =>{
            item.style.display = 'none';
        });
    })
}
