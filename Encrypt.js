const crypto = require("crypto")

module.exports = class Encrypt {
  static encrypt(password) {
    return (
      crypto
      .createHmac("sha256", "dsada56qwe68!!!#5asda")
      .update(password)
      .digest("hex")
    );
  }
}