import './Button.css'
function Button({message}) {
  return (
    <div className='button'>
        <button>{message}</button>
    </div>
  )
}

export default Button;