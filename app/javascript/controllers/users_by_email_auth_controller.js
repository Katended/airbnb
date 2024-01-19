import { Controller } from "@hotwired/stimulus";
import axios from "axios";

export default class extends Controller {

    static targets = ["email", "submit"];

    connect() {

        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.emailTarget.value.length > 0) {
                console.log('axios: ', axios);
            } else {
                //  this.submitTarget.disabled = true;
            }
        });
    }


}
