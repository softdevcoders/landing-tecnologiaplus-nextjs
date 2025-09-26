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

function TurnoMasterIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902034/industrias_sector_salud_sistemas_de_turnos",
      alt: "Icono del Sector salud",
      title: "Sector salud",
      name: "Sector salud", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902034/industrias_oficinas_sistemas_de_turnos", 
      alt: "Icono de Oficinas",
      title: "Icono de Oficinas",
      name: "Oficinas",  
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902034/industrias_otras_industrias_sistemas_de_turnos",   
      alt: "Icono otras industrias", 
      title: "Otras industrias",
      name: "Otras industrias",  
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
          <IndustriesSectionTitle title="Sistema de Gestión de Filas TurnoMaster para distintos sectores" />
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

export default TurnoMasterIndustriesSection;
