function svgImg(states) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180">' +
        '<rect width="200" height="200" fill="#ffffff" stroke-width="0" stroke="#ff666f" ></rect>' +
        '<foreignObject x="15" y="10" width="100%" height="100%">' +
        '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
        '<table style="border-collapse: collapse;border-style: hidden;">' +
        '<tr>' +
        '<td style="border: 2px solid black;">' + states[0] + '</td>' +
        '<td style="border: 2px solid black;">' + states[1] + '</td>' +
        '<td style="border: 2px solid black;">' + states[2] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 2px solid black;">' + states[3] + '</td>' +
        '<td style="border: 2px solid black;">' + states[4] + '</td>' +
        '<td style="border: 2px solid black;">' + states[5] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 2px solid black;">' + states[6] + '</td>' +
        '<td style="border: 2px solid black;">' + states[7] + '</td>' +
        '<td style="border: 2px solid black;">' + states[8] + '</td>' +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</foreignObject>" +
        "</svg>";

    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

    return url;
}

function svgImgFill(states, color, stroke_width = 0, stroke_color = 'red') {
    var temStr = '<rect width="200" height="200" fill="' + color + '" stroke-width="' + stroke_width + '" stroke="' + stroke_color + '" ></rect>'
    console.log(temStr)
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180">' +
        temStr +
        '<foreignObject x="15" y="10" width="100%" height="100%">' +
        '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
        '<table style="border-collapse: collapse;border-style: hidden;">' +
        '<tr>' +
        '<td style="border: 2px solid black;">' + states[0] + '</td>' +
        '<td style="border: 2px solid black;">' + states[1] + '</td>' +
        '<td style="border: 2px solid black;">' + states[2] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 2px solid black;">' + states[3] + '</td>' +
        '<td style="border: 2px solid black;">' + states[4] + '</td>' +
        '<td style="border: 2px solid black;">' + states[5] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 2px solid black;">' + states[6] + '</td>' +
        '<td style="border: 2px solid black;">' + states[7] + '</td>' +
        '<td style="border: 2px solid black;">' + states[8] + '</td>' +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</foreignObject>" +
        "</svg>";

    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

    return url;
}

function svgImgBlackFill(states, color) {
    var temStr = '<rect width="200" height="200" fill="' + color + '" stroke-width="0" stroke="#ff666f" ></rect>'
    console.log(temStr)
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180">' +
        temStr +
        '<foreignObject x="15" y="10" width="100%" height="100%">' +
        '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
        '<table style="border-collapse: collapse;border-style: hidden;color:white;">' +
        '<tr>' +
        '<td style="border: 2px solid white;">' + states[0] + '</td>' +
        '<td style="border: 2px solid white;">' + states[1] + '</td>' +
        '<td style="border: 2px solid white;">' + states[2] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 2px solid white;">' + states[3] + '</td>' +
        '<td style="border: 2px solid white;">' + states[4] + '</td>' +
        '<td style="border: 2px solid white;">' + states[5] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 2px solid white;">' + states[6] + '</td>' +
        '<td style="border: 2px solid white;">' + states[7] + '</td>' +
        '<td style="border: 2px solid white;">' + states[8] + '</td>' +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</foreignObject>" +
        "</svg>";

    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

    return url;
}

