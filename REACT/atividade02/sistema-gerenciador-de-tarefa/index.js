var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var tarefas = [];
var usuarios = [
    {
        id: 1,
        nome: "Juscelino",
        email: "mamede@gmail.com",
    },
    {
        id: 2,
        nome: "Romário",
        email: "r11@gmail.com",
    }
];
function adicionarTarefa(tarefa) {
    var novaTarefa = __assign({ id: tarefas.length + 1, concluida: false }, tarefa);
    tarefas.push(novaTarefa);
}
adicionarTarefa({
    titulo: "Comprar comida",
    responsavel: usuarios[0],
    descricao: "Voce deve comprar comida no mercado do outro lado da rua.",
});
adicionarTarefa({
    titulo: "Cozinhar",
    responsavel: usuarios[0],
    descricao: "Voce deve fazer feijão.",
});
adicionarTarefa({
    titulo: "Esvaziar lixeira",
    responsavel: usuarios[1],
    descricao: "Voce deve levar o lixo para fora.",
});
function adicionarUsuario(usuarioParcial) {
    var novoUsuario = __assign({ id: usuarios.length }, usuarioParcial);
    usuarios.push(novoUsuario);
}
adicionarUsuario({ nome: "Augusto", email: "aug@gmail.com" });
function listarTarefas(tarefaParcial) {
    var usuarioExiste = usuarios.find(function (usuario) { return usuario.id === tarefaParcial.responsavel.id; });
    console.log("esta é a lista de tarefas:");
    tarefas.forEach(function (tarefa) {
        console.log(tarefa);
    });
}
function listarUsuarios() {
    console.log("esta é a lista de usuario:");
    usuarios.forEach(function (usuario) {
        console.log(usuario);
    });
}
listarTarefas();
listarUsuarios();
