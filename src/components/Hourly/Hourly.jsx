import './Hourly.css'
import Day from '../Day/Day'
import { useEffect, useState } from 'react'

const Hourly = () => {

    const [openedDayTab, setOpenedDayTab] = useState(0)

    useEffect(() => {
        if (openedDayTab !== 0) {
            const scroll = () => {
                const section = document.getElementById('day');
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            scroll()
        }
    }, [openedDayTab])

    return (
        <div className='hourly__cntr'
            id='day'>
            <Day
                dayIndex={0}
                openedDayTab={openedDayTab}
                setOpenedDayTab={setOpenedDayTab}
            />
            <Day
                dayIndex={24}
                openedDayTab={openedDayTab}
                setOpenedDayTab={setOpenedDayTab}
            />
            <Day
                dayIndex={48}
                openedDayTab={openedDayTab}
                setOpenedDayTab={setOpenedDayTab}

            />
            <Day
                dayIndex={72}
                openedDayTab={openedDayTab}
                setOpenedDayTab={setOpenedDayTab}
            />
            <Day
                dayIndex={96}
                openedDayTab={openedDayTab}
                setOpenedDayTab={setOpenedDayTab}
            />
            <Day
                dayIndex={120}
                openedDayTab={openedDayTab}
                setOpenedDayTab={setOpenedDayTab}
            />
            <Day
                dayIndex={144}
                openedDayTab={openedDayTab}
                setOpenedDayTab={setOpenedDayTab}
            />
        </div>
    )
}

export default Hourly