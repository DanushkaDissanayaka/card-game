import { Injectable } from "@angular/core";
import { NextCallback, ErrorCallback, ServiceHelper } from "../../common/service/service.helper";
import {AuthModel} from '../models/auth/auth.model'
import {TokenModel} from '../models/auth/token.model'
import {ErrorModel} from '../../common/models/error.model'

@Injectable({
    providedIn: 'root'
  })
  
export class AuthService {
    constructor(private _: ServiceHelper){}

    tryToLogIn(callback: NextCallback<TokenModel>, error: ErrorCallback<ErrorModel>, data: AuthModel) {
        this._.api().url('user/login').noAuth().json(data).post(callback, error)
    }
}