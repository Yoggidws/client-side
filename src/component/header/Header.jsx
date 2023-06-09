import logo from '../../img/logo.png'

export default function Header() {
    return (
        <div className='header h-12 p-10 flex items-center justify-between'>
            <span className="logo flex items-center" > <img src={logo} alt="logo" className=' w-9 p-1' />MahaChem </span>
            <span className="tipograph"> Mahachemicals Asset Management </span>
            <button>Login</button>
        </div>
    )
}
