export const moviesArray= [
    {
        id: "a",
        img: "https://image.tmdb.org/t/p/original/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg",
        title: "Lego Batman",
        year: 2024,
        duration: 120,
        avg_rating: 4.5,
        genre: "Comedy",
        synopsis: "In the irreverent spirit of fun that made The LEGO® Movie a worldwide phenomenon, the self-described leading man of that ensemble - LEGO Batman - stars in his own big-screen adventure. But there are big changes brewing in Gotham, and if he wants to save the city from The Joker's hostile takeover, Batman may have to drop the lone-vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.",
        reviews: [
            {
                id: 'a',
                description: 'Great movie',
                rating: 4,
                user: "juancito",
                comments: [
                    {
                      id: 'a',
                      user: 'pepe',
                      description: 'great review :D'
                    }
                ]
            }
        ]
    },
    {
        id: "b",
        img: "https://image.tmdb.org/t/p/original/i0nzOT8reCr4lLa7LaKqfxfVnIx.jpg",
        title: "Spiderman: Far From Home",
        year: 2019,
        duration: 120,
        avg_rating: 4.2,
        genre: "Action",
        synopsis: 'Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.',
        reviews: [
            {
                id: 'a',
                description: 'Great cast',
                rating: 4,
                user: 'camila01',
                comments: [
                    {
                      id: 'a',
                      user: 'spidermanfan2',
                      description: 'great review :D'
                    }
                ]
            }
        ]
    }
]

export const usersArray = [
    {
        id: 'a',
        name: 'Pedro',
        lastName: 'Gomez',
        email: 'pedrog@mail.com',
        role: 'admin',
        password: '123',
        isBanned: false,
        reviews: [{
            id: 'a',
                description: 'Great cast',
                rating: 4,
        }]
    }
]