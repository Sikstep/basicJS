/* Задания на урок 44:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    let {movies} = movieDB;
    
    const promoAdv = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelector('.promo__genre'),
          filmList = document.querySelector('.promo__interactive-list'),
          addMovie = document.querySelector('.adding__input'),
          btn = document.querySelector('.add button'),
          addForm = document.querySelector('form.add'),
          checkbox = addForm.querySelector('[type="checkbox"]');
          
          
          
       
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
   
    const makeChanges = () => {
        promoGenre.textContent = 'ДРАМА';
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    
    
    const sortArr = (arr) => {
        arr.sort();
    };
    

    // movies.forEach((film, i) => {
    //     filmList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
    //     <div class="delete"></div>
    // </li>`;
    // });

    function createMovieList (film, parent) {
        parent.innerHTML = '';
        sortArr(film);

        film.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
                </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movies.splice(i, 1);
                createMovieList(film, parent);
            });
        });
    }
    deleteAdv(promoAdv);
    makeChanges();
    
    createMovieList(movies, filmList);
    

    // for (let i = 0; i < filmList.length; i++) {
    //     filmList[i].innerHTML = `${i + 1} ${newList[i]}
    //                                 <div class="delete"></div>`;
    // }
    
    /* Задания на урок 48:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addMovie.value;
        const favorit = checkbox.checked;
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favorit) {
                console.log('Добавляем любимый фильм');
            }

            movies.push(newFilm);
            sortArr(movies);
            createMovieList(movies, filmList);
        }

        
        e.target.reset();
    });



    // Мои наработки "старт"
    // btn.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     movies.push(sliceStringInput(addMovie.value));
    //     appEndInPage(addMovie.value);
    //     addMovie.value = "";
    
       
    //     console.log(movies);
    // });
    
    // function sliceStringInput (value) {
    //     if (value.length >= 21) {
    //        return value = `${value.slice(0, 21)}...`;
    //     } else {
    //         return value;
    //     }
    // }
   
    
    // // Добавление нового элемент в HTML
    // function appEndInPage (item) {
    //     let newLi = document.createElement(`li`);
    //     newLi.classList.add('promo__interactive-item');
    //     let newTextLi = document.createTextNode(`${movies.length} ${item}`);
    //     newLi.appendChild(newTextLi);
        
    //     let newDiv = document.createElement('div');
    //     newDiv.classList.add('delete');
    //     newLi.appendChild(newDiv);
   
    
    //     document.querySelector('.promo__interactive-list').append(newLi);
    // }
    
    
    
    // function removeElementInList (element) {
    
    //     element.forEach(item => {
    //         item.lastChild.addEventListener('click', () => {
    //             item.remove();
    //         });
    //     });
  
    // }
    // removeElementInList(filmList);
// Мои наработки финиш





});

