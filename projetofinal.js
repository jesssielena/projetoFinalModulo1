const prompt = require("prompt-sync")();

const conhecimento = {
    port: 0,
    ultPort: 0,
    mat: 0,
    ultMat: 0,
    hist: 0,
    ultHist: 0,
    geo: 0,
    ultGeo: 0,
    ing: 0,
    ultIng: 0,

    upPort: function(valor) {
        this.port += valor;
    },
    upMat: function(valor) {
        this.mat += valor;
    },
    upHist: function(valor) {
        this.hist += valor;
    },
    upGeo: function(valor) {
        this.geo += valor;
    },
    upIng: function(valor) {
        this.ing += valor;
    },
    media: function() {
        return (this.port + this.mat + this.hist + this.geo + this.ing) / 5;
    },
};
const port = [
    `1) Quantas sílabas tem a palavra "companheiro"?
  
  a) Quatro
  b) Cinco
  c) Seis
  d) Sete
  e) Onze`,
    //-----------------------------------------------------
    `2) O que é clichê?
  
  a) local para pagamentos e recebimentos 
  b) goma de mastigar
  c) frase frequentemente repetida
  d) trabalho feito à mão com uma agulha especial
  e) remuneração que um ator recebe por novela`,
    //-----------------------------------------------------
    `3) Gíria é ...
  
  a) fêmea do sapo
  b) tipo de pássaro
  c) espécie de flor
  d) brinquedo giratório
  e) língua especial de um grupo social ou etário`,
    //-----------------------------------------------------
    `4) O nome do símbolo " * " é:
  
  a) asterix
  b) obelix
  c) asterístico
  d) asterisco
  e) obelisco`,
    //------------------------------------------------------
    `5) Segregar é o mesmo que...
  a) juntar
  b) apostar
  c) agregar
  d) separar
  e) convidar`,
    //------------------------------------------------------
    `6) Na frase "João passou no concurso" o sujeito é:
  
  a) inteligente
  b) estudioso
  c) competente
  d) aprovado
  e) João`,
    //------------------------------------------------------
    `7) - Qual dos verbos abaixo está no futuro?
  
  a) fazer
  b) viajar
  c) venderemos
  d) caminhei
  e) presenciou`,
    //-------------------------------------------------------
    `8) O que é cupincha?
  
  a) indivíduo com quem se tem amizade
  b) espécie de cupim comum na região Sul
  c) ferramenta para perfuração
  d) recipiente para armazenar comida
  e) chefe de uma facção`,
    //-------------------------------------------------------
    `9) Qual dos verbos abaixo está no passado?
  
  a) correr
  b) andarei
  c) voltará
  d) sei
  e) olhei`,
];
const mat = [
    //---------------------------------------------------------------------
    `1) Uma mãe tem 30 reais para dividir entre duas filhas. Qual o horário?
a) 11:50
b) 13:45
c) 19:03
d) 09:30`,
    //----------------------------------------------------------------------------------------------------------------------------------------------
    `2) Аndаndо роr umа ruа, um hоmеm соntа 10 árvоrеѕ à ѕuа dіrеіtа. Nа vоltа, соntа 10 árvоrеѕ à ѕuа еѕquеrdа. Quаntаѕ árvоrеѕ еlе vіu nо tоtаl?
a) 10
b) 20
c) 30
d) 40`,
    //-------------------------------------------------------
    `3) Quanto é 2 + 4 x 2?
a) 6
b) 10
c) 12
d) 8`,
    //-------------------------------------------------------
    `4) Qual o número da sequência 3, 13, 30, 31, 32 ... ?
a) 33 
b) 43
c) 53
d) 63`,
    //-------------------------------------------------------
    `5) A avó dividiu 20 balas entre as duas netas. Que horas são?
a) 10:02
b) 13:50
c) 20:02
d) 8:02`,
    //-------------------------------------------------------
    `6) Quanto é 873 + 68?
a) 978
b) 947
c) 965
d) 941`,
    //-------------------------------------------------------
    `7) 2, 10, 12, 16, 17 ... Qual será os próximos 2 números da sequencia lógica ?
a) 20, 21
b) 22, 24
c) 18, 19
d) 20, 22`,
    //-------------------------------------------------------
    `8) Qual será o resultado de 5 + 10 x 2 ? 
a) 15
b) 17
c) 20
d) 25`,
    //-------------------------------------------------------
    `9) Qual o valor de 38% de 200kg?
a) 76 kg
b) 68 kg
c) 96 kg
d) 58 kg`,
];
const hist = [
    `1) Quem proclamou a independencia do Brasil as margens do Rio Ipiranga em 1822 ?
a) Alexandre de Pompeu
b) Dom Pedro
c) Tiradentes
d) Rei de Portugal`,

    `2) Quem libertou os escravos? 
a) Zumbi dos Palmares
b) Aleijadinho
c) Princesa Isabel
d) Maria Antonieta`,

    `3) Quais países ou continentes fizeram parte da Segunda Revolução Industrial?
a) Inglaterra, Estados Unidos, Itália e URSS.
b) Inglaterra, Estados Unidos, URSS e Ásia.
c) Estados Unidos, Japão e Europa.
d) Itália, Estados Unidos, Japão e Ásia.`,

    `4) A Segunda Revolução Industrial foi simbolizada pelo:
a) Ferro, carvão e energia a vapor.
b) Ferro, carvão e eletricidade.
c) Aço e novas fontes de energia (carvão e energia a vapor).
d) Aço e novas fontes de energia (eletricidade e petróleo).`,

    `5) Como começou a Iª Guerra Mundial?
a) O não cumprimento do Tratado de Versalhes pela Alemanha.
b) Assassinato do primeiro-ministro francês General De Gaulle.
c) Assassinato do príncipe herdeiro do trono austríaco Francisco Ferdinando.
d) A Revolução Socialista em 1917 na URSS.
`,

    `6) A Primeira Guerra Mundial durou de:
a) 1910-1919.
b) 1914-1918.
c) 1914-1919.
d) 1910-1915.`,

    `7) Por que a Rússia saiu da Primeira Guerra Mundial?
a) Porque a Rússia passava por uma revolução socialista.
b) Porque o Czar Nicolau II morre.
c) Porque a Rússia foi derrotada pelos alemães.
d) Porque a Rússia rompe com os aliados Inglaterra e Áustri`,

    `8) Quem substituiu a Rússia na guerra?
a) Japão.
b) França.
c) Itália.
d) Estados Unidos.`,

    `9) Em que periodo ocorreu a II Guerra Mundial ?
a) 1932 - 1942
b) 1939 - 1945
c) 1936 - 1941
d) 1938 - 1943`,
];
const geo = [
    `1) O Brasil fica localizado em qual continente ?
a) América do Norte
b) Ásia
c) América do Sul
d) Europa`,
    //-----------------------------------------------------
    `2) Quantos Estados o Brasil possui ?
a) 25
b) 24
c) 27
d) 26`,
    //-----------------------------------------------------
    `3) Qual é a capital do Maranhão ?
a) São Luis
b) São Jeronimo
c) Macapá
d) Porto Velho`,
    //-----------------------------------------------------
    `4) Quais estados compõem a Região Sul do Brasil?
a) São Paulo, Rio de Janeiro, Santa Catarina
b) Santa Catarina, Paraná, Mato Grosso do Sul
c) Rio Grande do Sul, Santa Catarina, Paraná
d) Paraná, Rio Grande do Sul, São Paulo`,
    //-----------------------------------------------------
    `5) O Brasil possui fronteiras com quantos paises da America do Sul ?
a) 12
b) 10 
c) 9
d) Nenhum`,
    //-----------------------------------------------------
    `6) Uma megacidade é uma cidade que possui uma população absoluta maior que 10 milhões de habitantes. 
      A partir dessa conceituação, a única megacidade da América do Sul é 
a) Bogotá. 
b) Buenos Aires. 
c) Lima. 
d) São Paulo.`,
    //-----------------------------------------------------
    `7) Qual a capital de Piauí?
a) Teresina
b) Floriano
c) Bom Jesus
d) Parnaíba`,
    //-----------------------------------------------------
    `8) Qual a capital de Minas Gerais?
a) Mariana
b) Uberlândia
c) Belo Horizonte
d) Ouro Preto`,
    //-----------------------------------------------------
    `9) O Rio Negro e o Rio Solimões se encontram próximos de qual capital ?
a) Manaus
b) Rio Branco
c) Boa Vista
d) Natal `,
];
const ing = [
    `1) Qual das alternativas apresenta apenas advérbios de tempo?
a) already, always, then, above  
b) lately, still, next, finaly  
c) first, here, rarely, yet  
d) below, before, never, hard  
e) first, already, usually, yet`,
    //-------------------------------------------------------------------

    `2) Em qual das alternativas a seguir o advérbio está incorreto?
a) She hasn’t met them yet.  
b) We were rather hot yesterday.  
c) Jamie is waiting for us always.  
d) They work very hardly on Fridays.  
e) My parents will travel by airplane.`,
    //------------------------------------------------------------------

    `3) Para dizermos "abrir uma exceção" em inglês, podemos usar:
a) Open an exception
b) Start an exception
c) Make an exception
d) Close an exception`,
    //------------------------------------------------------------------

    `4) Qual a melhor tradução para "I made up my mind. I'll stay here" ?
a) Eu me decidi. Vou ficar aqui.
b) Eu estou confuso. Vou ficar aqui.
c) Eu me decidi. Vou sair daqui.
d) Eu tive um sonho. Vou sair daqui.`,
    //---------------------------------------------------------------------

    `5) No trecho, "Brazilians nationwide pack churches to pray", qual a melhor tradução para "pack":
a) Lotam
b) Pintam
c) Destroem
d) Criticam `,
    //----------------------------------------------------------------------

    `6) Os comparativos de superioridade de "good" e "far" podem ser, respectivamente:
a) Gooder, farer
b) Gooder, farther
c) Better, farer
d) Better, farther `,

    //----------------------------------------------------------------------

    `7) He lets his children want...basic things, such as food and clothes.
a) For
b) By
c) Into
d) On `,

    `8) I did everything that I ______, but we lost the match.
 a) can
 b) can’t
 c) may
 d) could `,

    `9)The show _______ go on.
 a) can
 b) shouldn’t
 c) could
 d) must  `,
];