var ticTacToe = [
    ['O', ' ', 'X', 'X', ' ', ' ', 'X', 'O', 'O'],
    ['O', ' ', 'X', 'X', 'X', ' ', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', ' ', ' ', 'X', 'O', 'O'],
    ['O', ' ', 'X', 'X', ' ', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'O', ' ', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', ' ', 'O', 'X', 'O', 'O'],
    ['O', ' ', 'X', 'X', 'O', 'X', 'X', 'O', 'O'],
    ['O', 'O', 'X', 'X', ' ', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'X', 'O', 'X', 'O', 'O'],
    ['O', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'O']
]

var graphs = [
    function () {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4");
        g.addNode("5");
        g.addNode("6");
        g.addNode("7");
        g.addNode("8", 4);
        g.addNode("9", -1);
        g.addNode("10", 2);
        g.addNode("11", 7);
        g.addNode("12", -4);
        g.addNode("13", -2);
        g.addNode("14", -1);
        g.addNode("15", 5);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("2", "5", 25);
        g.addEdge("3", "6", 36);
        g.addEdge("3", "7", 37);
        g.addEdge("4", "8", 48);
        g.addEdge("4", "9", 49);
        g.addEdge("5", "10", 510);
        g.addEdge("5", "11", 511);
        g.addEdge("6", "12", 612);
        g.addEdge("6", "13", 613);
        g.addEdge("7", "14", 714);
        g.addEdge("7", "15", 715);
    },
    function () {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4");
        g.addNode("5", -8);
        g.addNode("6");
        g.addNode("7", 4);
        g.addNode("8");
        g.addNode("9", -1);
        g.addNode("10", 2);
        g.addNode("11");
        g.addNode("12", -4);
        g.addNode("13", -2);
        g.addNode("14", -1);
        g.addNode("15", 5);
        g.addNode("16", 1);
        g.addNode("17", 3);
        g.addNode("18", -2);

        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("1", "4", 14);
        g.addEdge("2", "5", 25);
        g.addEdge("2", "6", 26);
        g.addEdge("2", "7", 27);
        g.addEdge("3", "8", 38);
        g.addEdge("3", "9", 39);
        g.addEdge("4", "10", 410);
        g.addEdge("4", "11", 411);
        g.addEdge("6", "12", 612);
        g.addEdge("8", "13", 813);
        g.addEdge("8", "14", 814);
        g.addEdge("11", "15", 1115);
        g.addEdge("11", "16", 1116);
        g.addEdge("11", "17", 1117);
        g.addEdge("11", "18", 1118);
    },
    function () {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3", 4);
        g.addNode("4", 3);
        g.addNode("5", -2);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("2", "5", 25);
    },
    function () {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4", 3);
        g.addNode("5");
        g.addNode("6", 5);
        g.addNode("7", -4);
        g.addNode("8", 7);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("3", "5", 35);
        g.addEdge("3", "6", 36);
        g.addEdge("5", "7", 57);
        g.addEdge("5", "8", 58);
    },
    function () {
        gTicTac.addNode("1");
        gTicTac.addNode("2", 9);
        gTicTac.addNode("3");
        gTicTac.addNode("4");
        gTicTac.addNode("5", -8);
        gTicTac.addNode("6");
        gTicTac.addNode("7", -8);
        gTicTac.addNode("8");
        gTicTac.addNode("9", 7);
        gTicTac.addNode("10", 7);
        gTicTac.addEdge("1", "2", 12);
        gTicTac.addEdge("1", "3", 13);
        gTicTac.addEdge("1", "4", 14);
        gTicTac.addEdge("3", "5", 35);
        gTicTac.addEdge("3", "6", 36);
        gTicTac.addEdge("4", "7", 47);
        gTicTac.addEdge("4", "8", 48);
        gTicTac.addEdge("6", "9", 69);
        gTicTac.addEdge("8", "10", 810);

        g.addNode("11");
        g.addNode("12", 9);
        g.addNode("13");
        g.addNode("14");
        g.addNode("15", -8);
        g.addNode("16");
        g.addNode("17", -8);
        g.addNode("18");
        g.addNode("19", 7);
        g.addNode("20", 7);
        g.addEdge("11", "12", 1112);
        g.addEdge("11", "13", 1113);
        g.addEdge("11", "14", 1114);
        g.addEdge("13", "15", 1315);
        g.addEdge("13", "16", 1316);
        g.addEdge("14", "17", 1417);
        g.addEdge("14", "18", 1418);
        g.addEdge("16", "19", 1619);
        g.addEdge("18", "20", 1820);
    }

];

var graphs_random_val = [
    function (rand_vals) {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4");
        g.addNode("5");
        g.addNode("6");
        g.addNode("7");
        g.addNode("8", rand_vals[0]);
        g.addNode("9", rand_vals[1]);
        g.addNode("10", rand_vals[2]);
        g.addNode("11", rand_vals[3]);
        g.addNode("12", rand_vals[4]);
        g.addNode("13", rand_vals[5]);
        g.addNode("14", rand_vals[6]);
        g.addNode("15", rand_vals[7]);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("2", "5", 25);
        g.addEdge("3", "6", 36);
        g.addEdge("3", "7", 37);
        g.addEdge("4", "8", 48);
        g.addEdge("4", "9", 49);
        g.addEdge("5", "10", 510);
        g.addEdge("5", "11", 511);
        g.addEdge("6", "12", 612);
        g.addEdge("6", "13", 613);
        g.addEdge("7", "14", 714);
        g.addEdge("7", "15", 715);
    },
    function (rand_vals) {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4");
        g.addNode("5", rand_vals[0]);
        g.addNode("6");
        g.addNode("7", rand_vals[1]);
        g.addNode("8");
        g.addNode("9", rand_vals[2]);
        g.addNode("10", rand_vals[3]);
        g.addNode("11");
        g.addNode("12", rand_vals[4]);
        g.addNode("13", rand_vals[5]);
        g.addNode("14", rand_vals[6]);
        g.addNode("15", rand_vals[7]);
        g.addNode("16", rand_vals[8]);
        g.addNode("17", rand_vals[9]);
        g.addNode("18", rand_vals[10]);

        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("1", "4", 14);
        g.addEdge("2", "5", 25);
        g.addEdge("2", "6", 26);
        g.addEdge("2", "7", 27);
        g.addEdge("3", "8", 38);
        g.addEdge("3", "9", 39);
        g.addEdge("4", "10", 410);
        g.addEdge("4", "11", 411);
        g.addEdge("6", "12", 612);
        g.addEdge("8", "13", 813);
        g.addEdge("8", "14", 814);
        g.addEdge("11", "15", 1115);
        g.addEdge("11", "16", 1116);
        g.addEdge("11", "17", 1117);
        g.addEdge("11", "18", 1118);
    },
    function (rand_vals) {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3", rand_vals[0]);
        g.addNode("4", rand_vals[1]);
        g.addNode("5", rand_vals[2]);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("2", "5", 25);
    },
    function (rand_vals) {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4", rand_vals[0]);
        g.addNode("5");
        g.addNode("6", rand_vals[1]);
        g.addNode("7", rand_vals[2]);
        g.addNode("8", rand_vals[3]);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("3", "5", 35);
        g.addEdge("3", "6", 36);
        g.addEdge("5", "7", 57);
        g.addEdge("5", "8", 58);
    }
];

var a = [
    [
        [
            { id: 1, label: '  ', level: 0 },
            { id: 2, label: '  ', level: 1 },
            { id: 3, label: '  ', level: 1 },
            { id: 4, label: '  ', level: 2 },
            { id: 5, label: '  ', level: 2 },
            { id: 6, label: '  ', level: 2 },
            { id: 7, label: '  ', level: 2 },
            { id: 8, label: ' 4', level: 3 },
            { id: 9, label: '-1', level: 3 },
            { id: 10, label: ' 2', level: 3 },
            { id: 11, label: ' 7', level: 3 },
            { id: 12, label: '-4', level: 3 },
            { id: 13, label: '-2', level: 3 },
            { id: 14, label: '-1', level: 3 },
            { id: 15, label: ' 5', level: 3 },
        ],
        [
            { from: 1, to: 2, id: "12" },
            { from: 1, to: 3, id: "13" },
            { from: 2, to: 4, id: "24" },
            { from: 2, to: 5, id: "25" },
            { from: 3, to: 6, id: "36" },
            { from: 3, to: 7, id: "37" },
            { from: 4, to: 8, id: "48" },
            { from: 4, to: 9, id: "49" },
            { from: 5, to: 10, id: "510" },
            { from: 5, to: 11, id: "511" },
            { from: 6, to: 12, id: "612" },
            { from: 6, to: 13, id: "613" },
            { from: 7, to: 14, id: "714" },
            { from: 7, to: 15, id: "715" },
        ],
    ],
    [
        [
            { id: 1, label: '  ', level: 0 },
            { id: 2, label: '  ', level: 1 },
            { id: 3, label: '  ', level: 1 },
            { id: 4, label: '  ', level: 1 },
            { id: 5, label: '-8', level: 2 },
            { id: 6, label: '  ', level: 2 },
            { id: 7, label: ' 4', level: 2 },
            { id: 8, label: '  ', level: 2 },
            { id: 9, label: '-1', level: 2 },
            { id: 10, label: ' 2', level: 2 },
            { id: 11, label: '  ', level: 2 },
            { id: 12, label: '-4', level: 3 },
            { id: 13, label: '-2', level: 3 },
            { id: 14, label: '-1', level: 3 },
            { id: 15, label: ' 5', level: 3 },
            { id: 16, label: ' 1', level: 3 },
            { id: 17, label: ' 3', level: 3 },
            { id: 18, label: '-2', level: 3 },
        ],
        [
            { from: 1, to: 2, id: "12" },
            { from: 1, to: 3, id: "13" },
            { from: 1, to: 4, id: "14" },
            { from: 2, to: 5, id: "25" },
            { from: 2, to: 6, id: "26" },
            { from: 2, to: 7, id: "27" },
            { from: 3, to: 8, id: "38" },
            { from: 3, to: 9, id: "39" },
            { from: 4, to: 10, id: "410" },
            { from: 4, to: 11, id: "411" },
            { from: 6, to: 12, id: "612" },
            { from: 8, to: 13, id: "813" },
            { from: 8, to: 14, id: "814" },
            { from: 11, to: 15, id: "1115" },
            { from: 11, to: 16, id: "1116" },
            { from: 11, to: 17, id: "1117" },
            { from: 11, to: 18, id: "1118" },
        ],
    ],
    [
        [
            { id: 1, label: '  ', level: 0 },
            { id: 2, label: '  ', level: 1 },
            { id: 3, label: ' 4', level: 1 },
            { id: 4, label: ' 3', level: 2 },
            { id: 5, label: '-2', level: 2 },
        ],
        [
            { from: 1, to: 2, id: "12" },
            { from: 1, to: 3, id: "13" },
            { from: 2, to: 4, id: "24" },
            { from: 2, to: 5, id: "25" },
        ]
    ],
    [
        [
            { id: 1, label: '  ', level: 0 },
            { id: 2, label: '  ', level: 1 },
            { id: 3, label: '  ', level: 1 },
            { id: 4, label: ' 3', level: 2 },
            { id: 5, label: '  ', level: 2 },
            { id: 6, label: ' 5', level: 2 },
            { id: 7, label: '-4', level: 3 },
            { id: 8, label: ' 7', level: 3 },
        ],
        [
            { from: 1, to: 2, id: "12" },
            { from: 1, to: 3, id: "13" },
            { from: 2, to: 4, id: "24" },
            { from: 3, to: 5, id: "35" },
            { from: 3, to: 6, id: "36" },
            { from: 5, to: 7, id: "57" },
            { from: 5, to: 8, id: "58" },
        ]
    ],
    [
        [
            {
                id: 1, label: '  ', level: 0, image: svgImg(['O', ' ', 'X', 'X', ' ', ' ', 'X', 'O', 'O']), shape: "image",
                scaling: {
                    min: 30,
                    max: 30,
                },
            },
            {
                id: 2, label: ' 9', level: 1, image: svgImg(['O', ' ', 'X', 'X', 'X', ' ', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },
            {
                id: 3, label: '  ', level: 1, image: svgImg(['O', 'X', 'X', 'X', ' ', ' ', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },
            {
                id: 4, label: '  ', level: 1, image: svgImg(['O', ' ', 'X', 'X', ' ', 'X', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },
            {
                id: 5, label: '-8', level: 2, image: svgImg(['O', 'X', 'X', 'X', 'O', ' ', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }

            },
            {
                id: 6, label: '  ', level: 2, image: svgImg(['O', 'X', 'X', 'X', ' ', 'O', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },
            {
                id: 7, label: '-8', level: 2, image: svgImg(['O', ' ', 'X', 'X', 'O', 'X', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },
            {
                id: 8, label: '  ', level: 2, image: svgImg(['O', 'O', 'X', 'X', ' ', 'X', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },
            {
                id: 9, label: ' 7', level: 3, image: svgImg(['O', 'X', 'X', 'X', 'X', 'O', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },
            {
                id: 10, label: ' 7', level: 3, image: svgImg(['O', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'O']), shape: "image", scaling: {
                    min: 30,
                    max: 30,
                }
            },

            { id: 11, label: '  ', level: 0 },
            { id: 12, label: ' 9', level: 1 },
            { id: 13, label: '  ', level: 1 },
            { id: 14, label: '  ', level: 1 },
            { id: 15, label: '-8', level: 2 },
            { id: 16, label: '  ', level: 2 },
            { id: 17, label: '-8', level: 2 },
            { id: 18, label: '  ', level: 2 },
            { id: 19, label: ' 7', level: 3 },
            { id: 20, label: ' 7', level: 3 },
        ],
        [
            { from: 1, to: 2, id: "12" },
            { from: 1, to: 3, id: "13" },
            { from: 1, to: 4, id: "14" },
            { from: 3, to: 5, id: "35" },
            { from: 3, to: 6, id: "36" },
            { from: 4, to: 7, id: "47" },
            { from: 4, to: 8, id: "48" },
            { from: 6, to: 9, id: "69" },
            { from: 8, to: 10, id: "810" },

            { from: 11, to: 12, id: "1112" },
            { from: 11, to: 13, id: "1113" },
            { from: 11, to: 14, id: "1114" },
            { from: 13, to: 15, id: "1315" },
            { from: 13, to: 16, id: "1316" },
            { from: 14, to: 17, id: "1417" },
            { from: 14, to: 18, id: "1418" },
            { from: 16, to: 19, id: "1619" },
            { from: 18, to: 20, id: "1820" },
        ]
    ]
];


var a_random_val = [
    function (rand_vals_str) {
        return [
            [
                { id: 1, label: '  ', level: 0 },
                { id: 2, label: '  ', level: 1 },
                { id: 3, label: '  ', level: 1 },
                { id: 4, label: '  ', level: 2 },
                { id: 5, label: '  ', level: 2 },
                { id: 6, label: '  ', level: 2 },
                { id: 7, label: '  ', level: 2 },
                { id: 8, label: rand_vals_str[0], level: 3 },
                { id: 9, label: rand_vals_str[1], level: 3 },
                { id: 10, label: rand_vals_str[2], level: 3 },
                { id: 11, label: rand_vals_str[3], level: 3 },
                { id: 12, label: rand_vals_str[4], level: 3 },
                { id: 13, label: rand_vals_str[5], level: 3 },
                { id: 14, label: rand_vals_str[6], level: 3 },
                { id: 15, label: rand_vals_str[7], level: 3 },
            ],
            [
                { from: 1, to: 2, id: "12" },
                { from: 1, to: 3, id: "13" },
                { from: 2, to: 4, id: "24" },
                { from: 2, to: 5, id: "25" },
                { from: 3, to: 6, id: "36" },
                { from: 3, to: 7, id: "37" },
                { from: 4, to: 8, id: "48" },
                { from: 4, to: 9, id: "49" },
                { from: 5, to: 10, id: "510" },
                { from: 5, to: 11, id: "511" },
                { from: 6, to: 12, id: "612" },
                { from: 6, to: 13, id: "613" },
                { from: 7, to: 14, id: "714" },
                { from: 7, to: 15, id: "715" },
            ]
        ]
    },

    function (rand_vals_str) {
        return [
            [
                { id: 1, label: '  ', level: 0 },
                { id: 2, label: '  ', level: 1 },
                { id: 3, label: '  ', level: 1 },
                { id: 4, label: '  ', level: 1 },
                { id: 5, label: rand_vals_str[0], level: 2 },
                { id: 6, label: '  ', level: 2 },
                { id: 7, label: rand_vals_str[1], level: 2 },
                { id: 8, label: '  ', level: 2 },
                { id: 9, label: rand_vals_str[2], level: 2 },
                { id: 10, label: rand_vals_str[3], level: 2 },
                { id: 11, label: '  ', level: 2 },
                { id: 12, label: rand_vals_str[4], level: 3 },
                { id: 13, label: rand_vals_str[5], level: 3 },
                { id: 14, label: rand_vals_str[6], level: 3 },
                { id: 15, label: rand_vals_str[7], level: 3 },
                { id: 16, label: rand_vals_str[8], level: 3 },
                { id: 17, label: rand_vals_str[9], level: 3 },
                { id: 18, label: rand_vals_str[10], level: 3 },
            ],
            [
                { from: 1, to: 2, id: "12" },
                { from: 1, to: 3, id: "13" },
                { from: 1, to: 4, id: "14" },
                { from: 2, to: 5, id: "25" },
                { from: 2, to: 6, id: "26" },
                { from: 2, to: 7, id: "27" },
                { from: 3, to: 8, id: "38" },
                { from: 3, to: 9, id: "39" },
                { from: 4, to: 10, id: "410" },
                { from: 4, to: 11, id: "411" },
                { from: 6, to: 12, id: "612" },
                { from: 8, to: 13, id: "813" },
                { from: 8, to: 14, id: "814" },
                { from: 11, to: 15, id: "1115" },
                { from: 11, to: 16, id: "1116" },
                { from: 11, to: 17, id: "1117" },
                { from: 11, to: 18, id: "1118" },
            ],
        ]
    },
    function (rand_vals_str) {
        return [
            [
                { id: 1, label: '  ', level: 0 },
                { id: 2, label: '  ', level: 1 },
                { id: 3, label: rand_vals_str[0], level: 1 },
                { id: 4, label: rand_vals_str[1], level: 2 },
                { id: 5, label: rand_vals_str[2], level: 2 },
            ],
            [
                { from: 1, to: 2, id: "12" },
                { from: 1, to: 3, id: "13" },
                { from: 2, to: 4, id: "24" },
                { from: 2, to: 5, id: "25" },
            ]
        ]
    },
    function (rand_vals_str) {
        return [
            [
                { id: 1, label: '  ', level: 0 },
                { id: 2, label: '  ', level: 1 },
                { id: 3, label: '  ', level: 1 },
                { id: 4, label: rand_vals_str[0], level: 2 },
                { id: 5, label: '  ', level: 2 },
                { id: 6, label: rand_vals_str[1], level: 2 },
                { id: 7, label: rand_vals_str[2], level: 3 },
                { id: 8, label: rand_vals_str[3], level: 3 },
            ],
            [
                { from: 1, to: 2, id: "12" },
                { from: 1, to: 3, id: "13" },
                { from: 2, to: 4, id: "24" },
                { from: 3, to: 5, id: "35" },
                { from: 3, to: 6, id: "36" },
                { from: 5, to: 7, id: "57" },
                { from: 5, to: 8, id: "58" },
            ]
        ]
    }
];