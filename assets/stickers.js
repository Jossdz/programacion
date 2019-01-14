var stickers = 40;
var asistentes;

asistentes = [
  {nombre: 'Diego', sticker: false}, 
  {nombre: 'Jesus', /*...*/}
  /*...*/]

var cantidadAsistentes = asistentes.length // -> 35

for(var i = 0; i < cantidadAsistentes; i = i + 1){
  if(asistentes[i].sticker === false){
    darSticker();
    asistentes[i].sticker = true
  } else {
    console.log('solo un sticker por persona, :(')
  }
}