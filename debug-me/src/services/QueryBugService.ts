import { EMPTY, Observable } from "rxjs";
import Api from "../api/Api";
import { catchError } from 'rxjs/operators';
import { SearchResult } from '../models/SearchResult';
import IService from "./IService";

export default class QueryBugService implements IService {

    get<SearchResult>(query?: string): Observable<SearchResult> {
        return Api.get<SearchResult>(`/search/${query}`)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return EMPTY;
                })
            )
    }
    
    post<T>(arg: T): Observable<T[]> {
        throw new Error("Method not implemented.");
    }

    patch<T>(arg: T): Observable<T[]> {
        throw new Error("Method not implemented.");
    }

    delete<T>(id: string | number): Observable<void | T> {
        throw new Error("Method not implemented.");
    }
}