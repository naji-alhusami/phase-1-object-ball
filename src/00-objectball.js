const gameObject = () => {
  const newObject = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 1,
          slamDunks: 7,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
      },
    },
  };
  return newObject;
};

function numPointsScored(playerName) {
  const team = Object.keys(gameObject()).find((x) =>
    Object.keys(gameObject()[x]["players"]).includes(playerName)
  );
  return gameObject()[team]["players"][playerName]["points"];
}

function shoeSize(playerName) {
  const team = Object.keys(gameObject()).find((x) =>
    Object.keys(gameObject()[x]["players"]).includes(playerName)
  );
  return gameObject()[team]["players"][playerName]["shoe"];
}

function teamColors(teamName) {
  const team = Object.keys(gameObject()).find(
    (x) => gameObject()[x]["teamName"] === teamName
  );
  return gameObject()[team]["colors"];
}


function teamNames() {
  const teamName = Object.values(gameObject()).map((team) => {
    return team.teamName;
  });
  return teamName;
}

function playerNumbers(playerName) {
  const team = Object.keys(gameObject()).find(
    (x) => gameObject()[x]["teamName"] === teamName
  );
  return [
    Object.keys(gameObject()[team]["players"]),
    Object.values(gameObject()[team]["players"][number]),
  ];
}


function playerStats(playerName) {
  const team = Object.keys(gameObject()).find((x) =>
    Object.keys(gameObject()[x]["players"]).includes(playerName)
  );
  return gameObject()[team]["players"][playerName];
}