var pokeimg = ["https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"];


module.exports = {
    read: (req,res) => {
        res.status(200).send(pokeimg);
}
}