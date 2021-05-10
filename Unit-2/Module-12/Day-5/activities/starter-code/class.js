console.log("Hello Index!");
const tvshows = []
const theGoodPlace ={
    name:"The Good Place",
    star:"Kristen Bell",
    date:2016,
    rating:9.1
}
tvshows.push(theGoodPlace);
const parks = {
    name:"Parks and Recreation",
    star:"Amy Poler",
    date:2010,
    rating:10
}
tvshows.push(parks);
const theOffice = {
    name:"The Office",
    star:"Steve Carrell",
    date:2005,
    rating:2
}
tvshows.push(theOffice);
const snowfall = {
    name:"SnowFall",
    star:"Damson Idris",
    date:2017,
    rating:10
}
tvshows.push(snowfall);
const friends = {
    name: "Friends",
    star:"Matt Lablanc",
    date:1994,
    rating:8
}
tvshows.push(friends);
console.log(tvshows);
// const infoPrinter = tvshow => 
//     console.log(`${tvshow.name} starred ${tvshow.star}  and came out in ${tvshow.date}`);
// infoPrinter(theOffice);
// tvshows.forEach(program => 
//     console.log(`${program.name} featured ${program.star}, came out in ${program.date} `)
// );
// tvshows.forEach(function(program){ 
//     console.log(`${program.name} starred ${program.star}, came out in ${program.date} `)
// }
// );
// tvshows.forEach(infoPrinter);
// const starTvshows = tvshows.map(function(show){
//     return show.rating/2;
// })
const starTvshows = tvshows.map(tvshow => tvshow.rating/2);
const tvshowDates = tvshows.map(show => show.date );
const newShowInfos = tvshows.map(show => {
    return {
        title: show.name,
        starRating: show.rating/2
    }
})
const showStarGenerator = function (x){
    return {
        called: x.name,
        starRating: x.rating/2
    }
}
const zakiShows = tvshows.map(showStarGenerator);
console.log(zakiShows);
console.log(newShowInfos);
console.log(tvshowDates);
console.log(tvshows);
console.log(starTvshows);

const Tvshowstars = tvshows.map(tvshow => tvshow.star);
return Tvshowstars;



const calculateDecade = ({date}) => {
 const decade = date - ((date%100) % 10);
return `${decade}'s`
}
const otherShowList = tvShows.map(show => ({title: show.name, decade: calculateDecade(show)}))
console.log(otherShowList);

// const oldShows = tvshows.filter(function(show){
//     if(show.date <= 2005){
//         return true;
//     }else{
//         return false;
//     }
// })
// const oldShows = tvshows.filter(show => {
//     if(show.date <= 1980){
//         return true;
//     }else{
//         return false;
//     }
// })
// const oldShows = tvshows.filter(show => {
//     return show.date <= 2007
// })
//const oldShows = tvshows.filter(show =>  show.date <= 2011)
//console.log(oldShows);
//console.log(tvshows);


const goodShows = tvshows.filter(show => {
    const goodShowRating = show.rating/2;
    if (goodShowRating <= 3)  {
        return true;
    } else {
        return false;
    }
})