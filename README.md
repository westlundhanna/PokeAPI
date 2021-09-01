APP SHACK CODE PRACTICE - POKÉ API

This is my first React project. 
The project consists of a paginated and alphabetically sorted list of pokémon cards (9 per page). When a the card link is clicked the user is navigated to path /pokemonname with more details about that specific pokémon.
Data is fetched from https://pokeapi.co/ with SWR library https://swr.vercel.app/docs/

After first feedback received 2021-08-30, the following have been updated:

* När det kommer till pagineringen så är det jättebra att du använde offset/limit och enbart hämtar de korten som finns på sidan. Dock så fungerar inte edge-cases, tillexempel när man är på sida 1 och klickar på previous knappen kommer man till en tom sida, likadant när man går förbi sidan längst bak. Här vill man antingen disable knappen eller ha ett min/max value för statet.
* Vi såg även att det fanns lite bibliotek i Package.json som inte används, tex. Test biblioteken utan att du skrivit tester och axios?
* Sen var det lite småsaker, men till exempel så kan .toUpperCase() funktionen enkelt bytas ut mot CSS styling med samma resultat

