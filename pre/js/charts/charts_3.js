//Desarrollo de las visualizaciones
//import * as d3 from 'd3';
//import { numberWithCommas2 } from './helpers';
//import { getInTooltip, getOutTooltip, positionTooltip } from './modules/tooltip';
import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart3_1(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 1_1';
    document.getElementById('subtitle').textContent = 'Subtítulo del 1_1';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_1_1');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 1.1');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_1_1');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_2(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 1_2';
    document.getElementById('subtitle').textContent = 'Subtítulo del 1_2';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_1_2');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 1.2');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_1_2');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_3(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 1_3';
    document.getElementById('subtitle').textContent = 'Subtítulo del 1_3';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_1_3');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 1.3');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_1_3');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_4(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 1_4';
    document.getElementById('subtitle').textContent = 'Subtítulo del 1_4';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_1_4');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 1.4');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_1_4');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_5(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 2_1';
    document.getElementById('subtitle').textContent = 'Subtítulo del 2_1';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_2_1');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 2_1');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_2_1');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_6(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 2_2';
    document.getElementById('subtitle').textContent = 'Subtítulo del 2_2';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_2_2');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 2_2');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_2_2');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_7(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 2_3';
    document.getElementById('subtitle').textContent = 'Subtítulo del 2_3';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_2_3');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 2_3');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_2_3');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_8(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 1_4';
    document.getElementById('subtitle').textContent = 'Subtítulo del 1_4';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_1_4');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 1.4');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_1_4');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_9(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 2_1';
    document.getElementById('subtitle').textContent = 'Subtítulo del 2_1';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_2_1');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 2_1');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_2_1');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_10(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 2_2';
    document.getElementById('subtitle').textContent = 'Subtítulo del 2_2';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_2_2');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 2_2');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_2_2');
    });

    //Altura del frame
    setChartHeight(iframe);
}