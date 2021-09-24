import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideTranslations = async (locale, namespaces = []) => {
  return await serverSideTranslations(locale, [
    'common',
    'navigation',
    'authentication',
    ...namespaces,
  ])
}
