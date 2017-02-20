import { searchLatest } from './searchLatest'

it('it searches after timeout', (done) => {
    const searchApi = searchLatest(results => {
        expect(results).toMatchSnapshot()
        done()
    }, () => {
        return Promise.resolve([{ id: 1, name: 'Glenmorangie Signet', region: '' }])
    })

    searchApi.searchTermChanged('glen')
});
