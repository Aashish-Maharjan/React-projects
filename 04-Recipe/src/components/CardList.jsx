import Card from "./Card";

const recepies=[
    {
        id:1,
        name:"Food Bowl" ,
        image:"https://img.delicious.com.au/nnzbvV91/w1200/del/2018/05/green-and-gold-rice-bowls-80254-2.jpg",
        tag:"Dinner",
        numberOfMinutes:50
    } ,
    {
        id:2,
        name:"Red Velvet Cake" ,
        image:"https://sweetkitchencravings.com/wp-content/uploads/2023/09/IMG_4577-copy.jpg",
        tag:"Desert",
        numberOfMinutes:130
    },
    {
        id:3,
        name:"Chocolate Pankcake" ,
        image:"https://www.delscookingtwist.com/wp-content/uploads/2021/07/Perfect-Chocolate-Pancakes_1.jpg",
        tag:"Breakfast",
        numberOfMinutes:30
    },
    {
        id:4,
        name:"MoMo" ,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWweMLsRjFVayNya0dO9ue0xrZOGmgeWgBg&s",
        tag:"Lunch",
        numberOfMinutes:60
    } 
]

function CardList(){
    return(
        <section className="cards">
            {recepies.map(recepies =>(
                <Card key={recepies.id} recepies={recepies} />
            ))}
       </section>
    );
}
export default CardList;