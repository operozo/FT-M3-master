var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer( function(req, res){ 
  if( req.url === '/'){ //Si la URL es / devolvemos el HTML
   res.writeHead(200, { 'Content-Type':'text/html' })
   var html = fs.readFileSync('./index.html');
   console.log('Va por el index')
   res.end(html);
  } else if(req.url === '/api'){ //Si la URL es /api devolvemos el objeto
   res.writeHead(200, { 'Content-Type':'application/json' })
   console.log('Va por otro');
   var obj = {
    nombre: 'Juan',
    apellido: 'Perez'
   }; 
   res.end( JSON.stringify(obj) );
  } else{
      console.log('Va por 404');
      res.writeHead(404);
      res.end();
  }
 }).listen(1337, '127.0.0.1');