import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; 
import { motion } from 'framer-motion'; 
import { useScroll } from 'framer-motion';; 

const History = () => {
    const { scrollYProgress } = useScroll();
    return (
    <div>    
        <div className="main-bg">
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/ko/2/2a/12%C2%B712_%EA%B5%B0%EC%82%AC%EB%B0%98%EB%9E%80_%EC%A3%BC%EB%8F%99%EC%9E%90.jpeg" width="25%" />
                    <div className="memo">
                        <h4>12.12</h4>
                            <div className="wrap">
                                <motion.div className="bar" style={{ scaleX: scrollYProgress }}>                              
  
                                    <p >
                                    Irure incididunt magna incididunt adipisicing nostrud exercitation
                                    consectetur non tempor. Reprehenderit cillum sint Lorem sunt labore
                                    magna. Labore cillum nulla laboris ex nostrud sit cillum. Magna
                                    consectetur adipisicing et nostrud pariatur pariatur. Veniam Lorem ea
                                    cupidatat ea qui laborum in proident nulla.
                                    </p>

                                    <p>
                                    Fugiat ex elit pariatur irure occaecat. Voluptate occaecat consectetur
                                    ad aliquip quis tempor. Velit laboris do et eu nisi amet aliquip.
                                    Consectetur laboris reprehenderit commodo sint eiusmod laborum in.
                                    Excepteur consequat ut id nisi cillum sunt nisi eu ad laborum duis.
                                    Sunt Lorem esse cillum cillum nulla et occaecat Lorem reprehenderit
                                    minim consequat laborum reprehenderit consectetur.
                                    </p>

                                    <p>
                                    Do cillum consectetur officia duis ex sit adipisicing laborum aliquip
                                    nulla deserunt sunt nostrud. Voluptate dolor tempor nisi proident
                                    anim. Sint occaecat et deserunt eiusmod non sit Lorem velit ut
                                    occaecat. Exercitation elit ut duis fugiat eiusmod duis ullamco
                                    aliquip. Fugiat velit exercitation elit eiusmod minim laborum
                                    consectetur et adipisicing cillum.
                                    </p>

                                    <p>
                                    Ullamco do eu do Lorem commodo ullamco voluptate veniam. Elit nulla
                                    pariatur occaecat ex. Est commodo pariatur in ad ad id sit sint
                                    occaecat labore. Do laboris aliquip adipisicing amet laborum. Est qui
                                    aute anim nulla aliquip amet dolore est. Eu minim incididunt nulla
                                    elit. Irure id laborum exercitation dolor sunt sunt in eu cupidatat
                                    aliqua ex ipsum officia elit.
                                    </p>

                                    <p>
                                    Nostrud elit excepteur quis ipsum dolore ea in cupidatat. Eu elit
                                    dolore pariatur laboris sunt cupidatat ad. Sint non cillum sit ullamco
                                    culpa ad aute mollit ex officia laborum voluptate amet minim. Sunt
                                    mollit enim est dolor nisi irure officia dolore ut do. Veniam non
                                    culpa eu et occaecat laborum dolore amet adipisicing. Elit fugiat
                                    deserunt mollit aute velit id occaecat labore. Exercitation non qui
                                    occaecat ea nisi sunt dolore incididunt labore.
                                    </p>

                                    <p>
                                    Irure enim non sunt elit non excepteur exercitation et eiusmod ullamco
                                    excepteur labore est. Est in ipsum voluptate aliquip consectetur.
                                    Irure ullamco non elit exercitation consectetur pariatur id
                                    adipisicing duis ut aliquip ex nostrud. Veniam labore est elit amet
                                    ipsum anim non veniam. Culpa voluptate occaecat et cillum occaecat
                                    eiusmod nostrud sint aute mollit et ullamco. Mollit aute minim minim
                                    adipisicing Lorem mollit duis elit elit incididunt do. Deserunt dolore
                                    Lorem velit sunt adipisicing proident nulla ut.
                                    </p>
                                </motion.div>
                            </div>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default History;
