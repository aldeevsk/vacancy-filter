
class Modal {
  constructor(
    selector,
    options = {
      class: "modal md",
    }
  ) {
    this.$el = document.querySelector(selector);
  }

  create(data) {
    let div = document.createElement("div");
    div.classList.add("modal");
    /* div.setAttribute("data-dismiss", "modal"); */
    div.innerHTML = `
        <div class="modal-content">
            <header class="modal-header">
                ${data.title}
                <button class="close" data-dismiss="modal">&#10006;</button>
            </header>
            <article class="modal-body">
                <div>${data.phone} </div>
                <div>${data.local}</div>
                <p>${data.text}</p>
            </article>
            <footer class="modal-footer">
                ${data.footer}
            </footer>
        </div>
    `;
    this.$el.append(div);
  }

  destroy() {
    document.querySelector(".modal").remove();
  }

  open() {
    document.querySelector(".modal").classList.add("active");
  }
  close() {
    document.querySelector(".modal").classList.remove("active");
  }
}
/* ========================================== Class Modal End ============================= */


const modal = new Modal("body", {
  class: "modal",
});





function addAction() {
  let closeButtons = document.querySelectorAll("[data-dismiss=modal]");
  let openButtons = document.querySelectorAll("[data-toggle=modal]");
  openButtons.forEach((button) => {

    button.addEventListener("click", () => {
      modal.create(filteredVacancys[button.getAttribute('data-mark')])
      setTimeout(() => {
        modal.open();
      }, 0);
      
      closeButtons = document.querySelectorAll("[data-dismiss=modal]")
      closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          modal.close()
          setTimeout(() => {
            modal.destroy();
          }, 400); /* -- timeout depend on transition in css .modal */
        });
      });

      document.querySelector(".modal").addEventListener("click", (event) => {
        if(event.target.classList.contains('modal')) {
          modal.close();
          setTimeout(() => {
            modal.destroy();
          }, 400);
        }
        
      });
    })
  });

  
}






