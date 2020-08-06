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

    // Author.associate = function (models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Author.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };

    return Author;
};
