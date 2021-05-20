import $ from '../core';

$.prototype.carousel = function(autoSwitching, time, speed) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item'),
             slidesField = this[i].querySelector('.carousel-slides'),
             indicators = this[i].querySelectorAll('.carousel-indicators li');
        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.transition = speed;
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;
        let switching;
        

        let autoSwitch = function() {
            switching = setInterval(() => {
                if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                    offset = 0;
                    slideIndex = 0;
                } else {
                    offset += +width.replace(/\D/g, '');
                    slideIndex++;
                }

                slidesField.style.transform = `translateX(-${offset}px)`;
                indicators.forEach(dot => dot.classList.remove('active'));
                indicators[slideIndex].classList.add('active');
            }, time);

        };

        if (autoSwitching) {
            autoSwitch();
            document.querySelector('.carousel-next').addEventListener('mousemove', () => clearInterval(switching));
            document.querySelector('.carousel-next').addEventListener('mouseout', () => autoSwitch());   
            document.querySelector('.carousel-prev').addEventListener('mousemove', () => clearInterval(switching));
            document.querySelector('.carousel-prev').addEventListener('mouseout', () => autoSwitch()); 
            indicators.forEach(dot => {
                dot.addEventListener('mouseover', () => clearInterval(switching));
                dot.addEventListener('mouseout', () => autoSwitch());
            });
        }

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
                slideIndex = 0;
            } else {
                offset += +width.replace(/\D/g, '');
                slideIndex++;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            indicators.forEach(dot => dot.classList.remove('active'));
            indicators[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = (+width.replace(/\D/g, '') * (slides.length - 1));
                slideIndex = slides.length - 1;
            } else {
                offset -= +width.replace(/\D/g, '');
                slideIndex--;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            indicators.forEach(dot => dot.classList.remove('active'));
            indicators[slideIndex].classList.add('active');
        });

        indicators.forEach(dot => {
            $(dot).click(() => {
                slideIndex = dot.getAttribute('data-slide-to');
                offset = dot.getAttribute('data-slide-to') * +width.replace(/\D/g, '');
                slidesField.style.transform = `translateX(-${offset}px)`;
                indicators.forEach(dot => dot.classList.remove('active'));
                indicators[slideIndex].classList.add('active');
            });
        });
    }
};

// $('.carousel').carousel();

$.prototype.createSlide = function({src = [], autoSwitching = false, time = 3000, speed = '0.5s'}) {
    for (let i = 0; i < this.length; i++) {
        if (src.length === 0) {
            return this;
        } else {
            const slides = [];
            const dots = [];
            for (let j = 0; j < src.length; j++) { 
                let slide = document.createElement('div');
                let dot = document.createElement('li');
                slide.classList.add('carousel-item');
                let slideImg = document.createElement('img');
                slideImg.src = src[j];
                slide.append(slideImg);
                dot.setAttribute(`data-slide-to`, `${j}`);

                slides.push(slide);
                dots.push(dot);
                dots[0].classList.add('active');
            }
            this[i].innerHTML = `
                <ol class="carousel-indicators">
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-slides">
                    </div>
                </div>
                <a href="#" class="carousel-prev" data-slide="prev">
                    <span class="carousel-prev-icon">&lt;</span>
                </a>
                <a href="#" class="carousel-next" data-slide="next">
                    <span class="carousel-next-icon">&gt;</span>
                </a>
            `;
            this[i].querySelector('.carousel-indicators').append(...dots);
            this[i].querySelector('.carousel-slides').append(...slides);
            $(this[i]).carousel(autoSwitching, time, speed);
        }
        
    }

};