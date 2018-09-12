module.exports = function(sequelize, DataTypes) {
    var Images = sequelize.define("Images", {
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Images
};
