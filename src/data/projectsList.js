import { imagesProjects } from "../assets/images-projects/image";
import { imagesSkills } from "../assets/images-skills/image";

const projectsList = [
  {
    image: imagesProjects.vista_portafolio_1,
    title: "Mi portafolio",
    nameLink: "mi-portafolio",
    description:
      "mi portafolio me permite enseñar un poco sobre mi y mis proyectos personales",
    extendedDescription: (
      <>
        ¡Bienvenido a mi portafolio! Este espacio te invita a adentrarte en mi
        mundo profesional y personal, donde podrás descubrir quién soy a través
        de mis proyectos y experiencias.
        <br />
        Mis proyectos personales son la esencia misma de este portafolio. Cada
        uno de ellos es un reflejo de mi dedicación, habilidades y visión única.
        Desde proyectos de diseño hasta desarrollos tecnológicos, cada
        iniciativa representa un desafío superado y un logro alcanzado. Disfruto
        explorando nuevas tecnologías y enfoques, siempre con la meta de crear
        soluciones impactantes y significativas.
        <br />
        ¡Espero que disfrutes explorando mi portafolio y que encuentres
        inspiración en mis proyectos!
      </>
    ),
    url: "https://main.d3i16l42evm7z3.amplifyapp.com/",
    repoGit: "https://github.com/luisxhl7/portada-portafolio",
    technologies: [
      {
        image: imagesSkills.react,
        name: "react js",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
      {
        image: imagesSkills.testing_library,
        name: "testing library",
      },
    ],
    images: [
      imagesProjects.vista_portafolio_1,
      imagesProjects.vista_portafolio_2,
      imagesProjects.vista_portafolio_3,
      imagesProjects.vista_portafolio_4,
      imagesProjects.vista_portafolio_5,
    ],
    video: "https://youtu.be/8cDkDpx-A_U",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code", "SOLID"],
    tools: [
      "React js",
      "JavaScript",
      "Html",
      "Css",
      "Sass",
      "Testing Library",
      "Git",
      "GitHub",
      "Material UI"
    ],
  },
  {
    image: imagesProjects.vista_my_studio_tattoo_1,
    title: "My Studio Tattoo",
    nameLink: "My-Studio-Tattoo",
    description:
      "My Studio Tattoo: Donde el Arte se Convierte en Piel. ¡Explora el Lugar donde tus Ideas se Plasman en Tinta! Descubre un Mundo de Creatividad y Profesionalismo en Nuestro Estudio de Tatuajes. Desde Diseños Personalizados hasta Clásicos Atemporales, ¡Te Ayudamos a Crear tu Obra Maestra Corporal!",
    extendedDescription: (
      <>
        Bienvenido a este proyecto, el hogar digital de este apasionado
        estudio de tatuajes. En este espacio virtual, te invitamos a explorar
        el talento y la creatividad de nuestros distinguidos artistas. Con una
        interfaz intuitiva y amigable, te sumergirás en un mundo de arte
        corporal donde cada diseño es una expresión única de identidad y estilo.
        <br />
        Esta plataforma te brinda la oportunidad de conocer a nuestros
        talentosos tatuadores, descubrir sus proyectos pasados y actuales, así
        como sumergirte en su estilo único y sus habilidades excepcionales.
        Desde el realismo meticuloso hasta la fantasía vibrante, cada uno de
        nuestros artistas tiene una voz artística distintiva que espera
        colaborar contigo para hacer realidad tu visión.
        <br/>
        Este proyecto ofrece la funcionalidad de registro y login de usuarios, 
        permitiéndoles agendar citas con nuestros tatuadores para una variedad 
        de propósitos.
        <br/>
        Este proyecto, concebido como una oportunidad para poner en práctica y 
        demostrar mis habilidades en el desarrollo de software, se centra en la 
        implementación tanto de backEnd como frontEnd. A través de esta iniciativa, 
        he buscado no solo expandir mis conocimientos técnicos, sino también 
        destacar mi capacidad para crear soluciones innovadoras y funcionales en 
        el campo del desarrollo de software. Este proyecto representa mi compromiso 
        con la excelencia y la mejora continua en mi carrera profesional como 
        desarrollador de software.
      </>
    ),
    url: "https://my-tatto-studio.vercel.app/",
    repoGit: "https://github.com/luisxhl7/my-tatto-studio-nextJs",
    repoGitBack: "https://github.com/luisxhl7/BackEnd---My-tatto-studio",
    technologies: [
      {
        image: imagesSkills.nextJs,
        name: "next js",
      },
      {
        image: imagesSkills.typeScript,
        name: "TypeScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "Git",
      },
      {
        image: imagesSkills.github,
        name: "GitHub",
      },
      {
        image: imagesSkills.testing_library,
        name: "Testing library",
      },
      {
        image: imagesSkills.nodejs,
        name: "Node js",
      },
      {
        image: imagesSkills.mongo_DB,
        name: "Mongo DB",
      },
      {
        image: imagesSkills.express,
        name: "Express",
      },
    ],
    images: [
      imagesProjects.vista_my_studio_tattoo_1,
      imagesProjects.vista_my_studio_tattoo_2,
      imagesProjects.vista_my_studio_tattoo_3,
      imagesProjects.vista_my_studio_tattoo_4,
      imagesProjects.vista_my_studio_tattoo_7,
      imagesProjects.vista_my_studio_tattoo_6,
      imagesProjects.vista_my_studio_tattoo_5,
      imagesProjects.vista_my_studio_tattoo_test,
    ],
    video: "https://youtu.be/7YGvJA4adTA",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code", "SOLID"],
    tools: [
      "Next js",
      "TypeScript",
      "Html",
      "Css",
      "Sass",
      "Testing Library",
      "Redux",
      "Axios",
      "Git",
      "GitHub",
      "Node js",
      "Express",
      "Mongo DB",
      "Vercel",
      "Railway"
    ],
  },
  {
    image: imagesProjects.vista_my_music_app_5,
    title: "My music app",
    nameLink: "my-music-app",
    description:
      "Clon de Spotify: ¡Descubre mi proyecto de streaming de música utilizando la api de spotify!",
    extendedDescription: (
      <>
        Bienvenido a mi proyecto de streaming de música inspirado en Spotify.
        Con este proyecto, he querido explorar y demostrar mi habilidad para
        crear una plataforma de reproducción de música que captura la esencia y
        la funcionalidad de una de las aplicaciones de música más populares del
        mundo.
        <br />
        Utilizando la API de Spotify, he creado un entorno que permite a los
        usuarios descubrir y disfrutar de su música favorita de una manera
        intuitiva y emocionante. Mi objetivo era replicar la experiencia de
        usuario fluida y atractiva que caracteriza a Spotify, al tiempo que
        agregaba mi propio toque personal y características únicas.
        <br />
        En este clon de Spotify, los usuarios pueden acceder a una amplia
        biblioteca de canciones, álbumes y listas de reproducción, así como
        también descubrir nueva música a través de recomendaciones
        personalizadas y listas de éxitos.
      </>
    ),
    url: "https://main.d3mrsqa2j7ln2g.amplifyapp.com/",
    repoGit: "https://github.com/luisxhl7/portafolio-my-music-app",
    technologies: [
      {
        image: imagesSkills.react,
        name: "react js",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
      {
        image: imagesSkills.testing_library,
        name: "testing library",
      },
    ],
    images: [
      imagesProjects.vista_my_music_app_1,
      imagesProjects.vista_my_music_app_2,
      imagesProjects.vista_my_music_app_3,
      imagesProjects.vista_my_music_app_4,
      imagesProjects.vista_my_music_app_5,
    ],
    video: "https://youtu.be/F_5AJVNFKJE",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code"],
    tools: [
      "React js",
      "JavaScript",
      "Html",
      "Css",
      "Sass",
      "Testing Library",
      "Axios",
      "Git",
      "GitHub",
      "Material UI",
      "Redux",
      "Api Spotify",
    ],
  },
  {
    image: imagesProjects.vista_my_store_1,
    title: "My Store",
    nameLink: "my-store",
    description:
      "My Store es una plataforma en línea diseñada para impulsar y promover el mercado de componentes para PC.",
    extendedDescription: (
      <>
        My Store es una plataforma en línea que he desarrollado con el objetivo
        de potenciar y promover el mercado de componentes para PC. Este proyecto
        surge de mi pasión por la tecnología y mi interés en crear soluciones
        innovadoras en el ámbito del comercio electrónico.
        <br />
        En My Store, los usuarios pueden explorar una amplia variedad de
        componentes para PC, desde procesadores y tarjetas gráficas hasta placas
        base y unidades de almacenamiento. Aunque el proyecto no permite
        realizar compras reales en el sentido tradicional, ofrece una
        experiencia de navegación completa y realista, permitiendo a los
        usuarios visualizar los productos, leer descripciones detalladas y
        comparar precios.
        <br />
        Una de las características más destacadas de My Store es su enfoque en
        la experiencia del usuario. Me he esforzado por crear una interfaz
        intuitiva y atractiva que facilite la navegación y la búsqueda de
        productos.
      </>
    ),
    url: "https://main.d2ahtulm8ezp73.amplifyapp.com/home",
    repoGit: "https://github.com/luisxhl7/my-store",
    technologies: [
      {
        image: imagesSkills.react,
        name: "react js",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
      {
        image: imagesSkills.testing_library,
        name: "testing library",
      },
    ],
    images: [
      imagesProjects.vista_my_store_1,
      imagesProjects.vista_my_store_2,
      imagesProjects.vista_my_store_3,
      imagesProjects.vista_my_store_4,
    ],
    video: "https://youtu.be/X4kYylMEuWo",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code", "SOLID"],
    tools: [
      "React js",
      "JavaScript",
      "Html",
      "Css",
      "Sass",
      "Testing Library",
      "Material UI",
      "Git",
      "GitHub",
      "Redux"
    ],
  },
  {
    image: imagesProjects.vista_my_pokedex_1,
    title: "My Pokedex",
    nameLink: "my-pokedex",
    description:
      "La Pokédex es una guía esencial que proporciona información detallada sobre cada Pokémon, incluyendo sus características, habilidades, tipos y hábitats, en el mundo de Pokémon.",
    extendedDescription: (
      <>
        La Pokédex es mucho más que una simple guía; es una herramienta esencial
        para cualquier entrenador Pokémon en su viaje para convertirse en un
        maestro Pokémon. Este proyecto representa mi pasión por el universo
        Pokémon y mi habilidad para crear soluciones digitales que satisfacen
        las necesidades de los fans de esta franquicia icónica.
        <br />
        La Pokédex obtiene su información detallada sobre cada Pokémon a través
        de la integración de una API especializada en datos de Pokémon. Esta API
        proporciona acceso a una amplia gama de información, incluyendo las
        características únicas de cada especie
        <br />
        Aunque la base de datos de la Pokédex se alimenta a través de la API, he
        diseñado el sistema con un enfoque en la accesibilidad y la eficiencia,
        garantizando tiempos de carga rápidos y una navegación fluida.
      </>
    ),
    url: "https://main.dh792l7ykw60h.amplifyapp.com/",
    repoGit: "https://github.com/luisxhl7/pokedex-nextjs",
    technologies: [
      {
        image: imagesSkills.react,
        name: "react js",
      },
      {
        image: imagesSkills.nextJs,
        name: "NextJs",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
      {
        image: imagesSkills.testing_library,
        name: "testing library",
      },
    ],
    images: [
      imagesProjects.vista_my_pokedex_1,
      imagesProjects.vista_my_pokedex_2,
      imagesProjects.vista_my_pokedex_3,
      imagesProjects.vista_my_pokedex_4,
      imagesProjects.vista_my_pokedex_5,
      imagesProjects.vista_my_pokedex_6,
    ],
    video: "https://youtu.be/_BVrLL4FN-k",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code"],
    tools: [
      "next js",
      "JavaScript",
      "Html",
      "Css",
      "Sass",
      "Testing Library",
      "Axios",
      "Redux",
      "Material UI",
      "Git",
      "GitHub",
      <>
        Api{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeApi
        </a>
      </>,
    ],
  },
  {
    image: imagesProjects.vista_facebook_clone_1,
    title: "Facebook Clon (dev)",
    nameLink: "FacebookClon",
    description:
      "App Facebook clon es un proyecto que actualmente se encuentra en desarrollo implementando la tecnología React Native acompañada de Expo",
    extendedDescription: (
      <>
        Este proyecto se está desarrollando con fines educativos, con el objetivo de reforzar los conocimientos previos y 
        ampliar la comprensión del uso de la tecnología React Native junto con Expo.
        <br/>
        Se eligió como reto la creación de un clon de Facebook, dado que su aplicación móvil y sus interfaces presentan 
        diseños y funcionalidades desafiantes. Esto lo convierte en un excelente proyecto para demostrar mis habilidades 
        y potencial, así como para identificar formas de mejorar en la implementación de esta tecnología.
        <br/>
        Los objetivos de este proyecto incluyen:
        <br/>
        <b>- Mejorar la comprensión de React Native y Expo: </b> 
        <br/>
        Desarrollar una aplicación completa desde cero utilizando estas tecnologías.
        <br/>
        <b>- Desafiar y expandir habilidades de diseño UI/UX: </b>  
        <br/>
        Implementar interfaces complejas y responsivas que imiten la experiencia de usuario de Facebook.
        <br/>
        <b>- Aprender buenas prácticas de desarrollo móvil: </b> 
        <br/>
        Aplicar principios de arquitectura y código limpio en un proyecto de la vida real.
        <br/>
        Actualmente, no hay forma de descargar la aplicación; sin embargo, el repositorio está disponible en el cual pueden encontrar el código 
        fuente completo.
      </>
    ),
    url: undefined,
    repoGit: "https://github.com/luisxhl7/clone-facebook-react-native",
    technologies: [
      {
        image: imagesSkills.react,
        name: "react native",
      },
      {
        image: imagesSkills.expo,
        name: "Expo",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
    ],
    images: [
      imagesProjects.vista_facebook_clone_1,
      imagesProjects.vista_facebook_clone_2,
      imagesProjects.vista_facebook_clone_3,
      imagesProjects.vista_facebook_clone_4,
      imagesProjects.vista_facebook_clone_5,
      imagesProjects.vista_facebook_clone_6,
      imagesProjects.vista_facebook_clone_7,
      imagesProjects.vista_facebook_clone_8,
      imagesProjects.vista_facebook_clone_9,
    ],
    video: "https://youtu.be/aXzaOJxnByc",
    Methodologies: ["Atomic Design", "Clean code", "Solid"],
    tools: [
      "React native",
      "Expo",
      "JavaScript",
      "Redux",
      "Git",
      "GitHub",
    ],
  },
  {
    image: imagesProjects.vista_my_budget_1,
    title: "My budget",
    nameLink: "my-budget",
    description:
      "My budget es una plataforma que te permite guardar de forma local todos tus ingresos y egresos teniendo un control y estadísticas de estas.",
    url: "https://main.d5rx12jyfmutf.amplifyapp.com/",
    repoGit: "https://github.com/luisxhl7/Presupuestos",
    extendedDescription: (
      <>
        My Budget es una plataforma diseñada para ofrecerte un control completo
        y estadísticas detalladas sobre tus ingresos y gastos. Este proyecto
        refleja mi interés en proporcionar soluciones prácticas y eficientes
        para gestionar las finanzas personales.
        <br />
        Con My Budget, puedes almacenar de forma local todos tus ingresos y
        egresos, lo que te brinda una visión clara y organizada de tu situación
        financiera. La plataforma te permite registrar fácilmente tus
        transacciones y categorizarlas según tus necesidades, lo que facilita el
        seguimiento y la gestión de tus finanzas.
      </>
    ),
    technologies: [
      {
        image: imagesSkills.react,
        name: "react js",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
      {
        image: imagesSkills.testing_library,
        name: "testing library",
      },
    ],
    images: [imagesProjects.vista_my_budget_1],
    video: "https://youtu.be/jctdGxlqwjg",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code"],
    tools: [
      "React js",
      "JavaScript",
      "Html",
      "Css",
      "Sass",
      "Testing Library",
      "Git",
      "GitHub",
    ],
  },
  {
    image: imagesProjects.vista_empresa_x_1,
    title: "Empresa X",
    nameLink: "empresa-x",
    description:
      "Empresa X es un proyecto el cual permite ver estadísticas sobre el Covid en un periodo del 2020 al 2021",
    extendedDescription: (
      <>
        La Empresa X es un proyecto que se enfoca en brindar información clara 
        y accesible sobre las estadísticas relacionadas con el COVID-19. 
        Su principal herramienta es una tabla gráfica que visualiza de manera 
        concisa y comprensible los datos relevantes sobre la evolución de la 
        pandemia. Este recurso permite a las personas entender rápidamente la 
        situación presentada entre en 2020 hasta el 2021, facilitando la toma de 
        decisiones informadas y promoviendo la conciencia pública sobre la 
        importancia de seguir las medidas de prevención y salud recomendadas.
        <br />
        Cuenta con filtrado por años y por meses, y adicional dos presentaciones de
        las estadísticas: tabla gráfica de datos y tabla de contenido
      </>
    ),
    url: "https://main.dyoqmrjktt02q.amplifyapp.com",
    repoGit: "https://github.com/luisxhl7/Empresa-x",
    technologies: [
      {
        image: imagesSkills.react,
        name: "react js",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
      {
        image: imagesSkills.testing_library,
        name: "testing library",
      },
      {
        image: imagesSkills.awsImage,
        name: "AWS",
      },
      {
        image: imagesSkills.materialUI,
        name: "material UI",
      },
    ],
    images: [
      imagesProjects.vista_empresa_x_1,
      imagesProjects.vista_empresa_x_2,
      imagesProjects.vista_empresa_x_3,
      imagesProjects.vista_empresa_x_2,
    ],
    // video: "https://youtu.be/skcjbinkHVg",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code", "SOLID"],
    tools: [
      "React js",
      "JavaScript",
      "Html",
      "Css",
      "Sass",
      "Material Ui",
      "Testing Library",
      "Axios",
      "Git",
      "GitHub",
      "Redux",
      "Api Covid",
      "Aws amplify",
    ],
  },
  {
    image: imagesProjects.vista_photShare_3,
    title: "PostSphere",
    nameLink: "postSphere",
    description:
      "PostSphere es un proyecto de publicación en línea que facilita a los usuarios la creación y compartición de publicaciones breves y concisas",
    extendedDescription: (
      <>
        PostSphere es un emocionante proyecto de publicación en línea que se
        centra en simplificar y facilitar la creación y compartición de
        publicaciones breves y concisas. Este proyecto representa mi compromiso
        con la creación de herramientas digitales que fomenten la expresión
        creativa y la interacción entre usuarios.
        <br />
        En PostSphere, los usuarios pueden crear fácilmente publicaciones breves
        sobre una variedad de temas, desde actualizaciones personales hasta
        reflexiones profundas y noticias de última hora. La plataforma está
        diseñada para ser intuitiva y fácil de usar, lo que permite a los
        usuarios compartir sus pensamientos y experiencias de manera rápida y
        sencilla.
      </>
    ),
    url: "https://main.d3f8bdovm54n3v.amplifyapp.com/home",
    repoGit: "https://github.com/luisxhl7/postShere",
    technologies: [
      {
        image: imagesSkills.react,
        name: "react js",
      },
      {
        image: imagesSkills.javaScript,
        name: "javaScript",
      },
      {
        image: imagesSkills.sass,
        name: "Sass",
      },
      {
        image: imagesSkills.git,
        name: "git",
      },
      {
        image: imagesSkills.github,
        name: "github",
      },
      {
        image: imagesSkills.testing_library,
        name: "testing library",
      },
      {
        image: imagesSkills.awsImage,
        name: "AWS",
      },
      {
        image: imagesSkills.bootstrap,
        name: "Bootstrap",
      },
    ],
    images: [
      imagesProjects.vista_photShare_1,
      imagesProjects.vista_photShare_2,
      imagesProjects.vista_photShare_3,
      imagesProjects.vista_photShare_4,
    ],
    video: "https://youtu.be/skcjbinkHVg",
    Methodologies: ["Atomic Design", "Bem", "Mobile first", "Clean code"],
    tools: [
      "React js",
      "JavaScript",
      "Html",
      "Css",
      "Sass",
      "Bootstrap",
      "Testing Library",
      "Axios",
      "Git",
      "GitHub",
      "Redux",
      "MongoDb",
      "serverless",
      "Aws lambda",
      "Api Gateway",
      "Cognito",
    ],
  },
];

export default projectsList;
