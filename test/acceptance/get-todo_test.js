const app = require('../../server')
const { expect } = require("chai")
const axios = require('axios')
const mongoose = require('mongoose');



describe('GET /api/todo', function () {
    afterEach(async ()=> {
        delete mongoose.connection.models['Todo']
        await app.close()
    })
    it('Returns a list of todos', async function () {
        //when
        const result = await axios.get('http://localhost:8080/api/todo')
        //then
        expect(result.data).to.deep.equal([])
    })
})
