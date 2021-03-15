import { query, Request, Response } from 'express';
import axios from 'axios';
import { Question } from '../models/Question';
import { Search } from '../models/Search';

export default {
    async index(request: Request, response: Response) {
        const { id } = request.params;
        Search.findById(id).then(search => {
            if(search){
                response.status(200);
                response.json(search);
            }
            else{
                response.status(404);
                response.json({detail: 'There is no resource for the given Id'});
            }
        })
    }
}