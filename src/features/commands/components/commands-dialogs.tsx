import { ConfirmDialog } from '@/components/confirm-dialog'
import { useCommands } from '../context/commands-context'
import { useDeleteCommand } from '../hooks/use-commands-queries'
import { CommandsMutateDrawer } from './commands-mutate-drawer'

export function CommandsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useCommands()
  const deleteCommand = useDeleteCommand()

  return (
    <>
      <CommandsMutateDrawer
        key='command-create'
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />

      {currentRow && (
        <>
          <CommandsMutateDrawer
            key={`command-update-${currentRow.id}`}
            open={open === 'update'}
            onOpenChange={() => {
              setOpen('update')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <ConfirmDialog
            key='command-delete'
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            handleConfirm={() => {
              deleteCommand.mutate(currentRow.id, {
                onSuccess: () => {
                  setOpen(null)
                  setTimeout(() => {
                    setCurrentRow(null)
                  }, 500)
                },
              })
            }}
            isLoading={deleteCommand.isPending}
            className='max-w-md'
            title={`Delete this command?`}
            desc={
              <>
                You are about to delete{' '}
                <strong>{currentRow.title}</strong>. <br />
                This action cannot be undone.
              </>
            }
            confirmText='Delete'
          />
        </>
      )}
    </>
  )
}
