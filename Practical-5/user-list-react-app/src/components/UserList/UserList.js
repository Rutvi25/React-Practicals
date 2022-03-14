import React from 'react'
import Title from '../Title/Title'
import User from '../User/User'

function UserList() {
  const userDetailsList = [
    {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
    {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
    {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
    {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
    {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
    {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
  ]
  return (
    <div className='user-list-container'>
              <Title />

      {
        userDetailsList.map((user) => {
          const { id, email, first_name, last_name, avatar } = user
          console.log(id, email)
          return(
            <User key={id} id={id} email={email} first_name={first_name} last_name={last_name} avatar={avatar}/>
          )
        })
      }
    </div>
  )
}

export default UserList