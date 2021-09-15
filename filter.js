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
class Filter {
  constructor() {
    
  }

  /* addAction(buttons, action) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
          this.action()
      });
    });
  } */

  destroy() {}

  filterData(button, data) {
    let buttonLabel = button.getAttribute("data-region");
    let filteredData = []
    /* let filteredData = data.filter((item) => {
      item.local === buttonLabel;
    }); */
    data.map( item => {
      if(item.local === buttonLabel) {
        filteredData.push(item)
      }
    })
    return filteredData
  }

  create(selector, data) {
      document.querySelector(selector).innerHTML = ''
      data.forEach((item) => {
        let el = document.createElement("div");
        el.setAttribute("data-mark", item.local);
        el.innerHTML = `
                <div class="link">
                    <h4>${item.title}</h4>
                    <div class="local-info">
                        
                        <span>${item.local}</span>
                    </div>
                    <a href="" data-bs-toggle="modal" data-bs-target="#vacancyModal" data-number= ${data.indexOf(
                        item
                    )}></a>
                </div>
            `;

        document.querySelector(selector).append(el);
    });
  }

}


function markButton() {
  buttons.forEach( button => {
    button.classList.remove('active')
  })
  this.classList.add('active')
}

const buttons = document.querySelectorAll('.filter-button')

const myFilter = new Filter()

myFilter.create(".vacancys-content", vacancys);



buttons.forEach( button => {
  button.addEventListener( 'click', (event) => {
    /* markButton() */
    let filteredData
    myFilter.filterData(event.target, vacancys)
    myFilter.create('.vacancys-content', filteredData)

  })
})