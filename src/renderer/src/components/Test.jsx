import { useEffect } from 'react'
import { updateReviewByCard } from '../services/mainService'
import { createEmptyCard, formatDate, fsrs, Rating } from 'ts-fsrs'

function Test() {
  useEffect(() => {
    const f = fsrs()
    const card = createEmptyCard(new Date('2022-2-1 10:00:00'))
    const now = new Date('2022-2-2 10:00:00')
    const scheduling_cards = f.repeat(card, now)
    const newCard = scheduling_cards[Rating.Good].card
    console.log(
      updateReviewByCard(2, {
        ...newCard,
        due: formatDate(newCard.due),
        last_review: formatDate(newCard.last_review)
      })
    )
    console.log(newCard)
  }, [])
  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export default Test
