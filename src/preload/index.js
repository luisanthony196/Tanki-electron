import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getAllOwnDecks: () => ipcRenderer.invoke('getAllOwnDecks'),
  getHomeData: () => ipcRenderer.invoke('getHomeData'),
  getOwnCardsByDeck: (deckId) => ipcRenderer.invoke('getOwnCardsByDeck', deckId),
  getReviewsByCard: (cardId) => ipcRenderer.invoke('getReviewsByCard', cardId),
  updateReviewByCard: (cardId, review) => ipcRenderer.invoke('updateReviewByCard', cardId, review)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('versions', {
      node: () => process.versions.node
    })
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
