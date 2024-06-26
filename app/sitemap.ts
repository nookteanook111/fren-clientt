import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.theeducator-online.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.theeducator-online.com//blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.theeducator-online.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.theeducator-online.com/ebook',
      lastModified: new Date(),
    },
  ]
}