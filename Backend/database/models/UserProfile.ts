import { DataTypes, Model, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
class UserProfile extends Model {
	static associate(models: any) {
		UserProfile.belongsTo(models.UserAccounts, { foreignKey: 'AccountId' });
	}

}

UserProfile.init(
	{
	ProfileId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	FirstName:{
		type: DataTypes.STRING
	},
	MiddleName:{
		type: DataTypes.STRING
	},
	LastName:{
		type: DataTypes.STRING
	},
	Birthday: {
		type: DataTypes.DATE
	},
	Address: {
		type: DataTypes.STRING
	},
	PlaceOfBirth: {
		type: DataTypes.STRING
	}
	},
	{
		sequelize,
		tableName: 'UserProfile',
		timestamps: true
	}
)
return UserProfile;
}