import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
});

export function getCloudinaryImageUrl(publicId: string, options: any = {}) {
  const myImage = cld.image(publicId);
  // Add transformations here if needed, e.g., myImage.resize(thumbnail().width(150).height(150));
  return myImage.toURL(options);
}
