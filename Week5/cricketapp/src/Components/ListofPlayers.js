import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "Shubman Gill", score: 75 },
        { name: "KL Rahul", score: 68 },
        { name: "Hardik Pandya", score: 82 },
        { name: "Ravindra Jadeja", score: 64 },
        { name: "R Ashwin", score: 55 },
        { name: "Mohammed Shami", score: 73 },
        { name: "Jasprit Bumrah", score: 79 },
        { name: "Mohammed Siraj", score: 61 },
        { name: "Kuldeep Yadav", score: 70 }
    ];

    return (
        <div>
            <h2>List of Players</h2>

            {
                players.map((player, index) => (
                    <p key={index}>
                        {player.name} - {player.score}
                    </p>
                ))
            }

            <h2>Players with Score Below 70</h2>

            {
                players
                    .filter(player => player.score < 70)
                    .map((player, index) => (
                        <p key={index}>
                            {player.name} - {player.score}
                        </p>
                    ))
            }

        </div>
    );

}

export default ListofPlayers;