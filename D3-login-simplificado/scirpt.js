const users = [
    { usuario: 'admin', senha: '1234' },
    { usuario: 'maria', senha: 'senha1' },
    { usuario: 'joao', senha: 'abc123' }
]

function login() {
    const u = document.getElementById('user').value.toLowerCase()
    const p = document.getElementById('pass').value

    const encontrado = users.find(item => 
        item.usuario.toLowerCase() === u && item.senha === p
    )

    const res = document.getElementById('resultado')

    if (encontrado) {
        res.innerHTML = `<p>Login bem-sucedido! Bem-vindo, ${u}!</p>`
    } else {
        res.innerHTML = `<p>Usuário ou senha incorretos.</p>`
    }
}
