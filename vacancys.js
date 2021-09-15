/* ============================================ Vacancys Data ============================ */

const vacancys = [
  {
    title: "Кредитный специалист Бишкек",
    local: 'Бишкек',
    phone: "+996 700 000 0000",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.',
  },
  {
    title: "Аудитор г Кочкор",
    local: 'Нарын',
    phone: "+996 700 000 0000",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.',
  },
  {
    title: "Консультант Сокулук",
    local: 'Чуй',
    phone: "+996 700 000 0000",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.',
  },
  {
    title: "Системный администратор Ош",
    local: 'Ош',
    phone: "+996 700 000 0000",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.',
  },
  {
    title: "Бухгалтер Тюп",
    local: 'Иссык-Куль',
    phone: "+996 700 000 0000",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.',
  },
  {
    title: "Стажер Жалал-Абад",
    local: 'Жалал-Абад',
    phone: "+996 700 000 0000",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.',
  },
  {
    title: "Водитель Бишкек",
    local: 'Бишкек',
    phone: "+996 700 000 0000",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora? Minima, eveniet commodi. Amet rerum incidunt natus porro at. Laudantium, magni? Enim consequatur sequi eaque! Voluptates, ullam sunt, laudantium neque nostrum molestias cupiditate architecto dolorem quos laborum dolorum veniam impedit tempora, deleniti nesciunt possimus minima maiores distinctio veritatis consectetur. Sed.',
  },
];

/* ====================================== End Vacancys Data ========================= */



(function () {



  /* ========================================== Create Vacancy Links ====================================== */

function createVacancyLinks(data) {
    document.querySelector(".vacancys-content").innerHTML = ''
    data.map((vacancy) => {
      let div = document.createElement("div");
      div.classList.add("link");
      div.setAttribute('data-toggle', 'modal')
      div.setAttribute('data-region', vacancy.local)
      div.innerHTML = `
            <h4>${vacancy.title}</h4>
            <div class="local-info">
                <img src="wp-content/uploads/icons/local-marker.svg" alt="">
                <span>${vacancy.local}</span>
            </div>
            <a href="" data-bs-toggle="modal" data-bs-target="#vacancyModal" data-number= ${data.indexOf(
              vacancy
            )}></a>
        `;

      document.querySelector(".vacancys-content").append(div);
    });
  };

  createVacancyLinks(vacancys)

  /* let vacancyLinks = document.querySelectorAll(".link a")
  
  vacancyLinks.forEach((link) => {
    link.addEventListener("click", function() {
      console.log(this)
      console.log(filteredVacancys);
      changeModal(filteredVacancys, this)
      
    });
  }); */


  /* =============================================== Vacancys Filter ============================================== */

  const filterButtons = document.querySelectorAll(".filter-button");
  let filteredVacancys = vacancys


  filterButtons.forEach((button) => {
    button.addEventListener("click", vacancyFilter)
  })

  

  function vacancyFilter() {
    document.querySelector(".vacancys-content").innerHTML = ''
    

    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });
    this.classList.add('active')

    if (this.getAttribute("data-region") === "all") {
      createVacancyLinks(vacancys)
      return
    }

    filteredVacancys = [];

    vacancys.map((vacancy) => {
      if ( vacancy.local === this.getAttribute('data-region') ) {
        filteredVacancys.push(vacancy)
      }
    })

    createVacancyLinks(filteredVacancys)
    vacancyLinks = document.querySelectorAll(".link a");
    return filteredVacancys, vacancyLinks

  }



  /* ================================================ Change Modal Content ======================================= */
  const closeButtons = document.querySelectorAll("[data-dismiss=modal]");

  const openButtons = document.querySelectorAll("[data-toggle=modal]");

  openButtons.forEach((button) => {
    button.addEventListener("click", modal.open);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", modal.close);
  });
  
  let modalContent = document.querySelector("#vacancyModal .modal-content");

  /* function changeModal(link, data = vacancys) {
    let linkNumber = link.getAttribute("data-number");
    console.log(data);

    modalContent.querySelector(".modal-header").innerHTML = `
      <h5 class="modal-title" id="exampleModalLabel">${data[linkNumber].title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;

    modalContent.querySelector('.modal-body').innerHTML = `
        <p>${data[linkNumber].text}</p>
        <div class="local-info">
            <img src="wp-content/uploads/icons/local-marker.svg" alt="">
            <span>${data[linkNumber].phone}</span>
        </div>
  `;
  } */



  function changeModal(data, link) {
    let linkNumber = link.getAttribute('data-number')
    
    modalContent.querySelector(".modal-header").innerHTML = `
      <h5 class="modal-title" id="exampleModalLabel">${data[linkNumber].title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;

    modalContent.querySelector(".modal-body").innerHTML = `
        <p>${data[linkNumber].text}</p>
        <div class="local-info">
            <img src="wp-content/uploads/icons/local-marker.svg" alt="">
            <span>${data[linkNumber].phone}</span>
        </div>
  `;
  }

  /* ================================== Close Modal ============================== */
  /* document.querySelector(".close-modal").addEventListener("click", clickClose); */


  /* function clickClose() {
    this.closest("#vacancyModal").querySelector(".btn-close").click();
  } */

})();









