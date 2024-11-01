import { getConnection } from './connection'

const db = getConnection()

export const allDecks = () => {
  const stmt = db.prepare('select * from decks')
  return new Promise((res, rej) => {
    try {
      res(stmt.all())
    } catch (err) {
      rej(err)
    }
  })
}

export const cardsByDeck = (deckId) => {
  const stmt = db.prepare('select * from cards where deck_id = ?')
  return new Promise((res, rej) => {
    try {
      res(stmt.all(deckId))
    } catch (err) {
      rej(err)
    }
  })
}

export const reviewByCard = (cardId) => {
  const stmt = db.prepare('select * from reviews where card_id = ?')
  return new Promise((res, rej) => {
    try {
      res(stmt.all(cardId))
    } catch (err) {
      rej(err)
    }
  })
}

export const statisticsByDeck = (deckId) => {
  const stmt = db.prepare(
    'select COUNT(*) as card_count,' +
      'AVG(case when r.difficulty != 0 then r.difficulty end) as difficulty,' +
      'MAX(case when r.last_review is not null then r.last_review end) as last_review ' +
      'from cards c inner join reviews r on c.id = r.card_id ' +
      'where c.deck_id = ?'
  )
  return new Promise((res, rej) => {
    try {
      res(stmt.get(deckId))
    } catch (err) {
      rej(err)
    }
  })
}

export const updateReview = (card_id, review) => {
  // const data = Object.entries(review)
  const script = Object.keys(review)
    .map((p) => p + '=?')
    .join(',')
  console.log('update reviews set ' + script + ' where card_id = ?')
  console.log(Object.values(review))
  const stmt = db.prepare('update reviews set ' + script + ' where card_id = ?')
  return new Promise((res, rej) => {
    try {
      res(stmt.run(Object.values(review), card_id))
    } catch (err) {
      rej(err)
    }
  })
}
