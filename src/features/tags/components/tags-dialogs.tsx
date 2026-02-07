import { ConfirmDialog } from '@/components/confirm-dialog'
import { useTags } from '../context/tags-context'
import { useDeleteTag } from '../hooks/use-tags-queries'
import { TagsMutateDrawer } from './tags-mutate-drawer'

export function TagsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useTags()
  const deleteTag = useDeleteTag()

  return (
    <>
      <TagsMutateDrawer
        key='tag-create'
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />

      {currentRow && (
        <>
          <TagsMutateDrawer
            key={`tag-update-${currentRow.id}`}
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
            key='tag-delete'
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            handleConfirm={() => {
              deleteTag.mutate(currentRow.id, {
                onSuccess: () => {
                  setOpen(null)
                  setTimeout(() => {
                    setCurrentRow(null)
                  }, 500)
                },
              })
            }}
            isLoading={deleteTag.isPending}
            className='max-w-md'
            title='Delete this tag?'
            desc={
              <>
                You are about to delete{' '}
                <strong>{currentRow.name}</strong>. <br />
                This will remove it from all commands. This action cannot be
                undone.
              </>
            }
            confirmText='Delete'
          />
        </>
      )}
    </>
  )
}
