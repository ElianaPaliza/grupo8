function agregarHttp(url) {
    return 'http://' + url;
}

function procesar(array, callback) {
    let unArray = [];
    for (let i=0; i<array.length; i++){
        unArray.push(callback(array[i]))
    }
    return unArray;
}

let urlCompletas = procesar(['www.google.com', 'www.yahoo.com'], agregarHttp);
