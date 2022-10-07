import React, { useState } from 'react';
import "./Css/Tabs.css"
const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Il progetto',
            title: 'Luci in piazza',
            title2: 'TuttiArtisti',
            content: 'Le luci vengono accese tra la fine di ottobre e l inizio di novembre e rimangono in citta fino alla fine delle festivita natalizie. La manifestazione di Luci in Piazza di Torino accoglie ogni anno numerosi turisti, italiani e stranieri.'
        },
        {
            id: 2,
            tabTitle: 'News',
            title: 'Lista News',
            content: ''
        },
       
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p className='title2'>{tab.title2}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;