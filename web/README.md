# S T A R F O R G E

What a twist. This is actually the Tavern Protocol.

Ya see, Tavern doesn't exist yet. And it's hard to build a complex system from scratch. It's much more reasonable to build a complex system on top of an existing one. So, we’re building STARFORGE first — and from that, we’ll extract the Tavern Protocol.

## What is this?

STARFORGE is a showcase of a gaming protocol, an onchain engine for building decentralized, open source, and community-driven games. It’s modular and extensible by design, making it easy for anyone to plug in, contribute, or build their own games on top of it.

## But wait, is this a game?

Yeah, it's a game.

But over time, as each System (combat, quests, resources, etc.) gets finalized, it can be extracted and reused in other games via a Factory pattern. That’s the protocol part.

## So how does it work?

The protocol draws heavily from entity-component architecture. The core idea: clean separation between game logic and game data.

Entities: the data

Systems: the logic

Game logic is expressed through stateless Systems. Game data lives in Entities. These Entities are grouped into Scenarios — curated experiences in the game world. Then a Game is just a collection of Scenarios + a hero NFT.

All games can share the same System deployments while expressing unique lore and flavor through their own Scenarios. This ensures a common rule set with room for creativity.

## How do I play?

Every game starts with a hero. In STARFORGE, your hero is a planet.  With Tavern, you can create a game with any hero you want.  

you can visit playstarforge.com and:

 * Mint a planet.
 * Check the Codex to see your planet’s unique stats.
 * Start a Job to earn resources and level up your skills.

Right now, that’s the loop — three Systems (stats, resources, jobs) working together in a Scenario.

## We need your help!

We’re still building, so if you want to follow along, share your ideas, or contribute, [join our Telegram](https://t.me/playtavern).