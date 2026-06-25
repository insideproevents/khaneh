import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

interface StaticPageProps {
  title: string;
  children: React.ReactNode;
}

export default function StaticPage({ title, children }: StaticPageProps) {
  return (
    <Layout>
      <PageHeader title={title} />
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-none">
          {children}
        </article>
      </div>
    </Layout>
  );
}

export function PoliticaEnvios() {
  return (
    <StaticPage title="Politica de Envios">
      <div className="space-y-6 text-[15px] text-taupe leading-[1.8]">
        <h3 className="font-serif text-[22px] text-azul-profundo">Envio a todo Chile</h3>
        <p>En Aguilera Khaneh ofrecemos envio gratis a todo Chile continental por cualquier compra. Para envios a zonas extremas (Region de Aysen, Magallanes y territorio insular), el despacho tiene un costo adicional que se calcula al momento de la compra.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Tiempos de entrega</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Santiago (RM):</strong> 2 a 4 dias habiles</li>
          <li><strong>Region V y VI:</strong> 3 a 5 dias habiles</li>
          <li><strong>Region VII a X:</strong> 4 a 7 dias habiles</li>
          <li><strong>Region XI a XV:</strong> 7 a 12 dias habiles</li>
          <li><strong>Zonas extremas:</strong> 10 a 20 dias habiles</li>
        </ul>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Metodos de envio</h3>
        <p>Trabajamos con las principales empresas de transporte del pais (Chilexpress, Starken y Mercado Envios) para garantizar la seguridad y puntualidad de tus entregas.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Retiro en tienda</h3>
        <p>Puedes retirar tu compra gratuitamente en nuestra tienda ubicada en Av. Las Condes 10521, Local 1, Las Condes. Horario: Lunes a Viernes de 11:00 a 19:00, Sabados de 11:00 a 14:00.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Seguimiento</h3>
        <p>Una vez despachado tu pedido, recibiras un correo electronico con el numero de seguimiento para que puedas rastrear tu envio en todo momento.</p>
      </div>
    </StaticPage>
  );
}

export function Devoluciones() {
  return (
    <StaticPage title="Devoluciones y Garantia">
      <div className="space-y-6 text-[15px] text-taupe leading-[1.8]">
        <h3 className="font-serif text-[22px] text-azul-profundo">Politica de devolucion</h3>
        <p>En Aguilera Khaneh queremos que estes 100% satisfecho con tu compra. Si por cualquier motivo no te gusta tu alfombra, tienes hasta 30 dias desde la recepcion para solicitar una devolucion.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Condiciones</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>La alfombra debe estar en su estado original, sin uso y con su empaque.</li>
          <li>Debe conservar todas las etiquetas y accesorios originales.</li>
          <li>No se aceptan devoluciones de alfombras personalizadas o hechas a medida.</li>
          <li>El costo del envio de retorno es gratuito dentro de Santiago. Para otras regiones, el cliente debe coordinar el retorno.</li>
        </ul>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Proceso de devolucion</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Contactanos por email a contacto@aguilerakhaneh.cl o WhatsApp al +56 9 8189 2341.</li>
          <li>Te enviaremos una etiqueta de envio (Santiago) o te indicaremos como proceder.</li>
          <li>Una vez recibida y verificada la alfombra, procesaremos tu reembolso en 5 a 10 dias habiles.</li>
        </ol>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Garantia de calidad</h3>
        <p>Todas nuestras alfombras cuentan con garantia de 1 ano contra defectos de fabricacion. Esto no cubre danos por uso inadecuado, desgaste normal o manchas.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Cambios</h3>
        <p>Si deseas cambiar tu alfombra por otra de igual o mayor valor, el proceso es el mismo que una devolucion. Solo deberas pagar la diferencia si aplica.</p>
      </div>
    </StaticPage>
  );
}

export function Terminos() {
  return (
    <StaticPage title="Terminos y Condiciones">
      <div className="space-y-6 text-[15px] text-taupe leading-[1.8]">
        <h3 className="font-serif text-[22px] text-azul-profundo">1. Generalidades</h3>
        <p>Estos terminos y condiciones regulan el uso del sitio web www.aguilerakhaneh.cl y las compras realizadas a traves de el. Al acceder y utilizar este sitio, aceptas estos terminos en su totalidad.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">2. Precios y pagos</h3>
        <p>Los precios publicados en el sitio estan expresados en Pesos Chilenos (CLP) e incluyen IVA. Nos reservamos el derecho de modificar los precios sin previo aviso. Los medios de pago aceptados son tarjetas de credito ( Visa, Mastercard, American Express ), transferencia bancaria y Mercado Pago.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">3. Disponibilidad de productos</h3>
        <p>Todos los productos estan sujetos a disponibilidad. En caso de que un producto no este disponible despues de realizada la compra, te contactaremos para ofrecerte una alternativa o reembolso.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">4. Propiedad intelectual</h3>
        <p>Todo el contenido del sitio, incluyendo imagenes, textos, logos y disenos, es propiedad de Aguilera Khaneh y esta protegido por las leyes de propiedad intelectual.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">5. Limitacion de responsabilidad</h3>
        <p>Aguilera Khaneh no se hace responsable por danos indirectos, incidentales o consecuentes que puedan surgir del uso del sitio o de los productos adquiridos.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">6. Ley aplicable</h3>
        <p>Estos terminos se rigen por las leyes de la Republica de Chile. Cualquier disputa sera sometida a los tribunales de la ciudad de Santiago.</p>
      </div>
    </StaticPage>
  );
}

export function Privacidad() {
  return (
    <StaticPage title="Politica de Privacidad">
      <div className="space-y-6 text-[15px] text-taupe leading-[1.8]">
        <h3 className="font-serif text-[22px] text-azul-profundo">Informacion que recopilamos</h3>
        <p>En Aguilera Khaneh recopilamos la informacion necesaria para procesar tus compras y brindarte una mejor experiencia. Esto incluye: nombre, direccion, telefono, correo electronico e informacion de pago.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Uso de la informacion</h3>
        <p>Utilizamos tu informacion para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Procesar y enviar tus pedidos</li>
          <li>Comunicarnos contigo sobre tu compra</li>
          <li>Enviarte informacion sobre promociones y novedades (solo si te suscribes)</li>
          <li>Mejorar nuestros productos y servicios</li>
        </ul>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Proteccion de datos</h3>
        <p>Implementamos medidas de seguridad tecnicas y organizativas para proteger tu informacion personal contra acceso no autorizado, alteracion o destruccion.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Compartir informacion</h3>
        <p>No vendemos ni alquilamos tu informacion personal a terceros. Solo compartimos datos con proveedores de servicios necesarios para el funcionamiento del sitio ( procesamiento de pagos, envios ).</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Cookies</h3>
        <p>Utilizamos cookies para mejorar tu experiencia de navegacion. Puedes configurar tu navegador para rechazar las cookies, pero esto puede afectar el funcionamiento del sitio.</p>

        <h3 className="font-serif text-[22px] text-azul-profundo mt-8">Tus derechos</h3>
        <p>Tienes derecho a acceder, rectificar y eliminar tus datos personales. Para ejercer estos derechos, contactanos a contacto@aguilerakhaneh.cl.</p>
      </div>
    </StaticPage>
  );
}
