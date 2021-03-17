const {test, expect, it } = require('@jest/globals');
const supertest = require('supertest');
const app = require('../server');
const SearchHistoryController = require('../controllers/SearchHistoryController');

test('GET /searches', async () => {
    const response = await supertest(app)
        .get('/searches');

    expect(response.status).toEqual(401);
})