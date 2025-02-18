import bcrypt from 'bcrypt'
import { UserAccounts, UserProfile } from '../database/models'

async function Registration(req, res) {
		const {
			email,
			password,
			confirmPassword,
			firstName,
			middleName,
			lastName,
			birthday,
			address,
			placeOfBirth,
		} = req.body;

	try {

		if (!email || !password || !confirmPassword || !firstName || !lastName) throw new Error('Missing Required Fields')
		if (password !== confirmPassword) throw new Error('Confirm Password Mismatch') 

		const hashedPassword = await bcrypt.hash(password, 10)

		const accountResults = await UserAccounts.create({
			email,
			hashedPassword
		})

		if (!accountResults) throw new Error('Account Creation Error')

		const profileResults = await UserProfile.create({
			firstName,
			middleName,
			lastName,
			birthday,
			address,
			placeOfBirth
		})

		if (!profileResults) throw new Error('Profile Creation Error')

		return res.status(200).json({message: 'Successful Account Creation'})

	} catch (error) {
		return res.status(400).json({message: 'Account Creation Error', error: error})
	}

}

async function Login(req, res) {

	const { 
		email,
		password
	} = req.body;

	try {
		
		const account : any = await UserAccounts.findAll({
			where: {
				email: email
			}
		})

		if (account.length === 0) throw new Error('Email Does Not Exist!')

		const accountPassword = account.password
		const isMatch = await bcrypt.compare(password, accountPassword)
		if (!isMatch) throw new Error('Password Does Not Match User Email')
		
		return res.status(200).json({message: 'Successful Login'})

	} catch (error) {
		return res.status(400).json({message: 'User Login Error', error: error})
	}
	

}

export { Registration, Login }