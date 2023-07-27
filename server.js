import mysql from 'mysql';
import config from './config.js';
import fetch from 'node-fetch';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import response from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

app.post("/api/getMovies", (req, res) => {
	let connection = mysql.createConnection(config);
  
	let sql = `SELECT * FROM movies`;
	// console.log(sql);
  
	connection.query(sql, (error, results, fields) => {
	  if (error) {
		return console.error(error.message);
	  }
  
	  let string = JSON.stringify(results);
	  let obj = JSON.parse(string)
	//   console.log(obj + " is the object from server.js");
	  res.send(obj);
	});
	connection.end();
  });
  
  app.post("/api/addReview", (req, res) => {
	let connection = mysql.createConnection(config);
	let data = [];
	let errorsInTransaction = 0;  
  
	console.log(req.body);
  
	connection.query('START TRANSACTION', data, (error, results, fields) => {
	  if (error) {
		console.error(error.message);
		errorsInTransaction = errorsInTransaction + 1;
	  }
	  
  
	  let insertReviewSQL = `INSERT INTO Review (reviewTitle, reviewContent, reviewScore, userID, movieID) VALUES (?, ?, ?, ?, ?)`;
	  let insertReviewData = [req.body.reviewTitle, req.body.reviewContent, req.body.reviewScore, req.body.userID, req.body.movieID]
  
	  connection.query(insertReviewSQL, insertReviewData, (error, results, fields) => {
		if (error) {
		  console.error(error.message);
		  errorsInTransaction = errorsInTransaction + 1;
		}
  
		if (errorsInTransaction > 0) {
		  connection.query('ROLLBACK', data, (error, results, fields) => {
			res.send('error')
			connection.end();
		  })
		}
		else {
		  connection.query('COMMIT', data, (error, results, fields) => {
			res.send('success')
			connection.end();
		  })
		}
	  })
	});
  });

  app.post("/api/findMovieData", (req, res) => {

	let connection = mysql.createConnection(config);
  
	let movieTitle = req.body.enteredMovie;
	let actorName = req.body.enteredActor
	let directorName = req.body.enteredDirector


	let sql = `SELECT DISTINCT M.name, CONCAT(D.first_name, ' ', D.last_name) AS director_names, GROUP_CONCAT(DISTINCT R.reviewContent) as reviewContent, AVG(R.reviewScore) as reviewAverage
	FROM movies M
	LEFT JOIN Review R ON M.id = R.movieID
	LEFT JOIN movies_directors MD ON MD.movie_id = M.id
	LEFT JOIN directors D ON D.id = MD.director_id
	LEFT JOIN roles RO ON RO.movie_id = M.id
	LEFT JOIN actors A ON A.id = RO.actor_id
	WHERE 1`;

  
	let movieData = [];
  
	// console.log(movieData);

	if (movieTitle) {
		sql = sql + ` AND M.name LIKE ?`;
		movieData.push('%' + movieTitle + '%');
	}

	if (actorName) {
		sql = sql + ` AND CONCAT(A.first_name, " ", A.last_name) LIKE ?`;
		movieData.push('%' + actorName + '%');
	}

	if (directorName) {
		sql = sql + ` AND CONCAT(D.first_name, " ", D.last_name) LIKE ?`;
		movieData.push('%' + directorName + '%');
	}

	sql = sql + ` GROUP BY M.name,  D.first_name, D.last_name`;
  
	connection.query(sql, movieData, (error, results, fields) => {
	  if (error) {
		return console.error(error.message);
	  }
	  let string = JSON.stringify(results);
		console.log(string);
	  res.send({ express: string });
	});

	connection.end();
  });


  app.post('/api/loadTrailer', (req, res) => {

	let connection = mysql.createConnection(config);

	let data=[req.body.embedURL, req.body.movieID]




	let sql = `UPDATE movies SET movie_trailers = ? WHERE ID = ?;`;

	if (data[0]) {
		connection.query(sql, data, (error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}
		});
		connection.end();
	}
});
  


app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT mode FROM user WHERE userID = ?`;
	// console.log(sql);
	let data = [userID];
	// console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});


app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '172.31.31.77'); //for the deployed version, specify the IP address of the server
