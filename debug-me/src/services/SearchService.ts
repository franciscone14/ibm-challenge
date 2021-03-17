import { Observable, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";
import Api from "../api/Api";
import { Search } from "../models/Search";
import IService from "./IService";

export default class SearchService implements IService {

    get<Search>(id?: string): Observable<Search[] | Search> {
        const url: string = id ? `/searches/${id}` : '/searches';

        return Api.get<Search[]>(url)
            .pipe(
                catchError(err => {
                    console.log(err);
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
            .pipe(
                catchError(err => {
                    console.log(err);
                    return EMPTY;
                })
            )
    }
    
}