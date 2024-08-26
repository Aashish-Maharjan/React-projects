import Header from "../components/header";
import CardList from "../components/CardList";
import require from 

const http = require('https');

const options = {
	method: 'GET',
	hostname: 'tasty.p.rapidapi.com',
	port: null,
	path: '/recipes/list?from=0&size=20&tags=under_30_minutes',
	headers: {
		'x-rapidapi-key': '528b902d9dmsh61a9d41626d9e66p1dc07bjsn0779192f925e',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

export default function HomePage(){
    return (
        <>
          <Header />
          <CardList />
        </>
        );
}