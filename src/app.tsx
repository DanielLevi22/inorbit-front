import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-gaols'

export function App() {
  return (
    <Dialog>
      <EmptyGoals />
      <CreateGoal />
    </Dialog>
  )
}
