import { searchLatest } from './searchLatest'

it('it searches after timeout', (done) => {
    const searchApi = searchLatest(results => {
        expect(results).toBeDefined()
        done()
    })

    searchApi.searchTermChanged('glen')
});
