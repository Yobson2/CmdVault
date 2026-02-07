import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Command } from '../data/schema'

type CommandsDialogType = 'create' | 'update' | 'delete'

interface CommandsContextType {
  open: CommandsDialogType | null
  setOpen: (str: CommandsDialogType | null) => void
  currentRow: Command | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Command | null>>
}

const CommandsContext = React.createContext<CommandsContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function CommandsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<CommandsDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Command | null>(null)
  return (
    <CommandsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </CommandsContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCommands = () => {
  const commandsContext = React.useContext(CommandsContext)

  if (!commandsContext) {
    throw new Error('useCommands has to be used within <CommandsContext>')
  }

  return commandsContext
}
