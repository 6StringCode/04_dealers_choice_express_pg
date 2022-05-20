--copy/pasted this over from one of the previous exercises, 
--although I'm not sure that I will even need it so may delete instead of reconfiguring


-------------------------
-- DROP TABLE IF EXISTS players, posts;

-- CREATE TABLE players (
--   id SERIAL PRIMARY KEY,
--   name TEXT DEFAULT NULL
-- );

-- CREATE TABLE vote (
--   id SERIAL PRIMARY KEY,
--   userId INTEGER REFERENCES players(id) NOT NULL,
--   title varchar(255) DEFAULT NULL,
--   content TEXT DEFAULT NULL,
--   date timestamp DEFAULT now()
-- );

-- CREATE TABLE upvotes (
--   userId INTEGER REFERENCES players(id) NOT NULL,
--   postId INTEGER REFERENCES posts(id) NOT NULL,
--   date timestamp DEFAULT now()
-- );

-- INSERT INTO players (name) VALUES ('RubeusH');
-- INSERT INTO players (name) VALUES ('Baddock');
-- INSERT INTO players (name) VALUES ('Hetty');
-- INSERT INTO players (name) VALUES ('Alphard');
-- INSERT INTO players (name) VALUES ('Baruffio');


-- INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from players where name='Jimi Hendrix'), 'Fianto Duri, the complete tutorial', 'Fianto Duri is a charm that was created to be combined with protective spells (Can be used with another person''s shield spell)(When used on something else creates a explosion). As we already knows the (i.e.) Shield Charm needs the caster to stay focused on the spell in order to continue protecting him, so Fianto Duri allows the caster to keep a charm “alive” while he does some other work or casts some other spells.', (now() - interval '4 hours'));
-- INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from players where name='Prince'), 'Fianto Duri, the complete tutorial', 'Fianto Duri is a charm that was created to be combined with protective spells (Can be used with another person''s shield spell)(When used on something else creates a explosion). As we already knows the (i.e.) Shield Charm needs the caster to stay focused on the spell in order to continue protecting him, so Fianto Duri allows the caster to keep a charm “alive” while he does some other work or casts some other spells.', (now() - interval '4 hours'));
-- INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from players where name='Wes Montgomery'), 'Untransfiguration classes to become compulsory at Hogwarts', 'Learning untransfiguration is going to be mandatory at Hogwarts School of Witchcraft and Wizardry from 2017 onward. Untransfiguration will be covered in beginner-level spellbooks such as A Beginner''s Guide to Transfiguration. Failure to at least attempt to untranfigure a wrongly-done transfiguration will be considered irresponsible.', (now() - interval '1 day'));
-- INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from players where name='Eric Clapton'), 'Cracking the Aurologist Interview', 'Now in the 5th edition, Cracking the Aurologist Interview gives you the interview preparation you need to get the top aura study jobs. The book is over 500 pages and includes 150 aurologist interview questions and answers, as well as other advice.', (now() - interval '15 minutes'));
-- INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from players where name='Eddie Van Halen'), 'ASK WN: What do you use to digitalize your scrolls?', 'Some scrolls need conservation treatment before they can be safely transported, handled, and digitized.  After these questions are answered, Preservation and Information Technology Specialists assess the project requirements and create the digitilized version.', (now()));
-- INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from players where name='Jimi Page'), 'ASK WN: What do you use to digitalize your scrolls?', 'Some scrolls need conservation treatment before they can be safely transported, handled, and digitized.  After these questions are answered, Preservation and Information Technology Specialists assess the project requirements and create the digitilized version.', (now()));

