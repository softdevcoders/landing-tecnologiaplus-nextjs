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

import style from "./IndustriesSection.module.scss";

function RollosIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1761239489/industrias_salud_rollos_papel_termicos",
      alt: "Icono de Sector salud", 
      title: "Icono de Sector salud",
      name: "Sector salud", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1761239489/industrias_oficinas_rollos_papel_termicos",
      alt: "Icono de Oficinas",
      title: "Icono de Oficinas",
      name: "Oficinas", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1761243067/industrias_otras_industrias_rollos_papel_termicos",
      alt: "Icono de Otras industrias",
      title: "Icono de Otras industrias",
      name: "Otras industrias",
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle 
          title="Nuestros Rollos Térmicos funcionan en todos los sectores, desde el sector salud hasta oficinas y comercios" 
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

export default RollosIndustriesSection;



