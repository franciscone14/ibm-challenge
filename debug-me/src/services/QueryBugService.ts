import { EMPTY, Observable } from "rxjs";
import Api from "../api/Api";
import { catchError } from 'rxjs/operators';

export default class QueryBugService {
    get<String>(query?: string): Observable<String> {
        return Api.get<String>(`/search/${query}`)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return EMPTY;
                })
            )
    }
}