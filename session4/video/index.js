// // init ex
// const movie = {
//     title: 'The dark nignt rises ',
//     year : 2012 ,
//     rate : 8.4
//     }
// console.log(movie);
// console.log(movie.title+","+movie.year+","+movie.rate)
// console.log(movie['title']+','+movie['year']+','+movie['rate']);


// read ex
// const hobies = {
//     h1: "Sport",
//     h2: "LOl",
//     h3: "BTS",
//     h4: "Lmao"
//   };
  
//   hobies.h1=hobies.h1.toLocaleUpperCase()
//   hobies.h3=hobies.h3.toLocaleUpperCase()
//   hobies.h4=hobies.h4.toLocaleUpperCase()
//   console.log(hobies)

// let a = prompt('what do you want to know');
// if(hobies[a]===null || hobies[a] === undefined){
//   alert(a+' does not exist in our data')
// }
// else{
//   alert(hobies[a])
// }

// update 1
// const movie = {
//   title: 'The dark nignt rises ',
//   year : 2012 ,
//   rate : 8.4
//   }
// movie.rate = 8.7;
// console.log(movie)

// update 2

// let a = prompt('what you want to update?')
// movie[a]=prompt('what is update');
// console.log(movie)

// create

// const movie = {
//   title: 'The dark nignt rises ',
//   year : 2012 ,
//   rate : 8.4
//   }
// let a = prompt('what you want to update?')
// if(movie.hasOwnProperty(a) === true){
// console.log('this property are exist in our data')
// }
// else{
// alert(a+ ' does not exist in our data,we will add new')
// movie[a]=prompt('enter new data');
// console.log(movie)
// }

// object array
// const movie = {
//   title: 'The dark nignt rises ',
//   year : 2012 ,
//   rate : 8.4
//   }
// const movie2 = {
//   title: '3 idiots ',
//   year : 2017 ,
//   rate : 8.9
//   }
// const movie3 = {
//   title: 'batman 2020 ',
//   year : 2020 ,
//   rate : 7.3
//   }
// let arrMovie =[movie,movie2,movie3];
// // for(let i =0;i<arrMovie.length;i++){
// // let p = arrMovie[i]
// // console.log(p)
// // console.log('----------------------')
// // }
// for(let i=0; i<arrMovie.length;i++){
//     for(let prop in arrMovie[i]){
//     console.log(prop +': '+ arrMovie[i][prop])  
//   }
//   console.log('----------------------')
// }
// arrMovie[2].rate += 0.7
// console.log(arrMovie[2])

// object containing array

// const movie = {
//   title: 'The dark nignt rises ',
//   year : 2012 ,
//   rate : 8.4,
//   cast : ['batman','supperman','wonderwoman']
//   }
// console.log(' '+movie.title+"\n Year: "+ movie.year +"\n rate: "+movie.rate +"\n cast: "+movie.cast)
// let x = movie.cast;
// x.push('iron man')
// console.log(x)
// console.log(' '+movie.title+"\n Year: "+ movie.year +"\n rate: "+movie.rate +"\n cast: "+movie.cast)

// object and array mix
// const movie = {
//   title: 'The dark nignt rises ',
//   year : 2012 ,
//   rate : 8.4,
//   cast : ['batman','supperman','wonderwoman']
//   }
// const movie2 = {
//   title: 'The dark ',
//   year : 2015 ,
//   rate : 8.6,
//   cast : ['bat','gosh','wondergirl']
//   }
// const movie3 = {
//   title: 'the rise ',
//   year : 2019 ,
//   rate : 7.6,
//   cast : ['sun','star','cloud']
//   }
// let movieArr=[];
// movieArr.push(movie)
// movieArr.push(movie2)
// movieArr.push(movie3)
// for(let i=0 ; i < movieArr.length ; i++){
// console.log(' '+movieArr[i].title+"\n Year: "+ movieArr[i].year +"\n rate: "+movieArr[i].rate +"\n cast: "+movieArr[i].cast)
// }

// object obtional
const dataList = {
  total_results: 3,
  results: [
      {
          popularity: 512.119,
          vote_count: 460,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          id: 475557,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
          original_language: "en",
          original_title: "Joker",
          genres: [
              80,
              18,
              53
          ],
          title: "Joker",
          vote_average: 8.8,
          overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          release_date: "2019-10-04"
      },
      {
          popularity: 241.402,
          vote_count: 598,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
          id: 429203,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
          original_language: "en",
          original_title: "The Old Man & the Gun",
          genres: [
              35,
              80,
              18
          ],
          title: "The Old Man & the Gun",
          vote_average: 6.3,
          overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
          release_date: "2018-09-28"
      },
      {
          popularity: 233.735,
          vote_count: 4139,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
          id: 429617,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
          original_language: "en",
          original_title: "Spider-Man: Far from Home",
          genres: [
              28,
              12,
              878
          ],
          title: "Spider-Man: Far from Home",
          vote_average: 7.6,
          overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
          release_date: "2019-07-02"
      },
      {
          popularity: 158.333,
          vote_count: 323,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
          id: 522938,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
          original_language: "en",
          original_title: "Rambo: Last Blood",
          genres: [
              28,
              53
          ],
          title: "Rambo: Last Blood",
          vote_average: 6.1,
          overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
          release_date: "2019-09-20"
      },
  ]
}
// console.log(dataList);
// console.log(dataList.results.length);
// console.log(dataList.results[0]);
// console.log(dataList.results[0].title);
// console.log(dataList.results[0].vote_average);
// console.log(dataList.results[0].genres);
// for(let i=0; i<dataList.results.length ; i++){
//   console.log(dataList.results[i].title);
//   console.log(dataList.results[i].vote_average);
//   console.log(dataList.results[i].genres);
// }
let x = Number(prompt('which is genre do you like ?'));
let z
for(let i=0; i<dataList.results.length ; i++){
for(let j =0;j<dataList.results[i].genres.length;j++){
    let y = dataList.results[i].genres[i]
    if(x === y){
       z = dataList.results[i]
    }
}
console.log(z)
}
// thiếu phần add rate (đang sai chưa fix)
// let minRate = Number(prompt('enter the min rate '));
// dataList.results.push('rate')
// for(let i =0;i<dataList.results.length;i++){
//   let r = dataList.results[i].rate
//   r =minRate;
  
// }
// console.log(dataList.results)