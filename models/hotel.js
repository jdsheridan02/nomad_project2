module.exports = function (sequelize, DataTypes) {
    var Hotel = sequelize.define("Hotel", {
        // Creating table columns with info pertinent to hotel stay
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        checkin: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        checkout: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }

    });

    Hotel.associate = function (models) {
        // Associating Hotel with User, to show only hotel information for specific user.
        Hotel.hasMany(models.User, {
            onDelete: "cascade"
        });
    };

    return Hotel;
};
