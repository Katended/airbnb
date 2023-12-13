import { Controller } from "@hotwired/stimulus";
import { enter, leave, toggle } from 'el-transition';

export default class extends Controller {

  static targets = ["openUserMenu", "userAuthLink"];
  connect() {
    this.openUserMenuTarget.addEventListener("click", this.toggleDropdownMenu);
    // this.signUpLink.addEventListener("click", this.toggleDropdownMenu);
    // this.loginLink.addEventListener("click", this.toggleDropdownMenu);

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("clicked");
      });
    });
  }

  toggleDropdownMenu() {
    toggle(document.getElementById("user-menu"));
  }
}
