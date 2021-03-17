import { Token } from "../models/Token";
import Api from "../api/Api"
import { catchError } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";
import GeneralService from "./GeneralService";
import { SnackbarContextType } from "../contexts/SnackbarContext";

export default class LoginService extends GeneralService {

    constructor(context: SnackbarContextType){
        super(context);
    }

    googleLogin(googleToken: string): Observable<Token | void> {
        return Api.post<Token>('/auth/google', { token: googleToken })
            .pipe(
                catchError(err => {
                    this.handleError(err.response.data.detail);
                    return EMPTY;
                })
            );
    }
}