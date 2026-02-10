import ContentSection from '../components/content-section'
import ExportActions from './export-actions'

export default function SettingsExport() {
  return (
    <ContentSection title='Export' desc='Export your command data.'>
      <ExportActions />
    </ContentSection>
  )
}
