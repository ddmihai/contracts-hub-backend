import createAdminAccount from "../../../helpers/serverStartupFunctions/createAdmin";
import UserModel from "../../../models/user.model";
jest.mock("../../../models/user.model");
jest.mock("../../../models/permission.model");


describe('Test the create admin function that starts at the start of the server', () => {
    // Mock the user and the role (admin);


    // establish the right values when mocked
    const mockCorrectUser = {
        email: 'email@gmail.com',
        password: '$2a$10$soYhXr5z6/wpLs7E3ZweQe.EVvn6AyOVQCo5BnmhflLODiKHTYw8y',
        firstName: 'First name',
        lastName: 'Second name',
        phone: '07887637239',
        role:  'some_role_id',
        _id:  'user_id',
        __v: 0
    };


    const mockedCorrectRoles = [
        {
          _id: '658d96bde3f9ec41345782ec',
          name: 'ADMIN',
          __v: 0
        },
        {
          _id: '658d96bde3f9ec41345782ed',
          name: 'CLIENT',
          __v: 0
        },
        {
          _id: '658d96bde3f9ec41345782ee',
          name: 'BANNED',
          __v: 0
        }
    ];

    (UserModel.findOne as jest.Mock).mockResolvedValue(mockCorrectUser);




    test.todo('It will return an empty array if there is another email');
    test.todo('It will return false if the email is not inside the .env');
    test.todo('It will return false if the user is already in the database');
});