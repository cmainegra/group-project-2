module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Post;
};
