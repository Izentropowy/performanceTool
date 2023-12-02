export function calcTaxi(time) {
    // avg fuel burn 35l/h
    let taxiFuel = parseFloat(time / 60 * 35);
    return taxiFuel.toFixed(2);
}

export function calcTrip(time, fuelBurn, timeToc, fuelBurnToc) {
    let tripFuel;
    if (timeToc && fuelBurnToc != 0) {
        tripFuel = parseFloat((time - timeToc) / 60 * fuelBurn) + parseFloat(fuelBurnToc);
    }
    else {
        tripFuel = parseFloat(time / 60 * fuelBurn);
    }

    return tripFuel.toFixed(2);
}

export function calcContingency(tripFuel, fuelBurn) {
    let contingency1 = parseFloat(0.05 * tripFuel);
    let contingency2 = parseFloat(fuelBurn / 6);

    let highestContingency = contingency1 > contingency2 ? contingency1 : contingency2;

    return highestContingency.toFixed(2);
}

export function calcAlternate(time, fuelBurn) {
    let alternateFuel = parseFloat(time / 60 * fuelBurn);
    return alternateFuel.toFixed(2);
}

export function calcReserve(rules, fuelBurn) {
    if (rules === 'VFR') {
        return (fuelBurn * 0.5).toFixed(2);
    }
    else {
        return (fuelBurn * 0.75).toFixed(2);
    }
}
