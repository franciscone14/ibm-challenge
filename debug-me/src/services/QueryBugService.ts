import { EMPTY, Observable } from "rxjs";
import Api from "../api/Api";
import { catchError } from 'rxjs/operators';
import { SearchResult } from '../models/SearchResult';
import IService from "./IService";
import GeneralService from "./GeneralService";
import { SnackbarContextType } from "../contexts/SnackbarContext";

export default class QueryBugService extends GeneralService implements IService {

    constructor(context: SnackbarContextType){
        super(context);
    }

    get<SearchResult>(query?: string): Observable<SearchResult> {
        return Api.get<SearchResult>(`/search/${query}`, {        
            'x-access-token': sessionStorage.getItem('token')
        }).pipe(
            catchError(err => {
                this.handleError(err.response.data.detail);
                return EMPTY;
            })
        );
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