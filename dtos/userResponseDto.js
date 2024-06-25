class UserResponseDto {
    constructor({ _id, name, email, age, city, zipcode }) {
      this.id = _id;
      this.name = name;
      this.email = email;
      this.age = age;
      this.city = city;
      this.zipcode = zipcode;

    }
  }
  
  module.exports = UserResponseDto;