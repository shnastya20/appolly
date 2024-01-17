const $ = window.jQuery;

const header = document.querySelector('header');

const headerScrolledClassName = 'scrolled';
const scrollOffset = 150;

window.addEventListener('scroll', function () {
    if (window.scrollY > scrollOffset) {
        header.classList.add(headerScrolledClassName);
    } else {
        header.classList.remove(headerScrolledClassName);
    }
});

$(document).ready(function() {
    const prevBtn = $('.slick-prev');
    const nextBtn = $('.slick-next');
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        cssEase: 'ease-in-out',
        dots: true,
        arrows: true,
        prevArrow: prevBtn,
        nextArrow: nextBtn,
    });

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        cssEase: 'ease-in-out',
        dots: true,
        arrows: true,
        prevArrow: prevBtn,
        nextArrow: nextBtn,
    });
});