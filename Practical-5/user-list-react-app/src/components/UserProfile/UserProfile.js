import './UserProfile.css'

function UserProfile(props) {
  const { data } = props
  const { first_name, last_name, email, avatar, monthlyClicks, clicksReviewed } = data
  let usage = clicksReviewed/monthlyClicks*100
  return (
    <div className='user-profile-container'>
      <div className='user-profile-avatar'>
        <img src={ avatar } alt='user-profile-avatar'/>
      </div>
      <div className='user-profile-name'>{ first_name } { last_name }</div>
      <div className='user-profile-email'>{ email }</div>
      <div className='user-plan'>Your Plan: Standard</div>
      <div className='user-profile-status'>Active User</div>
      <div className='user-plan-usage'>Plan Uses</div> 
      {/*Progress Bar*/}
      <div id="progressBar">
        <div id="usage" style={{'width': usage+'%'}}></div>
      </div>
      <div className='clicks'>
        <div className='clicks-reviewed'>
          <div className='click-reviewed-count'>{ clicksReviewed }</div>
          <div className='click-reviewed-text'>clicks reviewed</div>
        </div>
        <div className='separator'></div>
        <div className='monthly-clicks'>
          <div className='monthly-click-count'>{ monthlyClicks }</div>
          <div className='monthly-click-text'>Monthly clicks</div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile