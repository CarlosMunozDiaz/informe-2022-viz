//Desarrollo de las visualizaciones
//import * as d3 from 'd3';
//import { numberWithCommas2 } from './helpers';
//import { getInTooltip, getOutTooltip, positionTooltip } from './modules/tooltip';
import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart1_1(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Evolución de la población de 65 y más años. España, 1900-20XX';
    document.getElementById('subtitle').textContent = 'Figura 1.1. Población en miles.';
    document.getElementById('data-source').textContent = 'INE (Censos de población y Vivienda; Estadística del Padrón Continuo; Proyecciones de población)';
    document.getElementById('data-note').textContent = 'De 1900 a 2020 los datos son reales; de 20XX a 20XX se trata de proyecciones.';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('evolucion_poblacion_65ymas');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('evolucion_poblacion_65ymas');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('evolucion_poblacion_65ymas');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_2(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Comparativa de pirámides de población de España urbana y de España rural, 20XX';
    document.getElementById('subtitle').textContent = 'Figura 1.2. Población en unidades.';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = 'La España rural es la población que vive en municipios de 2.000 habitantes o menos.';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('comparativa_piramides_espana_rural');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('comparativa_piramides_espana_rural');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('comparativa_piramides_espana_rural');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_3(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Proyecciones de población por sexo y edad, 20XX-20XX';
    document.getElementById('subtitle').textContent = 'Figura 1.3. Población en unidades.';
    document.getElementById('data-source').textContent = 'INE (Proyecciones de población, 20XX-20XX)';
    document.getElementById('data-note').textContent = 'En 20168 habría 2XX.XXX centenarios no representados en esta figura.';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('proyecciones_sexo_edad');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('proyecciones_sexo_edad');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('proyecciones_sexo_edad');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_4(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Diferencia entre la población de hombres y mujeres por grupo de edad, 20XX';
    document.getElementById('subtitle').textContent = 'Figura 1.4. Población por miles de personas';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = '';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('diferencia_poblacion_sexo');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('diferencia_poblacion_sexo');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('diferencia_poblacion_sexo');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_5(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Población por grupo de edad y tamaño municipal, 20XX';
    document.getElementById('subtitle').textContent = 'Tabla 1.1.';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = 'Grupos de edad: Jóvenes (población menor de 16 años), adultos (población de 16 a 64 años) y mayores (población de 65 y más años).';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('tabla_poblacion_municipios');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('tabla_poblacion_municipios');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('tabla_poblacion_municipios');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_6(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Comparativa de la pirámide de población de España urbana y España rural, 2019';
    document.getElementById('subtitle').textContent = 'Figura 1.5. Datos en porcentajes.';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = 'La España rural es la población que vive en municipios de 2.000 habitantes o menos.';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('comparativa_porc_espana_rural');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('comparativa_porc_espana_rural');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('comparativa_porc_espana_rural');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_7(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Porcentaje de personas de 65 y más años en España, 2020. Nivel nacional, autonómico y provincial';
    document.getElementById('subtitle').textContent = 'Figura 1.6. Datos en porcentajes.';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = '';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('porc_personas_mayores_espana');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('porc_personas_mayores_espana');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('porc_personas_mayores_espana');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_8(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Porcentaje de personas de 65 y más año en España, 2020. A nivel municipal';
    document.getElementById('subtitle').textContent = 'Mapa 1.1. Datos en porcentajes.';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = '';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('mapa_municipios_personas_mayores');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('mapa_municipios_personas_mayores');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('mapa_municipios_personas_mayores');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_9(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Comparativa de personas de 65 y más años en Europa, 2020. A nivel nacional';
    document.getElementById('subtitle').textContent = 'Figura 1.7. Datos en porcentajes.';
    document.getElementById('data-source').textContent = 'Eurostat (Population on 1 January by broad age group and sex)';
    document.getElementById('data-note').textContent = 'El porcentaje de personas de 65 y más años en la Unión Europa (UE-27) es del 20,3%.';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('comparativa_europa_personas_mayores');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('comparativa_europa_personas_mayores');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('comparativa_europa_personas_mayores');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_10(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Distribución de la población extranjera de 65 y más años por nacionalidad en España, 2020';
    document.getElementById('subtitle').textContent = 'Figura 1.8. Datos en porcentajes.';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = 'No se incluye Reino Unido dentro de la Unión Europea.';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('distribucion_poblacion_mayor_extranjera');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('distribucion_poblacion_mayor_extranjera');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('distribucion_poblacion_mayor_extranjera');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart1_11(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Pirámide de población de españoles y extranjeros, 2020';
    document.getElementById('subtitle').textContent = 'Figura 1.9. Datos en porcentajes.';
    document.getElementById('data-source').textContent = 'INE (Estadística del Padrón continuo)';
    document.getElementById('data-note').textContent = 'Indicar aquí que se considera español vs extranjero.';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('piramide_espanoles_extranjeros');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('piramide_espanoles_extranjeros');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('piramide_espanoles_extranjeros');
    });

    //Altura del frame
    setChartHeight(iframe);
}