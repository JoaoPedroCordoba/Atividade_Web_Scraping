//LInl para o site: https://www.dndbeyond.com/classes

// Atribuindo os nomes e descrições das classes do D&D
let nomeInterno = document.querySelectorAll(".listing-card__title");
let descricaoClasse = document.querySelectorAll(".characters-statblock");

// Transformando os nodeList em arrays
let nomes = Array.from(nomeInterno).map(el => el.textContent.trim());
let descricao = Array.from(descricaoClasse).map(el => el.textContent.trim());

let classes = nomes.map((nome, i) => ({
    nome: nome,
    descricao: descricao[i]
  }));

  // Função para extrair o número do Hit Die da descrição
function pegarHitDie(desc) {
    let match = desc.match(/Hit Die: d(\d+)/i);
    return match ? parseInt(match[1]) : 0; // retorna 0 se não achar
  }
  
  // Ordena do maior para o menor
  classes.sort((a, b) => pegarHitDie(b.descricao) - pegarHitDie(a.descricao));
  
  // Imprime
  classes.forEach(c => console.log(`${c.nome}: ${c.descricao}`));