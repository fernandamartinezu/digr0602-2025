import './Header.css'
import Button from "./Button";

function Header() {
  return (
    <div className='header'>
        <Button message={'Home'}/>
        <Button message={'Menu'}/>
        <Button message={'Contact'}/>
    </div>
  )
}

export default Header;