'use strict';

const User = use('App/Model/User');

class UserController {
  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {

  }

}

module.exports = UserController;
