import { Link } from 'react-router-dom';
import React from 'react';
import { FaUser , FaHistory } from "react-icons/fa";
import { MdDescription, MdPayment } from "react-icons/md";
import './home.css'
import SearchBar from './searchbar';

export const boardGame = [
    {name:"Candy Land" , players:"2-4" , description:"Candy Land is a racing game perfect for children of all ages. There is no strategy involved; you are only required to follow simple directions." , pic:"https://m.media-amazon.com/images/I/91yUG40gv0L._AC_SL1500_.jpg"},
    {name:"Chutes and Ladders" , players:"2-6" , description:"Spin the spinner to see how far you’ll go. If you land at the bottom of the ladder, you get to slide right to the top!" , pic:"https://www.ultraboardgames.com/img/slideshow/chutes-and-ladders.jpg"},
    {name:"Memory" , players:"2-6" , description:"You’ve probably played a version of Memory before. The concept is simple: Players take turns flipping over tiles to find a match." , pic:"https://cf.geekdo-images.com/8ATWe_N1jQkxF10Ebu8TnQ__imagepage/img/mNQ3wlTTjegYtF0vWkm6j6n9230=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2982436.jpg"},
    {name:"Trouble" , players:"2-4" , description:"In this board game, you’ll race your friends to see which player gets all four of their pieces around the board first." , pic:"https://cf.geekdo-images.com/BvPQfI3qiIA8Xd74n3WnUg__imagepage/img/b-Vu4Efwa-jT5noVUoHbEMGv6Ao=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8205524.jpg"},
    {name:"Go Fish" , players:"2-6" , description:"In this card game, players take turns asking each other if they have a card that matches one of the cards in your hand." , pic:"https://i5.walmartimages.com/asr/dc5e3109-b059-419b-b74a-776823113a15_1.9907331284ce09e507bacc78e79dbe25.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"},
    {name:"Animal Upon Animal" , players:"2-4" , description:"Race each other to be the first player to all of their animals on the pile. it’s great for hand-eye-coordination and fine motor skills." , pic:"https://cf.geekdo-images.com/5RHnNYBqmNXYvDtIeJw3pA__imagepage/img/n_CwX3H5S7xp9wqUszjI-OJtmDs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic403502.jpg"},
    {name:"Blokus" , players:"2-4" , description:"This abstract strategy game is Tetris for four players. You lay all your pieces corner to corner, on the board while trying to block their opponents." , pic:"https://down-th.img.susercontent.com/file/d52808d06927aae92884a0152dce5207"},
    {name:"Dominoes" , players:"2-10" , description:"You can play many different games with dominoes; the possibilities are endless!" , pic:"https://m.media-amazon.com/images/I/91WhT0OocEL.png"},
    {name:"Parcheesi" , players:"2-6" , description:"Begin the game by rolling the die to see who goes first. Each player starts with 4 pawns, and the player to see all 4 pawns in the center first wins!" , pic:"https://i0.wp.com/thebiggamehunter.com/wp-content/uploads/2011/02/Parcheesi-2000s-Milton-Bradley.jpg"},
    {name:"Kerplunk" , players:"2-4" , description:"Get as many sticks as possible with releasing as few marbles as possible." , pic:"https://i.ytimg.com/vi/Aslf72DPSR0/maxresdefault.jpg"},
    {name:"Sorry!" , players:"2-4" , description:"The object of this fun and competitive game is to get your four pieces “Home” first by drawing cards and moving your pieces." , pic:"https://m.media-amazon.com/images/I/81CA3GV9sXL._AC_SX679_.jpg"},
    {name:"UNO" , players:"2-10" , description:"Each player has cards they try to discard; some of them make others draw more or skip them. The person with no cards left wins!" , pic:"https://store-images.s-microsoft.com/image/apps.12626.14373891414391284.019fd30f-7df2-4d62-b36a-dbea7042c365.7e559861-c951-4464-89c5-28965986d3b4?mode=scale&q=90&h=1080&w=1920"},
    {name:"Chess" , players:"2" , description:"This game is between two players each containing 16 pieces on a 64-square board. The idea of the game is to checkmate the other king." , pic:"https://rukminim2.flixcart.com/image/850/1000/xif0q/board-game/c/6/x/12-chess-the-classic-game-of-strategy-advit-toys-original-imagc3h5khhz5cnx.jpeg?q=20&crop=false"},
    {name:"Aggravation" , players:"2-6" , description:"Each player receives four marbles to move from “Start” to “Home.” The dice tells each player how many places to move." , pic:"https://cf.geekdo-images.com/sZPLXOzohqdiI6UiVwpucg__imagepage/img/zNinxoWj71QYwRBtjG8AjV5HAdI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic584380.jpg"},
    {name:"Qwirkle" , players:"2-4" , description:"Grab a paper and pencil to keep score in this fun tile game." , pic:"https://cf.geekdo-images.com/k7zHj8j_a6uUAtXUt5Fvuw__opengraph/img/ITX_9nyK-ETWZP7a4rrPti7lxqU=/0x0:1424x748/fit-in/1200x630/filters:strip_icc()/pic309353.jpg"},
    {name:"Guess Who" , players:"2" , description:"The first player to guess the other player’s character wins the game. You want to ask your opponent questions to narrow down your guesses." , pic:"https://cf.geekdo-images.com/9IzIcHIJVY08OYkXpTmUQA__opengraph/img/r_IvwemKqkTCFoomJj3D_m6p9pA=/0x0:500x263/fit-in/1200x630/filters:strip_icc()/pic335812.jpg"},
    {name:"Yahtzee" , players:"2-10" , description:"Get as many points as you can by rolling combinations of 5 dice up to 3 times. Each combination adds up differently." , pic:"https://cf.geekdo-images.com/dp-pJkUemCjhrwi9QItrPA__imagepage/img/o73ZDMuyE1V8Dh6jgvoyOaTFzRg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic378237.jpg"},
    {name:"The Allowance Game" , players:"2-4" , description:"This is not just a game, but a learning experience. Practice the importance of making money, learning how to use it, and how to make change." , pic:"https://cf.geekdo-images.com/4FhtxCXpHMAFAhi6Q0IT4Q__opengraph/img/ltJAgv9JBWMxI1QnEwLk50eL6Sw=/fit-in/1200x630/filters:strip_icc()/pic7223442.jpg"},
    {name:"Sequence" , players:"2-12" , description:"Divide into teams and give all players chips and cards. Take turns placing the chips on the board until your team has completed the sequences needed." , pic:"https://cdn.zatu.com/wp-content/uploads/2023/02/16220854/sequence-board-game.png"},
    {name:"Tenzi" , players:"2-4" , description:"Begin the game by all players rolling all 10 of their dice at the same time. Each player chooses their match number based on the dice rolled." , pic:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Tenzi-Board-Game.jpg"},
    {name:"Pit" , players:"3-8" , description:"Pit takes a dive into the finer economics of the stock exchange where you collect matching commodity cards." , pic:"https://cf.geekdo-images.com/LkEPNu7bPTS1rVRU_Ba-Dg__opengraph/img/aQjBFs__qAJMVR3TxjfPS6SwynM=/0x26:1417x770/fit-in/1200x630/filters:strip_icc()/pic423644.jpg"},
    {name:"Get Bit" , players:"3-6" , description:"Player face one card down, then reveal the numbers. This determines the order of swimmers (higher numbers in front)." , pic:"https://www.ultraboardgames.com/gfx/get-bit.jpg"},
    {name:"Ticket to Ride" , players:"2-5" , description:"Ticket to Ride is a fun, competitive game where players make train routes connecting destinations and cutting off other players." , pic:"https://cf.geekdo-images.com/2H0pJddVJA3r6btqRNLG1g__opengraph/img/P7zo2C9BQlrCEPjBwyjW6Nr7hNA=/0x0:1980x1040/fit-in/1200x630/filters:strip_icc()/pic7541330.png"},
    {name:"Monopoly" , players:"2-8" , description:"In Monopoly (several versions) you move your token around a board collecting property and collecting rent from other players." , pic:"https://www.portlandoldport.com/wp-content/uploads/2023/02/monopoly-1024x536.png"},
    {name:"Pandemic" , players:"2-4" , description:"In this cooperative game, you’re a disease-fighting specialist with a mission to treat disease hotspots all over the world. You have to work together!" , pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIouAXQbUvGpc5My1ERf-F6yErqWrZ5kgabw&s"},
    {name:"Clue" , players:"3-6" , description:"Players most travel through the mansion, and, through logical reasoning, solve a murder that occured at the mansion." , pic:"https://cf.geekdo-images.com/wNcbhLJGGjakYjjm1gV_kQ__opengraph/img/22FcQ8Hj6fdfVywtkFIvqi6hVpM=/0x0:1188x624/fit-in/1200x630/filters:strip_icc()/pic7563466.png"},
    {name:"The Game of Life" , players:"2-6" , description:"Start a career, have a family, pay taxes, and more. The objective of the game is to collect money and LIFE Tiles." , pic:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403120/header.jpg?t=1682353184"},
    {name:"Sushi Go!" , players:"2-5" , description:"This is a great game for sushi lovers, and still a fun game for those who loathe it. You have to quickly grab the best sushi combinations as they go by." , pic:"https://x.boardgamearena.net/data/newsimg/news_sushigo.jpg"},
    {name:"Battleship" , players:"2" , description:"This classic board game is known all over the world for its strategy and logical thinking. The purpose of the game is to sink your opponent’s ships." , pic:"https://www.ultraboardgames.com/battleship/gfx/banner.jpg"},
    {name:"Qwixx" , players:"2-5" , description:"This game has a good bit of counting, which makes it great for practicing math concepts." , pic:"https://www.ultraboardgames.com/img/slideshow/qwixx.jpg"},
    {name:"Stratego" , players:"2" , description:"Battleship meets Chess in this game of deception, tactic, and some luck. Seize the flag to win!" , pic:"https://www.mandisattictoys.com/cdn/shop/products/IMG_4689_1024x.jpg?v=1595980397"},
    {name:"Boggle" , players:"1-8" , description:"The concept of the game is to find as many words you can in sequences of adjacent letters. The player with the most points wins the game." , pic:"https://cf.geekdo-images.com/dsI6-jUj8mzOuC6gL4e42w__opengraph/img/EXijGS02XhveF4WbosqvPg947_o=/0x0:2270x1192/fit-in/1200x630/filters:strip_icc()/pic7024967.jpg"},
    {name:"Dutch Blitz" , players:"2-4" , description:"This game may look old fashioned, but it is a very fun and fast-paced game." , pic:"https://bramanswanderings.files.wordpress.com/2012/08/dutch-blitz-002.jpg"},
    {name:"Roll For It!" , players:"2-4" , description:"Three simple rules to remember in this game: roll, match, and score. Match your die with the die on your card to claim the card. Player with the most points wins the game!" , pic:"https://www.ultraboardgames.com/gfx/roll-for-it.jpg"},
    {name:"Pass the Pigs" , players:"2-10" , description:"With its small size, this is the perfect game for traveling. You’ll use pigs as dice. Points vary on different spots on the pig." , pic:"https://www.ultraboardgames.com/gfx/pass-the-pigs.jpg"},
    {name:"Guesstures" , players:"4-99" , description:"A great game to play with a big group! Each player received 4 cards, each card has a easy and difficult word to communicate to their team." , pic:"https://i.etsystatic.com/22637136/r/il/9db3d3/6026893934/il_fullxfull.6026893934_hd7s.jpg"},
    {name:"Carcassonne" , players:"2-5" , description:"This is a tile game with the objective to earn the most points by completing features like cities and roads." , pic:"https://cf.geekdo-images.com/RuVaR99haabPBv8xQP-K7g__opengraph/img/v94YBFlfRlPSXYdJdJbJXaAPUm8=/0x0:1900x998/fit-in/1200x630/filters:strip_icc()/pic6882456.png"},
    {name:"Settlers of Catan" , players:"3-4" , description:"The concept of this game is to build settlements, cities, and roads in order to dominate the island. Resources can be harvested and traded." , pic:"https://blog.colonist.io/content/images/2022/08/Settlers-of-Catan.jpg"},
    {name:"Risk" , players:"2-6" , description:"Conquer the world by battling your opponents in an effort to gain controlling over each territory on the board." , pic:"https://gamenightblog.com/wp-content/uploads/2019/05/risk-box.jpg?w=720"},
    {name:"Scrabble" , players:"2-4" , description:"Score points by placing tiles bearing a single letter onto the board in a crossword fashion." , pic:"https://cf.geekdo-images.com/TMdrXnsKupDF90SX1unJgQ__imagepage/img/UyThZPTe8vc6nYXyPKetQ1hLawM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic715147.jpg"},
    {name:"7 Wonders" , players:"2-7" , description:"This card game makes you the leader of one of the 7 greatest cities in the Ancient World. You’ll need resources, routes, and military." , pic:"https://b1803394.smushcdn.com/1803394/wp-content/uploads/2020/08/7-wonders-review-header-990x557.jpg?lossy=1&strip=1&webp=1"},
    {name:"Splendor" , players:"2-4" , description:"You’re a merchant of the Renaissance with a goal to buy gem mines, transportation, and shops in order to gain the most points." , pic:"https://cdn11.bigcommerce.com/s-9im8f1/images/stencil/1280x1280/products/1601/4247/ASM_Splendor__68560.1588305056.jpg?c=2"},
    {name:"Forbidden Island" , players:"2-4" , description:"Players must work together to win the game. You must collect treasures and items all while trying keep the island from sinking." , pic:"https://mobimg.b-cdn.net/v2/fetch/8b/8b3af22be033da2e972fb583255120a0.jpeg"},
    {name:"Apples to Apples" , players:"4-10" , description:"The object of the game is to get the player/judge to pick your card as their favorite as it applies to the category card, as silly or outrageous as it is." , pic:"https://m.media-amazon.com/images/I/812MAS17eFL._AC_UF1000,1000_QL80_.jpg"},
    {name:"Caverna" , players:"1-7" , description:"Caverna is a game where players become dwarves and compete to collect the goods they need to feed their families and go on expeditions." , pic:"https://cf.geekdo-images.com/rTlJoKU2lHOZfv1Ad8YvDA__opengraph/img/pyPOdByI-G48IvZbi7wBFcfg40Q=/0x0:790x415/fit-in/1200x630/filters:strip_icc()/pic3505750.jpg"},
    {name:"Catch Phrase!" , players:"4-16" , description:"Divide up into two teams; you will give your teammates clues to guess the word or phrase on your card." , pic:"https://www.ultraboardgames.com/img/slideshow/catch-phrase.jpg"},
    {name:"Trivial Pursuit" , players:"2-24" , description:"In this game, you will answer questions about general knowledge and pop culture questions." , pic:"https://i.ytimg.com/vi/BeWZHDo_6C4/maxresdefault.jpg"},
    {name:"Puerto Rico" , players:"2-5" , description:"Each player is granted the role of colonial governors. The point of the game is to collect victory points by shipping goods or contracting buildings." , pic:"https://bombardgames.com/wp-content/uploads/2023/04/puerto-rico-review.webp"},
    {name:"Terra Mystica" , players:"2-5" , description:"You don’t need luck on your side for this game, but you will need strategy. You’ll be governing 14 groups while attempting to grow your homeland." , pic:"https://cf.geekdo-images.com/bre12I1YiXkZr7elvriz4A__opengraph/img/RKbh4b9b8YBmEsBtJu8zPN4vM6M=/0x0:1427x749/fit-in/1200x630/filters:strip_icc()/pic5375624.jpg"},
    {name:"Dominion" , players:"2-4" , description:"Players take the role of monarchs and compete against each other to build the most developed kingdom represented by their individual deck of cards." , pic:"https://img.pastemagazine.com/wp-content/uploads/2022/06/21074637/dominion-card-game-main.jpg"}]

function Home() {
        return(
        <section className='homebackground'>
            <div className='menu'>
                <p>Board-Go</p>
                <SearchBar placeholder={"Search"} data={boardGame}/>
                <div className='payment'><nav><Link to='/Payment'><MdPayment className='icon' /></Link></nav></div>
                <div className='history'><nav><Link to='/History'><FaHistory className='icon' /></Link></nav></div>
                <div className='profile'><FaUser className='icon'/></div>
            </div>
            <div className='display'>{boardGame.map((board , index) => {
                return(
                    <div key={index} className='board_name'>
                        <div className='warp_home'><img className='picture' src={board.pic}/><div className='info'><div className='name'>{board.name}</div><div className='players'>( {board.players} players )</div></div></div>
                    </div>
                    )
                }
            )
        }</div>
        </section>   
        ) 
    }

export default Home ;