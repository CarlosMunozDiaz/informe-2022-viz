import 'url-search-params-polyfill';
import './modules/tabs';
import * as charts_1 from './charts/charts_1';
import * as charts_2 from './charts/charts_2';
import * as charts_3 from './charts/charts_3';
import * as charts_4 from './charts/charts_4';

//Necesario para importar los estilos de forma automática en la etiqueta 'style' del html final
import '../css/main.scss';

/////////////
//////// RECOGIDA DE PARÁMETROS DE LA URL
/////////////
getUrlParams();

function getUrlParams() {
    const params = new URLSearchParams(window.location.search);

    //Visualización y tipo de iframe
    const viz = params.get('chart');
    const iframe = params.get('iframe');

    setChart(viz, iframe);
}

function setChart(viz, iframe) {
    charts_1.initChart1_1(iframe, undefined);
    pymChild.onMessage('viewport-iframe-position', onScroll);
    

    function onScroll(parentInfo) {
        console.log(parentInfo);
        let steps = parentInfo.split(" ");

        if(steps[2] != 0 && !isChartActive) {
            switch(viz){
                //Demografía
                case '1_1':
                    charts_1.initChart1_1(iframe, steps[2]);
                    break;
                case '1_2':
                    charts_1.initChart1_2(iframe, steps[2]);
                    break;
                case '1_3':
                    charts_1.initChart1_3(iframe, steps[2]);
                    break;
                case '1_4':
                    charts_1.initChart1_4(iframe, steps[2]);
                    break;
                case '1_5':
                    charts_1.initChart1_5(iframe, steps[2]);
                    break;
                case '1_6':
                    charts_1.initChart1_6(iframe, steps[2]);
                    break;
                case '1_7':
                    charts_1.initChart1_7(iframe, steps[2]);
                    break;
                case '1_8':
                    charts_1.initChart1_8(iframe, steps[2]);
                    break;
                case '1_9':
                    charts_1.initChart1_9(iframe, steps[2]);
                    break;
                case '1_10':
                    charts_1.initChart1_10(iframe, steps[2]);
                    break;
                case '1_11':
                    charts_1.initChart1_11(iframe, steps[2]);
                    break;
                //Social
                case '2_1':
                    charts_2.initChart2_1(iframe, steps[2]);
                    break;
                case '2_2':
                    charts_2.initChart2_2(iframe, steps[2]);
                    break;
                case '2_3':
                    charts_2.initChart2_3(iframe, steps[2]);
                    break;
                case '2_4':
                    charts_2.initChart2_4(iframe, steps[2]);
                    break;
                case '2_5':
                    charts_2.initChart2_5(iframe, steps[2]);
                    break;
                case '2_6':
                    charts_2.initChart2_6(iframe, steps[2]);
                    break;
                case '2_7':
                    charts_2.initChart2_7(iframe, steps[2]);
                    break;
                case '2_8':
                    charts_2.initChart2_8(iframe, steps[2]);
                    break;
                case '2_9':
                    charts_2.initChart2_9(iframe, steps[2]);
                    break;
                case '2_10':
                    charts_2.initChart2_10(iframe, steps[2]);
                    break;
                case '2_11':
                    charts_2.initChart2_11(iframe, steps[2]);
                    break;
                case '2_12':
                    charts_2.initChart2_12(iframe, steps[2]);
                    break;
                //Economía
                case '3_1':
                    charts_3.initChart3_1(iframe, steps[2]);
                    break;
                case '3_2':
                    charts_3.initChart3_2(iframe, steps[2]);
                    break;
                case '3_3':
                    charts_3.initChart3_3(iframe, steps[2]);
                    break;
                case '3_4':
                    charts_3.initChart3_4(iframe, steps[2]);
                    break;
                case '3_5':
                    charts_3.initChart3_5(iframe, steps[2]);
                    break;
                case '3_6':
                    charts_3.initChart3_6(iframe, steps[2]);
                    break;
                case '3_7':
                    charts_3.initChart3_7(iframe, steps[2]);
                    break;
                case '3_8':
                    charts_3.initChart3_8(iframe, steps[2]);
                    break;
                case '3_9':
                    charts_3.initChart3_9(iframe, steps[2]);
                    break;
                case '3_10':
                    charts_3.initChart3_10(iframe, steps[2]);
                    break;
                //Social
                case '4_1':
                    charts_4.initChart4_1(iframe, steps[2]);
                    break;
                case '4_2':
                    charts_4.initChart4_2(iframe, steps[2]);
                    break;
                case '4_3':
                    charts_4.initChart4_3(iframe, steps[2]);
                    break;
                case '4_4':
                    charts_4.initChart4_4(iframe, steps[2]);
                    break;
                case '4_5':
                    charts_4.initChart4_5(iframe, steps[2]);
                    break;
                case '4_6':
                    charts_4.initChart4_6(iframe, steps[2]);
                    break;
                case '4_7':
                    charts_4.initChart4_7(iframe, steps[2]);
                    break;
                case '4_8':
                    charts_4.initChart4_8(iframe, steps[2]);
                    break;
                case '4_9':
                    charts_4.initChart4_9(iframe, steps[2]);
                    break;
                case '4_10':
                    charts_4.initChart4_10(iframe, steps[2]);
                    break;
                case '4_11':
                    charts_4.initChart4_11(iframe, steps[2]);
                    break;
                case '4_12':
                    charts_4.initChart4_12(iframe, steps[2]);
                    break;
                case '4_13':
                    charts_4.initChart4_13(iframe, steps[2]);
                    break;
                case '4_14':
                    charts_4.initChart4_14(iframe, steps[2]);
                    break;
                default: //Si no hay parámetros en la URL
                    charts_1.initChart1_1('responsive', steps[2]);
                        break;                
            }
            isChartActive = true;
        }
    }    
}