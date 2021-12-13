

export const authenticate=(response, next)=>{

  if(window!=='undefined'){
    sessionStorage.setItem('user',JSON.stringify(response.data.name))
    sessionStorage.setItem('token',JSON.stringify(response.data.token))
  }

  next()
}

export const gettoken=()=>{

  if(window!=='undefined'){
    if(sessionStorage.getItem('token')){
      return JSON.parse(sessionStorage.getItem('token'))
    }else{
      return false
    }
  }
 }

 export const getuser=()=>{

  if(window!=='undefined'){
    if(sessionStorage.getItem('user')){
      return JSON.parse(sessionStorage.getItem('user'))
    }else{
      return false
    }
  }
  }

 export const logout=next=>{

  if(window!=='undefined'){
       sessionStorage.removeItem('token')
       sessionStorage.removeItem('user')
   }
 
   next()
 }