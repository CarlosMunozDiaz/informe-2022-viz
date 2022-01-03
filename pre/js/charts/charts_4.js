//Desarrollo de las visualizaciones
//import * as d3 from 'd3';
//import { numberWithCommas2 } from './helpers';
//import { getInTooltip, getOutTooltip, positionTooltip } from './modules/tooltip';
import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart4_1(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_1';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_1';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_1');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4.1');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_1');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_2(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_2';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_2';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_2');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4.2');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_2');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_3(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_3';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_3';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_3');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4.3');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_3');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_4(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_4';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_4';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_4');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4.4');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_4');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_5(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_5';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_5';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_5');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_5');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_5');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_6(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_6';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_6';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_6');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_6');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_6');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_7(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_7';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_7';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_7');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_7');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_7');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_8(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_8';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_8';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_8');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_8');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_8');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_9(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_9';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_9';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_9');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_9');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_9');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_10(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_10';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_10';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_10');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_10');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_10');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_11(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_11';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_11';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_11');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_11');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_11');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_12(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_12';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_12';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_12');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_12');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_12');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_13(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_13';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_13';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_13');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_13');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_13');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart4_14(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 4_14';
    document.getElementById('subtitle').textContent = 'Subtítulo del 4_14';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_4_14');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 4_14');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_4_14');
    });

    //Altura del frame
    setChartHeight(iframe);
}