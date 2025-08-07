import User from '../models/user.js'

const usersData = [
    {
        "_id": "507f1f77bcf86cd799439011",
        "username": "johndoe123",
        "email": "john.doe@email.com",
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "John Doe",
        "dateOfBirth": "1990-05-15",
        "age": 34,
        "gender": "male",
        "phoneNumber": "+1-555-0123",
        "address": {
            "street": "123 Main Street",
            "city": "New York",
            "state": "NY",
            "zipCode": "10001",
            "country": "USA",
            "coordinates": {
                "latitude": 40.7128,
                "longitude": -74.0060
            }
        },
        "profilePicture": "https://example.com/profiles/johndoe.jpg",
        "accountStatus": "active",
        "role": "user",
        "preferences": {
            "language": "en",
            "timezone": "America/New_York",
            "notifications": {
                "email": true,
                "sms": false,
                "push": true
            },
            "theme": "light"
        },
        "socialMedia": {
            "linkedin": "https://linkedin.com/in/johndoe",
            "twitter": "@johndoe123"
        },
        "subscription": {
            "plan": "premium",
            "startDate": "2024-01-15",
            "expiryDate": "2025-01-15",
            "autoRenew": true
        },
        "createdAt": "2024-01-10T08:30:00Z",
        "updatedAt": "2024-07-20T14:22:00Z",
        "lastLogin": "2024-08-05T09:15:00Z",
        "loginCount": 245,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "tags": [
            "premium-user",
            "early-adopter"
        ],
        "metadata": {
            "registrationSource": "mobile-app",
            "referralCode": "REF123456"
        }
    },
    {
        "_id": "507f1f77bcf86cd799439012",
        "username": "sarahsmith456",
        "email": "sarah.smith@email.com",
        "firstName": "Sarah",
        "lastName": "Smith",
        "fullName": "Sarah Smith",
        "dateOfBirth": "1985-11-22",
        "age": 39,
        "gender": "female",
        "phoneNumber": "+1-555-0456",
        "address": {
            "street": "456 Oak Avenue",
            "city": "Los Angeles",
            "state": "CA",
            "zipCode": "90210",
            "country": "USA",
            "coordinates": {
                "latitude": 34.0522,
                "longitude": -118.2437
            }
        },
        "profilePicture": "https://example.com/profiles/sarahsmith.jpg",
        "accountStatus": "active",
        "role": "admin",
        "preferences": {
            "language": "en",
            "timezone": "America/Los_Angeles",
            "notifications": {
                "email": true,
                "sms": true,
                "push": true
            },
            "theme": "dark"
        },
        "socialMedia": {
            "linkedin": "https://linkedin.com/in/sarahsmith",
            "instagram": "@sarahsmith456"
        },
        "subscription": {
            "plan": "enterprise",
            "startDate": "2023-06-01",
            "expiryDate": "2025-06-01",
            "autoRenew": true
        },
        "createdAt": "2023-05-25T12:00:00Z",
        "updatedAt": "2024-08-01T16:45:00Z",
        "lastLogin": "2024-08-05T07:30:00Z",
        "loginCount": 892,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "tags": [
            "admin",
            "power-user",
            "enterprise"
        ],
        "metadata": {
            "registrationSource": "web",
            "department": "IT"
        }
    },
    {
        "_id": "507f1f77bcf86cd799439013",
        "username": "mikejohnson789",
        "email": "mike.johnson@email.com",
        "firstName": "Michael",
        "lastName": "Johnson",
        "fullName": "Michael Johnson",
        "dateOfBirth": "1992-03-08",
        "age": 32,
        "gender": "male",
        "phoneNumber": "+1-555-0789",
        "address": {
            "street": "789 Pine Road",
            "city": "Chicago",
            "state": "IL",
            "zipCode": "60601",
            "country": "USA",
            "coordinates": {
                "latitude": 41.8781,
                "longitude": -87.6298
            }
        },
        "profilePicture": null,
        "accountStatus": "active",
        "role": "user",
        "preferences": {
            "language": "en",
            "timezone": "America/Chicago",
            "notifications": {
                "email": false,
                "sms": true,
                "push": false
            },
            "theme": "light"
        },
        "socialMedia": {
            "twitter": "@mikej789"
        },
        "subscription": {
            "plan": "basic",
            "startDate": "2024-03-20",
            "expiryDate": null,
            "autoRenew": false
        },
        "createdAt": "2024-03-18T10:15:00Z",
        "updatedAt": "2024-07-10T11:30:00Z",
        "lastLogin": "2024-08-04T20:45:00Z",
        "loginCount": 67,
        "isEmailVerified": true,
        "isPhoneVerified": false,
        "tags": [
            "new-user"
        ],
        "metadata": {
            "registrationSource": "web",
            "referralCode": "REF789012"
        }
    },
    {
        "_id": "507f1f77bcf86cd799439014",
        "username": "emilybrown321",
        "email": "emily.brown@email.com",
        "firstName": "Emily",
        "lastName": "Brown",
        "fullName": "Emily Brown",
        "dateOfBirth": "1988-09-12",
        "age": 36,
        "gender": "female",
        "phoneNumber": "+1-555-0321",
        "address": {
            "street": "321 Elm Street",
            "city": "Miami",
            "state": "FL",
            "zipCode": "33101",
            "country": "USA",
            "coordinates": {
                "latitude": 25.7617,
                "longitude": -80.1918
            }
        },
        "profilePicture": "https://example.com/profiles/emilybrown.jpg",
        "accountStatus": "suspended",
        "role": "user",
        "preferences": {
            "language": "es",
            "timezone": "America/New_York",
            "notifications": {
                "email": true,
                "sms": false,
                "push": true
            },
            "theme": "dark"
        },
        "socialMedia": {
            "facebook": "https://facebook.com/emily.brown",
            "instagram": "@emilybrown321"
        },
        "subscription": {
            "plan": "premium",
            "startDate": "2023-12-01",
            "expiryDate": "2024-12-01",
            "autoRenew": false
        },
        "createdAt": "2023-11-28T14:20:00Z",
        "updatedAt": "2024-06-15T09:10:00Z",
        "lastLogin": "2024-06-14T18:22:00Z",
        "loginCount": 156,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "tags": [
            "suspended",
            "payment-issue"
        ],
        "metadata": {
            "registrationSource": "mobile-app",
            "suspensionReason": "payment-failure"
        }
    },
    {
        "_id": "507f1f77bcf86cd799439015",
        "username": "davidwilson654",
        "email": "david.wilson@email.com",
        "firstName": "David",
        "lastName": "Wilson",
        "fullName": "David Wilson",
        "dateOfBirth": "1995-07-03",
        "age": 29,
        "gender": "male",
        "phoneNumber": "+1-555-0654",
        "address": {
            "street": "654 Maple Drive",
            "city": "Seattle",
            "state": "WA",
            "zipCode": "98101",
            "country": "USA",
            "coordinates": {
                "latitude": 47.6062,
                "longitude": -122.3321
            }
        },
        "profilePicture": "https://example.com/profiles/davidwilson.jpg",
        "accountStatus": "active",
        "role": "moderator",
        "preferences": {
            "language": "en",
            "timezone": "America/Los_Angeles",
            "notifications": {
                "email": true,
                "sms": true,
                "push": true
            },
            "theme": "auto"
        },
        "socialMedia": {
            "linkedin": "https://linkedin.com/in/davidwilson",
            "github": "https://github.com/davidwilson654"
        },
        "subscription": {
            "plan": "premium",
            "startDate": "2024-02-10",
            "expiryDate": "2025-02-10",
            "autoRenew": true
        },
        "createdAt": "2024-02-05T16:45:00Z",
        "updatedAt": "2024-08-03T13:15:00Z",
        "lastLogin": "2024-08-05T12:00:00Z",
        "loginCount": 423,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "tags": [
            "moderator",
            "tech-savvy",
            "active-user"
        ],
        "metadata": {
            "registrationSource": "web",
            "skillLevel": "advanced"
        }
    },
    {
        "_id": "507f1f77bcf86cd799439016",
        "username": "lisagarcia987",
        "email": "lisa.garcia@email.com",
        "firstName": "Lisa",
        "lastName": "Garcia",
        "fullName": "Lisa Garcia",
        "dateOfBirth": "1991-12-18",
        "age": 33,
        "gender": "female",
        "phoneNumber": "+1-555-0987",
        "address": {
            "street": "987 Cedar Lane",
            "city": "Austin",
            "state": "TX",
            "zipCode": "73301",
            "country": "USA",
            "coordinates": {
                "latitude": 30.2672,
                "longitude": -97.7431
            }
        },
        "profilePicture": null,
        "accountStatus": "pending",
        "role": "user",
        "preferences": {
            "language": "en",
            "timezone": "America/Chicago",
            "notifications": {
                "email": true,
                "sms": false,
                "push": false
            },
            "theme": "light"
        },
        "socialMedia": {},
        "subscription": {
            "plan": "basic",
            "startDate": null,
            "expiryDate": null,
            "autoRenew": false
        },
        "createdAt": "2024-08-01T09:30:00Z",
        "updatedAt": "2024-08-01T09:30:00Z",
        "lastLogin": null,
        "loginCount": 0,
        "isEmailVerified": false,
        "isPhoneVerified": false,
        "tags": [
            "new-registration",
            "pending-verification"
        ],
        "metadata": {
            "registrationSource": "web",
            "verificationToken": "abc123def456"
        }
    },
    {
        "_id": "507f1f77bcf86cd799439017",
        "username": "robertlee456",
        "email": "robert.lee@email.com",
        "firstName": "Robert",
        "lastName": "Lee",
        "fullName": "Robert Lee",
        "dateOfBirth": "1987-04-25",
        "age": 37,
        "gender": "male",
        "phoneNumber": "+1-555-0147",
        "address": {
            "street": "147 Birch Street",
            "city": "Boston",
            "state": "MA",
            "zipCode": "02101",
            "country": "USA",
            "coordinates": {
                "latitude": 42.3601,
                "longitude": -71.0589
            }
        },
        "profilePicture": "https://example.com/profiles/robertlee.jpg",
        "accountStatus": "inactive",
        "role": "user",
        "preferences": {
            "language": "en",
            "timezone": "America/New_York",
            "notifications": {
                "email": false,
                "sms": false,
                "push": false
            },
            "theme": "light"
        },
        "socialMedia": {
            "linkedin": "https://linkedin.com/in/robertlee"
        },
        "subscription": {
            "plan": "premium",
            "startDate": "2023-08-15",
            "expiryDate": "2024-08-15",
            "autoRenew": false
        },
        "createdAt": "2023-08-10T11:00:00Z",
        "updatedAt": "2024-08-15T23:59:59Z",
        "lastLogin": "2024-02-20T15:30:00Z",
        "loginCount": 89,
        "isEmailVerified": true,
        "isPhoneVerified": false,
        "tags": [
            "inactive",
            "expired-subscription"
        ],
        "metadata": {
            "registrationSource": "mobile-app",
            "inactiveReason": "subscription-expired"
        }
    },
    {
        "_id": "507f1f77bcf86cd799439018",
        "username": "amandaclark789",
        "email": "amanda.clark@email.com",
        "firstName": "Amanda",
        "lastName": "Clark",
        "fullName": "Amanda Clark",
        "dateOfBirth": "1993-08-30",
        "age": 31,
        "gender": "female",
        "phoneNumber": "+1-555-0258",
        "address": {
            "street": "258 Willow Avenue",
            "city": "Denver",
            "state": "CO",
            "zipCode": "80201",
            "country": "USA",
            "coordinates": {
                "latitude": 39.7392,
                "longitude": -104.9903
            }
        },
        "profilePicture": "https://example.com/profiles/amandaclark.jpg",
        "accountStatus": "active",
        "role": "user",
        "preferences": {
            "language": "en",
            "timezone": "America/Denver",
            "notifications": {
                "email": true,
                "sms": true,
                "push": false
            },
            "theme": "dark"
        },
        "socialMedia": {
            "instagram": "@amandaclark789",
            "tiktok": "@amandac789"
        },
        "subscription": {
            "plan": "premium",
            "startDate": "2024-05-01",
            "expiryDate": "2025-05-01",
            "autoRenew": true
        },
        "createdAt": "2024-04-28T13:45:00Z",
        "updatedAt": "2024-07-25T10:20:00Z",
        "lastLogin": "2024-08-04T16:18:00Z",
        "loginCount": 134,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "tags": [
            "active-user",
            "social-media-influencer"
        ],
        "metadata": {
            "registrationSource": "social-media",
            "influencerStatus": "micro-influencer"
        }
    }
]

