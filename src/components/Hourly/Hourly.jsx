import './Hourly.css'
import Day from '../Day/Day'

const Hourly = (props) => {

    return (
        <div className='hourly__cntr' >
            <Day
                lang={props.lang}
                data={props.data}
                dayIndex={0}
            />
            <Day
                lang={props.lang}
                data={props.data}
                dayIndex={24}
            />
            <Day
                lang={props.lang}
                data={props.data}
                dayIndex={48}

            />
            <Day
                lang={props.lang}
                data={props.data}
                dayIndex={72}
            />
            <Day
                lang={props.lang}
                data={props.data}
                dayIndex={96}
            />
            <Day
                lang={props.lang}
                data={props.data}
                dayIndex={120}
            />
            <Day
                lang={props.lang}
                data={props.data}
                dayIndex={144}
            />
        </div>
    )
}

export default Hourly