import { 
  IndustriesSection, 
  IndustriesSectionContainer,
  IndustriesSectionTitle, 
  IndustriesSectionList, 
  IndustriesSectionListItem, 
  IndustriesSectionListItemIcon, 
  IndustriesSectionListItemIconContainer,
  IndustriesSectionListItemText 
} from "@/components/industries-section";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function LocalizadoresIndustriesSection() {
  const industries = [
    {
      icon: getOptimizedImageUrl({ url: "v1738694400/restaurantes_2x-8_lpqdzj", width: 150, quality: 80 }),      
      alt: "icono de Restaurantes",
      name: "Zona de comidas <br> autoservicio",
      width: 150,
      height: 293,
    },
    {
      icon: getOptimizedImageUrl({ url: "v1738692286/salud_2x-8_anq348", width: 150, quality: 80 }),
      alt: "icono de Sector salud",
      name: "Salud",
      width: 150,
      height: 293,
    },
    {
      icon: getOptimizedImageUrl({ url: "v1738615995/otras_industrias_2x-8_jwvjrm", width: 150, quality: 80 }),
      alt: "icono de otras industrias",
      name: "Otras industrias",
      width: 150,
      height: 293,
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle title="Nuestros localizadores de clientes se adaptan a distintos sectores y necesidades." />
        <IndustriesSectionList> 
          {industries.map((industry, index) => (
            <IndustriesSectionListItem key={index}>
              <IndustriesSectionListItemIconContainer>
                <IndustriesSectionListItemIcon src={industry.icon} alt={industry.alt} />
              </IndustriesSectionListItemIconContainer>
              <IndustriesSectionListItemText text={industry.name} />
            </IndustriesSectionListItem>
          ))}
        </IndustriesSectionList>
      </IndustriesSectionContainer>
    </IndustriesSection>
  );
}

export default LocalizadoresIndustriesSection;


