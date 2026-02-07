import ContentSection from '../components/content-section'
import DangerZoneActions from './danger-zone-actions'

export default function SettingsDangerZone() {
  return (
    <ContentSection
      title='Danger Zone'
      desc='Irreversible and destructive actions.'
    >
      <DangerZoneActions />
    </ContentSection>
  )
}
