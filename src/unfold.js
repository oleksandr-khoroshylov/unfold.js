const Unfold = (() => {
    function animateHeight(element, toHeight, duration, callback) {
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.overflow = 'hidden';
        element.style.height = toHeight;
        setTimeout(() => {
            callback && callback();
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }

    function slideUp(element, duration = 300) {
        const height = element.offsetHeight + 'px';
        element.style.height = height;
        element.offsetHeight;
        animateHeight(element, '0px', duration, () => {
            element.style.display = 'none';
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
        });
    }

    function slideDown(element, duration = 300) {
        element.style.removeProperty('display');
        let display = getComputedStyle(element).display;
        if (display === 'none') display = 'block';
        element.style.display = display;
        element.style.paddingTop = '';
        element.style.paddingBottom = '';
        element.style.marginTop = '';
        element.style.marginBottom = '';
        let height = element.offsetHeight + 'px';
        element.style.height = '0px';
        element.offsetHeight;
        animateHeight(element, height, duration);
    }

    function slideToggle(element, duration = 300) {
        if (getComputedStyle(element).display === 'none') {
            slideDown(element, duration);
        } else {
            slideUp(element, duration);
        }
    }

    function bindToggle(selector, duration = 300) {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('click', () => {
                const target = el.querySelector('.content');
                if (target) slideToggle(target, duration);
            });
        });
    }

    return {
        up: slideUp,
        down: slideDown,
        toggle: slideToggle,
        bind: bindToggle
    };
})();

export default Unfold;
