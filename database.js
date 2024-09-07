// Base de Dados dos conteúdos

let dados = [
    {
        titulo : "Dor de cabeça",
        descricao : "A dor de cabeça é um incômodo comum que pode ter diversas causas. As 3 principais causas naturais estão relacionadas ao estilo de vida. O estresse, a falta de sono e a desidratação são fatores comuns. Para aliviar os sintomas, tente relaxar, beber bastante água e dormir bem. Em casos de dores frequentes ou intensas, consulte um médico. Medicamentos como paracetamol, ibuprofeno e aspirina podem ajudar, mas sempre siga as orientações médicas.",
        link : "https://www.tuasaude.com/tipos-de-dor-de-cabeca/",
        tags: "cabeca cabeça enxaqueca enchaqueca"
    },
    {
        titulo: "Indigestão",
        descricao: "A indigestão é uma sensação de desconforto abdominal que pode ser causada por diversos fatores, como alimentação excessiva, alimentos gordurosos ou picantes, ansiedade e o uso de certos medicamentos. Para aliviar os sintomas, evite alimentos gordurosos, beba bastante água, evite bebidas alcoólicas e cafeína. Medicamentos como antiácidos e probióticos podem ajudar a aliviar a azia e a má digestão.",
        link: "https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-digestivos/sintomas-de-dist%C3%BArbios-digestivos/indigest%C3%A3o",
        tags: "indigestao azia refluxo gastrite"
    },
    {
        titulo: "Dor nas Costas",
        descricao: "A dor nas costas é um problema comum que pode ter diversas causas, desde má postura até problemas mais sérios. O sedentarismo, o levantamento de peso incorreto e o estresse são fatores de risco. Para aliviar a dor, pratique exercícios físicos regularmente, mantenha uma postura correta e procure um profissional de saúde para um diagnóstico preciso.",
        link: "https://nav.dasa.com.br/blog/dor-nas-costas",
        tags: "dor costas coluna vertebral lombar cervical"
    },
    {
        titulo: "Insônia",
        descricao: "A insônia é a dificuldade para iniciar ou manter o sono. O estresse, a ansiedade, a cafeína e o uso de eletrônicos antes de dormir podem contribuir para o problema. Para melhorar a qualidade do sono, estabeleça uma rotina relaxante antes de dormir, evite estimulantes e crie um ambiente tranquilo.",
        link: "https://drauziovarella.uol.com.br/doencas-e-sintomas/insonia/",
        tags: "insonia sono dormir dificuldade para dormir"
    },
    {
        titulo: "Dores Menstruais",
        descricao: "As cólicas menstruais são dores abdominais que ocorrem antes ou durante a menstruação. Mudanças hormonais, tensão muscular e outros fatores podem causar essas dores. Para aliviar os sintomas, aplique calor local, use analgésicos e pratique atividades físicas leves.",
        link: "https://www.msdmanuals.com/pt-br/casa/problemas-de-sa%C3%BAde-feminina/dist%C3%BArbios-menstruais-e-sangramento-vaginal-an%C3%B4malo/c%C3%B3licas-menstruais#:~:text=(Dismenorreia%3B%20menstrua%C3%A7%C3%A3o%20dolorosa)&text=As%20c%C3%B3licas%20menstruais%20s%C3%A3o%20dores,ap%C3%B3s%20dois%20a%20tr%C3%AAs%20dias.",
        tags: "cólicas menstruais dor menstrual ciclo menstrual"
    },
    {
        titulo: "Alergia",
        descricao: "A alergia é uma reação exagerada do sistema imunológico a substâncias inofensivas, como pólen, poeira ou alimentos. Os sintomas podem variar de pessoa para pessoa e incluem espirros, coceira nos olhos, nariz entupido e dificuldade para respirar. Para controlar os sintomas, evite o contato com o alérgeno e use medicamentos antialérgicos.",
        link: "https://bvsms.saude.gov.br/bvs/dicas/82alergias.html#:~:text=Alergia%20ou%20rea%C3%A7%C3%A3o%20de%20hipersensibilidade,(geneticamente)%20e%20previamente%20sensibilizados.",
        tags: "alergia alergeno rinite asma polen"
    },
    {
        titulo: "Rinite Alérgica",
        descricao: "A alergia nasal, ou rinite alérgica, é uma reação alérgica que causa sintomas como espirros, coceira no nariz e olhos, congestão nasal e coriza. O pólen, ácaros, pelos de animais e mofo são alérgenos comuns. Para aliviar os sintomas, evite o contato com o alérgeno, use soro fisiológico para limpar as narinas e tome anti-histamínicos como loratadina ou cetirizina.",
        link: "https://www.saudebemestar.pt/pt/clinica/otorrino/rinite-alergica/#:~:text=A%20rinite%20al%C3%A9rgica%20%C3%A9%20uma,veremos%20adiante%20com%20maior%20detalhe.",
        tags: "rinite alérgica alergia nariz espirros coceira"
    },
    {
        titulo: "Dores Musculares",
        descricao: "As dores musculares podem ser causadas por exercícios físicos intensos, lesões, ou até mesmo estresse. O repouso, a aplicação de gelo e o uso de analgésicos como paracetamol ou ibuprofeno podem ajudar a aliviar a dor. Para prevenir dores musculares, faça alongamento antes e depois das atividades físicas e mantenha uma boa postura.",
        link: "https://www.sportllux.com.br/blog/dores-musculares#:~:text=O%20que%20%C3%A9%20dor%20muscular,%2C%20aleat%C3%B3ria%2C%20cr%C3%B4nica%20e%20aguda.",
        tags: "dor muscular fadiga muscular fibromialgia"
    },
    {
        titulo: "Constipação intestinal",
        descricao: "A constipação intestinal ou prisão de ventre é caracterizada pela dificuldade em evacuar ou pela diminuição da frequência das evacuações. A falta de fibras na dieta, a desidratação e o sedentarismo são fatores de risco. Para aliviar a prisão de ventre, aumente o consumo de fibras, beba bastante água, pratique atividades físicas regularmente e use laxantes naturais como a linhaça ou o mamão.",
        link: "https://bvsms.saude.gov.br/constipacao-intestinal/#:~:text=A%20constipa%C3%A7%C3%A3o%20intestinal%20ou%20pris%C3%A3o,outras%20doen%C3%A7as%20de%20origem%20gastrointestinal.",
        tags: "prisão de ventre constipação intestino preguiçoso"
    },
    {
        titulo: "Diarreia",
        descricao: "A diarreia é o aumento da frequência das evacuações e a alteração da consistência das fezes. Vírus, bactérias, alimentos contaminados e medicamentos são algumas das causas. Para aliviar os sintomas, beba bastante líquido para evitar a desidratação, evite alimentos gordurosos e picantes, e use medicamentos como loperamida para controlar a diarreia.",
        link: "https://bvsms.saude.gov.br/diarreia-e-desidratacao/#:~:text=A%20diarr%C3%A9ia%20%C3%A9%20um%20desarranjo,na%20%C3%A1gua%20ou%20alimentos%20contaminados.",
        tags: "diarreia gastroenterite infecção intestinal"
    }
];