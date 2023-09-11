/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    '@/components': {
      transform: '@/components/{{ camelCase member }}/{{member}}',
      skipDefaultConversion: true
    },
  }
}

module.exports = nextConfig
