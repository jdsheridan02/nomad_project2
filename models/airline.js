
// Initial table, will need to separated data into 3 tables further down the road.
module.exports = function (sequelize, DataTypes) {
    var Nomad = sequelize.define("Nomad", {
        airline: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        hotel: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        pointofInterest: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }
    });

    // Post.associate = function (models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Post.belongsTo(models.Author, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Nomad;
};