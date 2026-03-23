// (Mantenha o resto do código igual, apenas verifique esta função específica)
function verificarLetra(letra, btn) {
    if (letrasTentadas.includes(letra) || erros >= maxErros) return;
    letrasTentadas.push(letra);
    btn.disabled = true;

    if (palavraObjeto.p.includes(letra)) {
        btn.classList.add("correta");
        pontos += 10;
        desenharPalavra();
    } else {
        btn.classList.add("errada");
        const parte = document.getElementById(`corpo-${erros}`);
        // CORREÇÃO: Usamos style.opacity para funcionar com o novo CSS
        if (parte) parte.style.opacity = "1"; 
        erros++;
        if (erros >= maxErros) finalizarRodada(false);
    }
    document.getElementById("pontos").innerText = pontos;
}