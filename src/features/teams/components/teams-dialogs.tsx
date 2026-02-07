import { ConfirmDialog } from '@/components/confirm-dialog'
import { useTeams } from '../context/teams-context'
import { useDeleteTeam } from '../hooks/use-teams-queries'
import { TeamsMutateDrawer } from './teams-mutate-drawer'
import { MembersDrawer } from './members-drawer'

export function TeamsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useTeams()
  const deleteTeam = useDeleteTeam()

  return (
    <>
      <TeamsMutateDrawer
        key='team-create'
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />

      {currentRow && (
        <>
          <TeamsMutateDrawer
            key={`team-update-${currentRow.id}`}
            open={open === 'update'}
            onOpenChange={() => {
              setOpen('update')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <MembersDrawer
            key={`team-members-${currentRow.id}`}
            open={open === 'members'}
            onOpenChange={() => {
              setOpen('members')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            team={currentRow}
          />

          <ConfirmDialog
            key='team-delete'
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            handleConfirm={() => {
              deleteTeam.mutate(currentRow.id, {
                onSuccess: () => {
                  setOpen(null)
                  setTimeout(() => {
                    setCurrentRow(null)
                  }, 500)
                },
              })
            }}
            isLoading={deleteTeam.isPending}
            className='max-w-md'
            title='Delete this team?'
            desc={
              <>
                You are about to delete{' '}
                <strong>{currentRow.name}</strong>. <br />
                All members will be removed. This action cannot be undone.
              </>
            }
            confirmText='Delete'
          />
        </>
      )}
    </>
  )
}