let turno = ["Turno Manhã", "Turno Tarde", "Turno Noite"];
let resultado = [
    "Infelizmente você reprovou. Precisa estudar mais!",
    "Você alcançou uma boa pontuação, mas pode melhorar!",
    "Parabéns! Você com certeza vai mandar muito bem na prova!",
]; // ARRAY para exibição de resultados ao final da aplicação
let sair = false;
let diaProva = 5;
let dia = 0;
let block = false;
while (true) {
    if (sair) {
        break;
    }
    for (let i = 0; i < diaProva; i++) {
        // laço de rodada, dia
        if (!block) {
            dia++;
            diaProva--;
        }

        for (let j = 0; j < turno.length; j++) {
            // laço de turno, manhã, tarde, noite
            console.log(`Bem-Vindo ao simulado de estudos básicos.`);

            console.log(
                "---------------------------------------------------------------"
            );
            if (block) {
                j--;
            }
            console.log(`${turno[j]} dia ${dia}`);

            console.log();
            console.log(`Aqui está os seus resultados: 
Português: ${conhecimento.port} %
Matemática: ${conhecimento.mat} %
História: ${conhecimento.hist} %
Geografia: ${conhecimento.geo} %
Inglês: ${conhecimento.ing} %\n`);

            console.log(`Qual matéria você deseja estudar? 
      1) Português   2) Matemática   3) História   4) Geografia   5) Inglês 
      `);
            materia = prompt(`Escolha: `).trim();
            while (
                materia != 1 &&
                materia != 2 &&
                materia != 3 &&
                materia != 4 &&
                materia != 5
            ) {
                console.log(`Escolha uma das matérias abaixo 
     1) Português   2) Matemática   3) História   4) Geografia   5) Inglês
  `);
                materia = prompt(`Escolha: \n`).trim();
            }
            if (materia == 1 && conhecimento.ultPort == port.length) {
                block = true;
                materia = +prompt("Português já concluido, escolha outra matéria: ");
            }
            if (materia == 1 && conhecimento.ultPort != port.length) {
                block = false;
                for (let index = conhecimento.ultPort; index < port.length; index++) {
                    // index recebe ultima posição de português (indice da pergunta)
                    console.log(port[index]); // retorna a pergunta de português
                    let resposta = prompt("R: ").trim().toLowerCase();
                    resposta = validaResposta(resposta); // validando a entrada de resposta na mesma forma que outros projetos, porém com função
                    if (respostasPortugues(resposta, index)) {
                        // ↑↑ validação retorno da função respostaPortugues SE a resposta é valida
                        conhecimento.upPort(11); // incremento de atributos
                        console.clear();
                        console.log(`Parabéns, você acertou!`);
                        console.log(`Você ganhou + 11 % de conhecimento em Português!\n`);
                    } else {
                        console.log(`Poxa, você errou :( `);
                    }
                    conhecimento.ultPort = index + 1; // pega a referencia da ultima posição de perguntas do periodo
                    if (conhecimento.ultPort % 3 == 0) {
                        // se ultima posição de português for divisivel por 3 encerra o primeiro periodo, sendo interrompido nas perguntas 3, 6 e 9.
                        break; // quebra de loop
                    }
                }
            }
            if (materia == 2 && conhecimento.ultMat == mat.length) {
                block = true;
                materia = +prompt("Matemática já concluido, escolha outra matéria: ");
            }
            if (materia == 2 && conhecimento.ultMat != mat.length) {
                block = false;
                for (let index = conhecimento.ultMat; index < mat.length; index++) {

                    console.log(mat[index]);
                    let resposta = prompt("\nR: ").trim().toLowerCase();
                    resposta = validaResposta(resposta);
                    if (respostasMatematica(resposta, index)) {
                        conhecimento.upMat(11);
                        console.clear();
                        console.log(`Parabéns, você acertou!`);
                        console.log(`Você ganhou + 11 % de conhecimento em Matemática !\n`);
                    } else {
                        console.log(`Poxa, você errou :( `);
                    }
                    conhecimento.ultMat = index + 1;
                    if (conhecimento.ultMat % 3 == 0) {
                        break;
                    }
                }
            }
            if (materia == 3 && conhecimento.ultHist == hist.length) {
                block = true;
                materia = +prompt("História já concluido, escolha outra matéria: ");
            }
            if (materia == 3 && conhecimento.ultHist != hist.length) {
                block = false;
                for (let index = conhecimento.ultHist; index < hist.length; index++) {
                    console.log(hist[index]);

                    let resposta = prompt("\nR: ").trim().toLowerCase();
                    resposta = validaResposta(resposta);
                    if (respostasHistoria(resposta, index)) {
                        conhecimento.upHist(11);
                        console.clear();
                        console.log(`Parabéns, você acertou!`);
                        console.log(`Você ganhou + 11 % de conhecimento em História !\n`);
                    } else {
                        console.log(`Poxa, você errou :( `);
                    }
                    conhecimento.ultHist = index + 1;
                    if (conhecimento.ultHist % 3 == 0) {
                        break;
                    }
                }
            }
            if (materia == 4 && conhecimento.ultGeo == geo.length) {
                block = true;
                materia = +prompt("Geografia já concluido, escolha outra matéria: ");
            }
            if (materia == 4 && conhecimento.ultGeo != geo.length) {
                block = false;
                for (let index = conhecimento.ultGeo; index < geo.length; index++) {
                    console.log(geo[index]);
                    let resposta = prompt("\nR: ").trim().toLowerCase();
                    resposta = validaResposta(resposta);
                    if (respostasGeografia(resposta, index)) {
                        conhecimento.upGeo(11);
                        console.clear();
                        console.log(`Parabéns, você acertou!`);
                        console.log(`Você ganhou + 11 % de conhecimento em Geografia !\n`);
                    } else {
                        console.log(`Poxa, você errou :( `);
                    }
                    conhecimento.ultGeo = index + 1;
                    if (conhecimento.ultGeo % 3 == 0) {
                        break;
                    }
                }
            }
            if (materia == 5 && conhecimento.ultIng == ing.length) {
                block = true;
                materia = +prompt("Inglês já concluido, escolha outra matéria: ");
            }
            if (materia == 5 && conhecimento.ultIng != ing.length) {
                block = false;
                for (let index = conhecimento.ultIng; index < ing.length; index++) {
                    console.log(ing[index]);
                    let resposta = prompt("\nR: ").trim().toLowerCase();
                    resposta = validaResposta(resposta);
                    if (respostasIngles(resposta, index)) {
                        conhecimento.upIng(11);
                        console.clear();
                        console.log(`Parabéns, você acertou!`);
                        console.log(`Você ganhou + 11 % de conhecimento em Inglês !\n`);
                    } else {
                        console.log(`Sorry !  the answer is incorrect :(`);
                    }
                    conhecimento.ultIng = index + 1;
                    if (conhecimento.ultIng % 3 == 0) {
                        break;
                    }
                }
            }
        }
    }

    if (diaProva == 0) {
        if (conhecimento.media() < 60) {
            console.log(
                `${resultado[0]}\n Sua média geral foi de: ${conhecimento.media}`
            );
        } else if (conhecimento.media >= 60 && conhecimento.media <= 75) {
            console.log(
                `${resultado[1]}\n Sua média geral foi de: ${conhecimento.media}`
            );
        } else if (conhecimento.media > 75 && conhecimento.media <= 99) {
            console.log(
                `${resultado[2]}\n Sua média geral foi de: ${conhecimento.media}`
            );
        }

        let pSair = +prompt("Deseja sair ? se sim digite 1: ");
        if (pSair === 1) {
            sair = true;
        }
        if (pSair != 1) {
            conhecimento.port = 0;
            conhecimento.ultPort = 0;
            conhecimento.mat = 0;
            conhecimento.ultMat = 0;
            conhecimento.hist = 0;
            conhecimento.ultHist = 0;
            conhecimento.geo = 0;
            conhecimento.ultGeo = 0;
            conhecimento.ing = 0;
            conhecimento.ultIng = 0;
            dia = 0;
            diaProva = 5;
            console.clear();
        }
    }
}

