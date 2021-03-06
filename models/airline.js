
// Initial table, will need to separated data into 3 tables further down the road.
module.exports = function (sequelize, DataTypes) {
    var Airline = sequelize.define("Airline", {
        //columns for table airline 
        airlineName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        departureTime: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        boardingTime: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        departureGate: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        seatAssignment: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }
    });

    Airline.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Airline.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
    };

    return Airline;
};