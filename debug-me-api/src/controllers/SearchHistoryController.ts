import { Request, Response } from 'express';
import { Search } from '../models/Search';

export default {
    async index(request: Request, response: Response) {
        Search.find({userId: request.session.userId}).then(search => {
            if(search){
                response.status(200);
                response.json(search);
            }
            else{
                response.status(404);
                response.json({detail: 'You have not made any search yet'});
            }
        })
    },
    async search(request: Request, response: Response) {
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