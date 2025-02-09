
const listejoueurs = [{ nom: "Ouhani", prénom: "Azzedine", age: 22, buts: 2 },
{ nom: "Hakimi", prénom: "Achraf", age: 24, buts: 4 },
{ nom: "Ziyech", prénom: "Hakim", age: 29, buts: 2 },
{ nom: "Dari", prénom: "Achraf", age: 16, buts: 1 },]

const Affiche = () => {
    return (
        <div>
            <ul>
                {listejoueurs.map((e, index) => <li key={index}>
                    {e.nom}-{e.prénom}-{e.age}-{e.buts}
                </li>)}
            </ul>
        </div>
    )
}
const Recherche = () => {
    const jouerbuts2 = listejoueurs.filter(e => e.buts >= 2)
    return (
        <div>
            <ol>
                {jouerbuts2.map((e, index) => <li key={index}>{e.nom}</li>)}
            </ol>
        </div>
    )

}

export default function Listejoueurs() {
    function agemoyene() {
        const sumage = listejoueurs.reduce((tottal, e) => tottal + e.age, 0)
        return (sumage / listejoueurs.length)
    }
    const list = listejoueurs.reduce((plusbut, joueur) => (joueur.buts > plusbut.buts) ? joueur : plusbut);
    const totalbutt = listejoueurs.reduce((totalbut,cubut)=> totalbut + cubut.buts,0);
    return (
        <div>
            <h1>Liste des joueurs</h1>
            <Affiche />
            <Recherche />
            <p>moyene est {agemoyene()}</p>
            <p>plus joueur butt est: {list.nom}({list.buts} buts)</p>
            <p>total but : {totalbutt}</p>
        </div>
    )
}



