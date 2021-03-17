import { Token } from "../models/Token";
import Api from "../api/Api"
import { catchError } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";

export default class LoginService {
    googleLogin(googleToken: string): Observable<Token | void> {
        return Api.post<Token>('', { token: googleToken })
            .pipe(
                catchError(err => {
                    console.log(err);
                    return EMPTY;
                })
            );
    }
}