'use strict'

const Lucid = use('Lucid')

class Ribbit extends Lucid {


  body() {
    return this.belongsTo('App/Model/user', 'id', 'user_id');
  }
}

module.exports = Ribbit
