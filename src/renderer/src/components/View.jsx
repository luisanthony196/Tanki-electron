import Home from './Home'
import Decks from './Decks'
import { navigation } from '../constants/uiConstants'

function View({ selectedTab, ...props }) {
  switch (selectedTab) {
    case navigation.HOME:
      return <Home {...props} />
    case navigation.DECKS:
      return <Decks {...props} />
  }
}

export default View
