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
      icon: getOptimizedImageUrl({ url: "v1758564863/industrias_restaurantes_localidadores_para_restaurantes", width: 150, quality: 80 }),      
      alt: "Icono de Restaurantes",
      title: "Icono de Restaurantes",
      name: "Zona de comidas <br> autoservicio",
      width: 150,
      height: 293,
    },
    {
      icon: getOptimizedImageUrl({ url: "v1758564864/industrias_sector_salud_localidadores_para_restaurantes", width: 150, quality: 80 }),
      alt: "Icono de Sector salud",
      title: "Sector salud",
      name: "Salud",
      width: 150,
      height: 293,
    },
    {
      icon: getOptimizedImageUrl({ url: "v1758564866/industrias_otras_industrias_localidadores_para_restaurantes", width: 150, quality: 80 }),
      alt: "Icono de otras industrias",
      title: "Otras industrias",
      name: "Otras industrias",
      width: 150,
      height: 293,
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle title="Nuestros localizadores de clientes se adaptan a distintos sectores y necesidades" />
        <IndustriesSectionList> 
          {industries.map((industry, index) => (
            <IndustriesSectionListItem key={index}>
              <IndustriesSectionListItemIconContainer>
                <IndustriesSectionListItemIcon src={industry.icon} alt={industry.alt} title={industry.title} />
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


