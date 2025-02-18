import { DataTypes, Model, Sequelize } from "sequelize"

export default (sequelize: Sequelize) => {
class UserAccounts extends Model {
	static associate(models: any) {
		UserAccounts.hasOne(models.UserProfile, { foreignKey: 'profileId' });
	}
}

UserAccounts.init(
	{
		accountId: {
			type:DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			field: "email"
		},
		encryptedPassword: {
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