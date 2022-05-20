const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/guitarists');

const Player = conn.define('player', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    voteCount: {
        type: Sequelize.INTEGER,
        //allowNull: //set default value
    }
});

const Genre = conn.define('genre', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//need to limit possible duplicates make unique
Player.belongsTo(Genre);
Genre.hasMany(Player);

module.exports = {
    conn,
    Player, 
    Genre
}