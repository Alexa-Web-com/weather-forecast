import arrowN from '../assets/arrows/arrowN.svg'
import arrowNE from '../assets/arrows/arrowNE.svg'
import arrowE from '../assets/arrows/arrowE.svg'
import arrowSE from '../assets/arrows/arrowSE.svg'
import arrowS from '../assets/arrows/arrowS.svg'
import arrowSW from '../assets/arrows/arrowSW.svg'
import arrowW from '../assets/arrows/arrowW.svg'
import arrowNW from '../assets/arrows/arrowNW.svg'

export const getDirectionArr = (degree) => {
    let direction = ''
    if (degree < 22) { direction = arrowN }
    else if (degree < 67) { direction = arrowNE }
    else if (degree < 112) { direction = arrowE }
    else if (degree < 157) { direction = arrowSE }
    else if (degree < 202) { direction = arrowS }
    else if (degree < 247) { direction = arrowSW }
    else if (degree < 292) { direction = arrowW }
    else if (degree < 337) { direction = arrowNW }
    else { direction = arrowN }
    return direction
}