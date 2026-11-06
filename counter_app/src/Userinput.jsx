import { useState } from 'react'


export default function UserInput(){
    const [username, setUserName] = useState('LindaGift')
    const [phonenumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('123@example.com')

 return(
    <div className="userinput">
        <label htmlFor="username">Username</label>
        <input type="text"
        id='username'
        value={username}
        onChange={function handleChange(event){
            setUserName(event.target.value)
        }}
        
    />

    <label htmlFor="phonenumber">Phone Number</label>
        <input type="number"
        id='phonenumber'
        value={phonenumber}
        onChange={function handlePhonenumber(event){
            setPhoneNumber(event.target.value)
        }}
    />

    <label htmlFor="email">Email</label>
        <input type="email"
        id='email'
        value={email}
        onChange={function handleEmail(event){
            setEmail(event.target.value)
        }}
    />
        
    </div>
 )   
}