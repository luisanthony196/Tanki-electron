import {
  allDecks,
  cardsByDeck,
  reviewByCard,
  statisticsByDeck,
  updateReview
} from './database/repository'

export const getAllOwnDecks = async () => {
  try {
    return await allDecks()
  } catch (e) {
    console.error(e)
    return []
  }
}

export const getOwnCardsByDeck = async (deckId) => {
  try {
    return await cardsByDeck(deckId)
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getReviewsByCard = async (cardId) => {
  try {
    return await reviewByCard(cardId)
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getHomeData = async () => {
  try {
    const data = await allDecks()
    let newData = []

    await data.forEach(async (deck) => {
      const stats = await statisticsByDeck(deck.id)
      newData.push({ ...deck, ...stats })
    })

    return newData
  } catch (e) {
    console.error(e)
    return null
  }
}

export const updateReviewByCard = async (cardId, review) => {
  try {
    return await updateReview(cardId, review)
  } catch (e) {
    console.error(e)
    return null
  }
}
