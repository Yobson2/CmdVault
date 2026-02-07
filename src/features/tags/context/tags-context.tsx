import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Tag } from '../data/schema'

type TagsDialogType = 'create' | 'update' | 'delete'

interface TagsContextType {
  open: TagsDialogType | null
  setOpen: (str: TagsDialogType | null) => void
  currentRow: Tag | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Tag | null>>
}

const TagsContext = React.createContext<TagsContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function TagsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<TagsDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Tag | null>(null)
  return (
    <TagsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </TagsContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTags = () => {
  const tagsContext = React.useContext(TagsContext)

  if (!tagsContext) {
    throw new Error('useTags has to be used within <TagsContext>')
  }

  return tagsContext
}
