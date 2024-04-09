import React from 'react'
import "./next-page.css"
import Navigation from '../../components/navigation/Navigation'
import menu from "./menu.png"

const NextPage = () => {
  return (
    <div>
        <div className="next-page">
            <div className="top-title">
                <h1 className='book-title'>Little Pigeon</h1>
                <img src={menu} alt="image not found" />
            </div>
            <h3>Genre</h3>
            <h4>Lorem ipsum dolor is delectus quidem exercitationem! accusantium earum, reprehendLorem ipsum dolor is delectus quidem exercitationem! accusantium earum, reprehendLorem ipsum dolor is delectus quidem exercitationem! accusantium earum, reprehenderit eos aliquid, optio soluta corporis vero sunt voluptate est consequatur ut corrupti consectetur nobis delectus quidem exercitationem! accusantium earum, reprehenderit eos aliquid, optio soluta corporis vero sunt voluptate est consequatur ut corrupti consectetur nobis delectus quidem exercitationem! accusantium earum, reprehenderit eos aliquid, optio soluta corporis vero sunt voluptate est consequatur ut corrupti consectetur nobis delectus quidem exercitationem! accusantium earum, reprehenderit eos aliquid, optio soluta corporis vero sunt voluptate est consequatur ut corrupti consectetur nobis delectus quidem exercitationem!</h4>
            <div className="reading-progress">
                <h4 className='current-chapter'>Current Chapter</h4>
                <h1 className='upper-line'></h1>
                <h2 className='bottom-line'></h2>
                <h4 className='page-no'>22/136pages</h4>
            </div>
            <Navigation/>
        </div>
    </div>
  )
}

export default NextPage
