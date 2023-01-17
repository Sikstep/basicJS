"use strict";

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// 1st part

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


// 2nd part

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3rd part

// const nameLastFilmWatching1 = prompt('Один из последних просмотренных фильмов?', '');
// const userRatingFilm1 = +prompt('На сколько оцените его?', '');

// const nameLastFilmWatching2 = prompt('Один из последних просмотренных фильмов?', '');
// const userRatingFilm2 = +prompt('На сколько оцените его?', '');

// const movies = {
//     answerFilm1: nameLastFilmWatching1,
//     answerRatingFilm1: userRatingFilm1,
//     answerFilm2: nameLastFilmWatching2,
//     answerRatingfilm2: userRatingFilm2
// };


// personalMovieDB.movies[nameLastFilmWatching2] = userRatingFilm2;


// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const nameLastFilmWatching1 = prompt('Один из последних просмотренных фильмов?', '');
//     const userRatingFilm1 = +prompt('На сколько оцените его?', '');
//     if (nameLastFilmWatching1 == null || nameLastFilmWatching1.length > 50 || nameLastFilmWatching1 == '' || 
//         userRatingFilm1 == null || userRatingFilm1 == '' || userRatingFilm1.length > 50) {
//         console.log('error');
//         i--;
//         continue;
//         } 
//     console.log('done'); 
//     personalMovieDB.movies[nameLastFilmWatching1] = userRatingFilm1;
    
// }
// console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Посмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

// ПОЧЕМУ ЭТО НЕ РАБОТАЕТ????
let i = 0;
while (i < 2) {
    console.log(i);
    const nameLastFilmWatching1 = prompt('Один из последних просмотренных фильмов?', '');
    const userRatingFilm1 = +prompt('На сколько оцените его?', '');
    i++;
    
    if (nameLastFilmWatching1 != null && userRatingFilm1 != null && nameLastFilmWatching1 != '' && 
    userRatingFilm1 != '' && nameLastFilmWatching1.length < 50 && userRatingFilm1.length < 50) {
        personalMovieDB.movies[nameLastFilmWatching1] = userRatingFilm1;
        console.log('Done');
        } else {
        console.log('Error');
        // i--;
    }
}
console.log(personalMovieDB);

// И ЭТО ТОЖЕ!!!
//  for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//         } else {
//         console.log('Error');
//         i--;
//     }
// }
// console.log(personalMovieDB);


// let i = 0;
// while (i < 2) {
//     console.log(i);
//     const nameLastFilmWatching1 = prompt('Один из последних просмотренных фильмов?', '');
//     const userRatingFilm1 = +prompt('На сколько оцените его?', '');
//     i++;
    
//     if (nameLastFilmWatching1 == null || nameLastFilmWatching1.length > 50 || nameLastFilmWatching1 == '' || 
//             userRatingFilm1 == null || userRatingFilm1 == '' || userRatingFilm1.length > 50) {
//                 console.log('Error');
//                 i--;
//         } else {
//         console.log('Done');
//         personalMovieDB.movies[nameLastFilmWatching1] = userRatingFilm1;
        
//     }
// }
// console.log(personalMovieDB);

// Код Ивана работает!
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// console.log(personalMovieDB);