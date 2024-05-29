document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('toggle-menu');
    menuToggle.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        var logo = document.getElementById('logo');
        var link = document.getElementById('link');

        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        
        } else {
            menu.style.display = 'flex';
           
        }
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll(".slides div");

function showSlide(index) {
  // Скрыть текущий слайд
  slides[currentSlide].style.display = "none";
  
  // Проверить границы индекса
  currentSlide = (index + slides.length) % slides.length;
  
  // Показать новый слайд
  slides[currentSlide].style.display = "block";
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide); // Инициализируем первый слайд
});


const accButtons = document.querySelectorAll('.accordion-button');
function toggleAccordion() {
    this.classList.toggle('active');
  
    const content = this.nextElementSibling;
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
  
  accButtons.forEach(button => button.addEventListener('click', toggleAccordion));




  // Получаем все кнопки для фильтрации
const filterButtons = document.querySelectorAll('.filter-button');
// Получаем все элементы, которые будем фильтровать
const filterItems = document.querySelectorAll('.filter-item');

// Функция фильтрации
function filterItemsByCategory() {
    const filter = this.getAttribute('data-filter'); // Получаем фильтр из data-атрибута нажатой кнопки

    filterItems.forEach(item => {
        // Если выбран фильтр "все" или элемент соответствует категории, показываем его
        if (filter === 'all' || item.classList.contains(filter)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Назначаем обработчик на каждую кнопку фильтрации
filterButtons.forEach(button => button.addEventListener('click', filterItemsByCategory));


function openTab(evt, tabName) {
    // Получаем все элементы с class="tab-content" и скрываем их
    var tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Получаем все элементы с class="tab-button" и убираем класс "active-tab-button"
    tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active-tab-button", "");
    }

    // Показываем текущий таб, и добавляем класс "active-tab-button" кнопке, которая открывает этот таб
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab-button";
}

// По умолчанию открываем первую вкладку
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});





// Получаем модальное окно
var modal = document.getElementById('myModal');

// Получаем кнопку, которая открывает модальное окно
var btn = document.getElementById('modalBtn');

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
    modal.style.display = 'block';
}

// Закрываем модальное окно при клике на символ "X"
span.onclick = function() {
    modal.style.display = 'none';
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

  