interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    concluida: boolean;
    responsavel: Usuario;
}

interface Usuario {
    id: number;
    nome: string;
    email: string;
}

const tarefas: Tarefa[] = [];
const usuarios: Usuario[] = [
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

type TarefaInfo = Omit<Tarefa, "id" | "concluida">;

function adicionarTarefa(tarefa: TarefaInfo) {
    const novaTarefa = {
        id: tarefas.length + 1,
        concluida: false,
        ...tarefa
    }
    tarefas.push(novaTarefa)

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

type UsuarioInfo = Omit<Usuario, "id">;

function adicionarUsuario(usuarioParcial: UsuarioInfo) {
    const novoUsuario: Usuario = {
        id: usuarios.length,
        ...usuarioParcial
    }
    usuarios.push(novoUsuario)

}

adicionarUsuario({ nome: "Augusto", email: "aug@gmail.com" })

function listarTarefas(tarefaParcial: TarefaInfo) {
    const usuarioExiste = usuarios.find((usuario) => usuario.id === tarefaParcial.responsavel.id)

    console.log("esta é a lista de tarefas:");

    tarefas.forEach((tarefa) => {
        console.log(tarefa);
    })
}

function listarUsuarios() {
    console.log("esta é a lista de usuario:");
    usuarios.forEach((usuario) => {
        console.log(usuario);
    })
}

listarTarefas();
listarUsuarios();