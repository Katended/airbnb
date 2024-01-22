import { Controller } from "@hotwired/stimulus"
const axios = require('axios');


export default class extends Controller {
    static targets = ["email", "submit"];

    connect() {
        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();
            alert('test');
            if (this.emailTarget.value.length > 0) {
                axios.get('/api/users_by_email', {
                    params: { email: this.emailTarget.value }
                }).then(() => { Turbo.visit('/users/sin_in') }).catch((resposne) => { Turbo.visit('/users/sin_up') });
            } else {
                //  this.submitTarget.disabled = true;
            }
        });
    }


}
