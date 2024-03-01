import { Controller } from "@hotwired/stimulus"
import axios from "axios"
export default class extends Controller {
    static targets = ["email", "submit", "errorMessage", "emailWrapper", "invalidSvg"];

    connect() {
        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.emailTarget.value.length > 0) {
                axios.get('/api/users_by_email', {
                    params: { email: this.emailTarget.value },
                    headers: { "accept": "application/json" }
                }).then(() => { Turbo.visit('/') }).catch((resposne) => { Turbo.visit('/users/sign_up') });
            } else {
                this.emailWrapperTarget.classList.add('invalid-inset-input-text-field');
                this.emailWrapperTarget.classList.remove('focus-within:ring-1');
                this.emailWrapperTarget.classList.remove('focus-within:ring-black');
                this.emailWrapperTarget.classList.remove('focus-within:border-black');
                this.invalidSvgTarget.classList.remove('hidden');
                this.errorMessageTarget.classList.remove('hidden');

            }
        });
    }


}
