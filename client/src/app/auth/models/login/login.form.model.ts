import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthModel } from "../auth/auth.model";

export class LoginFormModel {
    form: FormGroup

    constructor() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })
    }

    is_valid(/* required param here */): boolean {
        // validate from here and  get validation messages
        return this.form.valid
    }

    get_value(): AuthModel {
        // return value model
        return {
            username: this.form.value.username,
            password: this.form.value.password
        }
    }

    /**
     * Get user name error message
     */
    public get username_error():string | null {
        if (!this.form.controls['username'].touched)
            return null

        if (this.form.controls['username'].getError('required'))
            return 'Username is required'

            if (this.form.controls['username'].getError('email'))
            return 'Username should be a email'

        return null
    }

    /**
     * Get password error message
     */
    public get password_error():string | null {
        if (!this.form.controls['password'].touched)
            return null

        if (this.form.controls['password'].getError('required'))
            return 'Password is required'
        
        return null
    }
}