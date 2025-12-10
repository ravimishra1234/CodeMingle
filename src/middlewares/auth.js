const adminAuth = (req,res,next)=>{
// logic of checking if the request is authorized
console.log("Admin auth is gettin checked")
  const token = "xyz"
  const isAdminAuthorized = token === "xyz"
  if(!isAdminAuthorized){
    res.status(401).send("Unauthorized request")
  } else {
    next()
  }
}


const userAuth = (req,res,next)=>{
// logic of checking if the request is authorized
console.log("Admin auth is gettin checked")
  const token = "xyz123"
  const isAdminAuthorized = token === "xyz"
  if(!isAdminAuthorized){
    res.status(401).send("Unauthorized request")
  } else {
    next()
  }
}

module.exports = {
    adminAuth,
    userAuth
}