export const results = (() => {
    let fuelBurn = 0;

    function updateFuelBurn(fb) {
        fuelBurn = fb;
    }

    function getFuelBurn() {
        return fuelBurn;
    }

    return {
        updateFuelBurn,
        getFuelBurn,
    }
})();