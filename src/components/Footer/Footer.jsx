import "../Footer/footer.css";

const Footer = () => {

    return (
        <>
            <div className="container-footer">
                <div className="container-footer-data">
                    <h3 className="footer-title">¡Contáctanos!</h3>
                    <div className="footer-all-data">
                        <div className="footer-data">
                            <p className="footer-data-subtitle">Dirección Postal</p>
                            <p className="footer-data-description">Calle 1 #986 , Santiago.</p>
                        </div>
                        <div className="footer-data">
                            <p className="footer-data-subtitle">Dirección de correo</p>
                            <p className="footer-data-description">residuos@nomas.cl</p>
                        </div>
                        <div className="footer-data">
                            <p className="footer-data-subtitle">Número Telefónico</p>
                            <p className="footer-data-description">+569 4852 3699</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;