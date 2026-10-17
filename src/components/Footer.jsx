import banner from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9] py-10 mt-10 px-5 md:px-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <img src={banner} alt="" />
                    <p className="mt-1">Curated tools, technologies, and resources for developers building modern software.</p>
                </div>            
                <div>
                    <h3 className="font-bold mb-1">PRODUCT</h3>    
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-1">COMPANY</h3>    
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-1">LEGAL</h3>    
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>            
                        
            </div>
        </footer>
    );
};

export default Footer;