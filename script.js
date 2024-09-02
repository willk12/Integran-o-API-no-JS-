const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTBjZDIyMjcxMjIyNWY1MzliZmU1NTM1MzRmZTJlZSIsIm5iZiI6MTcyNTI4Nzk0NS40NDExNTksInN1YiI6IjY2ZDI0ZDg2NjVlOGI0ZmZmOGFkZjQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.662IZcxxd6-8Xt74SyP-iKH_3sWGKcGss6cgszOMhns"

const button = document.getElementById('geration')

const imgUrl = 'https://image.tmdb.org/t/p/original'

button.addEventListener('click', ()=>{

   showMovies();
})

async function showMovies() {

    const request = fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1',{
        method: 'GET',
        headers: {
            'Content-Type': "aplication/json",
            'Authorization': `Bearer ${token}`
        }
    }).then(data => data.json()).then(results => {

        

        const Imgs = results.poster_path;
        

    })





    
}


