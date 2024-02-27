// Importar las imágenes desde el documento
import p_img_1 from "./img/01-fierro.jpg";
import p_img_2 from "./img/02-madera.jpg";
import p_img_3 from "./img/03-lamina-techo.jpg";
import p_img_4 from "./img/04-marco-madera.jpg";
import p_img_5 from "./img/05-cholguan-sin-uso.jpg";
import p_img_6 from "./img/06-ventanas-segunda-mano.jpg";

// Crear un arreglo de 9 publicaciones con la estructura dada
var publicaciones = [
    {
        id_publicacion: 1,
        titulo_publicacion: 'Lorem ipsum lorem',
        cuerpo_publicacion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iure est, ea velit quod commodi deserunt officiis soluta quisquam fugiat?",
        image_publicacion: p_img_1,
        precio: 1500,
        unidad_medida: 'cm',
        comuna_id_comuna: 42,
        residuo_id_residuo: 3,
        usuario_id_usuario: 1,
        vigencia_publicacion_id_vigencia_publicacion: 4
    },
    {
        id_publicacion: 2,
        titulo_publicacion: 'Dolor sit amet',
        cuerpo_publicacion: "Dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae nisi ullamcorper consequat. Morbi auctor neque at leo tincidunt, ac aliquet nisi mattis.",
        image_publicacion: p_img_2,
        precio: 2000,
        unidad_medida: 'm',
        comuna_id_comuna: 35,
        residuo_id_residuo: 5,
        usuario_id_usuario: 2,
        vigencia_publicacion_id_vigencia_publicacion: 3
    },
    {
        id_publicacion: 3,
        titulo_publicacion: 'Consectetur adipiscing',
        cuerpo_publicacion: "Consectetur adipiscing elit. Nulla euismod, augue quis lacinia mollis, lectus sapien blandit nunc, quis malesuada eros justo id lorem. Fusce quis semper nisl.",
        image_publicacion: p_img_3,
        precio: 2500,
        unidad_medida: 'kg',
        comuna_id_comuna: 28,
        residuo_id_residuo: 7,
        usuario_id_usuario: 3,
        vigencia_publicacion_id_vigencia_publicacion: 2
    },
    {
        id_publicacion: 4,
        titulo_publicacion: 'Nulla euismod augue',
        cuerpo_publicacion: "Nulla euismod augue quis lacinia mollis. Lectus sapien blandit nunc, quis malesuada eros justo id lorem. Fusce quis semper nisl, consectetur adipiscing elit.",
        image_publicacion: p_img_4,
        precio: 3000,
        unidad_medida: 'un',
        comuna_id_comuna: 21,
        residuo_id_residuo: 9,
        usuario_id_usuario: 4,
        vigencia_publicacion_id_vigencia_publicacion: 1
    },
    {
        id_publicacion: 5,
        titulo_publicacion: 'Sed quis nisl vitae',
        cuerpo_publicacion: "Sed quis nisl vitae nisi ullamcorper consequat. Morbi auctor neque at leo tincidunt, ac aliquet nisi mattis. Dolor sit amet, consectetur adipiscing elit.",
        image_publicacion: p_img_5,
        precio: 3500,
        unidad_medida: 'par',
        comuna_id_comuna: 14,
        residuo_id_residuo: 11,
        usuario_id_usuario: 5,
        vigencia_publicacion_id_vigencia_publicacion: 4
    },
    {
        id_publicacion: 6,
        titulo_publicacion: 'Morbi auctor neque',
        cuerpo_publicacion: "Morbi auctor neque at leo tincidunt, ac aliquet nisi mattis. Dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae nisi ullamcorper consequat.",
        image_publicacion: p_img_1,
        precio: 4000,
        unidad_medida: 'cm',
        comuna_id_comuna: 7,
        residuo_id_residuo: 13,
        usuario_id_usuario: 6,
        vigencia_publicacion_id_vigencia_publicacion: 3
    },
    {
        id_publicacion: 7,
        titulo_publicacion: 'Fusce quis semper',
        cuerpo_publicacion: "Fusce quis semper nisl, consectetur adipiscing elit. Nulla euismod, augue quis lacinia mollis, lectus sapien blandit nunc, quis malesuada eros justo id lorem.",
        image_publicacion: p_img_2,
        precio: 4500,
        unidad_medida: 'm',
        comuna_id_comuna: 49,
        residuo_id_residuo: 15,
        usuario_id_usuario: 7,
        vigencia_publicacion_id_vigencia_publicacion: 2
    },
    {
        id_publicacion: 8,
        titulo_publicacion: 'Quis malesuada eros',
        cuerpo_publicacion: "Quis malesuada eros justo id lorem. Fusce quis semper nisl, consectetur adipiscing elit. Nulla euismod, augue quis lacinia mollis, lectus sapien blandit nunc.",
        image_publicacion: p_img_6,
        precio: 5000,
        unidad_medida: 'kg',
        comuna_id_comuna: 56,
        residuo_id_residuo: 17,
        usuario_id_usuario: 8,
        vigencia_publicacion_id_vigencia_publicacion: 1
    },
    {
        id_publicacion: 9,
        titulo_publicacion: 'Lectus sapien blandit',
        cuerpo_publicacion: "Lectus sapien blandit nunc, quis malesuada eros justo id lorem. Fusce quis semper nisl, consectetur adipiscing elit. Nulla euismod, augue quis lacinia mollis.",
        image_publicacion: p_img_4,
        precio: 5500,
        unidad_medida: 'un',
        comuna_id_comuna: 63,
        residuo_id_residuo: 19,
        usuario_id_usuario: 9,
        vigencia_publicacion_id_vigencia_publicacion: 4
    }
];

// Mostrar el arreglo en la consola
console.log(publicaciones);