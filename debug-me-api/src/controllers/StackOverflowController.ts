import { Request, Response } from 'express';
import axios from 'axios';
import { Search } from '../models/Search';

export default {
    async query(request: Request, response: Response){
        const { query } = request.params;
        const args = `?q=${query}&site=stackoverflow&`
        axios.get('https://api.stackexchange.com/2.2/search/advanced' + args, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            new Search({
                query: query,
                pagination: res.data.items.length | 0,
                items: res.data.items,
                user: request.session.userId
            }).save().then(newSearch => {
                response.json({result: 'ok', id: newSearch._id});
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
}