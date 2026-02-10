import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'command-defaults'

interface CommandDefaults {
  language: string
  category: string
  visibility: string
}

const fallback: CommandDefaults = {
  language: 'bash',
  category: 'cli',
  visibility: 'private',
}

let cachedRaw: string | null = null
let cachedSnapshot: CommandDefaults = fallback

function getSnapshot(): CommandDefaults {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return fallback
    if (raw === cachedRaw) return cachedSnapshot
    cachedRaw = raw
    cachedSnapshot = { ...fallback, ...JSON.parse(raw) }
    return cachedSnapshot
  } catch {
    return fallback
  }
}

const listeners = new Set<() => void>()

function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

function emitChange() {
  listeners.forEach((cb) => cb())
}

export function useCommandDefaults() {
  const defaults = useSyncExternalStore(subscribe, getSnapshot)

  const setDefaults = useCallback((next: Partial<CommandDefaults>) => {
    const current = getSnapshot()
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...next }))
    emitChange()
  }, [])

  return { defaults, setDefaults } as const
}
