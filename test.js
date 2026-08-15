async function loadAndDrawChart() {
    try {
        let response = await fetch("https://test-deploy-0iuy.onrender.com/api/chart-data");
        let result = await response.json(); 

        let years = result.data.map(row => row.years);
        let scores = result.data.map(row => row.scores);

        let ctx = document.getElementById('mainChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'امتیاز فرهنگی تهران',
                    data: scores,
                    borderColor: '#1a5276',
                    backgroundColor: 'rgba(26, 82, 118, 0.1)',
                    borderWidth: 3,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    } catch (error) {
        console.error("Failed to render chart:", error);
    }
}

window.onload = () => {
    loadAndDrawChart();
};
