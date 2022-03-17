export const headerApp = {
    fixedHeader() {
        const header = document.getElementsByClassName('header')[0];
        if (document.documentElement.scrollTop > 200) {
            header.classList.add('fixed')
        }

        document.body.onscroll = (event) => {
            const {scrollingElement} = event.target;
            if (scrollingElement.scrollTop >= 100) {
                header.classList.add('fixed')
            } else {
                header.classList.remove('fixed')
            }
        };
    },
    addActiveClassToAnchor() {
        const links = document.querySelectorAll('.menu__item_link')
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                const activeLinks = document.querySelectorAll('.active');
                const currentLinks = document.querySelectorAll(`[href='${e.target.hash}']`);

                activeLinks.forEach((activeLink) => {
                    activeLink.classList.remove('active')
                })
                currentLinks.forEach((currentLink) => {
                    currentLink.classList.add('active')
                })
            })
        })
    },
    allMethods() {
        this.fixedHeader()
        this.addActiveClassToAnchor()
    }
}
