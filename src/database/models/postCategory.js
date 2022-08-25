const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
    },
    { timestamps: false },
  );

  return PostCategory;
};

module.exports = PostCategory;
