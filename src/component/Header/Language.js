import NavDropdown from 'react-bootstrap/NavDropdown';
import viIcon from '../../assets/vietnam.png'
import enIcon from '../../assets/united-kingdom.png'

const Language = () => {
    return (

        <NavDropdown title={
            <>
                <img
                    src={enIcon}
                    alt='enIcon'
                />
                English
            </>
        } className='language' id="basic-nav-dropdown2">
            <NavDropdown.Item >
                <img
                    src={viIcon}
                    alt='viIcon'
                />
                Việt Nam</NavDropdown.Item>
        </NavDropdown>



    )
}

export default Language;