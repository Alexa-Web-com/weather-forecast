import './Hourly.css'
import Hour from '../Hour/Hour'
import Day from '../Day/Day'


const Hourly = (props) => {
    return (
        <div className='hourly_cntr' >
            <p >Tu bedzie pogoda godzinowa</p>
            <div className='hourly_wrapper'>
                <Day />
                <Hour />
                <Hour />
                <Hour />
                <Day />
            </div>
        </div>
    )
}

export default Hourly