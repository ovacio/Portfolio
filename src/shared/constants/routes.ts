const isProd = process.env.NODE_ENV === 'production'

export const ROUTES = {
  ROOT: isProd ? `${process.env.NEXT_PUBLIC_BASE_PATH_PRODUCTION}` : '/',
  PROJECTS: isProd ? `${process.env.NEXT_PUBLIC_BASE_PATH_PRODUCTION}projects` : '/projects',
  SOCIAL: isProd ? `${process.env.NEXT_PUBLIC_BASE_PATH_PRODUCTION}social` : '/social'
}