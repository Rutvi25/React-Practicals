const initialData = {
  userDetails: [ 
    {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg","clicksReviewed":"3000","monthlyClicks":"5000","isUserActive":true},
    {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg","clicksReviewed":"1000","monthlyClicks":"3000","isUserActive":false},
    {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg","clicksReviewed":"3000","monthlyClicks":"6000","isUserActive":false},
    {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg","clicksReviewed":"2000","monthlyClicks":"5000","isUserActive":false},
    {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg","clicksReviewed":"1500","monthlyClicks":"3000","isUserActive":false},
    {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg","clicksReviewed":"5000","monthlyClicks":"5000","isUserActive":false},
    {"id":7,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg","clicksReviewed":"4203","monthlyClicks":"5000","isUserActive":false},
    {"id":8,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg","clicksReviewed":"3000","monthlyClicks":"4568","isUserActive":false},
    {"id":9,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg","clicksReviewed":"3000","monthlyClicks":"3500","isUserActive":false},
    {"id":10,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg","clicksReviewed":"2478","monthlyClicks":"5000","isUserActive":false},
    {"id":11,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg","clicksReviewed":"1568","monthlyClicks":"3000","isUserActive":false},
    {"id":12,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg","clicksReviewed":"2000","monthlyClicks":"3000","isUserActive":false}
  ],
  userProfile: []
}
const userListReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return {
        userDetails: [...state.userDetails.filter((user) => user.id!== action.payload.id)],
        userProfile: []
      }
    case 'MOUSE_ENTER':
      return {
        ...state,
        userProfile: [
          {
            user: action.payload.user
          }
        ]
      }
    case 'MOUSE_LEAVE':
      return {
        ...state,
        userProfile: []
      }
    case 'CHANGE_STATUS':
      return{
        ...state,
        userDetails : state.userDetails.map((userDetail) => {
          if(userDetail.id === action.payload.id) {
            return {
              ...userDetail,
              isUserActive: !userDetail.isUserActive
            }
          }
          else {
            return userDetail;            
          }
        })
      }
    default: return state
  }
}

export default userListReducers;