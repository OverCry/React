import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom' //to see what path it is on


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 >{title}</h1>
            {location.pathname==='/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? ' Hide' : 'Add'} onClick={onAdd} /> }
        </header>
    )
}

Header.defaultProps = {
    title:"Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
