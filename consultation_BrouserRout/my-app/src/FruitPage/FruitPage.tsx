import React from 'react';

import Fruit from '../Fruit/Fruit';

function FruitPage(): JSX.Element{
    return(
        <><Fruit color="green" title="banana" weight={2500} />
        <Fruit color="lightblue" title="apple" weight={2500} />
        <Fruit color="orange" title="apple" weight={2500} /></>
    );
}
export default FruitPage;