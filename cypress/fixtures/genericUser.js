
import {faker} from '@faker-js/faker';

 const genericUsers = 
  [
    {
        "email": faker.internet.email(), 
        "password": faker.internet.password()
    }

   ]
   module.exports = genericUsers;
