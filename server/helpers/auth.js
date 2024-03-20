const bcrpyt = require('bcrypt')

const hashPwd = (pwd) => {
     return new Promise((resolve, reject) => {
        bcrpyt.genSalt(14, (err, salt) => {
            if(err) {
                reject(err)
            }
            bcrpyt.hash(pwd, salt, (err, hash) => {
                if(err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
     })
}

const comparePwd = (pwd, hashed) => {
    return bcrpyt.compare(pwd, hashed)
}

module.exports = {
    hashPwd, 
    comparePwd
}