let listaCompras = [];

function mostrarMenu() {
    let opcao = prompt(
        "--- LISTA DE COMPRAS ---\n" +
        "1. Adicionar item\n" +
        "2. Remover item\n" +
        "3. Buscar por letra inicial\n" +
        "4. Ver lista completa\n" +
        "5. Sair"
    );
    return opcao;
}

function executarSistema() {
    let rodando = true;

    while (rodando) {
        let escolha = mostrarMenu();

        if (escolha === "1") {
            let item = prompt("Digite o nome do item:");
            if (item) {
                listaCompras.push(item);
                alert(item + " adicionado!");
            }
        } 
        else if (escolha === "2") {
            let itemRemover = prompt("Digite o nome exato do item para remover:");
            listaCompras = listaCompras.filter(nome => nome !== itemRemover);
            alert("Se o item existia, foi removido.");
        } 
        else if (escolha === "3") {
            let letra = prompt("Buscar itens que começam com a letra:").toLowerCase();
            let resultado = listaCompras.filter(nome => nome.toLowerCase().startsWith(letra));
            alert("Itens encontrados: " + (resultado.join(", ") || "Nenhum"));
        } 
        else if (escolha === "4") {
            alert("Sua lista: " + (listaCompras.join(", ") || "Vazia"));
        } 
        else if (escolha === "5") {
            rodando = false;
            alert("Saindo do sistema...");
        } 
        else {
            alert("Opção inválida!");
        }
    }
}

executarSistema();
