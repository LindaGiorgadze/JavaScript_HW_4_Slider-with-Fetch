const slidesContainer = document.querySelector('.slidesContainer');
const navigation = document.querySelectorAll('.navigation');

fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/slides')
    .then( response => response.json())
    .then ( data => {
        let currentSlide = 0;
        const slideCount = data.length;

        data.forEach( item => {
            const image = item.image;
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.style.backgroundImage = 'url('+image+')';
            slidesContainer.appendChild(slide);

            const title = item.title;
            const h2 = document.createElement('h2');
            h2.classList.add('title')
            slide.appendChild(h2);
            
            if( title[6] == '1'){
                h2.textContent = 'Animals'
            } if (title[6] == '2') {
                h2.textContent = 'Arch'
            } if (title[6] == '3') {
                h2.textContent = 'Nature'
            } if (title[6] == '4') {
                h2.textContent = 'Tech'
            }
            // function slideText( x ) {
            //     h2.textContent = x[6];
            // }
            // slideText(title)
        })

        navigation.forEach(button => {
        button.addEventListener('click', (event) => {
            if (event.target.classList.contains('navigation-prev')) {
            currentSlide -= 1;

            if (currentSlide < 0) {
                currentSlide = slideCount - 1;
            }
            } else {
            currentSlide += 1;

            if (currentSlide > slideCount - 1) {
                currentSlide = 0;
            }
            }

            slidesContainer.style.left = '-' + (currentSlide * 100) + '%';
        })
        })
    })
    .catch( error => alert('Catch Error'));
