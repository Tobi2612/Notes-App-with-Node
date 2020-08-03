const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');
const url = require('url')

// var ffs = fs.readFile('./notess/wor.txt',(err,data)=>{
//    	if (err) {
//    		throw err
//    	}
//    	console.log(data.toString())
//    })

var serverFunction = function(req, res) {
    if (req.url === '/') {
      res.setHeader('Content-Type','text/html')
      res.end('<h1>Welcome to your Notess App</h1>  <p>1. To create a new work-related note and add to it. Go to http://localhost:3000/work <br/> 2. To create a new study-related note and add to it. Go to http://localhost:3000/study  <br/> 3. To create a new grocery-related note and add to it. Go to http://localhost:3000/grocery <br/>  <p> All created notes will be displayed on the console<br/> To View the note,make a GET request to the intended url<br/> To add the note, make a POST request to the intended url in the json format {message:"note iem"}<p> ')

    }
}

var server = http.createServer(serverFunction).listen(3000);

server.on('request', function(req, res) {
  
    // WORK NOTES

    if (req.url === '/work') {
    	if (req.method === 'POST'){
		let body ='';
		req.on('data', chunk =>{
		body += chunk.toString();
		});

		req.on('end',()=>{
			const t = parse(body);
      fs.appendFile('./notess/work.txt',`\n ${t.message}.`,err =>{
     if (err){
     	console.log('Err')
     }
     })

		})

 }

 fs.readFile('./notess/work.txt',(err,data)=>{
   	if (err) {
   		throw err
   	}
   	console.log(data.toString())
   })
        res.setHeader('Content-Type','text/html')
res.end('Your Note is displayed on the Console')
}

    //STUDY NOTE

    if (req.url === '/study') {
    	if (req.method === 'POST'){
		let body ='';
		req.on('data', chunk =>{
		body += chunk.toString();
		});

		req.on('end',()=>{
			const t = parse(body);
      fs.appendFile('./notess/study.txt',`\n ${t.message}.`,err =>{
     if (err){
     	console.log('Err')
     }
     })

		})

 }

 fs.readFile('./notess/study.txt',(err,data)=>{
   	if (err) {
   		throw err
   	}
   	console.log(data.toString())
   })
        res.setHeader('Content-Type','text/html')
res.end('Your Note is displayed on the Console')
}
     

     // GROCERY NOTE

    if (req.url === '/grocery') {
    	if (req.method === 'POST'){
		let body ='';
		req.on('data', chunk =>{
		body += chunk.toString();
		});

		req.on('end',()=>{
			const t = parse(body);
      fs.appendFile('./notess/grocery.txt',`\n ${t.message}.`,err =>{
     if (err){
     	console.log('Err')
     }
     })

		})

 }

 fs.readFile('./notess/grocery.txt',(err,data)=>{
   	if (err) {
   		throw err
   	}
   	console.log(data.toString())
   })
        res.setHeader('Content-Type','text/html')
res.end('Your Note is displayed on the Console')
}
})
