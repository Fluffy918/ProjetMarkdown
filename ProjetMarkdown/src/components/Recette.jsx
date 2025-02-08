import { useState, useEffect } from "react"
import "../recette.css"

function Recette () {
    const [recette, setRecette] = useState(null)

    const fetchRecette = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json)
        .then(data => setRecette(data.meals[0]))
        .catch(error => console.error("Echec de la recupération de la recette", error))
    }

    useEffect(() => {
        fetchRecette()
    })
    return (
        <div className="text-center p-5 bg-light">
            <h2>Recette du jour</h2>

            {recette ? (
                <>
                    <h3>{recette.strMeal}</h3>
                    <img src={recette.strMealThumb} alt={recette.strMeal} className="image-recette" />

                    <h4>Ingrédients :</h4>
                    <ul className="liste-ingredient">
                        {Array.from({length: 20}, (_, i) => i + 1)
                            .map(i => recette[`strIngredient${i}`] && recette[`strMeasure${i}`] ? (
                                <li key={i}>
                                    {recette[`strMeasure${i}`]} {recette[`strIngredient${i}`]}
                                    
                                </li>
                            ) : null)}
                        
                    </ul>

                    <h4>Instructions :</h4>
                    <p className="instructions-recette">{recette.strInstructions}</p>

                    <button className="btn btn-primary mt-3" onClick={fetchRecette}>
                        Nouvelle recette
                    </button>
                </>
            ) : (
                <p>{recette}</p>
                
            )}
           
        </div>
    )
}

export default Recette