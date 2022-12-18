import "./portFolioList.scss"

export default function PortFolioList({id, title, active, setSelected}) {
  return (
    <li className={active ? "portFolioList active": "portFolioList" }onClick={() => setSelected(id)} 
    
    >
        {title}

    </li>
  )
}
