import defaultSettings from '@/settings'

const title = defaultSettings.title || 'school-tencent'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