export const createUserService = async (file, data) => {

    const newUserDetails = new User(data)
    const result = await newUserDetails.save()
    console.log(result);

    return { success: true }

}

export const getUserWithId = async (id) => {

    try {
        const user = await User.findById(id)
        if (user) {
            return user
        }
        return false

    } catch (error) {
        return false
    }

}

export const updateUserDetailsServce = async (userId, body) => {

    try {
        const user = await User.findByIdAndUpdate(userId, body)
        console.log(user);

        if (user) {
            return user
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

export const getAllUsersService = async () => {

    const allUsers = await User.find()

    return allUsers

}

export const deleteUserService = async (userId) => {
    try {
        await User.findByIdAndDelete(userId)

        return true

    } catch (error) {

        return new Error("failed to delete user ")
    }
}

export const createSampleUsers = async () => {
    try {

        usersData.map(async (item) => {
            const newUserDetails = new User(
                {
                    name: item.fullName,
                    age: item.age,
                    email: item.email,
                    city: item.address.city,
                    gender: item.gender,
                }
            )
            await newUserDetails.save()
        })

    } catch (error) {
        console.log(error);

    }
}

export const filterUsers = async () => {
    try {

        const data = await User.aggregate([
            // {
            //     $match: { // this is for match the document 
            //         age: { $gte: 30, $lte: 35 } // based on age range 
            //     }
            // },
            {
                $project: {
                    name: 1,
                    age: 1,
                    email: 1,
                    city: 1,
                    _id: 0,
                }
            },
            {
                $sort: { age: -1 }
            },
            {
                $skip: 2
            },
            {
                $limit: 2
            }
        ])

        console.log(data);

        return data


    } catch (error) {
        console.log(error);

    }
}

