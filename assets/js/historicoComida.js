
//export async function pedidoRequest() {
    let historicoDiv = document.getElementById('historico')
    let data = {
        method: 'GET',
    }
    let response = await fetch("http://localhost:8000/api/get-order", data);
    //console.log(response)
    let pedidos = await response.json();
    //console.log(pedidos)

     var masPedidos = [];

    pedidos.order.forEach(pedido => {
        // pedido.items[0].name
        var modeMap = {}
        var array = pedido.items[0]
        var maxEl = array, maxCount = 1;


        for (var i = 0; i < array.length; i++) {
            var el = array[i];
            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        masPedidos.push(maxEl.name)
    })

     export var unicos = masPedidos.filter((valor, indice) => {
        return masPedidos.indexOf(valor) === indice;
    }
    );
//}


