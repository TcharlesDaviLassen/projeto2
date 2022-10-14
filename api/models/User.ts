import { DataTypes, Model } from 'sequelize';
import db from '../db/indexDB';

class User extends Model {

  declare id: string;
  declare name: string;
  declare age: string;
  declare sex: string;
  declare email: string;
  declare password: string;
  
  static async localizaUsuarios(name: string, password: string) {
    return await User.findOne({
      where: {
        name: name,
        password: password
      }
    });
  }
  
};

User.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    age:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sex:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    password:
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'users',
    modelName: 'User'
  }
);

export default User;

