export const createError = (status, message)=>{
  const err = new Error()
  err.status= status
  err.message= message
  return err
}



// export function createError(err, req, res, next) {
//     if (typeof err === "string") {
//       return res.status(400).json({ message: err });
//     }
//   //err.name
//     if (typeof err === "ValidationError") {

//       return res.status(400).json({ message: err.message });
//     }
//   //err.name
//     if (typeof err === "UnauthorizedError") {
  
//       return res.status(401).json({ message: "Token not valid" });
//     }
  

//    // return res.status(500).json({ message: err.message });
//   }
  
// export default createError;
  


