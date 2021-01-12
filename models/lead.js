// we are collecting emails, which he calls leads, so the db table and model will be called Lead

'use-strict';

module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
        id: {
            tpye: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Lead
}