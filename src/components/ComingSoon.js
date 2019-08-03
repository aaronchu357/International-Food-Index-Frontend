import React from 'react'
import TopNavBar from './TopNavBar'
import CountdownTimer from './CountdownTimer'

const deadlineDate = new Date('September 31, 2019 23:59:59').getTime()

const ComingSoon = props => {
  return (
    <div className='coming-soon-page'>
      <TopNavBar {...props} buttonName={"Login"} navPath={"/login"} />
      <CountdownTimer deadlineDate={deadlineDate}/>
    </div>
  )
}

export default ComingSoon