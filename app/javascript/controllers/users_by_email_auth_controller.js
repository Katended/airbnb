import { Controller } from "@hotwired/stimulus"
const axios = require('axios');


export default class extends Controller {

    static targets = ["email", "submit"];

    connect() {

        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.emailTarget.value.length > 0) {
                console.log('axios: ');
            } else {
                //  this.submitTarget.disabled = true;
            }
        });
    }


}
