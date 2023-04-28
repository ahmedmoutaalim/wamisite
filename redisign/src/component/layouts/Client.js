import ClientSlider3 from "../elements/ClientSlider3";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Client() {
    return (
        <>
            
            {/* <!-- Clients Logo --> */}
            <div className="p-tb50 bg-gray">
                <div className="container">
                    <div className="clients-carousel owl-none owl-carousel">
                        <ClientSlider3/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Client;