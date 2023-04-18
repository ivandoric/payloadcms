import { CollectionConfig } from 'payload/types';

const Movies: CollectionConfig = {
  slug: 'movies',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: "Movie title"
    },
    {
      name: 'date',
      type: "date",
      label: "Release date"
    },
    {
      name: 'actors',
      type: 'relationship',
      label: 'Actors',
      relationTo: 'actors',
      hasMany: true,
      admin: {
        allowCreate: true
      }
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media'
    }
  ],
  timestamps: false,
}

export default Movies;
