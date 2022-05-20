const express = require('express');
const app = express();

const db = require('./db');
const { conn, Player, Genre } = db;


const init = async() => {
    try {
        await conn.sync({ force: true });

        //Genres/categories
        const jazz = await Genre.create({ name: 'jazz'});
        const classicRockBlues = await Genre.create({ name: 'classicRockBlues'});
        const modernRock = await Genre.create({ name: 'modernRock'});

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
    }

    catch(ex){
        console.log(ex);
    }
}

init();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));