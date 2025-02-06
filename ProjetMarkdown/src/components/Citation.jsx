import { useState, useEffect } from "react"

function Citation() {
    const [citation, setCitation] = useState("")

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setCitation(data.slip.advice))
            .catch(error => console.error("Erreur lors de la récupération de la citation :", error))
    })
    return(
        <div className="text-center p-5 bg-light">
            <h2>Citattion du jour</h2>
            <p className="fs-4 fst-italic">"{citation}"</p>
        </div>
    )
}

export default Citation