import React from "react";

import Flower from "../Flower/Flower";

function FlowerCard():JSX.Element{
    return(
            <div>
                <h2>Flower card</h2>
                <Flower title='Rose' color='red' family='Roses' price={1000}/>
                <Flower title='Rose' color='gold' family='Roses' price={2000}/>
                <Flower title='Rose' color='pink' family='Roses' price={1500}/>
            </div>
        );
}

export default FlowerCard;