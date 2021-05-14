let listaInformatica = [
    { "codProduto": 1234,
      "descricao": "Computador Dell Inspiron XS 12000 8Gb RAM 1 TB HD Intel i5 4g NVidia 1080",
      "preco": 3500.00,
      "qtdEstoque": 5,
      "disponivel": "sim",
      "emDestaque": "sim",
      "departamento" : {
      "idDepto": 987,
      "nomeDepto":"Informatica e acessórios"
      }
    
    },

    { "codProduto": 4321,
      "descricao": "Apple Ipad Pro 9.7 128gb",
      "preco": 5000.00,
      "qtdEstoque": 7,
      "disponivel": "sim",
      "emDestaque": "sim",
      "departamento" : {
      "idDepto": 986,
      "nomeDepto":"Tablets"
      }
    
    },

    { "codProduto": 4322,
      "descricao": "Apple Ipad Mini 64gb",
      "preco": 2200.00,
      "qtdEstoque": 11,
      "disponivel": "sim",
      "emDestaque": "sim",
      "departamento" : {
      "idDepto": 986,
      "nomeDepto":"Tablets"
      }
    
    }

    
];

//Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)
function totalEstoque(listaProdutos){
    let totalEstoque = 0;
    for (let i = 0; i < listaProdutos.length; i++){
        totalEstoque = totalEstoque + listaProdutos[i].qtdEstoque;  
    };
    return totalEstoque;
};


//Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")

function totalDestaque(listaProdutos){
    let itensDestaque = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].emDestaque == "sim") {
            itensDestaque++;
        };
    }; return itensDestaque;
};

//Quantidade total de itens disponíveis (similar ao anterior)

function totalItensDisponivel(listaProdutos){
    let itensDisponiveis = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].disponivel == "sim") {
            itensDisponiveis++;
        };
    }; return itensDisponiveis;
};

//Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque)
function totalInventario(listaProdutos){
let listaSomatoria = [];
let somatoria = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        listaSomatoria.push(listaProdutos[i].preco * listaProdutos[i].qtdEstoque);
    }
    for (let i in listaSomatoria) {
        somatoria += listaSomatoria[i];   
    }
    return somatoria;
};

//Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele)

function itensDepartamento(){
    let totalItens = 0;
    let listaItens = []
    for (let i = 0; i < listaInformatica.length; i++){
        totalItens =  listaInformatica[i].qtdEstoque;
        let somatoria = new Object();
        somatoria.departamento = listaInformatica[i].departamento.nomeDepto;
        somatoria.itens =  totalItens; 
        listaItens.push(somatoria) 
// não consegui concluir 
}
};


//Valor total do inventário por departamento (similar ao item anterior)
// a fazer


//Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens)
function ticketMedio (listaProdutos) {
    let ticketMedio = totalInventario(listaProdutos) / totalItensDisponivel(listaProdutos)
    return ticketMedio;
};


//Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio)
// a fazer


//Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens)
// a fazer

//Produto mais caro da loja (bem como seu departamento)
// a fazer

//Produto mais barato da loja (bem como seu departamento)
// a fazer

