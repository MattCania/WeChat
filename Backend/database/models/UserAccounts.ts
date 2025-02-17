import { DataTypes, Model, Sequelize } from "sequelize"

export default (sequelize: Sequelize) => {
class UserAccounts extends Model {
	static associate(models: any) {
		UserAccounts.hasOne(models.UserProfile, { foreignKey: 'ProfileId' });
	}
}

UserAccounts.init(
	{
		AccountId: {
			type:DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		EncryptedPassword: {
			type: DataTypes.STRING,
			allowNull: false
		},
	},
	{
		sequelize,
		tableName: 'UserAccounts',
		timestamps: true

	}
	
)
return UserAccounts;
}