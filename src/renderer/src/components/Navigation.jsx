import { EditNote, Home, Person, WebStories } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

function Navigation({ selectedTab, setSelectedTab }) {
  return (
    <BottomNavigation
      value={selectedTab}
      onChange={(event, newSelectedTab) => {
        console.log(newSelectedTab)
        setSelectedTab(newSelectedTab)
      }}
    >
      <BottomNavigationAction label="Inicio" icon={<Home />} />
      <BottomNavigationAction label="Repositorio" icon={<WebStories />} />
      <BottomNavigationAction label="Edicion" icon={<EditNote />} />
      <BottomNavigationAction label="Cuenta" icon={<Person />} />
    </BottomNavigation>
  )
}

export default Navigation
