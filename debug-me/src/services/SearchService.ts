import { Observable, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";
import Api from "../api/Api";
import { SnackbarContextType } from "../contexts/SnackbarContext";
import { Search } from "../models/Search";
import GeneralService from "./GeneralService";
import IService from "./IService";

export default class SearchService extends GeneralService implements IService  {

    constructor(context: SnackbarContextType){
        super(context);
    }

    get<Search>(id?: string): Observable<Search[] | Search> {
        const url: string = id ? `/searches/${id}` : '/searches';

        return Api.get<Search[]>(url)
            .pipe(
                catchError(err => {
                    this.handleError(err.response.data.detail);
                    return [];
                })
            )
    }

    post<T>(arg: T): Observable<T[]> {
        throw new Error("Method not Allowed");
    }

    patch<T>(arg: T): Observable<T[]> {
        throw new Error("Method not Allowed");
    }

    delete<Search>(id: string): Observable<void | Search> {
        return Api.delete<Search>('/searches', id)
            .pipe(() => {
                this.handleSucess("Entry deleted !");
                return EMPTY;
            })
            .pipe(
                catchError(err => {
                    this.handleError(err.response.data.detail);
                    return EMPTY;
                })
            )
    }
    
}