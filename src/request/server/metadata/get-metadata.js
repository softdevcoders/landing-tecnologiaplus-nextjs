import metadata from '@/data/metadata';

const getMetadata = (page) => {
  try {
    return metadata[page];
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getMetadata;
