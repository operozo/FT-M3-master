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
  var cmd = args.shift();
  if (commands[cmd]){
    commands[cmd](args, done);
  } else {
    process.stdout.write(`${cmd} comando no encontrado`);
    process.stdout.write('\nOswal >');
  }
});