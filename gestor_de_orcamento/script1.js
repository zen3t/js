/*
const tarantinoMovies = [
  { name: 'Bastardos Inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
];
const firstMuviesCity = [
  'Sidney',
  'Berlyn',
  'Lisboa',
  'Brazil',
  'cuba'
]
const secundMuviesCity = ['Sidney','Lisboa','cuba','bali']
const cidadesComuns = firstMuviesCity.filter((city) => secundMuviesCity.includes(city))
console.log(cidadesComuns)

Usando o reduce
const numbers = [1,2,3]

const sum = numbers.reduce((accumulator, item) => accumulator + item,0)
console.log(sum)

const cart = [
  {name: 'Dark souls III',price: 12.34},
  {name: 'Shadow of the Tomb Raid',price: 108.34},
  {name: 'Sekio: Shadow Die  Twice',price: 128.34},
  {name: 'Resident Evil 2',price: 122.34},
  {name: 'Konar 4',price: 152.34},
]
const productList = cart.reduce((accumulator, {name}) => `${accumulator} ${name}\n`, '')
console.log(productList)

const people = [
  {id: 1, name: 'Francisco Carlos', age: 18, UinidadeFederativa: 'Porto Alegre'},
  {id: 41, name: 'Diassis Carlos', age: 19, UinidadeFederativa: 'Ba'},
  {id: 11, name: 'Carlos Magnoo', age: 18, UinidadeFederativa: 'Sp'},
  {id: 21, name: 'Frank Carlos', age: 20, UinidadeFederativa: 'Rj'},
  {id: 15, name: 'Lucas', age: 18, UinidadeFederativa: 'Piaui'},
  {id: 11, name: 'Augusto da silva', age: 19, UinidadeFederativa: 'Maranhao'},
]
const Novas = people.reduce((accumulator, { age }) => {
  accumulator[age] =  accumulator[age]  + 1 || 1
  return accumulator
}, {})

console.log(Novas)
*/
const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19_686_119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17_050_000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16_267_649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14_572_181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13_035_000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11_944_985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11_259_536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11_204_815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10_968_065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10_735_524, distributedBy: 'Embrafilme' }
];
console.log(
topBrazilMovies
  .filter(({distributedBy}) => distributedBy === 'Disney')
  .reduce((accumulator, {peopleAmount}) =>accumulator + peopleAmount,0)


)
