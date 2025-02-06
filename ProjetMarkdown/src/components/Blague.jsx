function Blagues() {
    const [blague, setBlague] = useState({ setup: "", punchline: ""})

    const fetchBlague = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res => res.json())
            .then(data => setBlague({ setup: data.setup, punchline: data.punchline}))
            .catch(error => console.error("Echèque de la récupération de la blague", error))
    }

    useEffect(() => {
        fetchBlague()
    })
    return(
        <div className="text-center p-5 bg-light">
            <h2>Blague du jour</h2>
            <p className="fs-4">{blague.setup}</p>
            <p className="fs-5 fw-bold">{blague.punchline}</p>
            <button className="btn btn-primary mt-3" onClick={fetchBlague}>Nouvelle blague</button>
        </div>
    )
}

export default Blagues