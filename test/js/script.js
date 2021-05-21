$('.carousel').createSlide({src:["https://cdn.pixabay.com/photo/2018/09/25/17/14/drill-3702674_1280.jpg", "https://cdn.pixabay.com/photo/2014/09/13/21/49/drill-444517_1280.jpg", "https://cdn.pixabay.com/photo/2014/09/13/21/48/drill-444513_1280.jpg", "https://cdn.pixabay.com/photo/2016/04/17/15/12/diy-1334858_1280.jpg"], autoSwitching: true});

const name = 'John';
$('h2').eq(0).html(`Это предложение именно для вас, ${name}`);