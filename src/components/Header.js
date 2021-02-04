import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const add = (e) => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color='green' text='Hello' onClick={add} />
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
