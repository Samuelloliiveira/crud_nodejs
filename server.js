const express = require('express')

const app = express()

//definindo que vai usar json
app.use(express.json())

const cursos = ['Lógica', 'SQL', 'Node', 'HTML']

//retorna apenas um curso pelo index
app.get('/cursos/:index', (req, res) => {
    const {index} = req.params

    return res.json(cursos[index])
})

//retorna todos os cursos
app.get('/cursos', (req, res) => {
    return res.json(cursos)
})

//criar um novo cursos
app.post('/cursos', (req, res) => {
    const {name} = req.body
    cursos.push(name)

    return res.json(cursos)
})

//atualizar cursos
app.put('/cursos/:index', (req, res) => {
    const {index} = req.params
    const {name} = req.body

    cursos[index] = name

    return res.json(cursos)
})

//deletar um curso
app.delete('/cursos/:index', (req, res) => {
    const {index} = req.params

    cursos.splice(index, 1)

    return res.json({message: 'O curso foi deletado'})
})

app.listen(3000, () => {
    console.log('Rodando...')
})
