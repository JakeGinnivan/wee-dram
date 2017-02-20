export const searchLatest = (haveResults, performSearch) => {
    let currentSearchTerm

    return {
        searchTermChanged: (searchTerm) => {
            currentSearchTerm = searchTerm

            setTimeout(() => {
                if (currentSearchTerm === searchTerm) {
                    performSearch(searchTerm).then(r => {
                        if (currentSearchTerm === searchTerm) {
                            haveResults(r)
                        }
                    }).catch(err => console.log(err))
                }
            }, 500)
        }
    }
}