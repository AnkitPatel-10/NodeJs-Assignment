const { userSchema } = require('./userValidation');

class UserRequestDto {
    constructor({ _id, name, email, age, city, zipcode }) {
        this.id = _id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.city = city;
        this.zipcode = zipcode;
    }

    // Validate incoming request data using Joi schema
    static validate(data) {
        const { error } = userSchema.validate(data, { abortEarly: false });
        if (error) {
            return error.details.map((detail) => detail.message);
        }
        return [];
    }
}

module.exports = UserRequestDto;
