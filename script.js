document.addEventListener('DOMContentLoaded', function() {
    // Configurar data mínima como hoje
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    
    const dataIdaInput = document.getElementById('data-ida');
    const dataVoltaInput = document.getElementById('data-volta');
    
    dataIdaInput.min = formattedDate;
    dataVoltaInput.min = formattedDate;
    
    // Atualizar data mínima de volta baseado na data de ida
    dataIdaInput.addEventListener('change', function() {
        dataVoltaInput.min = this.value;
        
        // Se a data de volta for anterior à nova data de ida, limpe-a
        if (dataVoltaInput.value && dataVoltaInput.value < this.value) {
            dataVoltaInput.value = '';
        }
    });
    
    // Dados simulados de voos
    const voosSimulados = [  
        {  
            companhia: "GOL",  
            destino: "Rio de Janeiro, RJ (GIG)",  
            partida: "08:00",  
            chegada: "09:15",  
            duracao: "1h15m",  
            tipo: "Direto",  
            preco: 450  
        },  
        {  
            companhia: "AZUL",  
            destino: "Rio de Janeiro, RJ (GIG)",  
            partida: "10:30",  
            chegada: "12:00",  
            duracao: "1h30m",  
            tipo: "Direto",  
            preco: 390  
        },
        {  
            companhia: "GOL",  
            destino: "Rio de Janeiro, RJ (GIG)",  
            partida: "14:15",  
            chegada: "15:45",  
            duracao: "1h30m",  
            tipo: "Direto",  
            preco: 375  
        },
        {  
            companhia: "AZUL",  
            destino: "Belo Horizonte, MG (CNF)",  
            partida: "07:30",  
            chegada: "08:45",  
            duracao: "1h15m",  
            tipo: "Direto",  
            preco: 320  
        },
        {  
            companhia: "GOL",  
            destino: "Belo Horizonte, MG (CNF)",  
            partida: "11:00",  
            chegada: "12:15",  
            duracao: "1h15m",  
            tipo: "Direto",  
            preco: 350  
        },
        {  
            companhia: "AZUL",  
            destino: "Belo Horizonte, MG (CNF)",  
            partida: "16:20",  
            chegada: "17:40",  
            duracao: "1h20m",  
            tipo: "Direto",  
            preco: 310  
        },
        {  
            companhia: "GOL",  
            destino: "Salvador, BA (SSA)",  
            partida: "06:00",  
            chegada: "08:30",  
            duracao: "2h30m",  
            tipo: "Direto",  
            preco: 650  
        },
        {  
            companhia: "AZUL",  
            destino: "Salvador, BA (SSA)",  
            partida: "09:45",  
            chegada: "12:20",  
            duracao: "2h35m",  
            tipo: "Direto",  
            preco: 600  
        },
        {  
            companhia: "GOL",  
            destino: "Salvador, BA (SSA)",  
            partida: "13:30",  
            chegada: "16:10",  
            duracao: "2h40m",  
            tipo: "Com escala em BH",  
            preco: 580  
        }
    ];
    
    // Manipulação do formulário de busca
    const formBusca = document.getElementById('flight-search');
    
    formBusca.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Mostrar loading
        document.getElementById('results').classList.add('hidden');
        document.getElementById('no-results').classList.add('hidden');
        document.getElementById('loading').classList.remove('hidden');
        
        // Obter valores do formulário
        const destino = document.getElementById('destino').value;
        const dataIda = document.getElementById('data-ida').value;
        const passageiros = document.getElementById('passageiros').value;
        const classe = document.getElementById('classe').value;
        
        // Simular tempo de busca
        setTimeout(function() {
            // Filtrar voos pelo destino selecionado
            const voosFiltrados = voosSimulados.filter(voo => voo.destino === destino);
            
            // Ordenar por preço (do mais barato para o mais caro)
            voosFiltrados.sort((a, b) => a.preco - b.preco);
            
            // Ocultar loading
            document.getElementById('loading').classList.add('hidden');
            
            // Exibir resultados ou mensagem de "nenhum voo encontrado"
            if (voosFiltrados.length > 0) {
                renderizarVoos(voosFiltrados, passageiros, classe);
                document.getElementById('results').classList.remove('hidden');
            } else {
                document.getElementById('no-results').classList.remove('hidden');
            }
        }, 1500); // Simular 1.5 segundos de busca
    });
    
    // Função para renderizar os voos filtrados
    function renderizarVoos(voos, passageiros, classe) {
        const containerVoos = document.getElementById('flights-container');
        containerVoos.innerHTML = '';
        
        // Aplicar multiplicador de preço baseado na classe
        const multiplicadorClasse = classe === 'Executiva' ? 1.8 : 1;
        
        voos.forEach(voo => {
            // Calcular preço total com base nos passageiros e classe
            const precoTotal = voo.preco * parseInt(passageiros) * multiplicadorClasse;
            
            const cardVoo = document.createElement('div');
            cardVoo.className = 'flight-card';
            
            // Definir a classe CSS do logo baseado na companhia
            const logoClass = voo.companhia === 'GOL' ? 'gol-logo' : 'azul-logo';
            
            cardVoo.innerHTML = `
                <div class="company-logo ${logoClass}">
                    ${voo.companhia}
                </div>
                <div class="flight-info">
                    <div class="flight-row">
                        <div>
                            <div class="time-info">${voo.partida} - ${voo.chegada}</div>
                            <div class="duration">Duração: ${voo.duracao}</div>
                            <div class="type">${voo.tipo}</div>
                        </div>
                        <div class="price">
                            R$ ${precoTotal.toFixed(2).replace('.', ',')}
                        </div>
                    </div>
                    <div>
                        <p>São Paulo (GRU) → ${voo.destino.split('(')[0].trim()}</p>
                    </div>
                </div>
            `;
            
            containerVoos.appendChild(cardVoo);
        });
    }
});