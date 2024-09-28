const ctx = document.getElementById('barChart').getContext('2d');

const data = {
    labels: ['Minecraft', 'Overwatch', 'Free Fire', 'Fortnite', 'League of Legends'],
    datasets: [{
        label: 'Porcentagem de Jogadores, no Brasil',
        data: [40, 10, 20, 25, 10], // Exemplo de porcentagem para cada jogo
        backgroundColor: 'rgba(0, 100, 0, 0.8)', // Verde escuro translúcido
        borderColor: '#006400', // Verde escuro
        borderWidth: 2
    }]
};

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
            ticks: {
                callback: function(value) {
                    return value + "%"; // Mostra porcentagem no eixo Y
                },
                color: '#fff' // Cor das marcas do eixo Y
            },
            grid: {
                color: '#333' // Cor da grade
            }
        },
        x: {
            ticks: {
                color: '#fff' // Cor das marcas do eixo X
            },
            grid: {
                color: '#333' // Cor da grade
            }
        }
    },
    plugins: {
        legend: {
            labels: {
                color: '#fff' // Cor do texto da legenda
            }
        }
    }
};

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
