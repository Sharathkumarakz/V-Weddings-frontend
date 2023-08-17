export interface user{
  user:User
}

export interface User{
  _id:string,
    username:string,
    phone:string,
    email:string,
    isBlocked:boolean,
    verified:boolean
}