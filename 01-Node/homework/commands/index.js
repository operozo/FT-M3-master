var fs = require('fs');
const request = require('request');

module.exports = {
    pwd: function (arg, done){
        process.stdout.write(process.cwd());
    },
    date: function (arg, done) {
        process.stdout.write(Date());
    },
    ls: function (arg, done) {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            var lista = files.join('\n');
            done(lista)
          });
    },
    curl: function (args, done) {
        request(args[0], 'utf-8', function(err, response, body){
            if (err) throw err;
            console.log(response);
        })
    },
    echo: function (args, done){
        done(args.join(' '));
    },
    cat: function (args, done) {
        fs.readFile(
            args[0],
            'utf-8',
            function(err, data){
                if (err) throw err;
                done(data);
            }
        )
    },
    head: function (args, done) {
        fs.readFile(
            args[0],
            'utf-8',
            function(err, data){
                if (err) throw err;
                const lineas = data.split('\n').slice(0,10).join('\n')
                done(lineas);
            }
        )
    },
    tail: function (args, done) {
        fs.readFile(
            args[0],
            'utf-8',
            function(err, data){
                if (err) throw err;
                const lineas = data.split('\n').slice(-10).join('\n')
                done(lineas);
            }
        )
    },
    sort: function (args, done) {
        fs.readFile(
            args[0],
            'utf-8',
            function(err, data){
                if (err) throw err;
                const lineas = data.split('\n').sort().join('\n')
                done(lineas);
            }
        )
    },
    wc: function (args, done) {
        fs.readFile(
            args[0],
            'utf-8',
            function(err, data){
                if (err) throw err;
                const lineas = data.split('\n');
                var nLineas = 0;
                var nPalabras = 0;
                var nCaracteres = 0;
                lineas.forEach(element => {
                    const Palabras = element.split(' ');
                    nPalabras += Palabras.length;
                    nLineas ++;
                    nCaracteres += element.length;
                });
                out = 'Lineas = '+nLineas+'   Palabras = '+nPalabras+'   Caracteres = '+nCaracteres;
                done(out);
            }
        )
    },
    uniq: function (args) {
        process.stdout.write("No implementado");
    }
}