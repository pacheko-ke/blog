// handle request for api/users
 export async function GET(Request) {
    const users = [
        {id:20,name:'pacheko'},
        {id:30,name:'Dan'},
    ]
    return new Response(JSON.stringify(users))
    
 }