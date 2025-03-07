import bcrypt from 'bcrypt'
import { UserAccounts, UserProfile } from '../database/models/index.js'
import express from 'express'
const router = express.Router()

async function AccountSeeder(req, res) {
	const email = "matthew@gmail.com"
	const password = "password123"
	const firstName = 'Matthew'
	const middleName = 'Menor'
	const lastName = 'Cania'
	const address = 'kiko camarin'
	const birthday = new Date()
	const placeOfBirth = 'Philippines'

	try {

		if (!email || !password  || !firstName || !lastName) throw new Error('Missing Required Fields')

		const hashedPassword = await bcrypt.hash(password, 10)


		const accountResults = await UserAccounts.create({
			email: email,
			encryptedPassword: hashedPassword
		})

		if (!accountResults) throw new Error('Account Creation Error')

		const profileResults = await UserProfile.create({
			firstName: firstName,
			middleName: middleName,
			lastName: lastName,
			birthday: birthday,
			address: address,
			placeOfBirth: placeOfBirth
		})

		if (!profileResults) throw new Error('Profile Creation Error')

		return res.status(200).json({message: 'Successful Account Creation'})

	} catch (error) {
		return res.status(400).json({message: 'Account Creation Error', error: error.message})
	}

}

async function AccountReset(req, res) {
	
	try {
		
		const accountResults = await UserAccounts.destroy({
			where: {
				email: "matthew@gmail.com"
			}
		})

		if (!accountResults) throw new Error('Error Resetting Accounts')

		const profileResults = await UserProfile.destroy({
			where: {
				firstName: "Matthew"
			}
		})

		if (!profileResults) throw new Error('Error Resetting Profile')

		res.status(200).json({message: "Successful Reset of Databases"})

	} catch (error) {
		return res.status(400).json({message: 'Database Reset Error', error: error.message})
	}

}

export { AccountReset, AccountSeeder }