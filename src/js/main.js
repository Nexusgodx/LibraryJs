import $ from './lib/lib';

// $('#first').on('click', ()=>{
//     $('div').eq(1).fadeOut(800);
// });

// $('[data-count="second"]').on('click', ()=>{
//     $('div').eq(2).fadeOut(800);
// });

$('button').eq(2).on('click', ()=>{
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
        },
        btns: {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Данные сохранены');
                    }
                ]
            ]
        }
    }); 
});

$('.carousel').createSlide({src : ['https://upload.wikimedia.org/wikipedia/commons/a/a4/%D0%97%D0%B0%D0%BA%D0%B0%D1%82_%D0%9F%D0%B0%D0%B0%D0%BD%D0%B0%D1%8F%D1%80%D0%B2%D0%B8.jpg',
'https://spacegid.com/wp-content/uploads/2016/12/1435590843_969114384.jpg', 'https://moya-planeta.ru/upload/images/xl/12/74/1274272b44a29b045a4466d1cdf2ab79.jpg'], autoSwitching: false});




