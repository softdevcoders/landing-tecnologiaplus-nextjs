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

import style from "./styles.module.scss";  

function DispensadorTiquetesIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1759249529/industrias_sector_salud_dispensador_de_tickets",
      alt: "Icono del Sector salud", 
      title: "Sector salud",
      name: "Sector salud", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1759249529/industrias_oficinas_dispensador_de_tickets",
      alt: "Icono de oficinas",
      title: "Icono de oficinas",
      name: "Oficinas", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1759249529/industrias_otras_industrias_dispensador_de_tickets",
      alt: "Icono otras industrias",
      title: "Otras industrias",
      name: "Otras industrias",
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle 
          title="Nuestros Dispensadores de tunos funcionan en todos los sectores, desde el sector salud hasta oficinas y comercios" 
          className={style.industries__section__title}
        />
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

export default DispensadorTiquetesIndustriesSection;   
