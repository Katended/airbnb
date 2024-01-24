import { Controller } from "@hotwired/stimulus"
import axios from "axios"
export default class extends Controller {
    static targets = ["email", "submit"];

    connect() {
        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.emailTarget.value.length > 0) {
                axios.get('/api/users_by_email', {
                    params: { email: this.emailTarget.value },
                    headers: { "accept": "application/json" }
                }).then(() => { Turbo.visit('/users/sign_in') }).catch((resposne) => { Turbo.visit('/users/sign_up') });
            } else {
                //  this.submitTarget.disabled = true;
            }
        });
    }


}
