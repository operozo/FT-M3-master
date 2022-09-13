const commands = require('./commands/index');

// Output un prompt
process.stdout.write('Oswal > ');

const done = function (output){
  process.stdout.write(output);
  process.stdout.write('\nOswal >');
}
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var args =data.toString().trim().split(' ');
  //process.stdout.write(args);
  var cmd = args.shift();
  if (commands[cmd]){
    commands[cmd](args, done);
  } else {
    process.stdout.write(`${cmd} comando no encontrado`);
    process.stdout.write('\nOswal >');
  }
});
    //  var cmd = data.toString().trim(); // remueve la nueva línea
//    if(cmd === 'date') {
//         commands.date(data);

//     //     process.stdout.write(Date());  
//    }
//    if(cmd === 'pwd') {
//     commands.pwd(data);
//     }
//     if(cmd === 'ls') {
//         commands.ls(data);
//         }

//   process.stdout.write('\nprompt > ');
// });
//commands[cmd];
//})


// const commands = require('./commands/index.js');

// const cmd = 'date';

// commands[cmd]()