interface HeaderProps{
    title:string;
}

const Header = (props:HeaderProps) => {
  return (
    <h1 className="text-2xl font-semibold text-gray-700">{props.title}</h1>
  )
}

export default Header
