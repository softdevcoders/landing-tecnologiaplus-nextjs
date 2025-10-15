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

function TurnoIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760130294/industrias_salud_rollos_de_fichos_para_turnos",
      alt: "Icono del Sector salud",
      title: "Sector salud",
      name: "Sector salud",
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760130293/industrias_oficinas_rollos_de_fichos_para_turnos",
      alt: "icono de Oficinas",
      title: "Icono de Oficinas",
      name: "Oficinas",
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760130293/industrias_otras_industrias_rollos_de_fichos_para_turnos",
      alt: "Icono otras industrias",
      title: "Otras industrias",
      name: "Otras industrias",
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle title="Nuestros Rollos De Tiquetes funcionan en todos Los Sectores" />
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

export default TurnoIndustriesSection;

