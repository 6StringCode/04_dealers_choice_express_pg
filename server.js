const express = require('express');
const app = express();

const db = require('./db');
const { conn, Player, Genre } = db;

app.get('/', (req, res) => res.redirect('/genres'));

app.get('/genres', async(req, res, next) => {
    try {
        const genres = await Genre.findAll({
            include: [ Player ]
        });

        // const players = await Player.findAll({
        //     include: [ Genre ]
        // });
        
        res.send(
        `<html>
            <head>
                <title>Who Are Your Favorite Guitarists?</title>
            </head>
            <body>
                <h1>Who Are Your Favorite Guitarists?</h1>
                <h2>Click the Genre to make your choice:</h2>
                ${
                    genres.map( genre => {
                        return `
                        <ul><a href='/genres/${ genre.id }'>${ genre.name } </a>
                            
                        </ul>
                        `
                    }).join('')
                }
            </body>
        </html>`
        )

    }
    catch(ex){
        next(ex);
    }
}); 

app.get('/genres/:id', async(req, res, next) => {
    try {
        const genre = await Genre.findByPk(req.params.id, {
        include: [ Player ]
    });
    res.send(
        `<html>
            <head>
                <title>${ genre.name } Guitarists</title>
            </head>
            <body>
                <h1>${ genre.name } Guitarists</h1>
                <a href='/genres'>Back to Genres</a>
            </body>
        </html>`
    
    )
    }
    catch(ex){
        next(ex);
    }
});




const init = async() => {
    try {
        await conn.sync({ force: true });
        //Genres
        const jazz = await Genre.create({ name: 'Jazz'});
        const classicRockBlues = await Genre.create({ name: 'Classic Rock & Blues'});
        const modernRock = await Genre.create({ name: 'Modern Rock'});

        //Players
        await Player.create({ name: 'Wes Montgomery', genreId: jazz.id });
        await Player.create({ name: 'John Scofield', genreId: jazz.id });
        await Player.create({ name: 'Pat Metheny', genreId: jazz.id });
        await Player.create({ name: 'Bill Frisell', genreId: jazz.id });
        await Player.create({ name: 'Jimi Hendrix', genreId: classicRockBlues.id });
        await Player.create({ name: 'Eric Clapton', genreId: classicRockBlues.id });
        await Player.create({ name: 'Stevie Ray Vaughn', genreId: classicRockBlues.id });
        await Player.create({ name: 'Jimi Page', genreId: classicRockBlues.id });
        await Player.create({ name: 'Prince', genreId: modernRock.id });
        await Player.create({ name: 'Eddie Van Halen', genreId: modernRock.id });
        await Player.create({ name: 'Slash', genreId: modernRock.id });
        await Player.create({ name: 'The Edge', genreId: modernRock.id });

        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));   
    }

    catch(ex){
        console.log(ex);
    }
}

init();