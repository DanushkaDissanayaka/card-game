import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service'
import { TokenModel } from '../../models/auth/token.model';
import { ErrorModel } from '../../../common/models/error.model';
import { AuthModel } from '../../models/auth/auth.model';
import { LoginFormModel } from '../../models/login/login.form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  _login_form: LoginFormModel

  constructor(private _auth_service: AuthService) {
    this._login_form = new LoginFormModel()
  }

  ngOnInit(): void {
    this.tryToLogIn({ username: 'dxdjfx@gmail.com', password: '1234' })
  }

  /**
   * Try for user login
   * @param auth login credential
   */
  tryToLogIn(auth: AuthModel): void {
    this._auth_service.tryToLogIn(
      (r: TokenModel) => {
        //TODO: Impliemt login stratergy here
        console.log(r);
      }, (e: ErrorModel) => {
        console.log(e);
      }, auth)
  }

  onLoginFormSubmit() {    
    if (this._login_form.is_valid()) {
      this.tryToLogIn(this._login_form.get_value())
    }
  }

}
