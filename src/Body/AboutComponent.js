import React from "react";

const AboutComponent = () =>{

    return (
        <div className="about d-flex flex-column">
            
            <div data-testid="about-element" 
                className="title-about">
                About Precious metals
            </div>
            <div className="border-about"></div>
            <div className="text-about">
                Precious metals are rare, naturally occurring 
                metallic chemical elements of high economic value. 
                Chemically, the precious metals tend to be less 
                reactive than most elements (see noble metal). 
                They are usually ductile and have a high lustre. 
                Historically, precious metals were important as 
                currency but are now regarded mainly as investment 
                and industrial commodities. Gold, silver, platinum, 
                and palladium each have an ISO 4217 currency code.
            </div>
            <img data-testid="img-element" 
                className="metals-about" 
                src="/edel-metal.jpeg" />
            <div data-testid="text-element"
                className="text-about">
                The best known precious metals are the coinage metals,
                which are gold and silver. Although both have 
                industrial uses, they are better known for their uses 
                in art, jewelry, and coinage. Other precious metals 
                include the platinum group metals: ruthenium, rhodium, 
                palladium, osmium, iridium, and platinum, of which 
                platinum is the most widely traded. The demand for 
                precious metals is driven not only by their practical 
                use but also by their role as investments and a store 
                of value. Historically, precious metals have commanded 
                much higher prices than common industrial metals.
            </div>
            <div className="text-about">
                A metal is deemed to be precious if it is rare. 
                The discovery of new sources of ore or improvements 
                in mining or refining processes may cause the value 
                of a precious metal to diminish. The status of a 
                "precious" metal can also be determined by high demand 
                or market value. Precious metals in bulk form are 
                known as bullion and are traded on commodity markets. 
                Bullion metals may be cast into ingots or minted 
                into coins. The defining attribute of bullion is that 
                it is valued by its mass and purity rather than by a 
                face value as money.
            </div>

            <div className="source-about">
                Sources:
            </div>
            
            <a role="link" className="href-about"
                href='https://en.wikipedia.org/wiki/Precious_metal'>
                The article is from Wikipedia 
            </a>
            
            <a role="link" className="href-about"
                href='https://commons.wikimedia.org/w/index.php?curid=1740953'>
                The photo made by: Tomihahndorf, CC BY-SA 3.0,  
            </a>    
        </div>
    )
}

export default AboutComponent;