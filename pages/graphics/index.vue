<template>
    <div class="bg-white">
        <title>Graphics</title>
        <Line :data="data" :options="options" />
    </div>
</template>

<script lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export default {
    name: 'App',
    components: {
        Line
    },
    data() {
        return {
            data: {
                datasets: [{
                    label: 'Custom Label Name',
                    backgroundColor: "linear-gradient(0, 0, 0, 450)",
                    pointBackgroundColor: 'lime',
                    borderWidth: 2,
                    borderColor: 'lime',
                    data: [30, 23, 47, 20, 25, 10, 15, 22]
                }
                ],

                labels: ['Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'],
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    easing: 'easeInOutQuad',
                    duration: 520
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'lime',
                            lineWidth: 1
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'lime)',
                            lineWidth: 1
                        }
                    }]
                },
                legend: {
                    display: false
                },
                point: {
                    backgroundColor: 'lime'
                },
                tooltips: {
                    titleFontFamily: 'Open Sans',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    titleFontColor: 'white',
                    caretSize: 5,
                    cornerRadius: 2,
                    xPadding: 10,
                    yPadding: 10
                }
            }
        }
    }
}
</script>