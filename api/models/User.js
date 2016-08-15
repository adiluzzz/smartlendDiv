
module.exports = {

  attributes: {

    email: {
      type: 'string',
      email: 'true',
      unique: 'true'
    },

    username: {
      type: 'string',
      unique: 'true'
    },

    encryptedPassword: {
      type: 'string'
    },

    gravatarURL: {
      type: 'string'
    },

    deleted: {
      type: 'boolean'
    },

    admin: {
      type: 'boolean'
    },

    banned: {
      type: 'boolean'
    },

    passwordRecoveryToken: {
      type: 'string'
    },

    // tutorials: {
    //   type: 'json'
    // },

    // tutorials: {
    //   collection: 'tutorial',
    // },

    tutorials: {
      collection: 'tutorial',
      via: 'owner'
    },

    ratings: {
      collection: 'rating',
      via: 'byUser'
    },

    // Who is following me?
    followers: {
      collection: 'user',
      via: 'following'
    },

    // Who am I following?
    following: {
      collection: 'user',
      via: 'followers'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encryptedPassword;
      return obj;
    }
  }
};
