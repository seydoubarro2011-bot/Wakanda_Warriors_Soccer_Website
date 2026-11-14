
/*
 * WAKANDA WARRIORS Soccer Team Website
 * Player Search Functionality
 */

document.addEventListener("DOMContentLoaded", function () {

    // Get the search input, player cards, and no-player message
    const searchInput = document.getElementById("playerSearch");
    const playerCards = document.querySelectorAll(".player-card");
    const noPlayersMessage = document.getElementById("noPlayers");

    // Make sure all required HTML elements exist
    if (!searchInput || playerCards.length === 0 || !noPlayersMessage) {
        return;
    }

    // Search players by name or position
    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.trim().toLowerCase();
        let matchingPlayers = 0;

        playerCards.forEach(function (card) {

            // Search all text inside each player card
            const playerInformation = card.textContent.toLowerCase();

            if (playerInformation.includes(searchText)) {
                card.style.display = "";
                matchingPlayers++;
            } else {
                card.style.display = "none";
            }
        });

        // Show a message when no players match
        noPlayersMessage.hidden = matchingPlayers !== 0;
    });
});
