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
    document.getElementById('title').textContent = 'Gráfico 3_1';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_1';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_1');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3.1');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_1');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_2(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_2';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_2';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_2');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3.2');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_2');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_3(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_3';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_3';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_3');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3.3');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_3');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_4(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_4';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_4';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_4');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3.4');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_4');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_5(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_5';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_5';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_5');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3_5');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_5');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_6(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_6';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_6';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_6');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3_6');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_6');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_7(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_7';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_7';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_7');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3_7');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_7');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_8(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_8';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_8';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_8');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3_8');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_8');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_9(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_9';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_9';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_9');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3_9');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_9');
    });

    //Altura del frame
    setChartHeight(iframe);
}

export function initChart3_10(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Gráfico 3_10';
    document.getElementById('subtitle').textContent = 'Subtítulo del 3_10';
    document.getElementById('data-source').textContent = 'INE';
    document.getElementById('data-note').textContent = 'Notas: Nada';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('titulo_grafico_3_10');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('Título del gráfico 3_10');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('titulo_grafico_3_10');
    });

    //Altura del frame
    setChartHeight(iframe);
}