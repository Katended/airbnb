import { Controller } from "@hotwired/stimulus";
import { enter, leave, toggle } from 'el-transition';

export default class extends Controller {

  static targets = ['closeButton']

  connect() {
    document.getElementById('modal-wrapper').addEventListener("click", this.closeModal);
    this.closeButtonTarget.addEventListener("click", () => {
      leave(document.getElementById('modal-wrapper'));
      leave(document.getElementById('modal-backdrop'));
      leave(document.getElementById('modal-panel'));
    });
  }

  closeModal(event) {
    const modalClicked = document.getElementById('modal-panel').contains(event.target);

    if (!modalClicked && event.target.id !== "modal-trigger") {
      leave(document.getElementById('modal-wrapper'));
      leave(document.getElementById('modal-backdrop'));
      leave(document.getElementById('modal-panel'));
    }
  }

  showModal() {
    console.log("showing modal");
    enter(document.getElementById('modal-wrapper'));
    enter(document.getElementById('modal-backdrop'));
    enter(document.getElementById('modal-panel'));
  }

}
