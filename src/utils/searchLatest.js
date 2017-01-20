import { searchWhiskys } from '../api'

export const searchLatest = (haveResults) => {
    let currentSearchTerm

    return {
        searchTermChanged: (searchTerm) => {
            currentSearchTerm = searchTerm

            setTimeout(() => {
                if (currentSearchTerm === searchTerm) {
                    searchWhiskys(searchTerm).then(r => {
                        if (currentSearchTerm === searchTerm) {
                            haveResults(r)
                        }
                    }).catch(err => console.log(err))
                }
            }, 500)
        }
    }
}