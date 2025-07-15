// import Image from "next/image";
// import style from "./DispensadorTiquetesIndustriesSection.module.scss";

// function DispensadorTiquetesIndustriesSection() {
//   return (  
//     <section className={style.industries__section}>
//       <h2>
//         Nuestros Dispensadores de tunos funcionan en todos los sectores, desde
//         el sector salud hasta oficinas y comercios.
//       </h2>
//       <ul>
//         <li>
//           <Image
//             width={150}
//             height={129}
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp"
//             alt="icono de salud"
//           />
//           <p>Sector salud</p>
//         </li>
//         <li>
//           <Image
//             width={150}
//             height={129}
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/Oficinas_2x-8_xzhwcw_jumnnh.webp"
//             alt="icono de oficina"
//           />
//           <p>Oficinas</p>
//         </li>
//         <li>
//           <Image
//             width={150}
//             height={129}
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
//             alt="icono de otras industrias"
//           />
//           <p>Otras industrias</p>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default DispensadorTiquetesIndustriesSection;

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

import style from "./DispensadorTiquetesIndustriesSection.module.scss";  

function DispensadorTiquetesIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd",
      alt: "Icono de Sector salud", 
      name: "Sector salud", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/Oficinas_2x-8_xzhwcw_jumnnh",
      alt: "Icono de Oficinas",
      name: "Oficinas", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg",
      alt: "Icono de Otras industrias",
      name: "Otras industrias",
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle 
          title="Nuestros Dispensadores de tunos funcionan en todos los sectores, desde el sector salud hasta oficinas y comercios." 
          className={style.industries__section__title}
        />
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

export default DispensadorTiquetesIndustriesSection;   
