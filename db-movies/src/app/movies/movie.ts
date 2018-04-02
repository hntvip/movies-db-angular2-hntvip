export interface Movie {
    "vote_count": string,
    "id": number,
    "video": boolean,
    "vote_average": number,
    "title": string,
    "popularity": number,
    "poster_path": string,
    "original_language": string,
    "original_title": string,
    "genre_ids": Array<string>,
    "backdrop_path": string,
    "adult": boolean,
    "overview": string,
    "release_date": string
}
// example 

// "vote_count": 768,
// "id": 338970,
// "video": false,
// "vote_average": 6.2,
// "title": "Tomb Raider",
// "popularity": 202.323188,
// "poster_path": "/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
// "original_language": "en",
// "original_title": "Tomb Raider",
// "genre_ids": [
//   28,
//   12
// ],
// "backdrop_path": "/yVlaVnGRwJMxB3txxwA24XurSNp.jpg",
// "adult": false,
// "overview": "Lara Croft, the fiercely independent daught.",
// "release_date": "2018-03-08"