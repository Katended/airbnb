import { Controller } from "@hotwired/stimulus";
// import axios from "axios";
export default class extends Controller {

    static targets = ["email", "submit"];

    connect() {
        // console.log('axios: ', axios);
        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.emailTarget.value.length > 0) {
                console.log("working");
                // this.submitTarget.disabled = false;
            } else {
                //  this.submitTarget.disabled = true;
            }
        });
    }


}
