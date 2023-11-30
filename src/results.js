export const results = (() => {
    // WB
    let tow = 0;
    let moment = 0;

    const updateTow = (updated) => tow = updated;
    const updateMoment = (updated) => moment = updated;

    const getTow = () => tow;
    const getMoment = () => moment;

    // departure
    let tor = 0;
    let tod = 0;
    let roc = 0;
    let timeToc = 0;
    let distanceToc = 0;
    let fuelToc = 0;

    const updateTor = (updated) => tor = updated;
    const updateTod = (updated) => tod = updated;
    const updateRoc = (updated) => roc = updated;
    const updateTimeToc = (updated) => timeToc = updated;
    const updateDistanceToc = (updated) => distanceToc = updated;
    const updateFuelToc = (updated) => fuelToc = updated;

    const getTor = () => tor;
    const getTod = () => tod;
    const getRoc = () => roc;
    const getTimeToc = () => timeToc;
    const getDistanceToc = () => distanceToc;
    const getFuelToc = () => fuelToc;

    // route
    let rpm = 0;
    let tas = 0;
    let fuelBurn = 0;
    let range = 0;
    let endurance = 0;

    const updateRpm = (updated) => rpm = updated;
    const updateTas = (updated) => tas = updated;
    const updateFuelBurn = (updated) => fuelBurn = updated;
    const updateRange = (updated) => range = updated;
    const updateEndurance = (updated) => endurance = updated;

    const getRpm = () => rpm;
    const getTas = () => tas;
    const getFuelBurn = () => fuelBurn;
    const getRange = () => range;
    const getEndurance = () => endurance;

    // destination
    let groundRoll = 0;
    let landingDistance = 0;

    const updateGroundRoll = (updated) => groundRoll = updated;
    const updateLandingDistance = (updated) => landingDistance = updated;

    const getGroundRoll = () => groundRoll;
    const getLandingDistance = () => landingDistance;

    // fuel
    let taxi = 0;
    let trip = 0;
    let contingency = 0;
    let alternate = 0;
    let reserve = 0;
    let minimum = 0;

    const updateTaxi = (updated) => taxi = updated;
    const updateTrip = (updated) => trip = updated;
    const updateContingency = (updated) => contingency = updated;
    const updateAlternate = (updated) => alternate = updated;
    const updateReserve = (updated) => reserve = updated;
    const updateMinimum = (updated) => minimum = updated;

    const getTaxi = () => taxi;
    const getTrip = () => trip;
    const getContingency = () => contingency;
    const getAlternate = () => alternate;
    const getReserve = () => reserve;
    const getMinimum = () => minimum;

    return {
        updateTow,
        updateMoment,
        getTow,
        getMoment,
        updateTor,
        updateTod,
        updateRoc,
        updateTimeToc,
        updateDistanceToc,
        updateFuelToc,
        getTor,
        getTod,
        getRoc,
        getTimeToc,
        getDistanceToc,
        getFuelToc,
        updateRpm,
        updateTas,
        updateFuelBurn,
        updateRange,
        updateEndurance,
        getRpm,
        getTas,
        getFuelBurn,
        getRange,
        getEndurance,
        updateGroundRoll,
        updateLandingDistance,
        getGroundRoll,
        getLandingDistance,
        updateTaxi,
        updateTrip,
        updateContingency,
        updateAlternate,
        updateReserve,
        updateMinimum,
        getTaxi,
        getTrip,
        getContingency,
        getAlternate,
        getReserve,
        getMinimum,
    }
})();