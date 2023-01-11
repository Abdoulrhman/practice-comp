import React, { useEffect } from 'react'
import './styles.css'

const Tabs =()=> {
    const [activeTab, setActiveTab] = React.useState({})

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    useEffect(() => {
        console.log('activeTab', activeTab)
    }, [activeTab])

    

    const tabsArray = [{
        id: 59886,
        title: 'Tab1',
        content: 'Content1'
    },
    {
        id: 65676,
        title: 'Tab2',
        content: 'Content2'
    },
    {
        id: 9859,
        title: 'Tab3',
        content: 'Content3'
    
    }]

  return (
    <div>
     <div className='tabs-wrapper'>
        {tabsArray.map((tab) => {
            const {id ,title} = tab
            return (
                <div key={id} className={`tab ${activeTab.id === id ? 'active' : ''}`} onClick={()=>handleTabClick(tab)}> {title}  </div>
            )
        })}
      
    </div>

    <div className='content-wrapper'>
        <p>{activeTab.content}</p>
    </div>
    </div>
    
  )
}

export default Tabs