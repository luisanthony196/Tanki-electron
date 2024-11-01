import { Deck } from '../models/Deck'

export const getHomeData = async () => {
  const data = await window.api.getHomeData()
  return data.map((deck) => new Deck(deck, true, true))
}
export const getFavorites = async () => {
  return await window.api.getAllOwnDecks()
}

export const getCardsByDeck = async (deckId) => {
  return await window.api.getOwnCardsByDeck(deckId)
}

export const updateReviewByCard = async (cardId, review) => {
  return await window.api.updateReviewByCard(cardId, review)
}
