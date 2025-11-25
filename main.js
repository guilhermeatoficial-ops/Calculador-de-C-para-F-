const inputC = document.getElementById('valorC');
    const btn = document.getElementById('btnCalcular');
    const out = document.getElementById('resultado');

    function calcularCparaF(){
      const raw = inputC.value;
 
      if (raw === null || raw.trim() === '') {
        out.textContent = 'Digite um valor em Celsius primeiro!';
        return;
      }


      const c = Number(raw);
      if (Number.isNaN(c)) {
        out.textContent = 'Valor inválido — digite apenas números.';
        return;
      }


      const f = (c * 9/5) + 32;

      const fText = f % 1 === 0 ? f.toFixed(0) : f.toFixed(2);

      out.textContent = `${c}°C = ${fText}°F`;
    }


    btn.addEventListener('click', calcularCparaF);


    inputC.addEventListener('keydown', function(e){
      if (e.key === 'Enter') {
        calcularCparaF();
      }
    });

    inputC.addEventListener('input', () => {
      if (inputC.value.trim() === '') {
        out.textContent = 'Exiba seu número em graus C°';
      }
    });
