export function calcTaxi(time) {
    // avg fuel burn 40l/h
    let taxiFuel = time / 60 * 40;
    return taxiFuel;
}

export function calcTrip(time, fuelBurn) {
    let tripFuel = time / 60 * fuelBurn;
    return tripFuel;
}

export function calcContingency(tripFuel, fuelBurn) {
    let contingency1 = 0.05 * tripFuel;
    let contingency2 = fuelBurn / 6;

    let highestContingency = contingency1 > contingency2 ? contingency1 : contingency2;

    return highestContingency;
}

export function calcAlternate(time, fuelBurn) {
    let alternateFuel = time / 60 * fuelBurn;
    return alternateFuel;
}

export function calcReserve(rules, fuelBurn) {
    if (rules === 'VFR') {
        return fuelBurn * 0.5;
    }
    else {
        return fuelBurn * 0.75;
    }
}
