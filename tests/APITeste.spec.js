
import {test,expect} from '@playwright/test'

var userid;


test("Get users",async ({request})=>{
    const response=await request.get("https://reqres.in/api/users/2")
    console.log(await response.json())
    expect(response.status()).toBe(200)


})
test("Create users",async ({request})=>{
   const response= await request.post("https://reqres.in/api/users",
        {        
            data:{
                "name": "morpheus",
                "job": "leader"
                 },
                 headers:{
                    "Accept":"application/json"
                 }
        });
          console.log(await response.json())
          expect(response.status()).toBe(201)
          var res=await response.json()
          userid=res.id
    

})
test("Upadate users",async ({request})=>{
    const response= await request.put("https://reqres.in/api/users/2/"+userid ,
        {        
            data:{
                "name": "morpheus",
                "job": "zion resident"
                 },
                 headers:{
                    "Accept":"application/json"
                 }
        });
          console.log(await response.json())
          expect(response.status()).toBe(200)
          
    
})
test("Delete users",async ({request})=>{

    const response=await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)
    

})