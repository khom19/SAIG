import { Link } from 'react-router-dom';
import React from 'react';
import { FaUser , FaHistory } from "react-icons/fa";
import { MdDescription, MdPayment } from "react-icons/md";
import './home.css'
import SearchBar from './searchbar';

export const boardGame = [
    {name:"Candy Land" , players:"2-4" , description:"Candy Land is a racing game perfect for children of all ages. There is no strategy involved; you are only required to follow simple directions."},
    {name:"Chutes and Ladders" , players:"2-6" , description:"Spin the spinner to see how far you’ll go. If you land at the bottom of the ladder, you get to slide right to the top!"},
    {name:"Memory" , players:"2-6" , description:"You’ve probably played a version of Memory before. The concept is simple: Players take turns flipping over tiles to find a match."},
    {name:"Trouble" , players:"2-4" , description:"In this board game, you’ll race your friends to see which player gets all four of their pieces around the board first."},
    {name:"Go Fish" , players:"2-6" , description:"In this card game, players take turns asking each other if they have a card that matches one of the cards in your hand."},
    {name:"Animal Upon Animal" , players:"2-4" , description:"Race each other to be the first player to all of their animals on the pile. it’s great for hand-eye-coordination and fine motor skills."},
    {name:"Blokus" , players:"2-4" , description:"This abstract strategy game is Tetris for four players. You lay all your pieces corner to corner, on the board while trying to block their opponents."},
    {name:"Dominoes" , players:"2-10" , description:"You can play many different games with dominoes; the possibilities are endless!"},
    {name:"Parcheesi" , players:"2-6" , description:"Begin the game by rolling the die to see who goes first. Each player starts with 4 pawns, and the player to see all 4 pawns in the center first wins!"},
    {name:"Kerplunk" , players:"2-4" , description:"Get as many sticks as possible with releasing as few marbles as possible."},
    {name:"Sorry!" , players:"2-4" , description:"The object of this fun and competitive game is to get your four pieces “Home” first by drawing cards and moving your pieces."},
    {name:"UNO" , players:"2-10" , description:"Each player has cards they try to discard; some of them make others draw more or skip them. The person with no cards left wins!"},
    {name:"Chess" , players:"2" , description:"This game is between two players each containing 16 pieces on a 64-square board. The idea of the game is to checkmate the other king."},
    {name:"Aggravation" , players:"2-6" , description:"Each player receives four marbles to move from “Start” to “Home.” The dice tells each player how many places to move."},
    {name:"Qwirkle" , players:"2-4" , description:"Grab a paper and pencil to keep score in this fun tile game."},
    {name:"Guess Who" , players:"2" , description:"The first player to guess the other player’s character wins the game. You want to ask your opponent questions to narrow down your guesses."},
    {name:"Yahtzee" , players:"2-10" , description:"Get as many points as you can by rolling combinations of 5 dice up to 3 times. Each combination adds up differently."},
    {name:"The Allowance Game" , players:"2-4" , description:"This is not just a game, but a learning experience. Practice the importance of making money, learning how to use it, and how to make change."},
    {name:"Sequence" , players:"2-12" , description:"Divide into teams and give all players chips and cards. Take turns placing the chips on the board until your team has completed the sequences needed."},
    {name:"Tenzi" , players:"2-4" , description:"Begin the game by all players rolling all 10 of their dice at the same time. Each player chooses their match number based on the dice rolled."},
    {name:"Pit" , players:"3-8" , description:"Pit takes a dive into the finer economics of the stock exchange where you collect matching commodity cards."},
    {name:"Get Bit" , players:"3-6" , description:"Player face one card down, then reveal the numbers. This determines the order of swimmers (higher numbers in front)."},
    {name:"Ticket to Ride" , players:"2-5" , description:"Ticket to Ride is a fun, competitive game where players make train routes connecting destinations and cutting off other players."},
    {name:"Monopoly" , players:"2-8" , description:"In Monopoly (several versions) you move your token around a board collecting property and collecting rent from other players."},
    {name:"Pandemic" , players:"2-4" , description:"In this cooperative game, you’re a disease-fighting specialist with a mission to treat disease hotspots all over the world. You have to work together!"},
    {name:"Clue" , players:"3-6" , description:"Players most travel through the mansion, and, through logical reasoning, solve a murder that occured at the mansion."},
    {name:"The Game of Life" , players:"2-6" , description:"Start a career, have a family, pay taxes, and more. The objective of the game is to collect money and LIFE Tiles."},
    {name:"Sushi Go!" , players:"2-5" , description:"This is a great game for sushi lovers, and still a fun game for those who loathe it. You have to quickly grab the best sushi combinations as they go by."},
    {name:"Battleship" , players:"2" , description:"This classic board game is known all over the world for its strategy and logical thinking. The purpose of the game is to sink your opponent’s ships."},
    {name:"Qwixx" , players:"2-5" , description:"This game has a good bit of counting, which makes it great for practicing math concepts."},
    {name:"Stratego" , players:"2" , description:"Battleship meets Chess in this game of deception, tactic, and some luck. Seize the flag to win!"},
    {name:"Boggle" , players:"1-8" , description:"The concept of the game is to find as many words you can in sequences of adjacent letters. The player with the most points wins the game."},
    {name:"Dutch Blitz" , players:"2-4" , description:"This game may look old fashioned, but it is a very fun and fast-paced game."},
    {name:"Roll For It!" , players:"2-4" , description:"Three simple rules to remember in this game: roll, match, and score. Match your die with the die on your card to claim the card. Player with the most points wins the game!"},
    {name:"Pass the Pigs" , players:"2-10" , description:"With its small size, this is the perfect game for traveling. You’ll use pigs as dice. Points vary on different spots on the pig."},
    {name:"Guesstures" , players:"4-99" , description:"A great game to play with a big group! Each player received 4 cards, each card has a easy and difficult word to communicate to their team."},
    {name:"Carcassone" , players:"2-5" , description:"This is a tile game with the objective to earn the most points by completing features like cities and roads."},
    {name:"Settlers of Catan" , players:"3-4" , description:"The concept of this game is to build settlements, cities, and roads in order to dominate the island. Resources can be harvested and traded."},
    {name:"Risk" , players:"2-6" , description:"Conquer the world by battling your opponents in an effort to gain controlling over each territory on the board."},
    {name:"Scrabble" , players:"2-4" , description:"Score points by placing tiles bearing a single letter onto the board in a crossword fashion."},
    {name:"7 Wonders" , players:"2-7" , description:"This card game makes you the leader of one of the 7 greatest cities in the Ancient World. You’ll need resources, routes, and military."},
    {name:"Splendor" , players:"2-4" , description:"You’re a merchant of the Renaissance with a goal to buy gem mines, transportation, and shops in order to gain the most points."},
    {name:"Forbidden Island" , players:"2-4" , description:"Players must work together to win the game. You must collect treasures and items all while trying keep the island from sinking."},
    {name:"Apples to Apples" , players:"4-10" , description:"The object of the game is to get the player/judge to pick your card as their favorite as it applies to the category card, as silly or outrageous as it is."},
    {name:"Caverna" , players:"1-7" , description:"Caverna is a game where players become dwarves and compete to collect the goods they need to feed their families and go on expeditions."},
    {name:"Catch Phrase!" , players:"4-16" , description:"Divide up into two teams; you will give your teammates clues to guess the word or phrase on your card."},
    {name:"Trivial Pursuit" , players:"2-24" , description:"In this game, you will answer questions about general knowledge and pop culture questions."},
    {name:"Puerto Rico" , players:"2-5" , description:"Each player is granted the role of colonial governors. The point of the game is to collect victory points by shipping goods or contracting buildings."},
    {name:"Terra Mystica" , players:"2-5" , description:"You don’t need luck on your side for this game, but you will need strategy. You’ll be governing 14 groups while attempting to grow your homeland."},
    {name:"Dominion" , players:"2-4" , description:"Players take the role of monarchs and compete against each other to build the most developed kingdom represented by their individual deck of cards."}]

function Home() {
        return(
        <section className='homebackground'>
            <div className='menu'>
                <p>Board-Go</p>
                <SearchBar />
                <div className='payment'><nav><Link to='/Payment'><MdPayment className='icon' /></Link></nav></div>
                <div className='history'><nav><Link to='/History'><FaHistory className='icon' /></Link></nav></div>
                <div className='profile'><FaUser className='icon'/></div>
            </div>
            {boardGame.map((name) => {
                return(
                        console.log(name)
                    )
                }
            )
        }
        </section>   
        ) 
    }

export default Home ;