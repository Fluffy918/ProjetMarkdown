function Dashboard() {
    return(
        <div className="dashboard-container">
            <header>
                <h1>Tableau de Bord 2000</h1>
            </header>

            <aside className="dashboard-sidebar">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Paramètres</a></li>
                    <li><a href="#">Déconnexion</a></li>
                </ul>
            </aside>

            <main className="dashboard-content">
                <h2>Bienvenue sur votre tableau de bord</h2>
                <p>Voici un magnifique design inspiré des sites des années 2000</p>
                <table className="old-table">
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Statut</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jean Dupont</td>
                        <td> Actif</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Curie</td>
                        <td> Inactif</td>
                    </tr>
                </table>
            </main>
        </div>
    )
}