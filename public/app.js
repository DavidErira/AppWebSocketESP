//const socket = io() // este io() dever recibir el dominio

let IP = document.getElementById('IP_id');
let btnConec = document.getElementById('BtConec_id');
let btnSD = document.getElementById('BtSD_id');
let btnCD = document.getElementById('BtCD_id');
let btnDesc = document.getElementById('BtDesc_id');
let output = document.getElementById('output');

let IP2 = document.getElementById('IP2_id');
let btnConec2 = document.getElementById('BtConec2_id');
let btnSD2 = document.getElementById('BtSD2_id');
let btnCD2 = document.getElementById('BtCD2_id');
let btnDesc2 = document.getElementById('BtDesc2_id');
let output2 = document.getElementById('output2');

var connection;
let conectado = 0;

var connection2;
let conectado2 = 0;

output.innerHTML =`
<p> Desconectado </p>
`
output2.innerHTML =`
<p> Desconectado </p>
`

btnConec.addEventListener('click',function(){
    // crear una conexión websocket ---------------------------------------------------------------
    if(IP.value != ''){
        connection = new WebSocket('ws://'+IP.value+':80/'); // IP del ESP y el puerto en donde se inició el socket, antes de ejecutar esta linea --> ESP ON
        connection.onopen = function ()       { connection.send('Listo :)'); conectado = 1; output.innerHTML =` <p> Conenctado - Sin envío de datos </p> `;}; // que hacer cuando se establesca la conexión 
        connection.onerror = function (error) { console.log('WebSocket Error ', error);}; // que hacer si hay un error 
        connection.onmessage = function (e)   { 
            //actualizamos una porción de HTML en la visual del dato
            output.innerHTML =`
                <p> Valor: </p>
                <h1>${e.data}</h1>`
            };

    }

})

btnSD.addEventListener('click',function(){
    if(conectado == 1){
        connection.send('ON');
    }
})

btnCD.addEventListener('click',function(){
    if(conectado == 1){
        connection.send('OFF');
        output.innerHTML =`
        <p> Conenctado - Sin envío de datos </p>
        `
    }
})

btnDesc.addEventListener('click',function(){
    if(conectado == 1){
        connection.close();
        output.innerHTML =`
        <p> Desconectado </p>
        `
    }
})


btnConec2.addEventListener('click',function(){
    // crear una conexión websocket ---------------------------------------------------------------
    if(IP2.value != ''){
        connection2 = new WebSocket('ws://'+IP2.value+':80/'); // IP del ESP y el puerto en donde se inició el socket, antes de ejecutar esta linea --> ESP ON
        connection2.onopen = function ()       { connection2.send('Listo :)'); conectado2 = 1; output2.innerHTML =` <p> Conenctado - Sin envío de datos </p> `;}; // que hacer cuando se establesca la conexión 
        connection2.onerror = function (error) { console.log('WebSocket Error ', error);}; // que hacer si hay un error 
        connection2.onmessage = function (e)   { 
            //actualizamos una porción de HTML en la visual del dato
            output2.innerHTML =`
                <p> Valor: </p>
                <h1>${e.data}</h1>`
            };

    }

})

btnSD2.addEventListener('click',function(){
    if(conectado2 == 1){
        connection2.send('ON');
    }
})

btnCD2.addEventListener('click',function(){
    if(conectado2 == 1){
        connection2.send('OFF');
        output2.innerHTML =`
        <p> Conenctado - Sin envío de datos </p>
        `
    }
})

btnDesc2.addEventListener('click',function(){
    if(conectado2 == 1){
        connection2.close();
        output2.innerHTML =`
        <p> Desconectado </p>
        `
    }
})


// envia a la salida una porción de HTML




//para hacer envios a un mismo socket en un hilo diferente -----------------------------------
// async function cicloAsync(){
//     function ciclo(){
//         connection.send("#12");
//         setTimeout(ciclo,10);
//     }
//     await ciclo();
// }
//---------------------------------------------------------- +++

