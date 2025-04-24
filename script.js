// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){
    // const resposta = fetch('https://random-data-api.com/api/v2/users')
    // console.log(resposta)
    // const tratamentoRes = resposta.then((res) => {
    //     console.log(res)
    //     return res.json()
    // })
    // tratamentoRes.then((data) =>{
    //     console.log(data)
    // })
    helperTextUsuario.innerText ='Aguarde...'
    fetch('https://random-data-api.com/api/v2/users')
    .then((res) => res.json())
    .then((data) => {
        const usuario = document.createElement('div')
        usuario.innerHTML =`
        <img src="${data.avatar}" />
        <span><strong>Username:</strong>${data.username}</span>
        `
        usuario.classList.add('usuario')
        usuariosContainer.appendChild(usuario)

        helperTextUsuario.innerText =''
    console.log(data)})
    .catch((error) =>{
        helperTextUsuario.innerText =''
        alert("CARAMBA MEU QUE ERRO!!!")
        console.log(error)
    })
}   

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const postBtn = document.getElementById('btn-post')
const postContainer = document.getElementById('posts-container')
const helperTextPost = document.getElementById('helper-text-post')

// 2. Funções
function gerarPost(e){
    e.preventDefault()

    const jsonBody = JSON.stringify({
        titulo: postTitle.value,
        mensagem : postBody.value
    })

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: jsonBody
    }     
    )
    .then(res => res.json())
    .then(data =>{
        helperTextPost.innerText =''
        console.log(data)
        const post = document.createElement('div')
        post.classList.add('postagem')
        post.innerHTML = `
        <h3>${data.id} - ${data.titulo}</h3>
        <p>${data.mensagem}</p> 
           
        `
        postContainer.appendChild(post)

        postTitle.value =''
        postBody.value =''
        alert('Deu tudo Certo My Brother')
    })
    .catch((error) =>{
        console.log(error)
        helperTextPost.innerText ='Caramba, chama o o Hugo Dev Para resolver'

        

    })

}
// 3. Eventos
postBtn.addEventListener('click',(e)=>gerarPost(e))