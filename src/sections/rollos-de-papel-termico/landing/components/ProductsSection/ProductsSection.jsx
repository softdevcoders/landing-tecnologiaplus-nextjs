import Image from "next/image";
import style from "./ProductsSection.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";

function ProductsSection() {
  return (
    <section className={style.products__section} data-nosnippet>
      <h2 className={style.products__title}>Rollos para impresoras térmicas</h2>
      <div className={style.products__container}>
        <Image
          width={1022}
          height={909}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/w_900,f_webp,q_80/v1761239492/papel_termico_para_punto_de_venta"
          alt="Papel térmico en rollos para puntos de venta y datáfonos"
          title="Papel térmico de alta calidad para impresoras y datáfonos"
          unoptimized={true}
        />
        <Image
          width={1237}
          height={908}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/w_900,f_webp,q_80/v1761239493/rollos_termicos_para_impresora_pos"
          alt="Rollos térmicos para impresora de punto de venta con impresión nítida y duradera"
          title="Rollos térmicos para impresora ideales para tu negocio"
          unoptimized={true}
        />
      </div>
      <ToggleTextContent showToggleButtonInDesktop={true}>
        <p>
          En Tecnología Plus somos <strong>fabricantes de rollos de papel térmico</strong> diseñados para ofrecer la mejor calidad de impresión en tickets, facturas, recibos y comprobantes. Elaboramos <strong>rollos térmicos personalizados</strong> en cualquier medida, como <strong>rollos térmicos 80x60</strong>, <strong>rollos térmicos 57x30</strong>, <strong>papel térmico de 80mm</strong>, <strong>papel térmico 110 mm</strong> o <strong>rollo papel térmico 40 mm</strong>, según las necesidades de tu empresa. También contamos con opciones de papel térmico adhesivo, <strong>papel térmico para etiquetas y papel térmico para datáfono</strong>, ideales para todo tipo de impresoras térmicas.
        </p>
        <p>
          Nuestros <strong>rollos de papel térmico para impresoras</strong> garantizan una excelente legibilidad, durabilidad y compatibilidad con equipos multimarcas. Fabricamos en <strong>papel térmico para impresora de 80 mm</strong> y <strong>papel térmico 80x80</strong>, perfectos para puntos de venta, datáfonos, oficinas y comercios. Además, ofrecemos soluciones en <strong>papel de transferencia térmica</strong>, rollos y etiquetas para una impresión profesional y eficiente. Si te preguntas cuánto dura el <strong>papel térmico</strong>, nuestros productos están elaborados con materiales de alta resistencia que prolongan la vida útil de cada impresión.
        </p>
        <p>
          En Tecnología Plus no solo fabricamos, también innovamos. Nuestros <strong>rollos de papel térmico</strong> están presentes en sectores como la salud, la banca, oficinas y comercios, respaldando procesos de impresión confiables en todo el país. Cada rollo refleja precisión, limpieza y compatibilidad con las principales impresoras térmicas del mercado. Nos destacamos por ofrecer variedad en tamaños y presentaciones, entregas rápidas y atención personalizada. Si buscas un proveedor que combine fabricación propia, calidad superior y asesoría experta, en Tecnología Plus encontrarás un aliado que entiende lo que tu negocio necesita.
        </p>
      </ToggleTextContent>
    </section>
  );
}

export default ProductsSection;
