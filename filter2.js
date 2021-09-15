/* ============================================ Vacancys Data ============================ */

const vacancys = [
  {
    title: "Кредитный специалист Бишкек",
    local: "Бишкек",
    phone: "+996 700 000 0000",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.",
  },
  {
    title: "Аудитор г Кочкор",
    local: "Нарын",
    phone: "+996 700 000 0000",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.",
  },
  {
    title: "Консультант Сокулук",
    local: "Чуй",
    phone: "+996 700 000 0000",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.",
  },
  {
    title: "Системный администратор Ош",
    local: "Ош",
    phone: "+996 700 000 0000",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.",
  },
  {
    title: "Бухгалтер Тюп",
    local: "Иссык-Куль",
    phone: "+996 700 000 0000",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.",
  },
  {
    title: "Стажер Жалал-Абад",
    local: "Жалал-Абад",
    phone: "+996 700 000 0000",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.",
  },
  {
    title: "Водитель Бишкек",
    local: "Бишкек",
    phone: "+996 700 000 0000",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.",
  },
];


/* ======================================================== Filter =================================================== */

function markButton(thisButton, buttons) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  thisButton.classList.add("active");
}



let filteredVacancys = vacancys

function dataFilter(label, data, key) {
    
    let filteredData = []

    if(label === 'all') {
        filteredData = data
        return filteredVacancys = filteredData
    }

    filteredData = data.filter( dataItem => dataItem[key] === label)
    
    return filteredVacancys = filteredData
}


function createLink(selector, data) {
      document.querySelector(selector).innerHTML = ''
      data.forEach((item) => {
        let el = document.createElement("div");
        el.classList.add('link')
        el.setAttribute("data-mark", data.indexOf(item));
        el.setAttribute("data-toggle", "modal")
        el.innerHTML = `
            <h4>${item.title}</h4>
            <div class="local-info">
                
                <span>${item.local}</span>
            </div>
            <a href="" data-bs-toggle="modal" data-bs-target="#vacancyModal" data-number= ${data.indexOf(
                item
            )}></a>
            `;

        document.querySelector(selector).append(el);
    });
    
    addAction() /* --- Depend on classModal.js => function addAction */
  }

createLink('.vacancys-content', filteredVacancys)

const filterButtons = document.querySelectorAll('.filter-button')

filterButtons.forEach( button => {
    button.addEventListener( 'click', (event) => {
        markButton(event.target, filterButtons)
        dataFilter(event.target.getAttribute('data-region'), vacancys, 'local')
        createLink('.vacancys-content', filteredVacancys)
    } )
})

