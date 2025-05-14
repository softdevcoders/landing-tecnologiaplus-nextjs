import CustomTemplates from "./custom-templates";
import LandingHeroImageContentDefault from "./landing-hero-image-content-default";

const LandingHeroImageContent = ({ images, customTemplate, templateName }) => {
  return (
    <>
      {customTemplate ? (
        <CustomTemplates templateName={templateName} images={images} />
      ) : (
        <LandingHeroImageContentDefault images={images} />
      )}
    </>
  )
}

export default LandingHeroImageContent;