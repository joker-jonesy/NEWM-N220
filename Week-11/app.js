const movies = [
    { id: 1, title: 'The Lion King', tags: ['animation', 'family', 'musical', 'drama'] },
    { id: 2, title: 'Harry Potter and some stupid title', tags: ['fantasy', 'adventure', 'family'] },
    { id: 3, title: 'Inception', tags: ['sci-fi', 'thriller', 'heist'] },
    { id: 4, title: 'Titanic', tags: ['romance', 'drama', 'historical'] },
    { id: 5, title: 'War of the Stars', tags: ['sci-fi', 'space', 'adventure'] }
]

'string'.split(0,1, "<mk>")

function convertString(str){
    return str.toLowerCase().replaceAll(" ", "")
}

document.getElementById("submit").addEventListener('click', function () {
    const searchValue = convertString(document.getElementById('search').value)
    let results = movies.filter(movie => {
        return convertString(movie.title).includes(searchValue);
    })

    if(results.length===0){
        results = movies.filter(movie => {
            return movie.tags.includes(searchValue)
        })
    }

    renderMovies(results);
})

function renderMovies(mv) {
    document.getElementById('wrapper').innerHTML = ""

    if(mv.length === 0){
        document.getElementById('wrapper').innerHTML = "No Movies Found based on your search."
        return;
    }

    mv.forEach(movie => {
        const ele = document.createElement("div");
        ele.innerHTML = movie.title;
        document.getElementById('wrapper').appendChild(ele);
    })
}

renderMovies(movies)