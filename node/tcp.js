// Recuperando módulo net
var net = require('net');

// criando servidor TCP
var server = net.createServer(function(c){
  // Dispara log quando um cliente se conecta
  console.log('client connected');
  
  // método que coleta evento
  c.on('data', function(d){
    // Imprime a data recebida no console
    console.log('data received: ' + d.toString());
  });

  //Event de diconnect
  c.on('end', function(){
    // Log que cliente desconectou
    console.log('client disconnected');
  });
});

// Inicializando servidor 
server.listen(3000, function(){
  // Log de inicialização do servidor
  console.log('server started');
});

// Opcional, incluir Ip DO SERVIDOR
// server.listen(3000, '192.168.1.1', function(){
//   console.log('server started');
// });