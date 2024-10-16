import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="error404">
            <h1 className="error404_title">404</h1>
            <p className="error404_subtitle">Oups! La page que vous demandez n'existe pas.</p>
            <Link to={'/'} className="error404_link">Retourner sur la page d’accueil</Link>
        </div>
    )
}
