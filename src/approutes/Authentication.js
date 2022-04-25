// -----------------FUNCTIONAL COMPONENT--------------------
const Auth = {
  authenticated: false,
  login(cb) {
    Auth.authenticated = true;
    cb();
  },
  logout(cb) {
    Auth.authenticated = false;
    cb();
  },
  isAuthenticated() {
    return Auth.authenticated
  }
};
export default Auth;
// -----------------CLASS COMPONENT--------------------
// class Auth {
//   constructor() {
//     this.authenticated = false;
//   }
//   login(cb) {
//     this.authenticated = true;
//     cb();
//   }
//   logout(cb) {
//     this.authenticated = false;
//     cb();
//   }
//   isAuthenticated() {
//     return this.authenticated;
//   }
// }
// export default new Auth();
