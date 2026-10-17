const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9] py-10 mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <img src="/src/assets/logo-text.png" alt="" />
                    <p>Curated tools, technologies, and resources for developers building modern software.</p>
                </div>            
                <div>
                    <h3>PRODUCT</h3>    
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <h3>COMPANY</h3>    
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h3>LEGAL</h3>    
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