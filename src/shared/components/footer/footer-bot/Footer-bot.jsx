import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterBot() {
    return <div className="mf-bot d-flex justify-content-between align-items-center py-2">
        <p className="fw-light fs-4 m-0">Un proyecto creado por Alejandro Romero</p>
        <div className="mf-socials d-flex fs-3 gap-2">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </div>
    </div>
}