function validaResposta(resposta) {
    while (
        resposta != "a" &&
        resposta != "b" &&
        resposta != "c" &&
        resposta != "d" &&
        resposta != "e"
    ) {
        console.log("Escolha uma das alternativas");
        resposta = prompt("R: ").trim().toLowerCase();
    }
    return resposta;
}

function respostasPortugues(resposta, indexPergunta) {
    // recebe como parametro a resposta e o indice da pergunta sendo esse indice a posição da pergunta no ARRAY.
    const respPort = ["a", "c", "e", "d", "d", "e", "c", "a", "e"];
    if (respPort[indexPergunta] == resposta) {
        // O ARRAY de respostas recebe o INDICE da pergunta para que possa ser comparado com a resposta do USUARIO, que também é passado na função.
        return true; // caso a resposta do usuario sejá igual a posição do ARRAY de resposta, retornará true e estará certa.
    }
    return false; // se a resposta do usuario não tiver o mesmo valor, retornará false e estará errada
}

function respostasMatematica(resposta, indexPergunta) {
    const respMat = ["b", "a", "b", "a", "b", "d", "c", "d", "a"];
    if (respMat[indexPergunta] == resposta) {
        return true;
    }
    return false;
}

function respostasHistoria(resposta, indexPergunta) {
    const respHist = ["b", "c", "c", "d", "c", "c", "a", "d", "b"];
    if (respHist[indexPergunta] == resposta) {
        return true;
    }
    return false;
}

function respostasGeografia(resposta, indexPergunta) {
    const respGeo = ["c", "d", "a", "c", "b", "d", "a", "c", "a"];
    if (respGeo[indexPergunta] == resposta) {
        return true;
    }
    return false;
}

function respostasIngles(resposta, indexPergunta) {
    const respIng = ["b", "c", "c", "a", "a", "d", "a", "d", "d"];
    if (respIng[indexPergunta] == resposta) {
        return true;
    }
    return false;
}