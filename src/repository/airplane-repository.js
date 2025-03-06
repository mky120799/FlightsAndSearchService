const { Airplane } = require('../models/index');
console.log("Airplane imported from the model index: ", Airplane);
class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            console.log("Airplane-at-repository: ", airplane);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;