export class Deck {
  constructor(deckApi, isDownload = false, haveStatistics = false) {
    this.id = deckApi.id
    this.communityId = deckApi.community_deck_id || null
    this.name = deckApi.name
    this.resume = deckApi.resume
    this.isFavorite = deckApi.favorite || false
    this.isMarkup = deckApi.markup || false
    this.isModify = deckApi.modify || false
    this.description = deckApi.description
    this.isDownload = isDownload
    this.statistics = haveStatistics ? new Statistic(deckApi) : null
  }
}

class Statistic {
  constructor(deckApi) {
    this.difficulty = deckApi.difficulty
    this.cardsCount = deckApi.card_count
    this.lastReview = deckApi.last_review
    this.totalDue = deckApi.total_due
  }
}
