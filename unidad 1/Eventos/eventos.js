
events = require('events');
emisor = new events.EventEmitter();
emisor.on('Saludar', (nombre)=>{console.log('hola '+nombre)});

emisor.emit('Saludar','jose');


function saludar(){
    const emisor = new events.EventEmitter();
    setTimeout(()=>emisor.emit('Saludar', 'nono'),5000);
    setTimeout(()=>emisor.emit('Saludar', 'nana'),500);
    setTimeout(()=>emisor.emit('Saludar', 'nora'),2000);
    return emisor
}

let sal = saludar();

sal.on('Saludar',(nombre)=>{
    console.log('hola '+nombre)
})



