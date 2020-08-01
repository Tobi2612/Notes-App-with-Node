const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res)=>{
   
  var ffs = fs.readFile('./notess/note1.txt',(err,data)=>{
   	if (err) {
   		throw err
   	}
   	console.log(data.toString())
   })


   if (req.method === 'POST'){
		let body ='';
		req.on('data', chunk =>{
		body += chunk.toString();
		});

		req.on('end',()=>{
			const t = parse(body);
      fs.appendFile('./notess/note1.txt',`\n ${t.message}.`,err =>{
     if (err){
     	console.log('Err')
     }
     })
		})
		//res.setHeader
res.end(ffs)
	}


//res.setHeader
res.end('Get Request working')
})






server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}/`);
})