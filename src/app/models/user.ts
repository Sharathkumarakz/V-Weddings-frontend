export interface user{
  user:User
}

export interface User{
    username:string,
    phone:string,
    email:string,
    isBlocked:boolean,
    verified:boolean
}