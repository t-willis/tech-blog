const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_posted: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        commented_on: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blogpost',
                key: 'id',
            },
        },
        commented_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
        timestamps: false,
      }
)

module.exports = Comment;