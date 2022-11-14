module.exports = (sequelize, DataTypes) => {
    const Diskusi = sequelize.define('Diskusi', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
          },
          id_user: {
            type: DataTypes.STRING,
            allowNull: false
          },
          id_topic: {
            type: DataTypes.STRING,
            allowNull: false
          },
          judul_diskusi: {
            type: DataTypes.STRING,
            allowNull: false
          },
          isi_diskusi: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          total_lihat: {
            type: DataTypes.INTEGER,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          }
    }, {
        tableName: 'diskusi'
    });
    
  return Diskusi;
}