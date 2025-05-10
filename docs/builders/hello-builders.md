---
description: Tavern Protocol
---

# Hello Builders

The **Tavern Protocol** is powered by an Entity/Component Architecture, popular with game engines like Unity and Unreal Engine.  This enables modular, stateless units of game logic that live fully onchain. If you like low-level mechanics, protocol design, or building reusable, composable tools for other creators, this is your playground.

### **ECS**

Every mechanic in the game,  jobs, stats, resource generation, etc., lives in a **System**. These are smart contracts that expose a set of functions for interacting with game state. They don’t hold data themselves. Instead, data lives in **Entities**, and Systems operate on them.

This follows an **Entity-Component-System (ECS)** style architecture:

* **Systems** = Logic
* **Entities** = Data
* **Scenarios** = A container for Entities
* **Games** = A container for Scenarios

Systems are **shared across all games**. That means once you build and deploy a System, _any_ Scenario or Game can opt into it.

This lets devs focus on building rich, reusable mechanics — while content creators use them in new, weird, and beautiful ways. Want to write a quest engine? A crafting sim? A procedural galaxy generator? Do it once, and let the network build on it.\
\
When players interact with your game, they use the Systems directly, and pass in a reference to the active Scenario.  The System knows how to extract the Entity data it needs out of the Scenario. &#x20;



<figure><img src="../.gitbook/assets/Screenshot 2025-05-09 at 8.28.07 AM.png" alt=""><figcaption><p>ECS Architecture</p></figcaption></figure>

### **Want to dive in?**

Start here:

* [RegenScenario.sol](../../chain/src/scenarios/RegenScenario.sol) – a minimal, working Scenario using three core Systems
* Explore [deployed Systems](https://github.com/gnomadic/starforge/tree/main/chain/src/Systems): `STAT`, `SUPPLY`, and `JOB`
* Explore [deployed Entities](https://github.com/gnomadic/starforge/tree/main/chain/src/entities) for those systems: `STAT`, `SUPPLY`, and `JOB`

Or just fork the repo or open a PR and try writing your own System — we’ll be here to test, break, and remix it with you.



### How to Get Involved

This isn’t just about one game.   This is about building the engine for _all_ onchain RPG games. If that sounds like your kind of challenge, we want you in the forge with us.  We’re building in public, and there are lots of ways to join in:

* Chat and share your ideas on [**Warpcast**](https://warpcast.com/~/channel/playtavern)
* Hang out in the [**Telegram**](https://t.me/playtavern) to get updates and meet fellow creators
* Want to peek under the hood? Look at how STARFORGE [defines it's first scenario](../../chain/src/scenarios/RegenScenario.sol)&#x20;
